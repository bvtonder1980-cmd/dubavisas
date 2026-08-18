/**
 * Application state model, price helpers, and the SINGLE swappable submission
 * function. This build is UI-only: `submitApplication` simulates a submit and
 * returns a fake reference. When the site moves to its own server, replace the
 * body of `submitApplication` with a real fetch/POST — nothing else changes.
 *
 * NOTE: visa type and travel dates are captured PER APPLICANT (each traveller
 * may choose a different visa and travel on different dates), so there is no
 * application-level plan or trip. The order total is the sum of each
 * applicant's own chosen visa.
 */

import { getVisaPlan, currencySymbol } from "@/lib/visa-plans"
import type { AuthUser } from "@/lib/auth"

export type ApplicantType = "adult" | "minor"

/** Title options for an applicant. */
export const TITLE_OPTIONS = ["Mr", "Mrs", "Mstr", "Miss", "Dr", "Prof", "Hon"] as const
export type Title = (typeof TITLE_OPTIONS)[number]

/** Common reasons for visiting the UAE. */
export const REASON_OPTIONS = [
  "Business",
  "Tourism (Staying in a Hotel)",
  "Tourism (Visiting Friends/Family)",
  "Transit",
] as const
export type ReasonForVisit = (typeof REASON_OPTIONS)[number]

/** The registered / logged-in customer profile that owns this application. */
export type Account = AuthUser & { authenticated: boolean }

/** A single uploaded document held in browser memory only (no server yet). */
export type UploadedDoc = {
  name: string
  size: number
  type: string
  /** object URL for preview; revoked on removal */
  previewUrl?: string
}

/** Every document slot an applicant can have. Which ones are REQUIRED is
 *  decided per applicant by `requiredDocsFor()` based on age + reason. */
export type DocKey =
  | "passportBiodata"
  | "passportCover"
  | "passportPhoto"
  | "flightTicket"
  | "birthCertificate" // under 18
  | "hotelVoucher" // Business or Tourism (Staying in a Hotel)
  | "hostInvitation" // Tourism (Visiting Friends/Family)
  | "hostResidencyVisa" // Tourism (Visiting Friends/Family)
  | "hostRentalOrDeed" // Tourism (Visiting Friends/Family)

export type ApplicantDocs = Partial<Record<DocKey, UploadedDoc>>

/** A single required-document rule for an applicant. */
export type DocRequirement = {
  key: DocKey
  label: string
  hint: string
}

export type Applicant = {
  id: string
  type: ApplicantType
  // Chosen visa (per applicant)
  planSlug: string
  // Identity (may be auto-filled from the passport MRZ scan)
  title: string
  surname: string
  givenNames: string
  passportNumber: string
  nationality: string
  dateOfBirth: string // ISO YYYY-MM-DD
  sex: "M" | "F" | "X" | ""
  passportIssueDate: string // ISO YYYY-MM-DD
  passportExpiry: string // ISO YYYY-MM-DD
  // Travel (per applicant)
  travelStartDate: string // ISO — intended travel start
  arrivalDate: string // ISO — arrival in the UAE
  departureDate: string // ISO — departure from the UAE
  // Personal / employment
  companyName: string // adults only
  occupation: string // adults only
  reasonForVisit: string
  workNumber: string // adults only
  phone: string // contact number
  email: string
  docs: ApplicantDocs
}

export type ApplicationState = {
  account: Account
  applicants: Applicant[]
  consent: boolean
}

let seq = 0
function makeId() {
  seq += 1
  return `applicant-${Date.now().toString(36)}-${seq}`
}

export function makeApplicant(
  type: ApplicantType = "adult",
  prefill?: { nationality?: string; arrivalDate?: string; planSlug?: string },
): Applicant {
  return {
    id: makeId(),
    type,
    planSlug: prefill?.planSlug ?? "",
    title: "",
    surname: "",
    givenNames: "",
    passportNumber: "",
    nationality: prefill?.nationality ?? "",
    dateOfBirth: "",
    sex: "",
    passportIssueDate: "",
    passportExpiry: "",
    travelStartDate: "",
    arrivalDate: prefill?.arrivalDate ?? "",
    departureDate: "",
    companyName: "",
    occupation: "",
    reasonForVisit: "",
    workNumber: "",
    phone: "",
    email: "",
    docs: {},
  }
}

export function makeInitialState(defaults?: {
  citizenship?: string
  arrivalDate?: string
  planSlug?: string
}): ApplicationState {
  return {
    account: { authenticated: false, email: "", fullName: "", phone: "" },
    applicants: [
      makeApplicant("adult", {
        nationality: defaults?.citizenship,
        arrivalDate: defaults?.arrivalDate,
        planSlug: defaults?.planSlug,
      }),
    ],
    consent: false,
  }
}

/** Age in whole years from an ISO date of birth, or null if not parseable. */
export function ageFromDob(dob: string): number | null {
  if (!dob) return null
  const d = new Date(dob)
  if (Number.isNaN(d.getTime())) return null
  const now = new Date()
  let age = now.getFullYear() - d.getFullYear()
  const monthDiff = now.getMonth() - d.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < d.getDate())) age -= 1
  return age
}

/** True when the applicant is under 18. Uses the entered date of birth when
 *  available, otherwise falls back to the adult/minor toggle. */
export function isMinorApplicant(a: Applicant): boolean {
  const age = ageFromDob(a.dateOfBirth)
  return age !== null ? age < 18 : a.type === "minor"
}

