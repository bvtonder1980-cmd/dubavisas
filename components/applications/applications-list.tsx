"use client"

import { useEffect, useState } from "react"
import { ApplicationCard } from "@/components/applications/application-card"
import { getSubmittedApplications } from "@/lib/submitted-applications"
import type { ApplicationSummary } from "@/lib/application-status"

/**
 * Renders the tracker list: applications submitted from this browser (read
 * from localStorage on mount) followed by the demo sample data. Submitted
 * apps start empty on first render to match the server output, then hydrate
 * from storage in an effect — avoiding any hydration mismatch.
 */
export function ApplicationsList({
  sampleApplications,
  highlightRef,
}: {
  sampleApplications: ApplicationSummary[]
  highlightRef?: string
}) {
  const [submitted, setSubmitted] = useState<ApplicationSummary[]>([])

  useEffect(() => {
    setSubmitted(getSubmittedApplications())
  }, [])

  const applications = [...submitted, ...sampleApplications]

  if (applications.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-surface px-6 py-16 text-center">
        <p className="text-lg font-semibold text-foreground">No applications yet</p>
        <p className="mt-2 text-sm text-ink-muted">
          Once you submit an application it will appear here with live status for each traveller.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {applications.map((application) => (
        <ApplicationCard
          key={application.reference}
          application={application}
          highlight={application.reference === highlightRef}
        />
      ))}
    </div>
  )
}
