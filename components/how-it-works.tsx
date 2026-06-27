import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { ButtonLink } from "@/components/ui/button"
import { FileText, CreditCard, Send, PlaneTakeoff } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    title: "Tell us about your trip",
    body: "Choose your travel dates, nationality and visa type. Then complete the easy online form that takes about three minutes to complete.",
  },
  {
    icon: FileText,
    title: "Upload & pay securely",
    body: "Upload the required documents and make payment through our secure checkout. Our experts are here to guide you each step of the way.",
  },
  {
    icon: Send,
    title: "We process your visa application",
    body: "Our team reviews and prepares every application manually and submits it directly to UAE immigration on your behalf for processing.",
  },
  {
    icon: PlaneTakeoff,
    title: "Receive your visa & travel",
    body: "Your approved e-visa arrives by email and our team verifies it's correctly issued. Print it or keep it on your phone, then pack your bags.",
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Your visa, in four simple steps"
          description="With minimal paperwork and no queues or guesswork, here's the entire journey from the start all the way to the boarding gate."
        />
        <ol className="mt-[30px] grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="absolute right-5 top-5 font-serif text-3xl font-semibold text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                <step.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/#apply" size="lg">
            Start your application
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
