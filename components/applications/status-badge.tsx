import { STATUS_META, TONE_COLORS, type VisaStatus } from "@/lib/application-status"

export function StatusBadge({ status }: { status: VisaStatus }) {
  const tone = STATUS_META[status].tone
  const colors = TONE_COLORS[tone]
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ color: colors.color, backgroundColor: colors.background }}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: colors.color }}
      />
      {status}
    </span>
  )
}
