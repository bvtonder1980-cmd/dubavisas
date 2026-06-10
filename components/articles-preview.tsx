import { Section, Container, SectionHeading } from "@/components/ui/layout"
import { ButtonLink } from "@/components/ui/button"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"

export function ArticlesPreview() {
  const featured = articles.slice(0, 3)
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="Travel guides"
          title="Plan your trip with confidence"
          description="Expert guides on UAE visas, entry rules and making the most of your time in Dubai — written by our specialists."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/articles" variant="outline" size="lg">
            View all guides
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
