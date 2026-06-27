/**
 * CENTRAL SITE CONFIG — single source of truth for business details.
 *
 * [PLACEHOLDER] Replace the values below with your real business data
 * (contact details, stats, registration number, etc.) when ready.
 */

export const siteConfig = {
  name: "Dubai Visas Online",
  // [PLACEHOLDER] Set your real production domain
  url: "https://dubaivisasonline.com",
  description:
    "Apply online for your UAE tourist or transit visa in minutes. Fly any airline, minimal documents, fast processing and expert support since 2018.",

  // [PLACEHOLDER] Replace with your real contact details
  contact: {
    email: "support@dubaivisasonline.com",
    phone: "+27 00 000 0000",
    whatsapp: "+27000000000",
    addressLine: "Cape Town, South Africa",
  },

  // [PLACEHOLDER] Confirm / replace with your real numbers
  stats: {
    yearFounded: 2018,
    visasProcessed: "50,000+",
    approvalRate: "99%",
    avgProcessing: "24–72 hours",
    trustpilotRating: "4.8",
    trustpilotReviews: "350+",
  },

  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const

export const mainNav: { label: string; href: string }[] = [
  { label: "Apply", href: "/#apply" },
  { label: "Visa Types", href: "/visa-types" },
  { label: "Documents", href: "/documents" },
  { label: "Pricing", href: "/#prices" },
  { label: "FAQ", href: "/faq" },
  { label: "Travel Guides", href: "/articles" },
  { label: "About", href: "/about" },
]

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Visas",
    links: [
      { label: "Apply Now", href: "/#apply" },
      { label: "Visa Types", href: "/visa-types" },
      { label: "Pricing", href: "/#prices" },
      { label: "Document Requirements", href: "/documents" },
      { label: "Track Application", href: "/track" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Travel Guides", href: "/articles" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cancellation Policy", href: "/cancellation" },
    ],
  },
]
