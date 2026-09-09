"use client"

import { DocUpload } from "@/components/apply/doc-upload"
import {
  requiredDocsFor,
  type Applicant,
  type ApplicantDocs,
  type ApplicationState,
  type DocKey,
  type UploadedDoc,
} from "@/lib/application"

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

  function toggleDefer(id: string, key: DocKey, defer: boolean) {
    update({
      applicants: state.applicants.map((a) =>
        a.id === id
          ? {
              ...a,
              deferredDocs: defer
                ? [...a.deferredDocs.filter((k) => k !== key), key]
                : a.deferredDocs.filter((k) => k !== key),
            }
          : a,
      ),
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
        The list below is tailored to each traveller based on their age and reason for visit. Clear photos or
        PDFs are both fine.
      </p>

      <div className="mt-6 flex flex-col gap-6">
        {state.applicants.map((applicant, index) => {
          const required = requiredDocsFor(applicant)
          return (
            <div key={applicant.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold text-foreground">
                  {displayName(applicant, index)}
                  <span className="ml-2 text-xs font-normal capitalize text-muted-foreground">
                    ({applicant.type === "minor" ? "child / minor" : "adult"})
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {required.length} document{required.length === 1 ? "" : "s"} required
                  {applicant.reasonForVisit ? ` · ${applicant.reasonForVisit}` : ""}
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {required.map((req) => (
                  <DocUpload
                    key={req.key}
                    label={req.label}
                    hint={req.hint}
                    required
                    doc={applicant.docs[req.key]}
                    onChange={(doc) => updateDocs(applicant.id, req.key, doc)}
                    deferred={applicant.deferredDocs.includes(req.key)}
                    onDeferChange={(v) => toggleDefer(applicant.id, req.key, v)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
