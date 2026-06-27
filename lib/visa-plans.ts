/**
 * VISA PLANS — pricing & visa type data.
 *
 * [PLACEHOLDER] Prices, processing times and validity below are sample values
 * carried over from the original site. Replace with your live, confirmed
 * pricing and SLAs. `currencySymbol` controls how prices render.
 */

export type VisaPlan = {
  slug: string
  title: string
  shortName: string
  price: string
  minorPrice: string
  validity: string
  processing: string
  entry: "single" | "multiple"
  popular?: boolean
  description: string
  bestFor: string
  highlights: string[]
}

// [PLACEHOLDER] Confirm your billing currency (e.g. "R" for ZAR, "$" for USD)
export const currencySymbol = "R"
export const currencyCode = "ZAR"

export const visaPlans: VisaPlan[] = [
  {
    slug: "14-day-single-entry",
    title: "14 Day Single Entry Visa",
    shortName: "14 Day Single",
    price: "2,499",
    minorPrice: "1,149",
    validity: "14 Days",
    processing: "48–96 hours",
    entry: "single",
    description:
      "A short tourist visa for quick getaways, business trips or visiting family and friends in the UAE.",
    bestFor: "Short trips & quick getaways",
    highlights: ["Single entry", "Stay up to 14 days", "Fly any airline", "Online application"],
  },
  {
    slug: "30-day-single-entry",
    title: "30 Day Single Entry Visa",
    shortName: "30 Day Single",
    price: "2,599",
    minorPrice: "1,149",
    validity: "30 Days",
    processing: "48–96 hours",
    entry: "single",
    popular: true,
    description:
      "Our most popular tourist visa. A full month in the UAE to explore Dubai, Abu Dhabi and beyond at a relaxed pace.",
    bestFor: "Most travellers & holidays",
    highlights: ["Single entry", "Stay up to 30 days", "Fly any airline", "Fast processing"],
  },
  {
    slug: "60-day-single-entry",
    title: "60 Day Single Entry Visa",
    shortName: "60 Day Single",
    price: "5,099",
    minorPrice: "2,299",
    validity: "60 Days",
    processing: "48–96 hours",
    entry: "single",
    description:
      "An extended tourist visa for longer holidays, family visits or extended business stays in the UAE.",
    bestFor: "Long holidays & extended stays",
    highlights: ["Single entry", "Stay up to 60 days", "Fly any airline", "Extension friendly"],
  },
  {
    slug: "30-day-multiple-entry",
    title: "30 Day Multiple Entry Visa",
    shortName: "30 Day Multiple",
    price: "4,299",
    minorPrice: "2,299",
    validity: "30 Days",
    processing: "48–96 hours",
    entry: "multiple",
    description:
      "Enter and exit the UAE as many times as you need within the validity period — perfect for regional travellers.",
    bestFor: "Regional & repeat travellers",
    highlights: ["Multiple entries", "Stay up to 30 days per visit", "Fly any airline", "Ideal for GCC hopping"],
  },
  {
    slug: "60-day-multiple-entry",
    title: "60 Day Multiple Entry Visa",
    shortName: "60 Day Multiple",
    price: "6,199",
    minorPrice: "3,199",
    validity: "60 Days",
    processing: "48–96 hours",
    entry: "multiple",
    popular: true,
    description:
      "Maximum flexibility for frequent travellers — multiple entries across a generous 60-day validity window.",
    bestFor: "Frequent business travellers",
    highlights: ["Multiple entries", "Stay up to 60 days per visit", "Fly any airline", "Best for business"],
  },
]

export const singleEntryPlans = visaPlans.filter((p) => p.entry === "single")
export const multipleEntryPlans = visaPlans.filter((p) => p.entry === "multiple")

export function getVisaPlan(slug: string) {
  return visaPlans.find((p) => p.slug === slug)
}
