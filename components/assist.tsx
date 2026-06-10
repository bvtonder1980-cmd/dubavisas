"use client"

import { useState } from "react"
import Image from "next/image"
import { countries } from "@/lib/countries"

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"))
const months = [
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
]
const years = ["2026", "2027"]

const selectClass =
  "rounded border border-neutral-300 bg-white px-2 py-1.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"

export function Assist({ onApply }: { onApply: () => void }) {
  const [day, setDay] = useState("01")
  const [month, setMonth] = useState("01")
  const [year, setYear] = useState("2026")
  const [citizen, setCitizen] = useState("-")
  const [livingIn, setLivingIn] = useState("-")

  const ready = citizen !== "-" && citizen !== "--" && livingIn !== "-" && livingIn !== "--"

  return (
    <section id="Assist" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Trustpilot logos row */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.trustpilot.com/review/dubaivisa.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Image src="/images/text.png" alt="Check out our reviews" width={140} height={20} style={{ height: "auto" }} className="h-5 w-auto" />
          </a>
          <a
            href="https://www.trustpilot.com/review/dubaivisa.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Image src="/images/stars.png" alt="Trustpilot rating stars" width={120} height={20} style={{ height: "auto" }} className="h-5 w-auto" />
          </a>
          <a
            href="https://www.trustpilot.com/review/dubaivisa.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Image src="/images/logo.png" alt="Trustpilot" width={90} height={20} style={{ height: "auto" }} className="h-5 w-auto" />
          </a>
        </div>

        <h2 className="text-balance text-center text-3xl font-bold text-ink">Let&apos;s Start Your Application</h2>

        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm font-semibold text-ink">
          <span>Online Application</span>
          <span className="text-brand">&bull;</span>
          <span>Fly Any Airline</span>
          <span className="text-brand">&bull;</span>
          <span>Minimal Documents Required</span>
          <span className="text-brand">&bull;</span>
          <span>Expert Assistance</span>
        </p>

        <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-neutral-200 bg-surface p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-center">
              <div className="mb-2 text-sm text-ink">I plan to leave on</div>
              <div className="flex items-center justify-center gap-2">
                <select aria-label="Day" className={selectClass} value={day} onChange={(e) => setDay(e.target.value)}>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select aria-label="Month" className={selectClass} value={month} onChange={(e) => setMonth(e.target.value)}>
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
                <select aria-label="Year" className={selectClass} value={year} onChange={(e) => setYear(e.target.value)}>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-2 text-sm text-ink">I am a citizen of</div>
              <select
                aria-label="Country of citizenship"
                className={`${selectClass} w-full max-w-xs`}
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

            <div className="text-center md:col-span-2">
              <div className="mb-2 text-sm text-ink">I am currently living in</div>
              <select
                aria-label="Country of residence"
                className={`${selectClass} w-full max-w-xs`}
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

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onApply}
              disabled={!ready}
              className="rounded bg-success px-8 py-2.5 text-sm font-semibold text-success-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Apply Now
            </button>
            {!ready && (
              <p className="mt-2 text-xs text-ink-muted">
                Select your citizenship and country of residence to continue.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
