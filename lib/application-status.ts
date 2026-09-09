/**
 * APPLICATION STATUS MODEL — powers the "My applications" summary page.
 *
 * This build is UI-only, so `sampleApplications` below provides realistic
 * demo data. When the site moves to its own server, replace `sampleApplications`
 * (or the loader that returns it) with a real fetch of the signed-in customer's
 * applications — the page and components consume these types unchanged.
 */

/** The lifecycle stages a passenger's visa can move through. */
export const VISA_STATUSES = [
  "Document Review/Verification",
  "Document Review Passed",
  "Document Required",
  "Application on Hold",
  "Submitted for processing",
  "Decision - Approved",
  "Decision - Denied",
] as const

export type VisaStatus = (typeof VISA_STATUSES)[number]

export type StatusTone = "info" | "success" | "warning" | "neutral" | "brand" | "danger"

/** Visual + descriptive metadata for each status. `tone` maps to CSS-variable
 *  colours defined in globals.css so badges stay on-palette. */
export const STATUS_META: Record<VisaStatus, { tone: StatusTone; description: string }> = {
  "Document Review/Verification": {
    tone: "info",
    description: "We're checking the submitted documents.",
  },
  "Document Review Passed": {
    tone: "success",
    description: "All documents were verified successfully.",
  },
  "Document Required": {
    tone: "warning",
    description: "An additional or corrected document is needed.",
  },
  "Application on Hold": {
    tone: "neutral",
    description: "Progress is paused pending further information.",
  },
  "Submitted for processing": {
    tone: "brand",
    description: "Lodged with the authority for a decision.",
  },
  "Decision - Approved": {
    tone: "success",
    description: "The visa has been approved.",
  },
  "Decision - Denied": {
    tone: "danger",
    description: "The application was not successful.",
  },
}

/** tone → { text colour var, soft background var } used by the status badge. */
export const TONE_COLORS: Record<StatusTone, { color: string; background: string }> = {
  info: { color: "var(--info)", background: "var(--info-soft)" },
  success: { color: "var(--success)", background: "var(--success-soft)" },
  warning: { color: "var(--warning)", background: "var(--warning-soft)" },
  neutral: { color: "var(--ink-muted)", background: "var(--surface-muted)" },
  brand: { color: "var(--brand)", background: "var(--brand-soft)" },
  danger: { color: "var(--danger)", background: "var(--danger-soft)" },
}

/** Roll a set of passenger statuses up into one headline for the application. */
export function applicationHeadline(passengers: { status: VisaStatus }[]): {
  label: string
  tone: StatusTone
} {
  const statuses = passengers.map((p) => p.status)
  if (statuses.length > 0 && statuses.every((s) => s === "Decision - Approved")) {
    return { label: "All approved", tone: "success" }
  }
  if (statuses.includes("Decision - Denied")) {
    return { label: "Needs attention", tone: "danger" }
  }
  if (statuses.includes("Document Required") || statuses.includes("Application on Hold")) {
    return { label: "Action needed", tone: "warning" }
  }
  return { label: "In progress", tone: "info" }
}

export type PassengerStatus = {
  id: string
  givenNames: string
  surname: string
  passportNumber: string
  visaType: string
  travelDate: string // ISO — intended travel start
  arrivalDate: string // ISO — arrival in the UAE
  exitDate: string // ISO — departure from the UAE
  status: VisaStatus
}

export type ApplicationSummary = {
  reference: string
  submittedDate: string // ISO
  passengers: PassengerStatus[]
}

/** Format an ISO date as e.g. "13 Sep 2026". Falls back gracefully. */
export function formatDate(iso: string): string {
  if (!iso) return "—"
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
}

/**
 * [DEMO DATA] Sample applications so the page is fully viewable without a
 * backend. Replace with the real signed-in customer's applications later.
 */
export const sampleApplications: ApplicationSummary[] = [
  {
    reference: "DVO-2026-SM481920",
    submittedDate: "2026-08-28",
    passengers: [
      {
        id: "p1",
        givenNames: "Sarah",
        surname: "Smith",
        passportNumber: "A01234567",
        visaType: "30 Day Single Entry",
        travelDate: "2026-09-13",
        arrivalDate: "2026-09-13",
        exitDate: "2026-09-27",
        status: "Decision - Approved",
      },
      {
        id: "p2",
        givenNames: "James",
        surname: "Smith",
        passportNumber: "A07654321",
        visaType: "30 Day Single Entry",
        travelDate: "2026-09-13",
        arrivalDate: "2026-09-13",
        exitDate: "2026-09-27",
        status: "Submitted for processing",
      },
      {
        id: "p3",
        givenNames: "Ella",
        surname: "Smith",
        passportNumber: "A09876543",
        visaType: "30 Day Single Entry (Minor)",
        travelDate: "2026-09-13",
        arrivalDate: "2026-09-13",
        exitDate: "2026-09-27",
        status: "Document Required",
      },
    ],
  },
  {
    reference: "DVO-2026-JN337104",
    submittedDate: "2026-09-02",
    passengers: [
      {
        id: "p4",
        givenNames: "Thabo",
        surname: "Jansen",
        passportNumber: "B04455661",
        visaType: "60 Day Multiple Entry",
        travelDate: "2026-10-05",
        arrivalDate: "2026-10-05",
        exitDate: "2026-12-04",
        status: "Document Review/Verification",
      },
      {
        id: "p5",
        givenNames: "Lerato",
        surname: "Jansen",
        passportNumber: "B04455662",
        visaType: "60 Day Multiple Entry",
        travelDate: "2026-10-05",
        arrivalDate: "2026-10-05",
        exitDate: "2026-12-04",
        status: "Application on Hold",
      },
    ],
  },
]
