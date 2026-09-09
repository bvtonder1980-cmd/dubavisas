import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Section, Container } from "@/components/ui/layout"
import { ApplicationSummaryCard } from "@/components/status/application-summary-card"
import {
  APPLICATION_STATUSES,
  getTrackedApplications,
  statusStyle,
} from "@/lib/application-status"

export const metadata: Metadata = {
  title: "Track your application",
  description: "Follow the progress of your UAE visa application for every traveller.",
  robots: { index: false, follow: false },
}

export default function StatusPage() {
  const applications = getTrackedApplications()

  return (
    <main>
      <PageHeader
        eyebrow="Application tracking"
        title="Track your application"
        description="Follow every traveller's visa through each stage — from document review to final decision. Each application is summarised below."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Track application" }]}
      />

      <Section className="bg-background pt-10 sm:pt-12 lg:pt-14">
        <Container>
          {applications.length > 0 ? (
            <div className="flex flex-col gap-8">
              {applications.map((application) => (
                <ApplicationSummaryCard key={application.reference} application={application} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-border bg-card p-10 text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">No applications yet</h2>
              <p className="mx-auto mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Once you submit an application it will appear here so you can track its progress.
              </p>
              <Link
                href="/apply"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Start an application
              </Link>
            </div>
          )}

          {/* Status legend */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-foreground">What each status means</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Your application moves through these stages. We&apos;ll email you whenever a status changes.
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {APPLICATION_STATUSES.map((status) => {
                const style = statusStyle(status)
                const Icon = style.icon
                return (
                  <li key={status} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${style.badge}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{status}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{style.meaning}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Container>
      </Section>
    </main>
  )
}
