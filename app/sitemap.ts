import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { articles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/visa-types", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/documents", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/articles", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/track", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cancellation", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes]
}
