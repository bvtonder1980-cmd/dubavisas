import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"

type ButtonVariant = "primary" | "dark" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none"

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-brand-foreground hover:bg-brand/90",
  dark: "bg-ink text-ink-foreground hover:bg-ink/90",
  outline: "border border-ink/25 text-ink hover:bg-ink hover:text-ink-foreground",
  ghost: "text-ink hover:bg-surface-muted",
}

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
}

function classes(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: {
  variant?: ButtonVariant
  size?: ButtonSize
} & ComponentProps<"button">) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}) {
  return (
    <Link href={href} className={classes(variant, size, className)}>
      {children}
    </Link>
  )
}
