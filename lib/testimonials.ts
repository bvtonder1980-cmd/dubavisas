/**
 * TESTIMONIALS — [PLACEHOLDER]
 * Replace these sample reviews with your real, verifiable customer reviews
 * (e.g. exported from Trustpilot/Google). Keeping real review text on-page
 * helps AI search engines quote and attribute your reputation.
 */
export type Testimonial = {
  name: string
  location: string
  rating: number
  date: string
  title: string
  body: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Lerato M.",
    location: "Johannesburg, SA",
    rating: 5,
    date: "2026-02-14",
    title: "Visa approved in 2 days",
    body: "I was nervous about applying online but the team made it effortless. My 30-day visa came through in two days and they answered every WhatsApp message within minutes.",
  },
  {
    name: "James W.",
    location: "Cape Town, SA",
    rating: 5,
    date: "2026-01-28",
    title: "Saved our family holiday",
    body: "We needed visas for two adults and two kids on short notice. They handled the children's birth certificate requirements perfectly and everything was approved before we flew.",
  },
  {
    name: "Priya N.",
    location: "Durban, SA",
    rating: 5,
    date: "2026-01-09",
    title: "Professional and quick",
    body: "They spotted that my passport photo wouldn't meet the new requirements and sorted it before submission. That attention to detail is why I'd recommend them to anyone.",
  },
  {
    name: "Thabo K.",
    location: "Pretoria, SA",
    rating: 5,
    date: "2025-12-20",
    title: "Multiple entry was the right call",
    body: "I travel to Dubai for business often, so the 60-day multiple entry visa was perfect. The advice on which visa to choose was spot on and saved me money.",
  },
]

// [PLACEHOLDER] Replace with your real aggregate rating and review count
export const reviewSummary = {
  rating: 4.9,
  count: 1280,
  source: "Trustpilot",
}
