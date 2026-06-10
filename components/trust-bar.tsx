"use client"

import { Section, Container } from "@/components/ui/layout"
import { ShieldCheck, Clock, Headphones, Award } from "lucide-react"

const stats = [
  {
    icon: Award,
    /* [PLACEHOLDER] Replace with your real founding year / track record */
    value: "Since 2018",
    label: "Trusted visa specialists",
  },
  {
    icon: ShieldCheck,
    /* [PLACEHOLDER] Replace with your real approval rate */
    value: "99.2%",
    label: "Visa approval rate",
  },
  {
    icon: Clock,
    /* [PLACEHOLDER] Replace with your real average processing time */
    value: "24–72 hrs",
    label: "Average processing",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Human support",
  },
]

export function TrustBar() {
  return (
    <Section className="border-y border-border bg-card py-10">
      <Container>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <li key={s.label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-foreground">
                <s.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight text-foreground">{s.value}</span>
                <span className="text-sm leading-tight text-muted-foreground">{s.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
