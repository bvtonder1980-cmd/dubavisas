"use client"

import { UserPlus, Trash2, User } from "lucide-react"
import { countries } from "@/lib/countries"
import { visaPlans, currencySymbol } from "@/lib/visa-plans"
import { Field, SelectInput, TextInput } from "@/components/apply/fields"
import { PassportScanner } from "@/components/apply/passport-scanner"
import {
  makeApplicant,
  applicantPrice,
  TITLE_OPTIONS,
  REASON_OPTIONS,
  type Applicant,
  type ApplicationState,
} from "@/lib/application"
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

  /** Grow or shrink the applicant list to match the chosen traveller count. */
  function setTravellerCount(count: number) {
    const current = state.applicants
    if (count === current.length) return
    if (count < current.length) {
      update({ applicants: current.slice(0, count) })
    } else {
      const additions = Array.from({ length: count - current.length }, () =>
        makeApplicant("adult", state.prefill),
      )
      update({ applicants: [...current, ...additions] })
    }
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
            Add everyone travelling on this application. Each traveller can choose their own visa and travel
            dates. Scan a passport to fill the identity details automatically.
          </p>
        </div>
      </div>

      <div className="mt-6 max-w-xs">
        <Field
          label="How many travellers are you applying for?"
          htmlFor="traveller-count"
          error={errors.travellers}
        >
          <SelectInput
            id="traveller-count"
            ariaLabel="How many travellers are you applying for?"
            value={state.applicants.length ? String(state.applicants.length) : "-"}
            onChange={(v) => setTravellerCount(v === "-" ? 0 : Number(v))}
            invalid={Boolean(errors.travellers)}
          >
            <option value="-">Select…</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>
                {n}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {state.applicants.map((applicant, index) => {
          const err = (field: string) => errors[`${applicant.id}.${field}`]
          const isAdult = applicant.type === "adult"
          const unitPrice = applicantPrice(applicant)
          const firstName = applicant.givenNames.trim().split(/\s+/)[0]
          const displayName = firstName || `Applicant ${index + 1}`
          return (
            <div key={applicant.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <User className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {displayName}
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

              {/* Visa selection */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Visa</h3>
                <div className="mt-3">
                  <Field label="Select a visa" htmlFor={`${applicant.id}-visa`} error={err("planSlug")}>
                    <SelectInput
                      id={`${applicant.id}-visa`}
                      ariaLabel="Select a visa"
                      value={applicant.planSlug || "-"}
                      onChange={(v) => updateApplicant(applicant.id, { planSlug: v === "-" ? "" : v })}
                      invalid={Boolean(err("planSlug"))}
                    >
                      <option value="-">Select a visa…</option>
                      {visaPlans.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.title}
                        </option>
                      ))}
                    </SelectInput>
                    {applicant.planSlug ? (
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Price for this applicant: {currencySymbol}
                        {unitPrice.toLocaleString("en-ZA")} ({isAdult ? "adult" : "child"} rate)
                      </p>
                    ) : null}
                  </Field>
                </div>
              </div>

              {/* Passport scanner */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Passport details</h3>
                <div className="mt-3">
                  <PassportScanner onResult={(result) => applyScan(applicant.id, result)} />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Title" htmlFor={`${applicant.id}-title`} error={err("title")}>
                  <SelectInput
                    id={`${applicant.id}-title`}
                    ariaLabel="Title"
                    value={applicant.title || "-"}
                    onChange={(v) => updateApplicant(applicant.id, { title: v === "-" ? "" : v })}
                    invalid={Boolean(err("title"))}
                  >
                    <option value="-">Select…</option>
                    {TITLE_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </SelectInput>
                </Field>

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

                <Field label="Passport issue date" htmlFor={`${applicant.id}-issue`} error={err("passportIssueDate")}>
                  <TextInput
                    id={`${applicant.id}-issue`}
                    type="date"
                    value={applicant.passportIssueDate}
                    onChange={(v) => updateApplicant(applicant.id, { passportIssueDate: v })}
                    invalid={Boolean(err("passportIssueDate"))}
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
              </div>

              {/* Travel */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Travel</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-3">
                  <Field
                    label="Intended travel start date"
                    htmlFor={`${applicant.id}-travel`}
                    error={err("travelStartDate")}
                  >
                    <TextInput
                      id={`${applicant.id}-travel`}
                      type="date"
                      value={applicant.travelStartDate}
                      onChange={(v) => updateApplicant(applicant.id, { travelStartDate: v })}
                      invalid={Boolean(err("travelStartDate"))}
                    />
                  </Field>

                  <Field
                    label="Arrival date in the UAE"
                    htmlFor={`${applicant.id}-arrival`}
                    error={err("arrivalDate")}
                  >
                    <TextInput
                      id={`${applicant.id}-arrival`}
                      type="date"
                      value={applicant.arrivalDate}
                      onChange={(v) => updateApplicant(applicant.id, { arrivalDate: v })}
                      invalid={Boolean(err("arrivalDate"))}
                    />
                  </Field>

                  <Field
                    label="Departure date from the UAE"
                    htmlFor={`${applicant.id}-departure`}
                    error={err("departureDate")}
                  >
                    <TextInput
                      id={`${applicant.id}-departure`}
                      type="date"
                      value={applicant.departureDate}
                      onChange={(v) => updateApplicant(applicant.id, { departureDate: v })}
                      invalid={Boolean(err("departureDate"))}
                    />
                  </Field>
                </div>
              </div>

              {/* Contact & background */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Contact &amp; background
                </h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <Field label="Reason for visit" htmlFor={`${applicant.id}-reason`} error={err("reasonForVisit")}>
                    <SelectInput
                      id={`${applicant.id}-reason`}
                      ariaLabel="Reason for visit"
                      value={applicant.reasonForVisit || "-"}
                      onChange={(v) => updateApplicant(applicant.id, { reasonForVisit: v === "-" ? "" : v })}
                      invalid={Boolean(err("reasonForVisit"))}
                    >
                      <option value="-">Select…</option>
                      {REASON_OPTIONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </SelectInput>
                  </Field>

                  {isAdult ? (
                    <Field label="Occupation" htmlFor={`${applicant.id}-occupation`} error={err("occupation")}>
                      <TextInput
                        id={`${applicant.id}-occupation`}
                        value={applicant.occupation}
                        onChange={(v) => updateApplicant(applicant.id, { occupation: v })}
                        invalid={Boolean(err("occupation"))}
                        placeholder="e.g. Accountant"
                      />
                    </Field>
                  ) : null}

                  {isAdult ? (
                    <Field label="Company name (optional)" htmlFor={`${applicant.id}-company`}>
                      <TextInput
                        id={`${applicant.id}-company`}
                        value={applicant.companyName}
                        onChange={(v) => updateApplicant(applicant.id, { companyName: v })}
                        placeholder="Employer / company"
                      />
                    </Field>
                  ) : null}

                  {isAdult ? (
                    <Field label="Work number (optional)" htmlFor={`${applicant.id}-work`}>
                      <TextInput
                        id={`${applicant.id}-work`}
                        type="tel"
                        value={applicant.workNumber}
                        onChange={(v) => updateApplicant(applicant.id, { workNumber: v })}
                        placeholder="+27 21 000 0000"
                      />
                    </Field>
                  ) : null}

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

                  <Field label="Email address" htmlFor={`${applicant.id}-email`} error={err("email")}>
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
                </div>
                {!isAdult ? (
                  <p className="mt-2 text-xs text-muted-foreground">
                    For a child, you may use a parent or guardian&apos;s contact details.
                  </p>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>

      {state.applicants.length > 0 && state.applicants.length < 20 ? (
        <button
          type="button"
          onClick={addApplicant}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand bg-transparent px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
        >
          <UserPlus className="h-4 w-4" aria-hidden="true" /> Add another applicant
        </button>
      ) : null}
    </div>
  )
}
