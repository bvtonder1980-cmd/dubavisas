"use client"

import { useState } from "react"
import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { VisaPlanCard } from "@/components/visa-plan-card"
import { singleEntryPlans, multipleEntryPlans } from "@/lib/visa-plans"

export function Prices() {
  const [entry, setEntry] = useState<"single" | "multiple">("single")
  const plans = entry === "single" ? singleEntryPlans : multipleEntryPlans

  return (
    <Section id="prices" className="relative overflow-hidden bg-secondary">
      {/* gold triangular lattice pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/triangle-gold.svg')",
          backgroundSize: "60px 104px",
          opacity: 0.12,
        }}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent visa pricing"
          description="Transparent pricing that includes government fees, processing and our hands-on expert support. No surprises at checkout."
        />

        <div className="mb-10 mt-[30px] flex justify-center">
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

        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan) => (
            <div key={plan.slug} className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-80 [&>*]:w-full">
              <VisaPlanCard plan={plan} />
            </div>
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
