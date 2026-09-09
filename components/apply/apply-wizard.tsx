"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, PartyPopper } from "lucide-react"
import {
  makeInitialState,
  submitApplication,
  requiredDocsFor,
  type ApplicationState,
} from "@/lib/application"
import { StepAccount } from "@/components/apply/steps/step-account"
import { StepApplicants } from "@/components/apply/steps/step-applicants"
import { StepDocuments } from "@/components/apply/steps/step-documents"
import { StepReview } from "@/components/apply/steps/step-review"

const STEP_LABELS = ["Account", "Applicants", "Documents", "Review"]

function isValidCountry(code: string): boolean {
  return Boolean(code) && code !== "-" && code !== "--"
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ApplyWizard({
  defaults,
  initialMode = "register",
}: {
  defaults: { citizenship?: string; arrivalDate?: string }
  initialMode?: "register" | "login"
}) {
  const [state, setState] = useState<ApplicationState>(() => makeInitialState(defaults))
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string>()
  const [reference, setReference] = useState<string>()

  function update(patch: Partial<ApplicationState>) {
    setState((prev) => ({ ...prev, ...patch }))
  }

  /** Validate the current step; returns true when it's safe to advance. */
  function validateStep(current: number): boolean {
    const next: Record<string, string> = {}

    if (current === 0 && !state.account.authenticated) {
      next.account = "Please register or log in to continue."
    }

    if (current === 1) {
      if (state.applicants.length === 0) {
        next.travellers = "Please select how many travellers you're applying for."
      }
      state.applicants.forEach((a) => {
        if (!a.planSlug) next[`${a.id}.planSlug`] = "Please select a visa"
        if (!a.title) next[`${a.id}.title`] = "Required"
        if (!a.surname.trim()) next[`${a.id}.surname`] = "Required"
        if (!a.givenNames.trim()) next[`${a.id}.givenNames`] = "Required"
        if (!a.passportNumber.trim()) next[`${a.id}.passportNumber`] = "Required"
        if (!isValidCountry(a.nationality)) next[`${a.id}.nationality`] = "Required"
        if (!a.dateOfBirth) next[`${a.id}.dateOfBirth`] = "Required"
        if (!a.passportIssueDate) next[`${a.id}.passportIssueDate`] = "Required"
        if (!a.passportExpiry) next[`${a.id}.passportExpiry`] = "Required"
        else if (a.passportIssueDate && a.passportExpiry < a.passportIssueDate)
          next[`${a.id}.passportExpiry`] = "After issue date"
        if (!a.travelStartDate) next[`${a.id}.travelStartDate`] = "Required"
        if (!a.arrivalDate) next[`${a.id}.arrivalDate`] = "Required"
        if (!a.departureDate) next[`${a.id}.departureDate`] = "Required"
        else if (a.arrivalDate && a.departureDate < a.arrivalDate)
          next[`${a.id}.departureDate`] = "After arrival"
        if (!a.reasonForVisit) next[`${a.id}.reasonForVisit`] = "Required"
        if (a.type === "adult") {
          if (!a.occupation.trim()) next[`${a.id}.occupation`] = "Required"
          if (!isValidEmail(a.email)) next[`${a.id}.email`] = "Enter a valid email"
          if (!a.phone.trim()) next[`${a.id}.phone`] = "Required"
        }
      })
    }

    if (current === 2) {
      state.applicants.forEach((a) => {
        requiredDocsFor(a).forEach((req) => {
          const satisfied = Boolean(a.docs[req.key]) || a.deferredDocs.includes(req.key)
          if (!satisfied) next[`${a.id}.${req.key}`] = `${req.label} required`
        })
      })
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  function scrollTop() {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" })
  }

  /** Advance without re-validating — used by steps that gate themselves (Account). */
  function advance() {
    setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1))
    scrollTop()
  }

  function goNext() {
    if (validateStep(step)) advance()
  }

  function goBack() {
    setErrors({})
    setStep((s) => Math.max(s - 1, 0))
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function handleSubmit() {
    if (!state.consent) {
      setSubmitError("Please confirm the declaration before submitting.")
      return
    }
    setSubmitError(undefined)
    setSubmitting(true)
    try {
      const result = await submitApplication(state)
      if (result.ok) {
        setReference(result.reference)
      } else {
        setSubmitError("Something went wrong. Please try again.")
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  // Missing-document summary for the Documents step (shown under the content).
  const docErrorCount = useMemo(
    () => Object.keys(errors).filter((k) => k.includes(".") && step === 2).length,
    [errors, step],
  )

  if (reference) {
    return <SuccessScreen reference={reference} />
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress indicator */}
      <ol className="mb-8 flex items-center gap-2">
        {STEP_LABELS.map((label, i) => {
          const done = i < step
          const active = i === step
          return (
            <li key={label} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full items-center">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    done
                      ? "bg-brand text-brand-foreground"
                      : active
                        ? "border-2 border-brand bg-background text-brand"
                        : "border border-border bg-background text-ink-muted"
                  }`}
                >
                  {done ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
                </span>
                {i < STEP_LABELS.length - 1 ? (
                  <span className={`mx-1 h-px flex-1 ${i < step ? "bg-brand" : "bg-border"}`} />
                ) : null}
              </div>
              <span
                className={`text-center text-[11px] font-medium ${
                  active ? "text-foreground" : "text-ink-muted"
                }`}
              >
                {label}
              </span>
            </li>
          )
        })}
      </ol>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        {step === 0 ? (
          <StepAccount
            state={state}
            update={update}
            initialMode={initialMode}
            onContinue={advance}
          />
        ) : null}
        {step === 1 ? <StepApplicants state={state} update={update} errors={errors} /> : null}
        {step === 2 ? <StepDocuments state={state} update={update} /> : null}
        {step === 3 ? (
          <StepReview
            state={state}
            update={update}
            onSubmit={handleSubmit}
            submitting={submitting}
            error={submitError}
          />
        ) : null}

        {/* Step-level error hints */}
        {step === 2 && docErrorCount > 0 ? (
          <p className="mt-4 text-sm font-medium text-danger">
            Please upload all required documents for each applicant.
          </p>
        ) : null}

        {/* Navigation — step 0 (Account) owns its own buttons */}
        {step >= 1 && step < 3 ? (
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}
        {step === 3 ? (
          <div className="mt-6">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function SuccessScreen({ reference }: { reference: string }) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
        <PartyPopper className="h-8 w-8" aria-hidden="true" />
      </span>
      <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">Application received</h2>
      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
        Thank you — your application has been captured. Your reference number is:
      </p>
      <p className="mt-4 inline-block rounded-full bg-secondary px-5 py-2 font-mono text-lg font-semibold text-foreground">
        {reference}
      </p>
      <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-left">
        <h3 className="text-sm font-semibold text-foreground">What happens next</h3>
        <ol className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
          <li>1. Our team reviews your application and documents.</li>
          <li>2. We&apos;ll email you secure payment instructions to complete your order.</li>
          <li>3. Once paid, we submit to immigration and email your visa as a PDF.</li>
        </ol>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/track"
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
        >
          Track your application
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
