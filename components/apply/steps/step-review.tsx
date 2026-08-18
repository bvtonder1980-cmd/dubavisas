"use client"

import { CheckCircle2, FileText, Loader2 } from "lucide-react"
import { getVisaPlan } from "@/lib/visa-plans"
import { calculatePrice, type ApplicationState } from "@/lib/application"

function countDocs(docs: Record<string, unknown>): number {
  return Object.values(docs).filter(Boolean).length
}

export function StepReview({
  state,
  update,
  onSubmit,
  submitting,
  error,
}: {
  state: ApplicationState
  update: (patch: Partial<ApplicationState>) => void
  onSubmit: () => void
  submitting: boolean
  error?: string
}) {
  const price = calculatePrice(state)

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">Review &amp; submit</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        Please check everything is correct before submitting. You can go back to make changes.
      </p>

      {/* Per-applicant summary */}
      <div className="mt-6 flex flex-col gap-4">
        {state.applicants.map((a, i) => {
          const plan = getVisaPlan(a.planSlug)
          const name = `${[a.title, a.givenNames, a.surname].filter(Boolean).join(" ")}`.trim() || `Applicant ${i + 1}`
          return (
            <div key={a.id} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-foreground">
                  {name}
                  <span className="ml-2 text-xs font-normal capitalize text-muted-foreground">
                    {a.type === "minor" ? "child" : "adult"}
                  </span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  {countDocs(a.docs)} docs
                </span>
              </div>
              <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Visa</dt>
                  <dd className="text-right font-medium text-foreground">{plan?.title ?? "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Reason</dt>
                  <dd className="text-right font-medium text-foreground">{a.reasonForVisit || "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Travel start</dt>
                  <dd className="text-right font-medium text-foreground">{a.travelStartDate || "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">In UAE</dt>
                  <dd className="text-right font-medium text-foreground">
                    {a.arrivalDate || "—"} → {a.departureDate || "—"}
                  </dd>
                </div>
              </dl>
            </div>
          )
        })}
      </div>

      {/* Price */}
      <div className="mt-4 rounded-2xl border border-border bg-secondary/50 p-5">
        <div className="flex flex-col gap-1.5 text-sm">
          {price.lines.map((line) => (
            <div key={line.id} className="flex justify-between gap-4 text-muted-foreground">
              <span className="min-w-0 truncate">
                {line.name} — {line.planTitle}{" "}
                <span className="capitalize">({line.type === "minor" ? "child" : "adult"})</span>
              </span>
              <span className="shrink-0">{line.formattedUnit}</span>
            </div>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
            <span className="font-serif text-lg font-semibold text-foreground">Total</span>
            <span className="font-serif text-lg font-semibold text-foreground">{price.formattedTotal}</span>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Payment is arranged separately after your application is received — our team will send you secure
          payment instructions.
        </p>
      </div>

      {/* Consent */}
      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-card p-4">
        <input
          type="checkbox"
          checked={state.consent}
          onChange={(e) => update({ consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--brand)]"
        />
        <span className="text-xs leading-relaxed text-muted-foreground">
          I confirm the information provided is accurate and I understand the visa fee is for processing the
          application and does not guarantee approval.
        </span>
      </label>

      {error ? <p className="mt-3 text-sm font-medium text-danger">{error}</p> : null}

      <button
        type="button"
        onClick={onSubmit}
        disabled={submitting}
        className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-medium text-brand-foreground transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Submitting…
          </>
        ) : (
          <>
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Submit application
          </>
        )}
      </button>
    </div>
  )
}
