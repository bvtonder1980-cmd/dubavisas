/**
 * FAQ DATA — powers the /faq page (with FAQPage JSON-LD) and homepage preview.
 *
 * [PLACEHOLDER] Answers below are realistic but generic. Replace them with your
 * own verified policies, prices and processing times. Keep answers concise and
 * factual — this content is what AI search engines quote directly.
 */

export type FaqItem = {
  question: string
  answer: string
  category: string
  link?: { href: string; label: string }
}

export const faqs: FaqItem[] = [
  // Eligibility & requirements
  {
    category: "Eligibility & Requirements",
    question: "Do I need a visa to travel to Dubai?",
    answer:
      "South African passport holders must arrange a visit (tourism / business) or transit visa before travelling. We also assist other nationalities that require a visa prior to arrival. We can confirm the requirement for your nationality during the application.",
  },
  {
    category: "Eligibility & Requirements",
  question: "What documents do I need to apply for a Dubai visa?",
  answer:
    "You'll typically need a passport valid for at least 6 months, a clear colour passport photo meeting international standards, and a copy of your return or onward flight ticket and proof of accommodation, however there are specific requirements for each document type. Minors also need an unabridged birth certificate. For more information, read our travel guide, \"Dubai Visa Requirements - a Deep Dive\".",
    link: { href: "/articles/dubai-visa-requirements-deep-dive", label: "Read the guide: Dubai Visa Requirements - a Deep Dive" },
  },
  {
    category: "Eligibility & Requirements",
    question: "How long must my passport be valid?",
    answer:
      "Your passport must be valid for at least 6 months from your date of entry into the UAE. Applications with passports close to expiry may be rejected.",
  },
  // Processing & delivery
  {
    category: "Processing & Delivery",
    question: "How long does it take to process a Dubai visa?",
    answer:
      "Most visas are processed within 48 to 96 hours. We recommend applying at least two weeks prior to departure to allow a comfortable buffer.",
  },
  {
    category: "Processing & Delivery",
    question: "How will I receive my visa?",
    answer:
      "Once approved, your visa is emailed to you as a PDF. You can print it or keep a digital copy on your phone to present at immigration.",
  },
  {
    category: "Processing & Delivery",
    question: "Can I get a visa urgently if I'm travelling soon?",
    answer:
      "Depending on availability, we may be able to expedite your application. Please contact our team as early as possible to discuss urgent options. [PLACEHOLDER: confirm express service and fee.]",
  },
  // Visa types & validity
  {
    category: "Visa Types & Validity",
    question: "What's the difference between single and multiple entry visas?",
    answer:
      "A single entry visa allows one entry into the UAE for the duration of its validity. A multiple entry visa lets you enter and exit the country several times within the validity period — ideal for regional or business travellers.",
  },
  {
    category: "Visa Types & Validity",
    question: "When does my visa validity start?",
    answer:
      "Validity is generally counted from your date of entry into the UAE, up to the maximum stay of your visa type. [PLACEHOLDER: confirm whether validity runs from issue or entry for each visa.]",
  },
  {
    category: "Visa Types & Validity",
    question: "Can I extend my visa once I'm in the UAE?",
    answer:
      "Some visa types can be extended from within the UAE, subject to immigration rules and additional fees. [PLACEHOLDER: confirm which visas you can extend and the cost.]",
  },
  // Payments & policies
  {
    category: "Payments & Policies",
    question: "How much does a Dubai visa cost?",
    answer:
      "Prices depend on the visa type and validity. You can see current pricing for every visa on our pricing section and visa types page. Children may qualify for reduced rates. [PLACEHOLDER: confirm pricing.]",
  },
  {
    category: "Payments & Policies",
    question: "What happens if my visa application is rejected?",
    answer:
      "Rejections are rare when documents are correct, which is why we review every application before submission. Our refund and resubmission policy is set out in our terms. [PLACEHOLDER: confirm your rejection/refund policy.]",
  },
  {
    category: "Payments & Policies",
    question: "What is your refund and cancellation policy?",
    answer:
      "Our cancellation and refund terms depend on the stage of your application. Full details are available on our cancellation policy page. [PLACEHOLDER: confirm policy details.]",
  },
  {
    category: "Payments & Policies",
    question: "What is the fine for overstaying my visa?",
    answer:
      "Overstaying a UAE visa results in daily fines set by the authorities. We strongly recommend leaving before your visa expires or arranging an extension. [PLACEHOLDER: confirm current overstay fine amounts.]",
  },
]

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)))
