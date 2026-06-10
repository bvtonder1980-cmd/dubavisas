import { siteConfig } from "@/lib/site-config"

/** Renders a JSON-LD script tag. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        foundingDate: String(siteConfig.stats.yearFounded),
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.contact.addressLine,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.stats.trustpilotRating,
          reviewCount: siteConfig.stats.trustpilotReviews.replace(/\D/g, ""),
        },
      }}
    />
  )
}

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  price,
  currency = "USD",
}: {
  name: string
  description: string
  price: string
  currency?: string
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        provider: { "@type": "Organization", name: siteConfig.name },
        description,
        areaServed: "AE",
        offers: {
          "@type": "Offer",
          price: price.replace(/[^\d.]/g, ""),
          priceCurrency: currency,
        },
      }}
    />
  )
}

export function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  author,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  author: string
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url: `${siteConfig.url}/articles/${slug}`,
        datePublished,
        author: { "@type": "Organization", name: author },
        publisher: { "@type": "Organization", name: siteConfig.name },
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${siteConfig.url}${item.href}`,
        })),
      }}
    />
  )
}