/**
 * SINGLE SOURCE OF TRUTH for required documents. The Documents step renders
 * one upload box per item returned here, and wizard validation enforces the
 * same list — so requirement rules live in exactly one place and port cleanly
 * to the server later.
 *
 * Rules:
 *  - Everyone: passport biodata page, passport cover, passport photo, flight ticket.
 *  - Under 18: unabridged birth certificate.
 *  - Business OR Tourism (Staying in a Hotel): hotel confirmation voucher.
 *  - Tourism (Visiting Friends/Family): host invitation letter, host residency
 *    visa, host rental agreement or title deed.
 *  - Transit: no accommodation documents.
 */
export function requiredDocsFor(a: Applicant): DocRequirement[] {
  const docs: DocRequirement[] = [
    {
      key: "passportBiodata",
      label: "Passport Biodata Page Copy",
      hint: "Colour copy of the passport photo / biodata page.",
    },
    {
      key: "passportCover",
      label: "Passport Cover Copy",
      hint: "Copy of the front cover of the passport.",
    },
    {
      key: "passportPhoto",
      label: "Passport Photo",
      hint: "Recent colour photo on a plain background.",
    },
    {
      key: "flightTicket",
      label: "Flight Ticket / Itinerary",
      hint: "Booking showing arrival to and departure from the UAE.",
    },
  ]

  if (isMinorApplicant(a)) {
    docs.push({
      key: "birthCertificate",
      label: "Unabridged Birth Certificate",
      hint: "Required for all travellers under 18.",
    })
  }

  const reason = a.reasonForVisit
  if (reason === "Business" || reason === "Tourism (Staying in a Hotel)") {
    docs.push({
      key: "hotelVoucher",
      label: "Hotel Confirmation Voucher",
      hint: "Hotel booking covering your full stay, showing every traveller's name.",
    })
  } else if (reason === "Tourism (Visiting Friends/Family)") {
    docs.push(
      {
        key: "hostInvitation",
        label: "Host Invitation Letter",
        hint: "Signed invitation letter from your UAE host.",
      },
      {
        key: "hostResidencyVisa",
        label: "Host Residency Visa",
        hint: "Copy of your host's UAE residency visa.",
      },
      {
        key: "hostRentalOrDeed",
        label: "Host Rental Agreement or Title Deed",
        hint: "Your host's tenancy contract (Ejari) or property title deed.",
      },
    )
  }
  // Transit: no accommodation documents required.

  return docs
}

/** Parse a "2,499" style price string into a number. */
function priceToNumber(price: string): number {
  return Number(price.replace(/[^0-9.]/g, "")) || 0
}

/** Unit price for one applicant based on their chosen visa and type. */
export function applicantPrice(applicant: Applicant): number {
  const plan = getVisaPlan(applicant.planSlug)
  if (!plan) return 0
  return priceToNumber(applicant.type === "minor" ? plan.minorPrice : plan.price)
}

export type PriceLine = {
  id: string
  name: string
  planTitle: string
  type: ApplicantType
  unit: number
  formattedUnit: string
}

export type PriceBreakdown = {
  lines: PriceLine[]
  total: number
  currency: string
  formattedTotal: string
}

function formatMoney(amount: number): string {
  return `${currencySymbol}${amount.toLocaleString("en-ZA")}`
}

/** Live price calculation — the sum of each applicant's own chosen visa. */
export function calculatePrice(state: ApplicationState): PriceBreakdown {
  const lines: PriceLine[] = state.applicants.map((a, i) => {
    const plan = getVisaPlan(a.planSlug)
    const unit = applicantPrice(a)
    return {
      id: a.id,
      name: `${a.givenNames} ${a.surname}`.trim() || `Applicant ${i + 1}`,
      planTitle: plan?.title ?? "No visa selected",
      type: a.type,
      unit,
      formattedUnit: formatMoney(unit),
    }
  })
  const total = lines.reduce((sum, l) => sum + l.unit, 0)
  return {
    lines,
    total,
    currency: currencySymbol,
    formattedTotal: formatMoney(total),
  }
}

export type SubmitResult = {
  ok: boolean
  reference: string
}

/**
 * ⬇⬇⬇  SINGLE SWAPPABLE SUBMISSION POINT  ⬇⬇⬇
 *
 * Right now this only simulates a submission so the UI is fully walkable.
 * When the app is hosted on your own server, replace the body below with a
 * real request, e.g.:
 *
 *   const res = await fetch("/api/applications", {
 *     method: "POST",
 *     body: buildFormData(state), // includes uploaded files
 *   })
 *   const data = await res.json()
 *   return { ok: res.ok, reference: data.reference }
 *
 * Files live in `applicant.docs.*` as browser File-backed objects; serialise
 * them into FormData at that point. Nothing else in the UI needs to change.
 */
export async function submitApplication(state: ApplicationState): Promise<SubmitResult> {
  // Simulate network latency so the loading state is visible.
  await new Promise((resolve) => setTimeout(resolve, 1200))

  const reference = generateReference(state)

  console.log("[v0] submitApplication (stub) — application captured:", {
    account: state.account.email,
    applicants: state.applicants.map((a) => ({
      type: a.type,
      visa: a.planSlug,
      name: `${a.givenNames} ${a.surname}`.trim(),
      passportNumber: a.passportNumber,
      travelStartDate: a.travelStartDate,
      arrivalDate: a.arrivalDate,
      departureDate: a.departureDate,
      reasonForVisit: a.reasonForVisit,
      docCount: Object.keys(a.docs).length,
    })),
    total: calculatePrice(state).formattedTotal,
    reference,
  })

  return { ok: true, reference }
}

/** Human-friendly placeholder reference until the server assigns a real one. */
function generateReference(state: ApplicationState): string {
  const year = new Date().getFullYear()
  const rand = Math.floor(100000 + Math.random() * 900000)
  const initials = state.applicants[0]?.surname?.slice(0, 2).toUpperCase() || "DV"
  return `DVO-${year}-${initials}${rand}`
}
