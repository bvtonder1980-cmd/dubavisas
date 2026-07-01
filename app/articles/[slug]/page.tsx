import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Container, Section } from "@/components/ui/layout"
import { ArticleCard } from "@/components/article-card"
import { ArticleCta } from "@/components/article-cta"
import { ArticleSchema, BreadcrumbSchema } from "@/components/json-ld"
import { articles, getArticle } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: "Article not found" }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

// Parses inline markdown-style links [text](url) into React nodes.
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [, label, href] = match
    const isInternal = href.startsWith("/") || href.startsWith("#")
    parts.push(
      <Link
        key={`lnk-${key++}`}
        href={href}
        {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
      >
        {label}
      </Link>,
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length ? parts : text
}

function ArticleBody({ body }: { body: string }) {
  const lines = body.split("\n")
  const blocks: React.ReactNode[] = []
  let list: string[] = []
  let table: string[] = []
  let key = 0

  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={`ul-${key++}`} className="my-4 flex flex-col gap-2 pl-1">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      )
      list = []
    }
  }

  const parseRow = (row: string) =>
    row
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((cell) => cell.trim())

  const isSeparatorRow = (row: string) => /^\s*\|?[\s:|-]+\|?\s*$/.test(row) && row.includes("-")

  const flushTable = () => {
    if (!table.length) return
    const rows = table.filter((r) => !isSeparatorRow(r)).map(parseRow)
    if (rows.length) {
      const [header, ...bodyRows] = rows
      blocks.push(
        <div key={`tbl-${key++}`} className="my-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary/60">
                {header.map((cell, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-foreground">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((cells, r) => (
                <tr key={r} className="border-t border-border">
                  {cells.map((cell, c) => (
                    <td key={c} className="px-4 py-3 leading-relaxed text-muted-foreground">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
    }
    table = []
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flushList()
      flushTable()
      continue
    }
    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (line.startsWith("|")) {
      flushList()
      table.push(line)
    } else if (imageMatch) {
      flushList()
      flushTable()
      const [, alt, src] = imageMatch
      blocks.push(
        <Image
          key={`img-${key++}`}
          src={src || "/placeholder.svg"}
          alt={alt}
          width={1200}
          height={900}
          className="my-6 h-auto w-full rounded-2xl border border-border"
        />,
      )
    } else if (line.startsWith("### ")) {
      flushList()
      flushTable()
      blocks.push(
        <h3 key={`h3-${key++}`} className="mt-8 font-serif text-xl font-semibold text-foreground">
          {line.replace("### ", "")}
        </h3>,
      )
    } else if (line.startsWith("## ")) {
      flushList()
      flushTable()
      blocks.push(
        <h2 key={`h-${key++}`} className="mt-10 font-serif text-2xl font-semibold text-foreground">
          {line.replace("## ", "")}
        </h2>,
      )
    } else if (line.startsWith("- ")) {
      flushTable()
      list.push(line.replace("- ", ""))
    } else {
      flushList()
      flushTable()
      blocks.push(
        <p key={`p-${key++}`} className="my-4 leading-relaxed text-muted-foreground">
          {renderInline(line)}
        </p>,
      )
    }
  }
  flushList()
  flushTable()
  return <>{blocks}</>
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)
  const formattedDate = new Date(article.datePublished).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main>
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        slug={article.slug}
        datePublished={article.datePublished}
        author={article.author}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/articles" },
          { name: article.title, href: `/articles/${article.slug}` },
        ]}
      />

      <article>
        <header className="border-b border-border bg-secondary/40">
          <Container className="max-w-3xl py-12 sm:py-16">
            <Link href="/articles" className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
              {"<- All guides"}
            </Link>
            <span className="mt-6 inline-flex w-fit items-center rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {article.category}
            </span>
            <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{article.author}</span>
              <span aria-hidden="true">•</span>
              <time dateTime={article.datePublished}>{formattedDate}</time>
              <span aria-hidden="true">•</span>
              <span>{article.readingMinutes} min read</span>
            </div>
          </Container>
        </header>

        <Container className="max-w-3xl py-10 sm:py-12">
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="mt-8">
            <ArticleBody body={article.body} />
          </div>
          <ArticleCta />
          <p className="mt-10 rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
            This guide is for general information. Visa rules can change — confirm the latest requirements when you
            apply, or contact our team for help.
          </p>
        </Container>
      </article>

      <Section className="border-t border-border bg-background">
        <Container>
          <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">Related guides</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
