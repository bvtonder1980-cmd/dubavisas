import { statusStyle, type ApplicationStatus } from "@/lib/application-status"

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const style = statusStyle(status)
  const Icon = style.icon
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${style.badge}`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {status}
    </span>
  )
}
