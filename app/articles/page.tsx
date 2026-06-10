import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ArticleCard } from "@/components/article-card"
import { CtaBand } from "@/components/cta-band"
import { Container, Section } from "@/components/ui/layout"
import { BreadcrumbSchema } from "@/components/json-ld"
import { articles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Dubai Travel & Visa Guides",
  description:
    "Expert guides on travelling to Dubai and the UAE — visa requirements, processing times, document rules, the best time to visit and layover tips.",
  alternates: { canonical: "/articles" },
}

export default function ArticlesPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/articles" },
        ]}
      />

      <PageHeader
        eyebrow="Travel & Visa Guides"
        title="Plan your trip to Dubai"
        description="Practical, up-to-date guides to help you travel to Dubai with confidence — from visa rules and documents to the best time to visit."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Guides" }]}
      />

      <Section className="bg-background">
        <Container>
          {featured ? (
            <a
              href={`/articles/${featured.slug}`}
              className="group mb-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-lg md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
                <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {featured.category}
                </span>
                <h2 className="text-balance font-serif text-2xl font-semibold text-foreground lg:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <span className="text-sm font-semibold text-accent">
                  Read guide {"->"}
                </span>
              </div>
            </a>
          ) : null}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Reading up before your trip?"
        description="Get your UAE visa sorted now so you can focus on the fun part — planning your Dubai itinerary."
      />
    </>
  )
}
