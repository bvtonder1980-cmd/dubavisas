"use client"

import { useState } from "react"
import { Mail, Phone, Clock } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sent")
    e.currentTarget.reset()
  }

  return (
    <section id="ContactUs" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Contact us</h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold text-ink">Contact info</h3>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <div className="text-sm font-semibold text-ink">Email</div>
                  <a href="mailto:info@dubaivisasonline.co.za" className="text-sm text-success hover:underline">
                    info@dubaivisasonline.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <div className="text-sm font-semibold text-ink">Cell number</div>
                  <a href="tel:+27725450868" className="text-sm text-success hover:underline">
                    +27 (0) 72-545-0868
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <div className="text-sm font-semibold text-ink">Business hours</div>
                  <p className="text-sm text-ink-muted">09:00-16:00 GMT+2 Mon-Fri</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-2xl font-bold text-ink">Send us a message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-fn" className="mb-1 block text-sm font-medium text-ink">
                    First Name
                  </label>
                  <input
                    id="contact-fn"
                    name="fn"
                    type="text"
                    required
                    className="w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-ln" className="mb-1 block text-sm font-medium text-ink">
                    Last Name
                  </label>
                  <input
                    id="contact-ln"
                    name="ln"
                    type="text"
                    required
                    className="w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-ink">
                  Your e-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-ink">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              {status === "sent" && (
                <p className="rounded bg-success/10 px-3 py-2 text-sm text-success">
                  Thanks for your message! We&apos;ll get back to you shortly.
                </p>
              )}
              <div className="text-right">
                <button
                  type="submit"
                  className="rounded bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
