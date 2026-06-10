import { ButtonLink } from "@/components/ui/button"
import { Container } from "@/components/ui/layout"
import { ArrowRight } from "lucide-react"

export function CtaBand({
  title = "Ready to get your UAE visa?",
  description = "Start your application now. Most visas are processed within 24 to 72 hours.",
  primaryLabel = "Apply Now",
  primaryHref = "/#apply",
  secondaryLabel = "View Pricing",
  secondaryHref = "/#pricing",
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-ink-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-ink-foreground/70">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="outline" size="lg" className="border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
