import { CalendarClock, Hash, Users } from "lucide-react"
import { StatusBadge } from "@/components/applications/status-badge"
import { applicationHeadline, formatDate, TONE_COLORS, type ApplicationSummary } from "@/lib/application-status"

export function ApplicationCard({
  application,
  highlight,
}: {
  application: ApplicationSummary
  highlight?: boolean
}) {
  const { reference, submittedDate, passengers } = application
  const travellerLabel = `${passengers.length} ${passengers.length === 1 ? "traveller" : "travellers"}`
  const headline = applicationHeadline(passengers)
  const headlineColors = TONE_COLORS[headline.tone]

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-surface shadow-sm ${
        highlight ? "border-brand ring-2 ring-brand/30" : "border-border"
      }`}
    >
      {/* Card header */}
      <header className="flex flex-col gap-4 border-b border-border bg-surface-muted/40 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Hash className="h-3.5 w-3.5" aria-hidden="true" />
            {reference}
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-4 w-4" aria-hidden="true" />
              Submitted {formatDate(submittedDate)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" aria-hidden="true" />
              {travellerLabel}
            </span>
          </div>
        </div>
        <span
          className="inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-semibold"
          style={{ color: headlineColors.color, backgroundColor: headlineColors.background }}
        >
          {headline.label}
        </span>
      </header>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              <th scope="col" className="px-7 py-3 font-semibold">Name</th>
              <th scope="col" className="px-4 py-3 font-semibold">Surname</th>
              <th scope="col" className="px-4 py-3 font-semibold">Passport no.</th>
              <th scope="col" className="px-4 py-3 font-semibold">Travel date</th>
              <th scope="col" className="px-4 py-3 font-semibold">Arrival (UAE)</th>
              <th scope="col" className="px-4 py-3 font-semibold">Exit (UAE)</th>
              <th scope="col" className="px-7 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((p) => (
              <tr key={p.id} className="border-t border-border align-middle">
                <td className="px-7 py-4">
                  <span className="font-semibold text-foreground">{p.givenNames}</span>
                  <span className="block text-xs text-ink-muted">{p.visaType}</span>
                </td>
                <td className="px-4 py-4 text-foreground">{p.surname}</td>
                <td className="px-4 py-4 font-mono text-xs text-ink-muted">{p.passportNumber}</td>
                <td className="px-4 py-4 text-ink-muted">{formatDate(p.travelDate)}</td>
                <td className="px-4 py-4 text-ink-muted">{formatDate(p.arrivalDate)}</td>
                <td className="px-4 py-4 text-ink-muted">{formatDate(p.exitDate)}</td>
                <td className="px-7 py-4">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet stacked cards */}
      <div className="flex flex-col divide-y divide-border lg:hidden">
        {passengers.map((p) => (
          <div key={p.id} className="flex flex-col gap-3 px-5 py-5 sm:px-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-foreground">
                  {p.givenNames} {p.surname}
                </p>
                <p className="text-xs text-ink-muted">{p.visaType}</p>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="col-span-2">
                <dt className="text-xs uppercase tracking-wide text-ink-muted">Passport no.</dt>
                <dd className="font-mono text-xs text-foreground">{p.passportNumber}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-muted">Travel date</dt>
                <dd className="text-foreground">{formatDate(p.travelDate)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-muted">Arrival (UAE)</dt>
                <dd className="text-foreground">{formatDate(p.arrivalDate)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-muted">Exit (UAE)</dt>
                <dd className="text-foreground">{formatDate(p.exitDate)}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </article>
  )
}
