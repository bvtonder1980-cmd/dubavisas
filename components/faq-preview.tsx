import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { ButtonLink } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { faqs } from "@/lib/faqs"

export function FaqPreview() {
  const preview = faqs.slice(0, 6)
  return (
    <Section id="faq" className="relative overflow-hidden bg-secondary">
      {/* gold jali floral lattice pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/jali-gold-soft.svg')",
          backgroundSize: "110px 190px",
          opacity: 0.16,
        }}
      />
      <Container className="relative max-w-3xl">
        <SectionHeading
          eyebrow="Common questions"
          title="Answers before you apply"
          description={
            <>
              The questions travellers ask us most.
              <br />
              Can&apos;t find what you need? Our team is one message away.
            </>
          }
        />
        <FaqAccordion items={preview} />
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/faq" variant="outline" size="lg">
            See all FAQs
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
