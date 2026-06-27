"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CalendarDays, Globe, MapPin, Star } from "lucide-react"
import { countries } from "@/lib/countries"
import { Container } from "@/components/ui/layout"
import { siteConfig } from "@/lib/site-config"

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"))
const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]
const years = ["2026", "2027"]

const fieldClass =
  "h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"

const labelClass = "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted"

export function Assist() {
  const [day, setDay] = useState("01")
  const [month, setMonth] = useState("01")
  const [year, setYear] = useState("2026")
  const [citizen, setCitizen] = useState("-")
  const [livingIn, setLivingIn] = useState("-")

  const ready = citizen !== "-" && citizen !== "--" && livingIn !== "-" && livingIn !== "--"
  const query = `?citizen=${encodeURIComponent(citizen)}&residence=${encodeURIComponent(
    livingIn,
  )}&depart=${year}-${month}-${day}`

  return (
    <section
      id="apply"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24"
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
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Start here
          </span>
          <h2
            className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]"
            style={{ color: "#f4f1ea" }}
          >
            Let&apos;s start your application
          </h2>
          <p className="text-pretty text-base leading-relaxed sm:text-lg" style={{ color: "rgba(244,241,234,0.7)" }}>
            Tell us when you would like to travel and let&apos;s start your application. It&apos;s fully online — no
            embassy visits, no queues.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          {/* top trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-border bg-surface-muted/60 px-6 py-3 text-xs font-medium text-ink-muted">
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-brand text-brand" /> {siteConfig.stats.trustpilotRating} on Trustpilot
            </span>
            <span className="hidden sm:inline">Fly any airline</span>
            <span>Minimal documents</span>
            <span className="hidden sm:inline">Expert assistance</span>
          </div>

          <div className="p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <span className={labelClass}>
                  <CalendarDays className="h-3.5 w-3.5" /> I plan to travel on
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <select aria-label="Day" className={fieldClass} value={day} onChange={(e) => setDay(e.target.value)}>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select aria-label="Month" className={fieldClass} value={month} onChange={(e) => setMonth(e.target.value)}>
                    {months.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <select aria-label="Year" className={fieldClass} value={year} onChange={(e) => setYear(e.target.value)}>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <span className={labelClass}>
                  <Globe className="h-3.5 w-3.5" /> I am a citizen of
                </span>
                <select
                  aria-label="Country of citizenship"
                  className={fieldClass}
                  value={citizen}
                  onChange={(e) => setCitizen(e.target.value)}
                >
                  {countries.map((c, i) => (
                    <option key={`citizen-${i}-${c.code}`} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className={labelClass}>
                  <MapPin className="h-3.5 w-3.5" /> I am currently living in
                </span>
                <select
                  aria-label="Country of residence"
                  className={fieldClass}
                  value={livingIn}
                  onChange={(e) => setLivingIn(e.target.value)}
                >
                  {countries.map((c, i) => (
                    <option key={`live-${i}-${c.code}`} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-7">
              {ready ? (
                <Link
                  href={`/apply${query}`}
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-medium text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  Continue to application
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <div className="flex h-14 w-full items-center justify-center rounded-full bg-surface-muted px-8 text-sm font-medium text-ink-muted">
                  Select your citizenship and residence to continue
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
