import { PageHeader } from "@/components/page-header"
import { Container, Section } from "@/components/ui/layout"
import { CtaBand } from "@/components/cta-band"

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export function LegalPage({
  title,
  eyebrow,
  description,
  breadcrumbLabel,
  lastUpdated,
  sections,
}: {
  title: string
  eyebrow: string
  description: string
  breadcrumbLabel: string
  lastUpdated: string
  sections: LegalSection[]
}) {
  return (
    <main>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: breadcrumbLabel }]}
      />

      <Section className="bg-background">
        <Container className="max-w-3xl">
          <p className="mb-10 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-semibold text-foreground">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="flex flex-col gap-2 pl-1">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <p className="mt-12 rounded-[4px] border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
            This document contains placeholder wording for demonstration. Please replace it with policies reviewed by
            your own legal advisor before going live.
          </p>
        </Container>
      </Section>

      <CtaBand
        title="Questions about our policies?"
        description="Our team is happy to clarify anything before you apply."
        primaryLabel="Contact Us"
        primaryHref="/#contact"
      />
    </main>
  )
}
