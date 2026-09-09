import { CalendarDays, Users } from "lucide-react"
import { StatusBadge } from "@/components/status/status-badge"
import {
  applicationHeadline,
  formatTrackDate,
  HEADLINE_TONE_CLASS,
  type TrackedApplication,
} from "@/lib/application-status"

const COLUMNS = ["Name", "Surname", "Passport No.", "Date of Travel", "Arrival (UAE)", "Exit (UAE)", "Status"]

export function ApplicationSummaryCard({ application }: { application: TrackedApplication }) {
  const { reference, submittedOn, passengers } = application
  const headline = applicationHeadline(passengers)

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-border bg-surface-muted/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Reference</span>
          <p className="font-mono text-lg font-semibold text-foreground">{reference}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Submitted {formatTrackDate(submittedOn)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" aria-hidden="true" />
              {passengers.length} {passengers.length === 1 ? "traveller" : "travellers"}
            </span>
          </div>
        </div>
        <span
          className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-semibold ${HEADLINE_TONE_CLASS[headline.tone]}`}
        >
          {headline.label}
        </span>
      </header>

      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left">
              {COLUMNS.map((col) => (
                <th key={col} className="px-6 py-3 font-semibold text-ink-muted">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {passengers.map((p, i) => (
              <tr key={`${p.passportNumber}-${i}`} className="border-t border-border">
                <td className="px-6 py-4 font-medium text-foreground">{p.givenName}</td>
                <td className="px-6 py-4 font-medium text-foreground">{p.surname}</td>
                <td className="px-6 py-4 font-mono text-ink-muted">{p.passportNumber}</td>
                <td className="px-6 py-4 text-ink-muted">{formatTrackDate(p.travelDate)}</td>
                <td className="px-6 py-4 text-ink-muted">{formatTrackDate(p.arrivalDate)}</td>
                <td className="px-6 py-4 text-ink-muted">{formatTrackDate(p.exitDate)}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-3 p-4 md:hidden">
        {passengers.map((p, i) => (
          <div key={`${p.passportNumber}-${i}`} className="rounded-2xl border border-border bg-surface p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="font-serif text-base font-semibold text-foreground">
                {p.givenName} {p.surname}
              </p>
              <StatusBadge status={p.status} />
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              <Detail label="Passport No." value={p.passportNumber} mono />
              <Detail label="Visa" value={p.visaName} />
              <Detail label="Date of Travel" value={formatTrackDate(p.travelDate)} />
              <Detail label="Arrival (UAE)" value={formatTrackDate(p.arrivalDate)} />
              <Detail label="Exit (UAE)" value={formatTrackDate(p.exitDate)} />
            </dl>
          </div>
        ))}
      </div>
    </article>
  )
}

function Detail({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs text-ink-muted">{label}</dt>
      <dd className={`font-medium text-foreground ${mono ? "font-mono" : ""}`}>{value}</dd>
    </div>
  )
}
