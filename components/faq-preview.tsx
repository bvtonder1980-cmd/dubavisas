import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { ButtonLink } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { faqs } from "@/lib/faqs"

export function FaqPreview() {
  const preview = faqs.slice(0, 6)
  return (
    <Section id="faq" className="bg-secondary">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Common questions"
          title="Answers before you apply"
          description="The questions travellers ask us most. Can't find what you need? Our team is one message away."
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
