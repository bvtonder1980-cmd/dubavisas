/**
 * TRAVEL GUIDES / ARTICLES
 *
 * [PLACEHOLDER] This file contains 20 guide "slots". The topics were chosen
 * from the questions South African travellers most commonly search for about
 * Dubai/UAE visas and travel, so the set is built for topical authority and
 * AI-search visibility.
 *
 * HOW TO EDIT:
 *   - Edit a guide here once and it updates everywhere: the /articles index,
 *     the individual /articles/[slug] page, AND the homepage "Travel guides"
 *     section (which shows the FIRST THREE guides in this list).
 *   - To feature a guide on the homepage, move it into the first three spots.
 *   - Replace each `body` with your own verified, real-world content. The
 *     `[PLACEHOLDER]` notes mark facts to confirm or sections to write.
 *
 * IMAGES:
 *   - Each guide points to an image in /public/images/articles/. Several new
 *     slots reuse existing images for now — replace with unique images per
 *     guide when ready (just drop a file in that folder and update `image`).
 *
 * Body supports a tiny markdown-ish format handled by the renderer:
 *   "## Heading"      -> section heading
 *   "- list item"     -> bullet list
 *   "" (empty line)   -> paragraph break
 */

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  author: string
  datePublished: string
  readingMinutes: number
  body: string
}

const PLACEHOLDER_BODY = `[PLACEHOLDER] Write this guide using your own real-world experience and verified, official information.

## Introduction
Open with the question this guide answers and who it's for. Speak from your first-hand experience helping South African travellers — that real expertise is exactly what makes this guide authoritative and quotable by search engines.

## Key points to cover
- The main answer, stated clearly and early
- The most common mistakes you see customers make
- Practical, step-by-step guidance
- Up-to-date facts (prices, timeframes, rules) — confirm against official UAE sources

## Helpful details
Add the specifics travellers ask you about most. Use short paragraphs and bullet lists so the content is easy to scan and easy for AI engines to extract.

## Summary
Close with a short recap and a clear next step (e.g. apply now or contact your team for advice).`

