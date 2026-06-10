"use client"

import { useState } from "react"
import { Check, Asterisk } from "lucide-react"
import { singleEntryPlans, multipleEntryPlans, type VisaPlan } from "@/lib/visa-plans"

function PlanCard({ plan }: { plan: VisaPlan }) {
  return (
    <div className="flex flex-col bg-white p-5 shadow-sm">
      <h3 className="text-center text-base font-semibold text-ink">{plan.title}</h3>
      <p className="mt-1 text-center text-3xl font-bold text-ink">R {plan.price}</p>

      <div className="mt-4 space-y-2 text-sm text-ink">
        <p className="flex items-start gap-2">
          <Check size={16} className="mt-0.5 shrink-0 text-success" />
          <span>Valid for a stay of {plan.validity}.</span>
        </p>
        <p className="flex items-start gap-2">
          <Check size={16} className="mt-0.5 shrink-0 text-success" />
          <span>Most visas processed in {plan.processing}.</span>
        </p>
      </div>

      <div className="mt-4 text-sm text-ink">
        <p className="font-bold">Requirements:</p>
        <p>Copy of Passport, Passport Photo, Return Airline Ticket, Proof of Accommodation.</p>
      </div>

      <div className="mt-4 space-y-1 text-sm text-ink">
        <p className="flex items-start gap-2">
          <Asterisk size={12} className="mt-1 shrink-0 text-danger" />
          <span>The price for a minor is R {plan.minorPrice}</span>
        </p>
        <p className="flex items-start gap-2">
          <Asterisk size={12} className="mt-1 shrink-0 text-danger" />
          <span>Minors require unabridged birth certificates</span>
        </p>
      </div>

      <div className="mt-5 text-center">
        <a
          href="#Assist"
          className="inline-block rounded bg-success px-5 py-2 text-sm font-semibold text-success-foreground transition hover:opacity-90"
        >
          Apply Now
        </a>
      </div>
    </div>
  )
}

export function Prices() {
  const [tab, setTab] = useState<1 | 2>(1)
  const plans = tab === 1 ? singleEntryPlans : multipleEntryPlans

  return (
    <section id="Prices" className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-ink">Visa Options</h2>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex">
            <button
              type="button"
              onClick={() => setTab(1)}
              className={`px-6 py-2.5 text-sm font-semibold transition ${
                tab === 1 ? "bg-brand text-brand-foreground" : "bg-ink-muted text-white hover:opacity-90"
              }`}
            >
              Single Entry
            </button>
            <button
              type="button"
              onClick={() => setTab(2)}
              className={`px-6 py-2.5 text-sm font-semibold transition ${
                tab === 2 ? "bg-brand text-brand-foreground" : "bg-ink-muted text-white hover:opacity-90"
              }`}
            >
              Multiple Entry
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
