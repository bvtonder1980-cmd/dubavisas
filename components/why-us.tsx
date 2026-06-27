import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { ShieldCheck, Clock4, UserCheck, Wallet, FileCheck2, MessagesSquare } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Government-compliant, every time",
    body: "We submit directly to UAE immigration and check every detail so your application meets the latest requirements.",
  },
  {
    icon: Clock4,
    title: "Genuinely fast turnaround",
    body: "Most visas are approved within 24 to 72 hours. Need it sooner? Ask us about express processing.",
  },
  {
    icon: UserCheck,
    title: "A real person on your file",
    body: "Every application is reviewed by hand by an experienced specialist — not an automated bot that misses errors.",
  },
  {
    icon: Wallet,
    title: "One flat, honest price",
    body: "The price you see includes government fees and our service. No hidden charges added at checkout.",
  },
  {
    icon: FileCheck2,
    title: "We catch mistakes before they cost you",
    body: "Wrong photo or document? We flag it before submission so your visa isn't delayed or rejected.",
  },
  {
    icon: MessagesSquare,
    title: "Support that actually replies",
    body: "Reach us on WhatsApp, email or phone. Real answers from real people, seven days a week.",
  },
]

export function WhyUs() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="Why travellers choose us"
          title="The reassuring way to get your Dubai visa"
          description={
            <>
              Applying for a visa shouldn&apos;t be stressful.
              <br />
              Here&apos;s why thousands of travellers trust us with their trip.
            </>
          }
        />
        <div className="mt-[30px] grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                <r.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
