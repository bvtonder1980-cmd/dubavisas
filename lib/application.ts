/**
 * Application state model, price helpers, and the SINGLE swappable submission
 * function. This build is UI-only: `submitApplication` simulates a submit and
 * returns a fake reference. When the site moves to its own server, replace the
 * body of `submitApplication` with a real fetch/POST — nothing else changes.
 */

import { getVisaPlan, currencySymbol } from "@/lib/visa-plans"
import type { AuthUser } from "@/lib/auth"

export type ApplicantType = "adult" | "minor"

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

export type ApplicantDocs = {
  passportScan?: UploadedDoc
  passportPhoto?: UploadedDoc
  returnTicket?: UploadedDoc
  accommodation?: UploadedDoc
  birthCertificate?: UploadedDoc // minors only
}

export type Applicant = {
  id: string
  type: ApplicantType
  // Identity (may be auto-filled from the passport MRZ scan)
  surname: string
  givenNames: string
  passportNumber: string
  nationality: string
  dateOfBirth: string // ISO YYYY-MM-DD
  sex: "M" | "F" | "X" | ""
  passportExpiry: string // ISO YYYY-MM-DD
  email: string
  phone: string
  docs: ApplicantDocs
}

export type TripDetails = {
  citizenship: string // country code
  residence: string // country code
  arrivalDate: string // ISO YYYY-MM-DD
}

export type ApplicationState = {
  account: Account
  planSlug: string
  entryType: "single" | "multiple"
  trip: TripDetails
  applicants: Applicant[]
  consent: boolean
}

let seq = 0
function makeId() {
  seq += 1
  return `applicant-${Date.now().toString(36)}-${seq}`
}

export function makeApplicant(type: ApplicantType = "adult"): Applicant {
  return {
    id: makeId(),
    type,
    surname: "",
    givenNames: "",
    passportNumber: "",
    nationality: "",
    dateOfBirth: "",
    sex: "",
    passportExpiry: "",
    email: "",
    phone: "",
    docs: {},
  }
}

export function makeInitialState(defaults?: {
  citizenship?: string
  residence?: string
  arrivalDate?: string
  planSlug?: string
}): ApplicationState {
  return {
    account: { authenticated: false, email: "", fullName: "", phone: "" },
    planSlug: defaults?.planSlug ?? "",
    entryType: "single",
    trip: {
      citizenship: defaults?.citizenship ?? "",
      residence: defaults?.residence ?? "",
      arrivalDate: defaults?.arrivalDate ?? "",
    },
    applicants: [makeApplicant("adult")],
    consent: false,
  }
}

/** Parse a "2,499" style price string into a number. */
function priceToNumber(price: string): number {
  return Number(price.replace(/[^0-9.]/g, "")) || 0
}

export type PriceBreakdown = {
  adults: number
  minors: number
  adultUnit: number
  minorUnit: number
  total: number
  currency: string
  formattedTotal: string
}

/** Live price calculation from the chosen plan × applicant adult/minor mix. */
export function calculatePrice(state: ApplicationState): PriceBreakdown {
  const plan = getVisaPlan(state.planSlug)
  const adultUnit = plan ? priceToNumber(plan.price) : 0
  const minorUnit = plan ? priceToNumber(plan.minorPrice) : 0
  const adults = state.applicants.filter((a) => a.type === "adult").length
  const minors = state.applicants.filter((a) => a.type === "minor").length
  const total = adults * adultUnit + minors * minorUnit
  return {
    adults,
    minors,
    adultUnit,
    minorUnit,
    total,
    currency: currencySymbol,
    formattedTotal: `${currencySymbol}${total.toLocaleString("en-ZA")}`,
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
    plan: state.planSlug,
    entryType: state.entryType,
    trip: state.trip,
    applicants: state.applicants.map((a) => ({
      type: a.type,
      name: `${a.givenNames} ${a.surname}`.trim(),
      passportNumber: a.passportNumber,
      docCount: Object.keys(a.docs).length,
    })),
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
