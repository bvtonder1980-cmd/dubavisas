import Image from "next/image"
import { Container } from "@/components/ui/layout"
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
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#16110d" }}
    >
      {/* classic Emirati gold pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/arabesque-gold.svg')",
          backgroundSize: "120px 120px",
          opacity: 0.18,
        }}
      />
      {/* subtle vignette so the centre stays focused */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(22,17,13,0) 35%, rgba(22,17,13,0.85) 100%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Reviews
          </span>
          <h2
            className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]"
            style={{ color: "#f4f1ea" }}
          >
            Loved by thousands of travellers
          </h2>
          <p
            className="inline-flex flex-wrap items-center justify-center gap-x-1.5 text-pretty text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(244,241,234,0.7)" }}
          >
            <span>{`Rated ${reviewSummary.rating} out of 5 from ${reviewSummary.count.toLocaleString()}+ verified reviews on`}</span>
            <Image
              src="/images/trustpilot-logo.svg"
              alt={reviewSummary.source}
              width={92}
              height={23}
              className="inline-block h-5 w-auto translate-y-[1px] sm:h-[1.35rem]"
            />
          </p>
          <p className="text-pretty text-base leading-relaxed sm:text-lg" style={{ color: "rgba(244,241,234,0.7)" }}>
            Verify our reviews, or read more{" "}
            <a
              href="https://uk.trustpilot.com/review/dubaivisa.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline underline-offset-4 transition-colors hover:text-brand/80"
            >
              here
            </a>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-[4px] border border-border bg-card p-6 shadow-sm">
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
        <div className="mt-12 overflow-hidden rounded-[4px] border border-border bg-card p-2">
          <iframe
            title="Customer reviews powered by Trustpilot"
            loading="lazy"
            src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&businessunitId=5e314f74d67fcd00016e3c15#locale=en-GB&styleHeight=240px&styleWidth=100%25&theme=light&stars=4%2C5"
            className="block w-full overflow-hidden border-0"
            style={{ height: "240px" }}
          />
        </div>
      </Container>
    </section>
  )
}