export const articles: Article[] = [
  // ── EXISTING GUIDES ─────────────────────────────────────────────
  {
    slug: "do-south-africans-need-a-visa-for-dubai",
    title: "Do South African Citizens Need a Visa for Dubai?",
    excerpt:
      "Everything South African passport holders need to know about UAE visa requirements before travelling to Dubai.",
    category: "Visa Requirements",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-01-15",
    readingMinutes: 5,
    body: `South African passport holders do require a visa to enter the United Arab Emirates. Unlike some nationalities that receive a visa on arrival, South Africans must arrange their UAE visa before they travel.

South Africans can however transit Dubai International Airport for up to 8 hours towards their onward destination, without obtaining a visa, but when your transit exceeds 8 hours, you will require a visa.

When transitting without a visa, you cannot leave the airport whilst in transit.

## Why South Africans need a pre-arranged visa
The UAE grants visa-on-arrival access to a specific list of nationalities. South Africa is not currently on that list, which means a tourist, business or transit visa must be approved before boarding your flight.

There was a recent announcement by the Ministry of Interior, that South African passport holders, who also hold a valid residence permit in their passport for either the USA, UK, EU, Singapore, Japan, South Korea, Australia, New Zealand or Canada, can obtain a visa on arrival.

It is however important to note that without a residence permit from one of these countries, South African passport holders still require a pre-arranged visa before boarding a flight.

## Which visa should you choose?
The right visa depends on how long you plan to stay and whether you need to enter the country more than once:

### Single Entry Visas

Single entry visas are sufficient if you plan to only enter the UAE once.

- 14 Day Single Entry Visa
- 30 Day Single Entry Visa
- 60 Day Single Entry Visa

### Multiple Entry Visas

Multiple entry visas are required if you plan to enter the UAE more than once.

- 30 Day Multiple Entry Visa
- 60 Day Multiple Entry Visa

## How to apply
You can complete the entire process online. You submit your passport details and documents, we process the application with the relevant authorities, and your approved visa is emailed to you.

## Documents you'll need
The precise documents you need depends on various factors, but rest assured that our experts will guide you to prepare your personalised application for the best possible chance of success.

Once approved, simply print your visa or keep a digital copy on your phone to present at immigration.`,
  },
  {
    slug: "how-long-does-a-dubai-visa-take",
    title: "How Long Does a Dubai Visa Take to Process?",
    excerpt:
      "Typical UAE visa processing times, what affects them, and how to make sure your visa is ready before you fly.",
    category: "Processing Times",
    image: "/images/articles/overstay-fines.png",
    author: "Dubai Visas Online",
    datePublished: "2026-01-20",
    readingMinutes: 4,
    body: `Most UAE tourist and transit visas are processed within 48 to 96 hours. However, several factors can affect the exact timing, so it's always best to apply well ahead of your travel date. [PLACEHOLDER: confirm your standard and express processing times.]

## Standard processing time
Under normal circumstances, applications are processed within 2 to 4 working days. We recommend applying at least one week before departure to allow a comfortable buffer.

## What can affect processing time
- Public holidays in the UAE and your country of residence
- Incomplete or unclear documents
- High demand during peak travel seasons
- Additional checks required for certain applications

## Tips for faster approval
- Submit a clear, valid passport scan
- Use a compliant passport photo
- Double-check that your name matches your passport exactly
- Apply early — don't leave it to the last minute

If you're travelling on short notice, contact our team to discuss your options. [PLACEHOLDER: mention express service availability and fee if offered.]`,
  },
  {
    slug: "dubai-visa-photo-requirements",
    title: "Dubai Visa Photo & Document Requirements (2026)",
    excerpt:
      "The UAE has strict photo and document standards. Here's exactly what you need to get your visa approved first time.",
    category: "Documents",
    image: "/images/articles/photo-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-02-01",
    readingMinutes: 6,
    body: `One of the most common reasons a UAE visa application is delayed is an incorrect photo or document. Getting these right the first time means faster approval and less stress. [PLACEHOLDER: confirm against the latest official requirements.]

## Passport photo requirements
Your photo should meet international (ICAO) standards:

- Recent colour photo taken within the last 6 months
- Plain white or light background
- Full face visible, looking straight at the camera
- Neutral expression, eyes open, mouth closed
- No hats or head coverings (except for religious purposes)
- No shadows or reflections

## Passport requirements
- Valid for at least 6 months from your date of entry
- Clear, full-colour scan of the photo page
- No glare or cut-off edges

## Additional documents
Depending on your visa type and circumstances you may also need:

- A copy of your return or onward flight ticket
- Proof of accommodation
- A birth certificate for minors travelling with you

## Common mistakes to avoid
- Blurry or low-resolution scans
- Photos with busy backgrounds
- Passports close to expiry
- Names that don't match across documents

If you're unsure, our team checks every application before submission to help avoid rejections.`,
  },
  {
    slug: "best-time-to-visit-dubai",
    title: "The Best Time to Visit Dubai",
    excerpt:
      "From cooler winter months to summer deals, here's how to choose the perfect time for your Dubai trip.",
    category: "Travel Guide",
    image: "/images/articles/best-time-to-visit.png",
    author: "Dubai Visas Online",
    datePublished: "2026-02-10",
    readingMinutes: 5,
    body: `Dubai is a year-round destination, but the experience changes dramatically with the seasons. Choosing the right time can make a big difference to your comfort and budget.

## November to March — peak season
These cooler months are the most popular time to visit. Daytime temperatures are pleasant, making it ideal for beaches, outdoor dining and desert excursions. Expect higher hotel prices and bigger crowds, especially around the festive period.

## April to May & October — shoulder season
The shoulder months offer a balance of warm weather and slightly lower prices. It's a great window if you want good conditions without peak-season crowds.

## June to September — summer
Summers are very hot, with temperatures regularly soaring. However, this is when you'll find the best hotel deals, and Dubai's world-class indoor attractions, malls and aquariums keep you cool.

## Events worth planning around
- Dubai Shopping Festival (winter)
- Major concerts and sporting events
- Ramadan, when hours and dining customs change [PLACEHOLDER: add current year dates]

Whenever you choose to go, make sure your visa is sorted well in advance so you can focus on enjoying the trip.`,
  },
  {
    slug: "dubai-layover-guide",
    title: "Making the Most of a Dubai Layover",
    excerpt:
      "Got a stopover in Dubai? Here's how a transit visa works and what you can see in just a few hours.",
    category: "Travel Guide",
    image: "/images/articles/dubai-layover.png",
    author: "Dubai Visas Online",
    datePublished: "2026-02-18",
    readingMinutes: 4,
    body: `A long layover in Dubai doesn't have to mean hours stuck in the terminal. With the right short-stay visa, you can step out and experience the city before your next flight.

## Do you need a visa to leave the airport?
If you want to leave the airport during your layover, you'll typically need a tourist or short-stay visa arranged before you travel. [PLACEHOLDER: confirm the best visa option and minimum layover time for stepping out.]

## What you can do in a few hours
- Visit the Burj Khalifa and Dubai Mall
- Stroll along Dubai Marina or JBR beach
- Experience a desert safari (for longer layovers)
- Enjoy a meal with a skyline view

## Practical tips
- Factor in airport transfer and security time
- Keep your visa and onward ticket handy
- Watch the clock — don't cut it too fine before your connecting flight

A short-stay visa is a simple way to turn dead time into a mini adventure. Apply online before you travel and make your layover count.`,
  },

  // ── NEW GUIDE SLOTS (search-informed topics) ────────────────────
  {
    slug: "dubai-visa-types-explained",
    title: "Dubai Visa Types Explained: Which One Do You Need?",
    excerpt:
      "A plain-English comparison of every UAE tourist visa — validity, entries and who each one suits best.",
    category: "Visa Requirements",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-01",
    readingMinutes: 6,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "30-day-vs-60-day-dubai-visa",
    title: "30-Day vs 60-Day Dubai Visa: Which Should You Choose?",
    excerpt:
      "How to decide between a 30-day and 60-day UAE tourist visa based on your trip length, budget and plans.",
    category: "Visa Requirements",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-04",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "single-entry-vs-multiple-entry-dubai-visa",
    title: "Single Entry vs Multiple Entry Dubai Visas",
    excerpt:
      "What's the difference, and when is a multiple-entry UAE visa worth the extra cost? A simple breakdown.",
    category: "Visa Requirements",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-07",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-visa-overstay-fines-grace-period",
    title: "Dubai Visa Overstay Fines, Grace Periods & Extensions",
    excerpt:
      "What happens if you overstay your UAE visa, how daily fines work, and how to avoid penalties at the airport.",
    category: "Visa Rules",
    image: "/images/articles/overstay-fines.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-10",
    readingMinutes: 6,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "how-to-extend-dubai-tourist-visa",
    title: "How to Extend Your Dubai Tourist Visa",
    excerpt:
      "Your options for extending a UAE tourist visa without leaving the country, plus what it costs and when to apply.",
    category: "Visa Rules",
    image: "/images/articles/overstay-fines.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-13",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-visas-for-children-and-families",
    title: "Dubai Visas for Children & Families",
    excerpt:
      "Travelling to Dubai with kids? Here's how visas work for minors, including the documents families often miss.",
    category: "Visa Requirements",
    image: "/images/articles/dubai-layover.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-16",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-visa-cost-price-breakdown",
    title: "Dubai Visa Cost: A Complete Price Breakdown",
    excerpt:
      "Exactly what you pay for a UAE tourist visa — government fees, service fees and how to avoid hidden charges.",
    category: "Pricing",
    image: "/images/articles/overstay-fines.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-19",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-visa-application-step-by-step",
    title: "Dubai Visa for South Africans: Step-by-Step Application Guide",
    excerpt:
      "A complete walkthrough of applying for a Dubai visa from South Africa, from documents to approval.",
    category: "Visa Requirements",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-22",
    readingMinutes: 7,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "documents-needed-for-dubai-visa",
    title: "What Documents Do You Need for a Dubai Visa?",
    excerpt:
      "A simple checklist of everything you need to apply for a UAE tourist visa and get approved first time.",
    category: "Documents",
    image: "/images/articles/photo-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-25",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-visa-on-arrival-myths",
    title: "Dubai Visa on Arrival: Myths vs Reality for South Africans",
    excerpt:
      "Can South Africans get a Dubai visa on arrival? We clear up the confusion and explain what's actually required.",
    category: "Visa Requirements",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-28",
    readingMinutes: 4,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "arriving-at-dubai-airport",
    title: "Arriving at Dubai Airport: Immigration & What to Expect",
    excerpt:
      "From landing to baggage claim — how UAE immigration works and how to breeze through with your e-visa.",
    category: "Travel Guide",
    image: "/images/articles/dubai-layover.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-31",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-dress-code-and-customs",
    title: "Dubai Dress Code & Local Customs Every Visitor Should Know",
    excerpt:
      "Respect local culture and avoid awkward moments with this practical guide to dressing and behaving in Dubai.",
    category: "Travel Guide",
    image: "/images/articles/best-time-to-visit.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-03",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-money-currency-getting-around",
    title: "Dubai on a Budget: Money, Currency & Getting Around",
    excerpt:
      "Currency, tipping, the Dubai Metro, taxis and apps — everything you need to manage money and travel smart.",
    category: "Travel Guide",
    image: "/images/articles/best-time-to-visit.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-06",
    readingMinutes: 6,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "things-to-do-in-dubai-first-time",
    title: "Top Things to Do in Dubai for First-Time Visitors",
    excerpt:
      "The must-see attractions and experiences for your first trip to Dubai, from the Burj Khalifa to desert safaris.",
    category: "Travel Guide",
    image: "/images/articles/best-time-to-visit.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-09",
    readingMinutes: 7,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-during-ramadan-and-holidays",
    title: "Visiting Dubai During Ramadan & Public Holidays",
    excerpt:
      "What changes during Ramadan and UAE public holidays, and how it affects your trip, dining and visa timing.",
    category: "Travel Guide",
    image: "/images/articles/best-time-to-visit.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-12",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-visa-rejection-reasons",
    title: "Why Dubai Visas Get Rejected — and How to Avoid It",
    excerpt:
      "The most common reasons UAE visa applications are refused, and the simple steps that prevent delays.",
    category: "Visa Rules",
    image: "/images/articles/photo-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-15",
    readingMinutes: 5,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-passport-validity-rules",
    title: "Passport Validity Rules for Travelling to Dubai",
    excerpt:
      "How much passport validity you need for the UAE, and why a near-expiry passport can stop you boarding.",
    category: "Documents",
    image: "/images/articles/visa-requirements.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-18",
    readingMinutes: 4,
    body: PLACEHOLDER_BODY,
  },
  {
    slug: "dubai-travel-insurance-guide",
    title: "Do You Need Travel Insurance for Dubai?",
    excerpt:
      "Whether travel and medical insurance is required for the UAE, and what cover South African travellers should look for.",
    category: "Travel Guide",
    image: "/images/articles/dubai-layover.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-21",
    readingMinutes: 4,
    body: PLACEHOLDER_BODY,
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
