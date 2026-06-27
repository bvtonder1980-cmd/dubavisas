/**
 * TESTIMONIALS — real, verifiable reviews from Trustpilot.
 * Source: https://uk.trustpilot.com/review/dubaivisa.co.za
 * These are genuine customer reviews kept verbatim so AI search engines can
 * quote and attribute the company's real reputation.
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
    name: "Cheryl Singleton",
    location: "South Africa",
    rating: 5,
    date: "2025-07-16",
    title: "What service - EXCELLENT!",
    body: "Josh and Tina are amazing! I had an issue trying to apply for a Dubai Visa and I spoke to them on Monday. On the Tuesday evening, after submitting my forms and payment, Josh sent me my Dubai Visa. One Day! I am truly so pleasantly surprised, and very grateful for their assistance.",
  },
  {
    name: "Berger Nealia",
    location: "South Africa",
    rating: 5,
    date: "2025-07-30",
    title: "Genuine Service",
    body: "I received my fourth or fifth Dubai Visa from Tina and Josh yesterday. It's so nice dealing with actual humans, and Tina and Josh provide a personal experience with all the help you need. They have so much patience. I would highly recommend Tina and Josh.",
  },
  {
    name: "Ricky Joseph",
    location: "South Africa",
    rating: 5,
    date: "2025-06-09",
    title: "Awesome service from Josh and Tina",
    body: "Awesome service from Josh and Tina. They actually answer their phones. Reply very quick to emails. Got mine and my wife's eVISA in 2 working days. Appreciate the great service.",
  },
  {
    name: "Bevan Rabie",
    location: "South Africa",
    rating: 5,
    date: "2025-03-30",
    title: "Professional, Efficient, and Trustworthy!",
    body: "The service was excellent — Tina and Josh were incredibly helpful and efficient throughout the process. The turnaround time for our visas was impressively quick, making the experience stress-free. Will definitely use this service again!",
  },
]

// Aggregate figures from Trustpilot (https://uk.trustpilot.com/review/dubaivisa.co.za)
export const reviewSummary = {
  rating: 5.0,
  count: 337,
  source: "Trustpilot",
}
