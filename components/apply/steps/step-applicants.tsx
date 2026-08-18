"use client"

import { UserPlus, Trash2, User } from "lucide-react"
import { countries } from "@/lib/countries"
import { Field, SelectInput, TextInput } from "@/components/apply/fields"
import { PassportScanner } from "@/components/apply/passport-scanner"
import { makeApplicant, type Applicant, type ApplicationState } from "@/lib/application"
import type { MrzResult } from "@/lib/mrz"

/** Map an ICAO 3-letter nationality code to our 2-letter country list. */
function icaoToCountryGuess(icao: string): string {
  const map: Record<string, string> = {
    ZAF: "ZA",
    GBR: "GB",
    USA: "US",
    IND: "IN",
    NGA: "NG",
    KEN: "KE",
    AUS: "AU",
    CAN: "CA",
    DEU: "DE",
    FRA: "FR",
  }
  return map[icao] ?? ""
}

export function StepApplicants({
  state,
  update,
  errors,
}: {
  state: ApplicationState
  update: (patch: Partial<ApplicationState>) => void
  errors: Record<string, string>
}) {
  function updateApplicant(id: string, patch: Partial<Applicant>) {
    update({
      applicants: state.applicants.map((a) => (a.id === id ? { ...a, ...patch } : a)),
    })
  }

  function addApplicant() {
    update({ applicants: [...state.applicants, makeApplicant("adult")] })
  }

  function removeApplicant(id: string) {
    update({ applicants: state.applicants.filter((a) => a.id !== id) })
  }

  function applyScan(id: string, result: MrzResult) {
    const nationalityGuess = icaoToCountryGuess(result.nationality)
    updateApplicant(id, {
      surname: result.surname || "",
      givenNames: result.givenNames || "",
      passportNumber: result.passportNumber || "",
      dateOfBirth: result.dateOfBirth || "",
      sex: result.sex,
      passportExpiry: result.expiryDate || "",
      ...(nationalityGuess ? { nationality: nationalityGuess } : {}),
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">Applicants</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Add everyone travelling on this application. Scan each passport to fill the details automatically.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {state.applicants.map((applicant, index) => {
          const err = (field: string) => errors[`${applicant.id}.${field}`]
          return (
            <div key={applicant.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <User className="h-4 w-4" aria-hidden="true" />
                  </span>
                  Applicant {index + 1}
                </span>
                {state.applicants.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => removeApplicant(applicant.id)}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-ink-muted transition-colors hover:bg-secondary hover:text-danger"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" /> Remove
                  </button>
                ) : null}
              </div>

              {/* Adult / minor toggle */}
              <div className="mt-4 inline-flex rounded-full border border-border bg-secondary/60 p-1">
                {(["adult", "minor"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateApplicant(applicant.id, { type })}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${
                      applicant.type === type
                        ? "bg-brand text-brand-foreground"
                        : "text-ink-muted hover:text-foreground"
                    }`}
                  >
                    {type === "minor" ? "Child / minor" : "Adult"}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <PassportScanner onResult={(result) => applyScan(applicant.id, result)} />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Surname" htmlFor={`${applicant.id}-surname`} error={err("surname")}>
                  <TextInput
                    id={`${applicant.id}-surname`}
                    value={applicant.surname}
                    onChange={(v) => updateApplicant(applicant.id, { surname: v })}
                    invalid={Boolean(err("surname"))}
                    placeholder="As printed in passport"
                  />
                </Field>

                <Field label="Given names" htmlFor={`${applicant.id}-given`} error={err("givenNames")}>
                  <TextInput
                    id={`${applicant.id}-given`}
                    value={applicant.givenNames}
                    onChange={(v) => updateApplicant(applicant.id, { givenNames: v })}
                    invalid={Boolean(err("givenNames"))}
                    placeholder="As printed in passport"
                  />
                </Field>

                <Field label="Passport number" htmlFor={`${applicant.id}-passport`} error={err("passportNumber")}>
                  <TextInput
                    id={`${applicant.id}-passport`}
                    value={applicant.passportNumber}
                    onChange={(v) => updateApplicant(applicant.id, { passportNumber: v.toUpperCase() })}
                    invalid={Boolean(err("passportNumber"))}
                    placeholder="e.g. A01234567"
                  />
                </Field>

                <Field label="Nationality" htmlFor={`${applicant.id}-nat`} error={err("nationality")}>
                  <SelectInput
                    id={`${applicant.id}-nat`}
                    ariaLabel="Nationality"
                    value={applicant.nationality || "-"}
                    onChange={(v) => updateApplicant(applicant.id, { nationality: v })}
                    invalid={Boolean(err("nationality"))}
                  >
                    {countries.map((c, i) => (
                      <option key={`nat-${applicant.id}-${i}-${c.code}`} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </SelectInput>
                </Field>

                <Field label="Date of birth" htmlFor={`${applicant.id}-dob`} error={err("dateOfBirth")}>
                  <TextInput
                    id={`${applicant.id}-dob`}
                    type="date"
                    value={applicant.dateOfBirth}
                    onChange={(v) => updateApplicant(applicant.id, { dateOfBirth: v })}
                    invalid={Boolean(err("dateOfBirth"))}
                  />
                </Field>

                <Field label="Passport expiry" htmlFor={`${applicant.id}-exp`} error={err("passportExpiry")}>
                  <TextInput
                    id={`${applicant.id}-exp`}
                    type="date"
                    value={applicant.passportExpiry}
                    onChange={(v) => updateApplicant(applicant.id, { passportExpiry: v })}
                    invalid={Boolean(err("passportExpiry"))}
                  />
                </Field>

                {applicant.type === "adult" ? (
                  <>
                    <Field label="Email" htmlFor={`${applicant.id}-email`} error={err("email")}>
                      <TextInput
                        id={`${applicant.id}-email`}
                        type="email"
                        value={applicant.email}
                        onChange={(v) => updateApplicant(applicant.id, { email: v })}
                        invalid={Boolean(err("email"))}
                        placeholder="name@example.com"
                        autoComplete="email"
                      />
                    </Field>

                    <Field label="Contact number" htmlFor={`${applicant.id}-phone`} error={err("phone")}>
                      <TextInput
                        id={`${applicant.id}-phone`}
                        type="tel"
                        value={applicant.phone}
                        onChange={(v) => updateApplicant(applicant.id, { phone: v })}
                        invalid={Boolean(err("phone"))}
                        placeholder="+27 72 000 0000"
                        autoComplete="tel"
                      />
                    </Field>
                  </>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={addApplicant}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand bg-transparent px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
      >
        <UserPlus className="h-4 w-4" aria-hidden="true" /> Add another applicant
      </button>
    </div>
  )
}
