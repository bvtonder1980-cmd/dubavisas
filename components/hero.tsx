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
          src="/images/hero-dubai-night.jpg"
          alt="Dubai Business Bay skyline at night with illuminated skyscrapers reflecting on the water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(28,23,19,0.78) 0%, rgba(28,23,19,0.45) 35%, rgba(28,23,19,0) 65%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex min-h-[88vh] flex-col justify-center py-20">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground backdrop-blur-sm"
              style={{ borderColor: "rgba(244,241,234,0.25)", backgroundColor: "rgba(244,241,234,0.12)" }}
            >
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              {siteConfig.stats.trustpilotRating} rating on Trustpilot
            </span>

            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
              Your UAE visa, sorted online in minutes
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground">
              Apply for your Dubai &amp; Abu Dhabi business or tourist visa with minimal documents while
              getting expert support. With Dubai Visas Online, you can fly any airline and with most visas
              approved in {siteConfig.stats.avgProcessing}, we&apos;ll have you ready for departure in no time.
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
                className="border-ink-foreground text-ink-foreground hover:bg-ink-foreground hover:text-ink"
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
                <div key={item.label} className="flex items-center gap-2 text-sm text-ink-foreground">
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
