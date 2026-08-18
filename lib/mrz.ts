/**
 * Pure TD3 (passport) MRZ parser — no dependencies, no network, no AI.
 *
 * A TD3 machine-readable zone is two lines of 44 characters:
 *   Line 1: P<ISSSURNAME<<GIVEN<NAMES<<<<<<<<<<<<<<<<<<<
 *   Line 2: PASSPORTNO<CNAT YYMMDD C S YYMMDD C ........ C
 *
 * We extract the useful fields and validate the ICAO 7-3-1 check digits so we
 * can tell the UI whether the read is trustworthy enough to auto-fill.
 */

export type MrzResult = {
  surname: string
  givenNames: string
  passportNumber: string
  nationality: string // 3-letter ICAO code as printed
  dateOfBirth: string // ISO YYYY-MM-DD
  sex: "M" | "F" | "X" | ""
  expiryDate: string // ISO YYYY-MM-DD
  /** true when the key check digits validate — safe to auto-fill */
  valid: boolean
}

const WEIGHTS = [7, 3, 1]

/** ICAO character value: 0-9 -> 0-9, A-Z -> 10-35, filler '<' -> 0. */
function charValue(char: string): number {
  if (char === "<") return 0
  if (char >= "0" && char <= "9") return char.charCodeAt(0) - 48
  if (char >= "A" && char <= "Z") return char.charCodeAt(0) - 55
  return 0
}

function computeCheckDigit(input: string): number {
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    sum += charValue(input[i]) * WEIGHTS[i % 3]
  }
  return sum % 10
}

/** Expand a 2-digit MRZ year into a full year using a sliding window. */
function expandYear(yy: number, kind: "birth" | "expiry"): number {
  const currentYY = new Date().getFullYear() % 100
  if (kind === "birth") {
    // Birth years are in the past: 00..currentYY -> 2000s, else 1900s.
    return yy <= currentYY ? 2000 + yy : 1900 + yy
  }
  // Expiry years are near-future: always treat as 2000s.
  return 2000 + yy
}

function toIso(yymmdd: string, kind: "birth" | "expiry"): string {
  if (!/^\d{6}$/.test(yymmdd)) return ""
  const yy = Number(yymmdd.slice(0, 2))
  const mm = yymmdd.slice(2, 4)
  const dd = yymmdd.slice(4, 6)
  const year = expandYear(yy, kind)
  return `${year}-${mm}-${dd}`
}

/** Normalise MRZ filler chars '<' to spaces and collapse whitespace. */
function cleanName(raw: string): string {
  return raw
    .replace(/</g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

/**
 * Pull two plausible MRZ lines out of raw OCR text. OCR often adds spaces,
 * lowercase, or stray lines, so we normalise then find the 44-char lines.
 */
export function extractMrzLines(rawText: string): [string, string] | null {
  const candidates = rawText
    .split(/\r?\n/)
    .map((line) => line.toUpperCase().replace(/[^A-Z0-9<]/g, ""))
    .filter((line) => line.length >= 30)

  // Prefer lines close to 44 chars; pad/truncate to 44 for parsing.
  const normalised = candidates
    .filter((line) => line.length >= 40 && line.includes("<"))
    .map((line) => (line.length > 44 ? line.slice(0, 44) : line.padEnd(44, "<")))

  if (normalised.length < 2) return null

  // The passport (P<) line usually appears first; find it, take the next line.
  const firstIdx = normalised.findIndex((line) => line.startsWith("P"))
  if (firstIdx !== -1 && normalised[firstIdx + 1]) {
    return [normalised[firstIdx], normalised[firstIdx + 1]]
  }
  // Fallback: last two long lines.
  return [normalised[normalised.length - 2], normalised[normalised.length - 1]]
}

/** Parse the two TD3 MRZ lines into structured, check-digit-validated fields. */
export function parseTd3(line1: string, line2: string): MrzResult {
  const l1 = line1.padEnd(44, "<").slice(0, 44)
  const l2 = line2.padEnd(44, "<").slice(0, 44)

  // Line 1: names. Positions 5.. are ISSUER(3) then names separated by '<<'.
  const nameField = l1.slice(5)
  const [surnameRaw = "", givenRaw = ""] = nameField.split("<<")
  const surname = cleanName(surnameRaw)
  const givenNames = cleanName(givenRaw)

  // Line 2 fixed layout.
  const passportNumberRaw = l2.slice(0, 9)
  const passportCheck = l2[9]
  const nationality = l2.slice(10, 13).replace(/</g, "")
  const dobRaw = l2.slice(13, 19)
  const dobCheck = l2[19]
  const sexRaw = l2[20]
  const expiryRaw = l2.slice(21, 27)
  const expiryCheck = l2[27]

  const passportNumber = passportNumberRaw.replace(/</g, "")

  const passportOk = computeCheckDigit(passportNumberRaw) === charValue(passportCheck)
  const dobOk = computeCheckDigit(dobRaw) === charValue(dobCheck)
  const expiryOk = computeCheckDigit(expiryRaw) === charValue(expiryCheck)

  const sex: MrzResult["sex"] = sexRaw === "M" || sexRaw === "F" ? sexRaw : sexRaw === "<" ? "X" : "X"

  return {
    surname,
    givenNames,
    passportNumber,
    nationality,
    dateOfBirth: toIso(dobRaw, "birth"),
    sex,
    expiryDate: toIso(expiryRaw, "expiry"),
    // Require passport + DOB check digits at minimum; expiry is a bonus signal.
    valid: passportOk && dobOk && (expiryOk || expiryRaw === "<<<<<<"),
  }
}

/** Convenience: go straight from raw OCR text to a parsed result (or null). */
export function parseMrzFromText(rawText: string): MrzResult | null {
  const lines = extractMrzLines(rawText)
  if (!lines) return null
  return parseTd3(lines[0], lines[1])
}
