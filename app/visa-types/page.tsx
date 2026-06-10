import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { VisaPlanCard } from "@/components/visa-plan-card"
import { CtaBand } from "@/components/cta-band"
import { ServiceSchema, BreadcrumbSchema } from "@/components/json-ld"
import { singleEntryPlans, multipleEntryPlans } from "@/lib/visa-plans"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "UAE Visa Types & Pricing | Dubai Tourist & Transit Visas",
  description:
    "Compare every UAE visa we offer — 96-hour transit, 14/30/60-day single and multiple entry tourist visas. Adult and child pricing, validity and processing times.",
  alternates: { canonical: "/visa-types" },
}

export default function VisaTypesPage() {
  return (
    <>
      <ServiceSchema name="UAE Tourist & Transit Visa Application" />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Visa Types", href: "/visa-types" },
        ]}
      />
      <main>
        <PageHeader
          eyebrow="Visa types"
          title="Find the right UAE visa for your trip"
          description="Whether you're stopping over for a few days or staying a couple of months, we have a visa to match. All prices include government fees and our hands-on support."
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "Visa Types" }]}
        />

        <Section className="bg-background">
          <Container>
            <SectionHeading
              eyebrow="Single entry"
              title="Single entry visas"
              description="Enter the UAE once within the validity period. Ideal for holidays, short business trips and family visits."
              align="left"
              className="mb-10"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {singleEntryPlans.map((plan) => (
                <VisaPlanCard key={plan.slug} plan={plan} />
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-secondary">
          <Container>
            <SectionHeading
              eyebrow="Multiple entry"
              title="Multiple entry visas"
              description="Enter and exit the UAE as many times as you need within the validity period — perfect for regional and frequent travellers."
              align="left"
              className="mb-10"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {multipleEntryPlans.map((plan) => (
                <VisaPlanCard key={plan.slug} plan={plan} />
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              {/* [PLACEHOLDER] Confirm child pricing rules and required documents for minors */}
              Children are charged at a reduced rate and may require an unabridged birth certificate. All prices shown
              in {siteConfig.name === "Dubai Visas Online" ? "South African Rand (ZAR)" : "your local currency"}.
            </p>
          </Container>
        </Section>

        <CtaBand
          title="Not sure which visa you need?"
          description="Start your application and we'll guide you to the right visa based on your travel dates and nationality."
        />
      </main>
    </>
  )
}
