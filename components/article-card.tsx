import Image from "next/image"
import Link from "next/link"
import { type Article } from "@/lib/articles"

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[4px] border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/articles/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">{article.category}</span>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground">
          <Link href={`/articles/${article.slug}`} className="transition-colors hover:text-accent">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={article.datePublished}>
            {new Date(article.datePublished).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{article.readingMinutes} min read</span>
        </div>
      </div>
    </article>
  )
}
