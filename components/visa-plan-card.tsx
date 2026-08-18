import { ButtonLink } from "@/components/ui/button"
import { Check, Clock, CalendarDays } from "lucide-react"
import { type VisaPlan, currencySymbol } from "@/lib/visa-plans"

export function VisaPlanCard({ plan }: { plan: VisaPlan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md ${
        plan.popular ? "border-accent ring-1 ring-accent" : "border-border"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          Most popular
        </span>
      )}
      <h3 className="font-serif text-xl font-semibold text-foreground">{plan.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{plan.bestFor}</p>

      <div className="mt-5 flex items-baseline gap-1">
        {/* [PLACEHOLDER] Replace prices with your real published rates */}
        <span className="font-serif text-4xl font-semibold text-foreground">
          {currencySymbol}
          {plan.price}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Children:{" "}
        <span className="font-medium text-foreground">
          {currencySymbol}
          {plan.minorPrice}
        </span>
      </p>

      <dl className="mt-5 flex flex-col gap-2 border-y border-border py-4 text-sm">
        <div className="flex items-center gap-2 text-foreground">
          <CalendarDays className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <dt className="text-muted-foreground">Validity:</dt>
          <dd className="font-medium">{plan.validity}</dd>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <dt className="text-muted-foreground">Processing:</dt>
          <dd className="font-medium">{plan.processing}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-1 flex-col gap-3">
        {plan.highlights.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="/#apply"
        variant={plan.popular ? "primary" : "outline"}
        className={`mt-7 w-full ${plan.popular ? "" : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"}`}
      >
        Apply now
      </ButtonLink>
    </div>
  )
}
