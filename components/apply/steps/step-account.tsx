"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2, LogIn, UserPlus } from "lucide-react"
import { Field, TextInput } from "@/components/apply/fields"
import { registerAccount, loginAccount } from "@/lib/auth"
import type { ApplicationState } from "@/lib/application"

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function StepAccount({
  state,
  update,
  initialMode = "register",
  onContinue,
}: {
  state: ApplicationState
  update: (patch: Partial<ApplicationState>) => void
  initialMode?: "register" | "login"
  onContinue: () => void
}) {
  const [mode, setMode] = useState<"register" | "login">(initialMode)
  const [fullName, setFullName] = useState(state.account.fullName)
  const [email, setEmail] = useState(state.account.email)
  const [phone, setPhone] = useState(state.account.phone)
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string>()
  const [busy, setBusy] = useState(false)

  // Already signed in — show a confirmation and let them continue.
  if (state.account.authenticated) {
    return (
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Your account</h2>
        <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {state.account.fullName ? `Signed in as ${state.account.fullName}` : "You're signed in"}
              </p>
              <p className="text-sm text-muted-foreground">{state.account.email}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              update({ account: { authenticated: false, email: "", fullName: "", phone: "" } })
            }
            className="text-sm font-medium text-ink-muted underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Sign out
          </button>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onContinue}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  }

  function validate(): boolean {
    const next: Record<string, string> = {}
    if (!isValidEmail(email)) next.email = "Enter a valid email"
    if (!password) next.password = "Required"
    if (mode === "register") {
      if (!fullName.trim()) next.fullName = "Required"
      if (!phone.trim()) next.phone = "Required"
      if (password && password.length < 8) next.password = "Use at least 8 characters"
      if (confirm !== password) next.confirm = "Passwords do not match"
    }
    if (!acceptedTerms) next.terms = "You must accept the Terms of Use and Disclaimer to continue."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function submit() {
    setFormError(undefined)
    if (!validate()) return
    setBusy(true)
    try {
      const result =
        mode === "register"
          ? await registerAccount({ fullName, email, phone, password })
          : await loginAccount({ email, password })

      if (result.ok) {
        update({ account: { authenticated: true, ...result.user } })
        onContinue()
      } else {
        setFormError(result.error)
      }
    } catch {
      setFormError("Something went wrong. Please try again.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        {mode === "register" ? "Create your account" : "Welcome back"}
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {mode === "register"
          ? "Register a profile so you can track this application and reuse your details next time."
          : "Log in to continue your application as a returning customer."}
      </p>

      {/* Mode toggle */}
      <div className="mt-6 inline-flex rounded-full border border-border bg-secondary/50 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("register")
            setErrors({})
            setFormError(undefined)
          }}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            mode === "register" ? "bg-brand text-brand-foreground" : "text-ink-muted hover:text-foreground"
          }`}
        >
          <UserPlus className="h-4 w-4" aria-hidden="true" /> Register
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("login")
            setErrors({})
            setFormError(undefined)
          }}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            mode === "login" ? "bg-brand text-brand-foreground" : "text-ink-muted hover:text-foreground"
          }`}
        >
          <LogIn className="h-4 w-4" aria-hidden="true" /> Log in
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {mode === "register" ? (
          <Field label="Full name" htmlFor="acc-name" error={errors.fullName} className="sm:col-span-2">
            <TextInput
              id="acc-name"
              value={fullName}
              onChange={setFullName}
              autoComplete="name"
              placeholder="e.g. John Smith"
              invalid={Boolean(errors.fullName)}
            />
          </Field>
        ) : null}

        <Field
          label="Email address"
          htmlFor="acc-email"
          error={errors.email}
          className={mode === "login" ? "sm:col-span-2" : undefined}
        >
          <TextInput
            id="acc-email"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            placeholder="you@example.com"
            invalid={Boolean(errors.email)}
          />
        </Field>

        {mode === "register" ? (
          <Field label="Phone number" htmlFor="acc-phone" error={errors.phone}>
            <TextInput
              id="acc-phone"
              type="tel"
              value={phone}
              onChange={setPhone}
              autoComplete="tel"
              placeholder="+27 72 545 0868"
              invalid={Boolean(errors.phone)}
            />
          </Field>
        ) : null}

        <Field
          label="Password"
          htmlFor="acc-password"
          error={errors.password}
          className={mode === "login" ? "sm:col-span-2" : undefined}
        >
          <TextInput
            id="acc-password"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete={mode === "register" ? "new-password" : "current-password"}
            placeholder={mode === "register" ? "At least 8 characters" : "Your password"}
            invalid={Boolean(errors.password)}
          />
        </Field>

        {mode === "register" ? (
          <Field label="Confirm password" htmlFor="acc-confirm" error={errors.confirm}>
            <TextInput
              id="acc-confirm"
              type="password"
              value={confirm}
              onChange={setConfirm}
              autoComplete="new-password"
              placeholder="Re-enter your password"
              invalid={Boolean(errors.confirm)}
            />
          </Field>
        ) : null}
      </div>

      <div className="mt-6">
        <label htmlFor="acc-terms" className="flex cursor-pointer items-start gap-3">
          <input
            id="acc-terms"
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => {
              setAcceptedTerms(e.target.checked)
              if (e.target.checked) setErrors((prev) => ({ ...prev, terms: "" }))
            }}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-brand focus:ring-brand/30"
          />
          <span className="text-sm leading-relaxed text-muted-foreground">
            I accept the Dubai Visas Online Terms of Use and Disclaimer.
          </span>
        </label>
        {errors.terms ? <p className="mt-1.5 text-sm font-medium text-danger">{errors.terms}</p> : null}
      </div>

      {formError ? <p className="mt-4 text-sm font-medium text-danger">{formError}</p> : null}

      <div className="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="font-medium text-brand underline underline-offset-4"
              >
                Log in
              </button>
            </>
          ) : (
            <>
              New customer?{" "}
              <button
                type="button"
                onClick={() => setMode("register")}
                className="font-medium text-brand underline underline-offset-4"
              >
                Create an account
              </button>
            </>
          )}
        </p>
        <button
          type="button"
          onClick={submit}
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90 disabled:opacity-60"
        >
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              {mode === "register" ? "Creating account…" : "Signing in…"}
            </>
          ) : (
            <>
              {mode === "register" ? "Create account" : "Log in"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
