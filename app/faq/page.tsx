import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaBand } from "@/components/cta-band"
import { Container, Section } from "@/components/ui/layout"
import { FaqSchema, BreadcrumbSchema } from "@/components/json-ld"
import { faqs, faqCategories } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Dubai Visa FAQ — Requirements, Processing Times & Costs",
  description:
    "Answers to the most common questions about UAE and Dubai visas: who needs one, required documents, processing times, validity, costs and overstay rules.",
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <PageHeader
        eyebrow="Help Centre"
        title="Frequently asked questions"
        description="Everything you need to know about applying for a UAE visa — from documents and processing times to validity, costs and overstay rules."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />

      <Section className="bg-background">
        <Container className="max-w-4xl">
          <div className="flex flex-col gap-12">
            {faqCategories.map((category) => (
              <div key={category} className="flex flex-col gap-5">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {category}
                </h2>
                <FaqAccordion items={faqs.filter((f) => f.category === category)} />
              </div>
            ))}
          </div>

          <p className="mt-12 rounded-[4px] border border-border bg-secondary/50 p-6 text-center text-sm leading-relaxed text-muted-foreground">
            {"Can't find your answer? Our team replies within "}
            <span className="font-semibold text-foreground">one business day</span>
            {" — "}
            <a href="/#contact" className="font-semibold text-accent underline-offset-4 hover:underline">
              get in touch
            </a>
            .
          </p>
        </Container>
      </Section>

      <CtaBand
        title="Ready to apply for your Dubai visa?"
        description="Start your application now and let our specialists handle the paperwork."
      />
    </>
  )
}
