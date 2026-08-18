"use client"

import { countries } from "@/lib/countries"
import { Field, SelectInput, TextInput } from "@/components/apply/fields"
import type { ApplicationState } from "@/lib/application"

export function StepTrip({
  state,
  update,
  errors,
}: {
  state: ApplicationState
  update: (patch: Partial<ApplicationState>) => void
  errors: Record<string, string>
}) {
  function updateTrip(patch: Partial<ApplicationState["trip"]>) {
    update({ trip: { ...state.trip, ...patch } })
  }

  const today = new Date().toISOString().slice(0, 10)

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">Trip details</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        Tell us who is travelling and when. We&apos;ve carried over what you told us earlier.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Country of citizenship" htmlFor="citizenship" error={errors.citizenship}>
          <SelectInput
            id="citizenship"
            ariaLabel="Country of citizenship"
            value={state.trip.citizenship || "-"}
            onChange={(v) => updateTrip({ citizenship: v })}
            invalid={Boolean(errors.citizenship)}
          >
            {countries.map((c, i) => (
              <option key={`cit-${i}-${c.code}`} value={c.code}>
                {c.name}
              </option>
            ))}
          </SelectInput>
        </Field>

        <Field label="Country of residence" htmlFor="residence" error={errors.residence}>
          <SelectInput
            id="residence"
            ariaLabel="Country of residence"
            value={state.trip.residence || "-"}
            onChange={(v) => updateTrip({ residence: v })}
            invalid={Boolean(errors.residence)}
          >
            {countries.map((c, i) => (
              <option key={`res-${i}-${c.code}`} value={c.code}>
                {c.name}
              </option>
            ))}
          </SelectInput>
        </Field>

        <Field
          label="Intended arrival date"
          htmlFor="arrival"
          error={errors.arrivalDate}
          className="sm:col-span-2"
        >
          <TextInput
            id="arrival"
            type="date"
            value={state.trip.arrivalDate}
            onChange={(v) => updateTrip({ arrivalDate: v })}
            invalid={Boolean(errors.arrivalDate)}
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            We recommend applying at least two weeks before your arrival date. Today is {today}.
          </p>
        </Field>
      </div>
    </div>
  )
}
