"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Container, Section } from "@/components/ui/layout"
import { Button } from "@/components/ui/button"
import { Search, Mail, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function TrackPage() {
  const [reference, setReference] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reference.trim()) setSubmitted(true)
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"

  return (
    <main>
      <PageHeader
        eyebrow="Application status"
        title="Track your visa application"
        description="Enter your passport number and the email you applied with to see the latest status of your UAE visa."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Track Application" }]}
      />

      <Section className="bg-background pt-8 sm:pt-10 lg:pt-12">
        <Container className="max-w-2xl">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="ref" className="text-sm font-medium text-foreground">
                  Passport number
                </label>
                <input
                  id="ref"
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="e.g. A01234567"
                  required
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email address
                </label>
                <input id="email" type="email" placeholder="you@example.com" required className={fieldClass} />
              </div>
              <Button type="submit" className="mt-2 w-full justify-center">
                <Search className="h-4 w-4" aria-hidden="true" />
                Check status
              </Button>
            </form>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-2xl border border-border bg-secondary/50 p-6 text-center"
              >
                <p className="font-serif text-lg font-semibold text-foreground">
                  Passport {reference} received
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {/* [PLACEHOLDER] Connect this form to your real application tracking system or CRM. */}
                  Live status tracking is being connected to our processing system. In the meantime, our team can give
                  you an instant update — just reach out below.
                </p>
              </div>
            ) : null}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">Email us</span>
                <span className="block text-sm text-muted-foreground">{siteConfig.contact.email}</span>
              </span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">Call us</span>
                <span className="block text-sm text-muted-foreground">{siteConfig.contact.phone}</span>
              </span>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  )
}
