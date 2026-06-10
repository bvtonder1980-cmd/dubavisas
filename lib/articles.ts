/**
 * TRAVEL GUIDES / ARTICLES
 *
 * [PLACEHOLDER] These articles use realistic, sensible placeholder copy so the
 * structure and design are complete. Replace the `body` content (and any facts
 * like prices, fines, dates) with your own verified, official information.
 * Each `[PLACEHOLDER]` note marks something you may want to confirm.
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

export const articles: Article[] = [
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
    body: `South African passport holders do require a visa to enter the United Arab Emirates for tourism or transit. Unlike some nationalities that receive a visa on arrival, South Africans must arrange their UAE visa before they travel.

## Why South Africans need a pre-arranged visa
The UAE grants visa-on-arrival access to a specific list of nationalities. South Africa is not currently on that list, which means a tourist or transit visa must be approved before boarding your flight. [PLACEHOLDER: confirm current visa-on-arrival policy at time of publishing.]

## Which visa should you choose?
The right visa depends on how long you plan to stay and whether you need to enter the country more than once:

- 96 Hour Transit Visa — for short layovers and stopovers
- 14 or 30 Day Single Entry — for holidays and short visits
- 60 Day Single Entry — for longer stays
- Multiple Entry visas — if you plan to leave and re-enter the UAE

## How to apply
You can complete the entire process online. You submit your passport details and documents, we process the application with the relevant authorities, and your approved visa is emailed to you. [PLACEHOLDER: insert your exact application steps and processing SLA.]

## Documents you'll need
- A passport valid for at least 6 months
- A clear colour passport photo
- A copy of your return or onward ticket

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
    body: `A long layover in Dubai doesn't have to mean hours stuck in the terminal. With a transit visa, you can step out and experience the city before your next flight.

## Do you need a transit visa?
If you want to leave the airport during your layover, you'll typically need a transit or short-stay visa. A 96 Hour Transit Visa is designed exactly for this. [PLACEHOLDER: confirm minimum layover time and eligibility.]

## What you can do in a few hours
- Visit the Burj Khalifa and Dubai Mall
- Stroll along Dubai Marina or JBR beach
- Experience a desert safari (for longer layovers)
- Enjoy a meal with a skyline view

## Practical tips
- Factor in airport transfer and security time
- Keep your visa and onward ticket handy
- Watch the clock — don't cut it too fine before your connecting flight

A transit visa is a simple way to turn dead time into a mini adventure. Apply online before you travel and make your layover count.`,
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
