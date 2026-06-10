"use client"

import { useState } from "react"
import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { VisaPlanCard } from "@/components/visa-plan-card"
import { singleEntryPlans, multipleEntryPlans } from "@/lib/visa-plans"

export function Prices() {
  const [entry, setEntry] = useState<"single" | "multiple">("single")
  const plans = entry === "single" ? singleEntryPlans : multipleEntryPlans

  return (
    <Section id="prices" className="bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent visa pricing"
          description="One flat price per visa — government fees, processing and our hands-on support all included. No surprises at checkout."
        />

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setEntry("single")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                entry === "single" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={entry === "single"}
            >
              Single Entry
            </button>
            <button
              type="button"
              onClick={() => setEntry("multiple")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                entry === "multiple"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={entry === "multiple"}
            >
              Multiple Entry
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <VisaPlanCard key={plan.slug} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {/* [PLACEHOLDER] Confirm your refund / approval guarantee wording */}
          Not approved? We refund the visa fee. Prices shown in South African Rand (ZAR).
        </p>
      </Container>
    </Section>
  )
}
