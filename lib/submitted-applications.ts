/**
 * SUBMITTED-APPLICATIONS STORE — browser-only persistence stub.
 *
 * This build has no backend, so a freshly submitted application is saved to
 * localStorage here and read back by the "My applications" tracker. It mirrors
 * the swappable `submitApplication` stub: when the site moves to its own
 * server, drop this store and fetch the signed-in customer's applications
 * instead — the tracker consumes `ApplicationSummary[]` unchanged.
 */

import type { ApplicationState } from "@/lib/application"
import type { ApplicationSummary, PassengerStatus } from "@/lib/application-status"
import { getVisaPlan } from "@/lib/visa-plans"

const STORAGE_KEY = "dvo:submitted-applications"

/** Map the wizard's application state into the tracker's summary shape. A new
 *  submission starts every traveller at the first lifecycle stage. */
export function stateToSummary(state: ApplicationState, reference: string): ApplicationSummary {
  const passengers: PassengerStatus[] = state.applicants.map((a) => {
    const plan = getVisaPlan(a.planSlug)
    const visaType = plan?.shortName ?? plan?.title ?? "Visa"
    return {
      id: a.id,
      givenNames: a.givenNames,
      surname: a.surname,
      passportNumber: a.passportNumber,
      visaType: a.type === "minor" ? `${visaType} (Minor)` : visaType,
      travelDate: a.travelStartDate,
      arrivalDate: a.arrivalDate,
      exitDate: a.departureDate,
      status: "Document Review/Verification",
    }
  })

  return {
    reference,
    submittedDate: new Date().toISOString().slice(0, 10),
    passengers,
  }
}

/** All applications submitted from this browser, newest first. */
export function getSubmittedApplications(): ApplicationSummary[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ApplicationSummary[]) : []
  } catch {
    return []
  }
}

/** Persist a submitted application (de-duplicated by reference), newest first. */
export function saveSubmittedApplication(summary: ApplicationSummary): void {
  if (typeof window === "undefined") return
  try {
    const existing = getSubmittedApplications().filter((a) => a.reference !== summary.reference)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([summary, ...existing]))
  } catch {
    // Ignore storage failures (private mode / quota) — the app still works.
  }
}
