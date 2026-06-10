import type { CSSProperties, ReactNode } from "react"

export function Section({
  children,
  className,
  id,
  style,
}: {
  children: ReactNode
  className?: string
  id?: string
  style?: CSSProperties
}) {
  return (
    <section id={id} style={style} className={`py-16 sm:py-20 lg:py-24 ${className ?? ""}`}>
      {children}
    </section>
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className ?? ""}`}>
      {children}
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  className?: string
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start"
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className ?? ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
