import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { testimonials, reviewSummary } from "@/lib/testimonials"
import { Star } from "lucide-react"

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? "fill-success text-success" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <Section id="reviews" className="bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by thousands of travellers"
          description={`Rated ${reviewSummary.rating} out of 5 from ${reviewSummary.count.toLocaleString()}+ verified reviews on ${reviewSummary.source}.`}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Stars rating={t.rating} />
              <figcaption className="mt-3 font-serif text-base font-semibold text-foreground">{t.title}</figcaption>
              <blockquote className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </blockquote>
              <div className="mt-4 border-t border-border pt-3 text-sm">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-muted-foreground">{t.location}</p>
              </div>
            </figure>
          ))}
        </div>

        {/* Live Trustpilot widget for real-time social proof */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card p-2">
          <iframe
            title="Customer reviews powered by Trustpilot"
            loading="lazy"
            src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&businessunitId=5e314f74d67fcd00016e3c15#locale=en-GB&styleHeight=240px&styleWidth=100%25&theme=light&stars=4%2C5"
            className="block w-full overflow-hidden border-0"
            style={{ height: "240px" }}
          />
        </div>
      </Container>
    </Section>
  )
}
