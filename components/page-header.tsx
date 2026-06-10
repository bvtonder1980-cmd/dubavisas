import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Container, Eyebrow } from "@/components/ui/layout"

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: { name: string; href?: string }[]
}) {
  return (
    <section className="border-b border-border bg-surface-muted/50 pb-14 pt-10 sm:pt-14">
      <Container>
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.name} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="h-3.5 w-3.5 text-ink-muted/60" /> : null}
                  {i === breadcrumbs.length - 1 || !crumb.href ? (
                    <span className="font-medium text-ink">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="transition-colors hover:text-ink">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="flex max-w-3xl flex-col gap-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">{description}</p>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
