import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Section, Container } from "@/components/ui/layout"
import { ApplicationsList } from "@/components/applications/applications-list"
import { StatusBadge } from "@/components/applications/status-badge"
import { sampleApplications, VISA_STATUSES, STATUS_META } from "@/lib/application-status"

export const metadata: Metadata = {
  title: "My applications",
  description: "Track the status of your UAE visa applications for every traveller.",
  robots: { index: false, follow: false },
}

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>
}) {
  const { ref } = await searchParams

  return (
    <main>
      <PageHeader
        eyebrow="Application tracker"
        title="My applications"
        description="Follow every traveller's visa through each stage — from document verification to the final decision."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "My applications" },
        ]}
      />

      <Section className="bg-background pt-10 sm:pt-12 lg:pt-14">
        <Container className="flex flex-col gap-8">
          {ref ? (
            <div className="flex flex-col gap-3 rounded-3xl border border-success/40 bg-success-soft px-6 py-6 sm:flex-row sm:items-start sm:gap-4 sm:px-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  Application received
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  Thank you — your application has been captured under reference{" "}
                  <span className="font-mono font-semibold text-foreground">{ref}</span>. Our team will
                  review it and email you secure payment instructions to complete your order. You can follow
                  each traveller&apos;s progress below.
                </p>
              </div>
            </div>
          ) : null}
          <ApplicationsList sampleApplications={sampleApplications} highlightRef={ref} />

          {/* Status legend */}
          <div className="rounded-3xl border border-border bg-surface-muted/40 px-6 py-6 sm:px-8">
            <h2 className="font-serif text-lg font-semibold text-foreground">What the statuses mean</h2>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {VISA_STATUSES.map((status) => (
                <li key={status} className="flex items-center gap-3">
                  <StatusBadge status={status} />
                  <span className="text-sm text-ink-muted">{STATUS_META[status].description}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </main>
  )
}
