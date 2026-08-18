"use client"

import { Check, Star } from "lucide-react"
import { visaPlans, currencySymbol } from "@/lib/visa-plans"
import type { ApplicationState } from "@/lib/application"

export function StepVisa({
  state,
  update,
}: {
  state: ApplicationState
  update: (patch: Partial<ApplicationState>) => void
}) {
  const plansForEntry = visaPlans.filter((p) => p.entry === state.entryType)

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">Choose your visa</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        Select the visa type that suits your trip. You can compare all options on our pricing page.
      </p>

      {/* Entry-type toggle */}
      <div className="mt-6 inline-flex rounded-full border border-border bg-secondary/60 p-1">
        {(["single", "multiple"] as const).map((entry) => (
          <button
            key={entry}
            type="button"
            onClick={() => update({ entryType: entry, planSlug: "" })}
            className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
              state.entryType === entry
                ? "bg-brand text-brand-foreground"
                : "text-ink-muted hover:text-foreground"
            }`}
          >
            {entry} entry
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {plansForEntry.map((plan) => {
          const selected = state.planSlug === plan.slug
          return (
            <button
              key={plan.slug}
              type="button"
              onClick={() => update({ planSlug: plan.slug })}
              className={`relative flex flex-col rounded-2xl border p-5 text-left transition-all ${
                selected
                  ? "border-brand ring-2 ring-brand/30"
                  : "border-border hover:border-brand/50"
              }`}
            >
              {plan.popular ? (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand/15 px-2.5 py-1 text-[11px] font-semibold text-brand">
                  <Star className="h-3 w-3 fill-brand" aria-hidden="true" /> Popular
                </span>
              ) : null}
              <span className="text-sm font-semibold text-foreground">{plan.title}</span>
              <span className="mt-2 font-serif text-2xl font-semibold text-foreground">
                {currencySymbol}
                {plan.price}
                <span className="ml-1 text-xs font-normal text-muted-foreground">per adult</span>
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                {currencySymbol}
                {plan.minorPrice} per child · {plan.validity} · {plan.processing}
              </span>
              <span className="mt-3 text-xs leading-relaxed text-muted-foreground">{plan.description}</span>
              <span
                className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${
                  selected ? "text-brand" : "text-ink-muted"
                }`}
              >
                {selected ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" /> Selected
                  </>
                ) : (
                  "Select this visa"
                )}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
