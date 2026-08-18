"use client"

import { DocUpload } from "@/components/apply/doc-upload"
import type { Applicant, ApplicantDocs, ApplicationState, UploadedDoc } from "@/lib/application"

export function StepDocuments({
  state,
  update,
}: {
  state: ApplicationState
  update: (patch: Partial<ApplicationState>) => void
}) {
  function updateDocs(id: string, key: keyof ApplicantDocs, doc: UploadedDoc | undefined) {
    update({
      applicants: state.applicants.map((a) =>
        a.id === id ? { ...a, docs: { ...a.docs, [key]: doc } } : a,
      ) as Applicant[],
    })
  }

  function displayName(a: Applicant, index: number) {
    const full = `${a.givenNames} ${a.surname}`.trim()
    return full || `Applicant ${index + 1}`
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">Upload documents</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        Clear photos or PDFs are fine. Each document has specific requirements — see our travel guide if
        you&apos;re unsure. Minors also need an unabridged birth certificate.
      </p>

      <div className="mt-6 flex flex-col gap-6">
        {state.applicants.map((applicant, index) => (
          <div key={applicant.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">
              {displayName(applicant, index)}
              <span className="ml-2 text-xs font-normal capitalize text-muted-foreground">
                ({applicant.type === "minor" ? "child / minor" : "adult"})
              </span>
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <DocUpload
                label="Passport photo page"
                hint="Colour scan or photo of the main passport page."
                required
                doc={applicant.docs.passportScan}
                onChange={(doc) => updateDocs(applicant.id, "passportScan", doc)}
              />
              <DocUpload
                label="Passport-style photo"
                hint="Recent colour photo on a plain background."
                required
                doc={applicant.docs.passportPhoto}
                onChange={(doc) => updateDocs(applicant.id, "passportPhoto", doc)}
              />
              <DocUpload
                label="Return / onward ticket"
                hint="Flight booking showing you leaving the UAE."
                doc={applicant.docs.returnTicket}
                onChange={(doc) => updateDocs(applicant.id, "returnTicket", doc)}
              />
              <DocUpload
                label="Proof of accommodation"
                hint="Hotel booking or host details for your stay."
                doc={applicant.docs.accommodation}
                onChange={(doc) => updateDocs(applicant.id, "accommodation", doc)}
              />
              {applicant.type === "minor" ? (
                <DocUpload
                  label="Unabridged birth certificate"
                  hint="Required for all minors travelling to the UAE."
                  required
                  doc={applicant.docs.birthCertificate}
                  onChange={(doc) => updateDocs(applicant.id, "birthCertificate", doc)}
                  className="sm:col-span-2"
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
