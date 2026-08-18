"use client"

import type { ReactNode } from "react"

export const fieldClass =
  "h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 disabled:opacity-60"

export const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-muted"

export function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string
  htmlFor?: string
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs font-medium text-danger">{error}</p> : null}
    </div>
  )
}

export function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  invalid,
}: {
  id?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  autoComplete?: string
  invalid?: boolean
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      autoComplete={autoComplete}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${fieldClass} ${invalid ? "border-danger focus:border-danger focus:ring-danger/30" : ""}`}
    />
  )
}

export function SelectInput({
  id,
  value,
  onChange,
  children,
  invalid,
  ariaLabel,
}: {
  id?: string
  value: string
  onChange: (value: string) => void
  children: ReactNode
  invalid?: boolean
  ariaLabel?: string
}) {
  return (
    <select
      id={id}
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${fieldClass} ${invalid ? "border-danger focus:border-danger focus:ring-danger/30" : ""}`}
    >
      {children}
    </select>
  )
}
