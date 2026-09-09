import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section, Container } from "@/components/ui/layout"
import { ApplicationCard } from "@/components/applications/application-card"
import { StatusBadge } from "@/components/applications/status-badge"
import { sampleApplications, VISA_STATUSES, STATUS_META } from "@/lib/application-status"

export const metadata: Metadata = {
  title: "My applications",
  description: "Track the status of your UAE visa applications for every traveller.",
  robots: { index: false, follow: false },
}

export default function ApplicationsPage() {
  const applications = sampleApplications

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
          {applications.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-surface px-6 py-16 text-center">
              <p className="text-lg font-semibold text-foreground">No applications yet</p>
              <p className="mt-2 text-sm text-ink-muted">
                Once you submit an application it will appear here with live status for each traveller.
              </p>
            </div>
          ) : (
            applications.map((application) => (
              <ApplicationCard key={application.reference} application={application} />
            ))
          )}

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
