import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { CtaBand } from "@/components/cta-band"
import { BreadcrumbSchema } from "@/components/json-ld"
import { FileText, Copy, Camera, Plane, BedDouble, Baby, CheckCircle2, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Dubai Visa Document & Photo Requirements (2026)",
  description:
    "The exact documents and passport photo specifications you need to apply for a UAE visa. Avoid rejection with our clear, up-to-date requirements checklist.",
  alternates: { canonical: "/documents" },
}

const documents = [
  {
    icon: FileText,
    title: "Valid passport",
    body: "Your passport must be valid for at least 6 months from your date of travel, with at least one blank page for entry stamps.",
  },
  {
    icon: Copy,
    title: "Copy of your passport cover page",
    body: "A clear colour copy of the front and back of your passport's cover page, so all details are fully legible.",
  },
  {
    icon: Camera,
    title: "Clear colour passport photo",
    body: "A recent colour passport-style photo against a white background, with your full face visible and no glasses or head covering (except religious).",
  },
  {
    icon: Plane,
    title: "Return / onward flight ticket",
    body: "A copy of your confirmed return or onward flight ticket showing you'll leave the UAE within your visa validity.",
  },
  {
    icon: BedDouble,
    title: "Confirmed accommodation",
    body: "Proof of where you'll stay — a confirmed hotel booking, or the address and details of the host if you're staying with family or friends.",
  },
  {
    icon: Baby,
    title: "For minors under 18",
    body: "Children typically require an unabridged birth certificate listing both parents, plus parental consent where applicable.",
  },
]

const photoDo = [
  "Recent (taken within the last 6 months)",
  "Plain white or light background",
  "Full face, eyes open, neutral expression",
  "Good lighting with no shadows",
  "High resolution and in focus",
]

const photoDont = [
  "No selfies or cropped group photos",
  "No glasses, hats or filters",
  "No busy or coloured backgrounds",
  "No blurry or low-resolution images",
  "No heavy shadows across the face",
]

export default function DocumentsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Documents", href: "/documents" },
        ]}
      />
      <main>
        <PageHeader
          eyebrow="Document requirements"
          title="What you need to apply"
          description="Getting your documents right is the single biggest factor in fast approval. Here's exactly what we need — and how to avoid the mistakes that cause delays."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Documents", href: "/documents" },
          ]}
        />

        <Section className="bg-background">
          <Container>
            <SectionHeading
              eyebrow="Checklist"
              title="Your document checklist"
              description="Have these ready before you start and your application will take just a few minutes."
              className="max-w-4xl"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {documents.map((doc) => (
                <div key={doc.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                    <doc.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{doc.title}</h3>
                    <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">{doc.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {/* [PLACEHOLDER] Confirm your full, current document list and any nationality-specific requirements */}
              Requirements can vary by nationality and visa type. We&apos;ll confirm exactly what you need during your
              application.
            </p>
          </Container>
        </Section>

        <Section className="bg-secondary">
          <Container>
            <SectionHeading
              eyebrow="Photo guide"
              title="Passport photo requirements"
              description="A non-compliant photo is the most common reason for delays. Use this guide to get it right the first time."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-success" aria-hidden="true" /> Do
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {photoDo.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
                  <XCircle className="h-5 w-5 text-danger" aria-hidden="true" /> Don&apos;t
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {photoDont.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <CtaBand
          title="Documents ready? Let's begin"
          description="Upload your documents securely and our team will review everything before submission."
        />
      </main>
    </>
  )
}
