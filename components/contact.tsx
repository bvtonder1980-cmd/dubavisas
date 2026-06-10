"use client"

import { useState } from "react"
import { Mail, Phone, Clock, MessageCircle } from "lucide-react"
import { Section, Container } from "@/components/ui/layout"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sent")
    e.currentTarget.reset()
  }

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"

  return (
    <Section id="contact" className="bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              We&apos;re here to help, seven days a week
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Have a question before you apply? Reach out and a real member of our team will get back to you quickly.
            </p>

            <div className="mt-8 space-y-5">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 group">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Email</span>
                  <span className="text-sm text-muted-foreground group-hover:text-accent">
                    {siteConfig.contact.email}
                  </span>
                </span>
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-start gap-3 group">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Phone</span>
                  <span className="text-sm text-muted-foreground group-hover:text-accent">
                    {siteConfig.contact.phone}
                  </span>
                </span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                className="flex items-start gap-3 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">WhatsApp</span>
                  <span className="text-sm text-muted-foreground group-hover:text-accent">
                    {siteConfig.contact.whatsapp}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Business hours</span>
                  {/* [PLACEHOLDER] Confirm your support hours */}
                  <span className="text-sm text-muted-foreground">09:00–16:00 (GMT+2), Mon–Fri</span>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground">Send us a message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-fn" className="mb-1.5 block text-sm font-medium text-foreground">
                    First name
                  </label>
                  <input id="contact-fn" name="fn" type="text" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-ln" className="mb-1.5 block text-sm font-medium text-foreground">
                    Last name
                  </label>
                  <input id="contact-ln" name="ln" type="text" required className={fieldClass} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Your email
                </label>
                <input id="contact-email" name="email" type="email" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Your message
                </label>
                <textarea id="contact-message" name="message" rows={5} required className={`${fieldClass} resize-none`} />
              </div>
              {status === "sent" && (
                <p className="rounded-lg bg-success/10 px-3 py-2 text-sm text-success">
                  Thanks for your message! We&apos;ll get back to you shortly.
                </p>
              )}
              <Button type="submit" variant="dark" size="lg" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}
