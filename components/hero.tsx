import Image from "next/image"
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react"
import { Container } from "@/components/ui/layout"
import { ButtonLink } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section id="home" className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dubai.png"
          alt="Aerial view of the Dubai skyline at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[88vh] flex-col justify-center py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground/90 backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              {siteConfig.stats.trustpilotRating} rating · {siteConfig.stats.trustpilotReviews} reviews
            </span>

            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
              Your UAE visa, sorted online in minutes
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground/80">
              Apply for your Dubai tourist or transit visa with minimal documents and expert support.
              Fly any airline, with most visas approved in {siteConfig.stats.avgProcessing}.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#apply" variant="primary" size="lg">
                Start your application
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="#prices"
                variant="outline"
                size="lg"
                className="border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
              >
                View pricing
              </ButtonLink>
            </div>

            {/* Inline trust points */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { icon: ShieldCheck, label: `${siteConfig.stats.approvalRate} approval rate` },
                { icon: Clock, label: `Processed in ${siteConfig.stats.avgProcessing}` },
                { icon: Star, label: `${siteConfig.stats.visasProcessed} visas processed` },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-ink-foreground/85">
                  <item.icon className="h-4 w-4 text-brand" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
