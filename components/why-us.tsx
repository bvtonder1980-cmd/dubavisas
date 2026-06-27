import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { ShieldCheck, Clock4, UserCheck, Wallet, FileCheck2, MessagesSquare } from "lucide-react"

const reasons = [
  {
    icon: FileCheck2,
    title: "We catch mistakes before they cost you",
    body: "Wrong photo or document? We flag it before submission so your application has the best possible chance of success.",
  },
  {
    icon: UserCheck,
    title: "A real person on your file",
    body: "Every application is reviewed by one of our experienced specialists. Have a question? Let us know so we can give you the best advice.",
  },
  {
    icon: Wallet,
    title: "One flat, honest price",
    body: "The price you see is what you'll pay. It includes government fees and our personalised service. No hidden charges added at checkout.",
  },
  {
    icon: MessagesSquare,
    title: "Support that actually replies",
    body: "Reach us on WhatsApp, email or phone. Real answers from real people, seven days a week.",
  },
  {
    icon: Clock4,
    title: "Genuinely fast turnaround",
    body: "Most visas are approved within 24 to 72 hours. Need it sooner? Ask us about express processing.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by the travel industry",
    body: "We are trusted by the largest South African travel agency brands to ensure that their travellers get their visas on time, every time.",
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
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/15">
                <r.icon className="h-8 w-8 text-accent" aria-hidden="true" />
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
