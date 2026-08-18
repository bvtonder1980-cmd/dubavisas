import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Container, Section, SectionHeading } from "@/components/ui/layout"
import { CtaBand } from "@/components/cta-band"
import { BreadcrumbSchema } from "@/components/json-ld"
import { ShieldCheck, Clock, Headset, Award } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Us — Trusted UAE Visa Specialists",
  description:
    "Learn about Dubai Visas Online — a dedicated UAE visa service helping travellers apply for tourist and transit visas with fast processing and expert support.",
  alternates: { canonical: "/about" },
}

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy first",
    body: "Every application is checked by a specialist before submission to minimise the risk of rejection.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    body: `Most visas are processed within ${siteConfig.stats.avgProcessing}, so you can travel with confidence.`,
  },
  {
    icon: Headset,
    title: "Real human support",
    body: "Friendly specialists answer your questions before, during and after your application.",
  },
  {
    icon: Award,
    title: "Proven track record",
    body: `Over ${siteConfig.stats.visasProcessed} visas processed with a ${siteConfig.stats.approvalRate} approval rate.`,
  },
]

const stats = [
  { value: `${new Date().getFullYear() - siteConfig.stats.yearFounded}+`, label: "Years of experience" },
  { value: siteConfig.stats.visasProcessed, label: "Visas processed" },
  { value: siteConfig.stats.approvalRate, label: "Approval rate" },
  { value: siteConfig.stats.trustpilotRating, label: "Trustpilot rating" },
]

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <PageHeader
        eyebrow="About us"
        title="Your trusted UAE visa partner"
        description={`Since ${siteConfig.stats.yearFounded}, we've helped tens of thousands of travellers reach Dubai and the wider UAE — taking the stress out of visas so you can focus on your trip.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <Section className="bg-background pt-8 sm:pt-10 lg:pt-12">
        <Container className="max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground">Our Story</h2>
          <div className="flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              {siteConfig.name} was founded in 2018 by a mother-and-son team who has been in the visa industry since
              2006, with a simple goal: make applying for a UAE visa fast, clear and completely stress-free.
            </p>
            <p>
              We knew that we could add value to our travellers&apos; experience by building a website and backend
              systems that allow for easy and clear application capturing coupled with swift application processes that
              allow for a faster turnaround.
            </p>
            <p>
              Our industry experience led us to build {siteConfig.name} into what we believe is the easiest and fastest
              way to get a visa to the UAE.
            </p>
            <p>
              What used to mean confusing paperwork and long waits is now a simple online process backed by a team that
              genuinely cares about getting you approved.
            </p>
            <p>
              Today, we specialise exclusively in UAE visas, which means we know the requirements inside out. From your
              first question to the moment your visa lands in your inbox, our specialists guide you every step of the
              way.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-secondary">
        <Container>
          <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-foreground">Our Track Record</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <p className="font-serif text-3xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <SectionHeading
            eyebrow="Why travellers choose us"
            title="What we stand for"
            description="The principles that guide every application we handle."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <value.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Ready to travel to Dubai?"
        description="Join thousands of happy travellers and let us handle your UAE visa from start to finish."
      />
    </main>
  )
}
