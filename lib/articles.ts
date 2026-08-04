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

const PLACEHOLDER_BODY = `## Introduction
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

There was a recent announcement by the Ministry of Interior that South African passport holders who also hold a valid residence permit in their passport for either the USA, UK, EU, Singapore, Japan, South Korea, Australia, New Zealand or Canada, can obtain a visa on arrival.

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
You can complete the entire process online. You submit your passport details and required documents, which our team of experts will review and assist you to prepare a personalised application based on your unique circumstances and reason for travel.

Once your application is compiled, we process the application with the relevant authorities, and your approved visa is emailed to you.

## Documents you'll need
The precise documents you need depends on various factors, but rest assured that our experts will guide you to prepare your personalised application for the best possible chance of success.

Once approved, simply print a copy of your visa to present at the boarding gate and keep a digital copy on your phone as a backup.`,
  },
  {
    slug: "how-long-does-a-dubai-visa-take",
    title: "How Long Does a Dubai Visa Take to Process?",
    excerpt:
      "Typical UAE visa processing times, what affects them, and how to make sure your visa is ready before you fly.",
    category: "Processing Times",
    image: "/images/articles/processing-time.png",
    author: "Dubai Visas Online",
    datePublished: "2026-01-20",
    readingMinutes: 4,
    body: `Most UAE visit visas are processed within 24 to 96 hours. However, several factors can affect the exact timing, so it's always best to apply well ahead of your travel date.

## Standard processing time
Under normal circumstances, applications are processed within 24 to 96 hours. We recommend applying at least three weeks before departure to allow a comfortable buffer.

If you want to apply really early, submit your application within two months of your intended travel date, as we can only submit your application to the relevant authorities if your travel date is in the next two months.

## Peak season processing time
The UAE peak travel season starts in November through to January, with the last two weeks of November and the first two weeks of December being the busiest time.

During peak times, processing times can be drastically affected and standard processing times can increase from days to weeks.

If you're planning a trip to the UAE during this time, we advise that you try to apply at least 45 days in advance.

## What can affect processing time
- Public holidays in the UAE and your country of residence
- Incomplete or unclear documents
- High demand during peak travel seasons
- Additional checks required for certain applications

## Tips for faster approval
- Submit clear and valid documents.
- Use a compliant passport photo (for more details on photo requirements, [click here](/articles/dubai-visa-photo-requirements))
- Double-check that your documents meet the standards as advised in our checklists
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
    body: `One of the most common reasons a UAE visa application is delayed is an incorrect photo or document. Getting these right the first time means faster approval and less stress.

## The UAE's strict photo requirements explained
The United Arab Emirates has introduced stricter photo verification requirements for all visa applications submitted since June 2026, making ICAO (International Civil Aviation Organization) compliant passport photographs an essential part of the application process. Travellers applying for a UAE visa online therefore need to submit high-quality, professionally captured photographs that meet international biometric standards.

The updated requirements follow guidelines established by the International Civil Aviation Organization (ICAO), which sets global standards for passports, travel documents, and facial recognition systems. These standards ensure that photographs can be accurately processed by the advanced biometric and immigration technologies increasingly used across UAE airports and border control systems.

According to ICAO guidelines, visa photographs must feature a clear, full-face image with a neutral expression, proper lighting, natural skin tones, and a plain white or light-coloured background. Images containing shadows, filters, excessive editing, poor cropping, blurred focus, or distracting backgrounds may lead to delays, requests for resubmission, or visa rejection.

Dubai immigration authorities now rely heavily on facial recognition and biometric verification technologies to compare passport photographs, visa application images, and airport identity scans. Non-compliant photographs can result in identity mismatches, causing unnecessary complications during visa processing or upon arrival in the UAE.

To avoid delays and improve the likelihood of a successful visa application, applicants are strongly advised to submit high-resolution, ICAO-standard photographs, preferably taken by a professional with experience in international passport and visa requirements.

## Passport photo requirements
Your photo should meet international (ICAO) standards:

- Recent colour photo taken within the last 6 months
- Plain white or light background
- Full face visible, looking straight at the camera
- Neutral expression, eyes open, mouth closed
- No hats or head coverings (except for religious purposes)
- No shadows or reflections

## Top 15 Tips and requirements for taking an ICAO compliant photo for your visa application
To reduce the risk of visa delays, resubmission requests, or application rejection, applicants should ensure their passport photographs comply with ICAO biometric standards by following these recommendations:

- Face the camera directly — position your head and shoulders straight and centred, looking directly at the camera at eye level.
- Maintain a neutral facial expression — keep your mouth closed, avoid smiling or showing teeth, and maintain a natural, neutral expression.
- Use a plain white background — the background must be plain white or light-coloured, with no patterns, textures, shadows, wall decorations, or visible objects.
- Ensure hair does not obstruct facial features — hair should not cover the forehead, eyes, or ears. All facial features must be clearly visible.
- Avoid all shadows — there should be no shadows on the face, behind the head, or anywhere on the background.
- Use balanced, even lighting — the photograph should be evenly illuminated, without appearing too dark, too bright, or overexposed.
- Maintain natural skin tones — do not use beauty filters, skin smoothing effects, or excessive photo editing. Skin tone and facial features must appear natural.
- Ensure high resolution and sharp focus — the image must be clear, sharp, and free from blur, pixelation, scan lines, creases, or printing defects.
- Position the face correctly within the frame — the face should occupy approximately 70% to 80% of the image area, with the head centred and fully visible.
- Keep eyes fully visible and open — eyes must be open, clearly visible, and not obstructed by hair, shadows, or reflections.
- Follow glasses requirements carefully — if prescription glasses are worn, lenses must be clear, free of glare or reflections, and frames should not obscure the eyes. Sunglasses and tinted lenses are not acceptable. Alternatively, remove glasses for the photo.
- Ensure head coverings do not obscure the face — religious or medical head coverings are permitted provided the entire face remains visible and unobstructed.
- Do not include other people or objects — the photograph must contain only the applicant, with no furniture, decorations, accessories, or other individuals visible.
- Avoid red-eye and digital alterations — photos with red-eye effects, heavy retouching, artificial enhancements, or obvious editing marks may be rejected.
- Use a professional photographer whenever possible — professionally captured photographs generally provide the best lighting, resolution, and compliance with ICAO standards, reducing the likelihood of visa processing delays or rejection.

## ICAO compliant photo examples
Below are examples of ICAO compliant photographs

![Four examples of ICAO compliant passport photographs on plain white backgrounds, each showing a person facing the camera with a neutral expression and even lighting](/images/articles/icao-photo-examples.png)

If you're unsure if your photo meets the required specifications, simply reach out to our team of experts. We're well-trained in what to look for and can advise you on what is needed for your perfect photograph.`,
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
    body: `The United Arab Emirates is a year-round destination offering world-class cities, pristine beaches, dramatic deserts, rugged mountains, and rich cultural experiences. However, the best time to visit depends largely on the weather and the type of experience you are looking for.

For most travellers, the ideal time to visit the UAE is between November and March, when temperatures are pleasant, outdoor attractions are at their best, and the country hosts a variety of festivals and events.

## November to March: The Best Time to Visit
The winter months are widely considered the peak travel season in the UAE. During this period, daytime temperatures typically range from 20°C to 30°C (68°F to 86°F), creating ideal conditions for sightseeing and outdoor activities.

Visitors can enjoy:

- Exploring the modern cities of Dubai and Abu Dhabi
- Relaxing on the UAE's beautiful beaches
- Desert safaris and dune adventures
- Hiking in the mountains of Ras Al Khaimah
- Outdoor dining, markets, and cultural festivals
- Visiting world-famous attractions and theme parks

This is also the busiest tourist season, so travellers should expect higher prices for flights and accommodation and are advised to book well in advance.

## April to May and September to October: The Shoulder Season
The shoulder seasons offer a balance between good weather and affordability. Temperatures begin to rise, but conditions remain suitable for many outdoor activities, especially during the mornings and evenings.

Travelling during these months provides several advantages:

- Lower hotel and flight prices
- Fewer crowds at major attractions
- Pleasant beach weather
- Better availability at popular resorts and hotels

These months are ideal for travellers seeking value without sacrificing too much comfort.

## June to August: Summer in the UAE
Summer in the UAE is characterised by extremely high temperatures, which frequently exceed 40°C (104°F). While outdoor activities can be challenging during the day, this period offers excellent opportunities for budget-conscious travellers.

Many visitors take advantage of:

- Significant discounts on hotels and flights
- Luxury resort promotions
- Indoor attractions, shopping malls, and entertainment centres
- Water parks and family-friendly activities

The UAE's extensive air-conditioned infrastructure means that visitors can still enjoy many attractions comfortably throughout the summer months.

## Best Time to Visit by Travel Style

| Travel Type | Best Time to Visit |
| --- | --- |
| Sightseeing | November to March |
| Beach Holidays | October to April |
| Desert Safaris | November to March |
| Hiking and Outdoor Activities | November to February |
| Budget Travel | June to August |
| Family Holidays | October to April |

## Final Thoughts
The best time to travel to the UAE is generally from November to March, when the weather is at its most comfortable and the country offers the widest range of outdoor experiences. However, travellers looking for lower prices and fewer crowds may find the shoulder seasons equally rewarding, while summer presents excellent opportunities for luxury travel at reduced costs.

Whether you're exploring the skyscrapers of Dubai, experiencing the cultural attractions of Abu Dhabi, relaxing on the beaches, or venturing into the mountains and deserts, the UAE offers unforgettable experiences throughout the year.`,
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
    body: `For many travellers, a layover is simply an unavoidable part of getting from one destination to another. However, if your journey includes a stop in the United Arab Emirates, your transit time could become one of the most memorable parts of your trip.

Home to some of the world's busiest international airports, the UAE welcomes millions of transit passengers each year. Whether you're flying through Dubai or Abu Dhabi, a UAE layover offers the perfect opportunity to experience world-famous attractions, rich cultural heritage, exceptional cuisine, and stunning landscapes – even if you only have a few hours to spare.

## How Long Should Your Layover Be?
Before planning your adventure, it's important to assess how much time you have available.

- Under 4 hours: It's generally advisable to remain at the airport and enjoy its facilities.
- 6 to 8 hours: You'll have enough time to explore nearby attractions and experience local culture, providing that you have an approved visa that allows you to leave the airport.
- 10 hours or more: This allows for a more immersive visit, with time to discover multiple attractions and neighbourhoods. Again, just be sure that you have an approved visa that allows you to leave the airport.

Always remember to factor in immigration procedures, transport times, and arriving back at the airport at least three hours before your onward flight.

## Experience the Best of Dubai
If your layover takes you through Dubai, you'll have access to one of the world's most exciting cities. Just a short journey from Dubai International Airport, visitors can explore the iconic Burj Khalifa, wander through the enormous Dubai Mall, or watch the spectacular Dubai Fountain show.

For those looking to experience a different side of the city, a visit to the historic Al Fahidi district and Dubai Creek offers a fascinating glimpse into Dubai's heritage. Traditional markets, known as souks, provide the perfect opportunity to experience local culture, shop for souvenirs, and sample authentic Middle Eastern cuisine.

## Discover the Cultural Treasures of Abu Dhabi
Abu Dhabi, the capital of the UAE, offers a unique blend of tradition and modernity. The magnificent Sheikh Zayed Grand Mosque is considered one of the world's most beautiful religious landmarks and is a must-see for any visitor.

Travellers with additional time can explore the Louvre Abu Dhabi, relax along the picturesque Corniche waterfront, or experience the excitement of Yas Island, home to world-class entertainment and attractions.

## Explore Beyond the Major Cities
The UAE is much more than its famous skylines. If your itinerary allows, consider exploring some of the country's lesser-known emirates.

Sharjah offers a rich cultural experience with museums, heritage sites, and traditional architecture. Ras Al Khaimah is renowned for its mountains, desert adventures, and outdoor activities, while Fujairah boasts beautiful beaches and scenic landscapes along the Gulf of Oman.

These destinations provide visitors with an opportunity to experience the UAE's diverse landscapes and cultural heritage beyond the country's urban centres.

## Relax and Recharge
Long-haul travel can be exhausting, making a layover the perfect opportunity to relax and recharge. The UAE is home to some of the world's finest beaches, luxury hotels, spas, and wellness facilities.

Many hotels offer day-use packages, allowing transit passengers to enjoy swimming pools, spa treatments, fitness facilities, and fine dining before continuing their journey.

## Experience World-Class Dining
The UAE's culinary scene reflects its position as a global crossroads. From traditional Emirati cuisine to Michelin-starred restaurants and international street food, there is something to satisfy every palate.

Some local favourites worth trying include:

- Machboos
- Shawarma
- Harees
- Arabic mezze
- Fresh seafood dishes
- Luqaimat, a traditional Emirati dessert

Whether dining in a luxury hotel or exploring local eateries, food lovers will find endless options to enjoy.

## Shop in One of the World's Retail Capitals
Few destinations rival the UAE when it comes to shopping. From luxury boutiques and designer brands to traditional markets and artisan products, visitors can enjoy a world-class retail experience.

Popular destinations include Dubai Mall, Mall of the Emirates, Yas Mall, and the many traditional souks located throughout the country. Even travellers with limited time can experience the UAE's renowned shopping culture.

## Essential Tips for Your UAE Layover
To make the most of your stopover, consider the following:

- Check visa requirements before travelling.
- Verify your eligibility for transit visas if required.
- Plan your transport in advance using taxis, metro systems, or ride-hailing services.
- Dress appropriately when visiting cultural or religious sites.
- Stay hydrated, especially during the warmer months.
- Allow sufficient time to return to the airport for security and boarding procedures. Be at the airport at least 3 hours prior to your departure time.

## Turn Your Stopover into an Experience
A layover in the United Arab Emirates is far more than simply waiting for your next flight. Whether you choose to admire the world's tallest building, explore centuries-old traditions, relax on pristine beaches, or indulge in world-class cuisine, the UAE offers travellers the chance to transform transit into an unforgettable travel experience.

The next time your journey includes a stop in the UAE, don't just wait for your next flight — take the opportunity to discover one of the world's most fascinating destinations.`,
  },

  // ── NEW GUIDE SLOTS (search-informed topics) ────────────────────
  {
    slug: "dubai-visa-types-explained",
    title: "Dubai Visa Types Explained: Which One Do You Need?",
    excerpt:
      "A plain-English comparison of every UAE tourist visa — validity, entries and who each one suits best.",
    category: "Visa Requirements",
    image: "/images/articles/visa-types.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-01",
    readingMinutes: 6,
    body: `Planning a trip to the United Arab Emirates can be exciting, but choosing the correct visa type is an important first step. Whether you are travelling for tourism, business, family visits, or multiple trips within a short period, understanding the different UAE visa options will help ensure a smooth travel experience.

This guide explains the various UAE visa types available, including the difference between single-entry and multiple-entry visas, and when to choose a 30-day or 60-day visa.

## Understanding UAE Visa Validity
Before selecting your visa, it is important to understand two key terms:

- Visa validity period — the period that your visa remains valid for your arrival into the UAE. You must arrive in the UAE before the visa validity period expires at midnight of the last date mentioned.
- Length of stay — Once you have arrived within the visa validity period, the length of stay period starts when you clear immigration and you are then permitted to remain in the UAE for the number of days noted as the length of stay (96 hours, 14 days, 30 days and so on).

It is important to note that your day of entry counts as day one, so even if you arrive 10 minutes before midnight, those ten minutes will count as day one and your next day will be counted as day two.

The visa you choose should be based on the purpose of your trip, the duration of your stay, and whether you plan to enter the UAE once or multiple times.

## UAE Single-Entry Visas
A single-entry visa allows you to enter the UAE only once. Once you leave the UAE, the visa is considered used and void, regardless of how many days remained on the visa.

### 96-Hour Transit Visa (Single Entry)
This visa is designed for travellers transiting through the UAE.

- Valid for a stay of up to 96 hours (4 days) from the date of arrival.
- Permits one entry only.
- Ideal for short stopovers or brief business visits.

### 14-Day Visa (Single Entry)
Suitable for short holidays, family visits, or business trips.

- Allows a stay of up to 14 consecutive days from the date of entry.
- Permits one entry only.

### 30-Day Visa (Single Entry)
One of the most popular visa options for tourists.

- Allows a stay of up to 30 consecutive days from the date of entry.
- Permits one entry only.
- Suitable for standard holidays, family visits, or short business trips.

### 60-Day Visa (Single Entry)
Ideal for longer stays in the UAE.

- Allows a stay of up to 60 consecutive days from the date of entry.
- Permits one entry only.
- Commonly used for extended holidays, family visits, business travel, or travellers exploring opportunities within the UAE.

## UAE Multiple-Entry Visas
A multiple-entry visa allows you to enter and exit the UAE multiple times during the visa validity period (see above).

This type of visa is ideal for travellers who plan to visit other countries and return to the UAE, cruise passengers, frequent business travellers, or those with family residing in the region.

### 30-Day Visa (Multiple Entry)
- Allows unlimited entries and exits within a 30-day period.
- The 30-day period begins on the date of your first entry into the UAE.
- The visa remains valid for exactly 30 consecutive days, regardless of how many times you leave and re-enter.

Example: If you enter the UAE on 1 July using a 30-day multiple-entry visa, 1 July becomes Day 1. You may enter and leave the UAE as many times as needed, but all travel must be completed by Day 30.

### 60-Day Visa (Multiple Entry)
- Allows unlimited entries and exits within a 60-day period.
- The 60-day period begins on the date of your first entry into the UAE.
- The visa remains valid for exactly 60 consecutive days, regardless of how often you travel in and out of the country.

Example: If you enter the UAE on 1 July using a 60-day multiple-entry visa, your visa period begins on that date and expires after 60 consecutive days, irrespective of the number of entries made.`,
  },
  {
    slug: "single-entry-vs-multiple-entry-dubai-visa",
    title: "Single Entry vs Multiple Entry Dubai Visas",
    excerpt:
      "What's the difference, and when is a multiple-entry UAE visa worth the extra cost? A simple breakdown.",
    category: "Visa Requirements",
    image: "/images/articles/single-vs-multiple-entry.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-07",
    readingMinutes: 5,
    body: `The most important factor to consider when choosing between a single or multiple entry visa is whether you plan to enter the UAE only once and then leave without the intention of returning soon, or whether you would like to return to the UAE in the near future.

| Visa Type | Best For | Number of Entries |
| --- | --- | --- |
| Single Entry | Holidays, family visits, business trips with one visit to the UAE | One entry only |
| Multiple Entry | Frequent travellers, cruises, regional travel, multiple business meetings | Unlimited entries during the visa period |

Choose a single-entry visa if you only plan to visit the UAE once during your trip.

Choose a multiple-entry visa if you intend to leave and re-enter the UAE during your travels, such as travelling to neighbouring countries or making several business visits. Once you use your single entry visa, it is seen as used and you cannot re-enter, but if you have a multiple entry visa, you can leave and come back as many times as you like, providing that you do so in the length of stay granted on your visa.

Not sure which one is right for you? Get in touch with our team, we're here to assist you each step of the way.`,
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
    body: `Overstaying a visa in the United Arab Emirates can result in significant fines, travel delays, and potential complications with future visa applications. With several changes to UAE immigration regulations in recent years, many travellers remain uncertain about current overstay rules, grace periods, and visa extension options.

This guide explains everything you need to know about UAE tourist and visit visa overstays, including the latest overstay fines, whether grace periods still exist, and how to extend your visa legally.

## Is there a grace period for UAE visa extensions?
One of the most common misconceptions among travellers is that UAE tourist visas include a grace period after expiry.

**The answer is no.**

The previous grace period that applied to certain UAE visit visas has been removed. Today, tourists and visitors must either leave the UAE or extend their visa before the final day of their authorised stay. Overstay penalties begin immediately after your visa expires.

Example:

Your 30-day tourist visa expires on 30 June. If you remain in the UAE on 1 July, overstay fines will begin to accumulate from that day.

## What are the UAE visa overstay fines?
As of 2026, the UAE applies a standard overstay penalty of around AED 50 for each day you remain in the country beyond your authorised stay. This daily charge continues to build for every day of the overstay, so the total can add up quickly.

On top of the daily fine, travellers are usually required to pay an exit permit fee when leaving the UAE. This fee typically ranges from AED 100 to AED 350, depending on your circumstances at the time of departure.

Fees are set by the UAE authorities and can change, so it is always worth confirming the current amounts before you travel or if you think you may overstay.

The longer a visitor overstays, the greater the risk of:

- Delays at immigration checkpoints
- Additional penalties and administrative charges
- Difficulties obtaining future UAE visas
- Possible immigration restrictions in severe cases

For this reason, travellers should always monitor their visa expiry date carefully.

## If I found employment, and my employer is arranging my work visa, can I overstay on my visit visa while my work visa is in process?
This is a common misconception with many travellers, but overstaying your visit visa while your work visa is being arranged can still lead to significant fines and delays.

Travellers are always advised, especially with the prospects of employment, to ensure that their visit visa remains valid.

## Can I extend my visit visa legally to avoid an overstay status?
Yes. Arranging an official visa extension is the only legal way to remain in the UAE beyond your original authorised stay, and it is almost always far cheaper than the fines and penalties that build up once a visa expires.

Extending before your visa expires keeps you fully compliant with UAE immigration law and avoids the risk of overstay charges, immigration delays, and complications with future visa applications.

If you are approaching your visa expiry date and need more time in the UAE, our team can guide you through the extension process and make sure everything is arranged correctly before your current visa lapses.`,
  },
  {
    slug: "dubai-visas-for-children-and-families",
    title: "UAE Visa Requirements for Children Under the Age of 18",
    excerpt:
      "UAE visa rules for South African children under 18 — the exact documents, certification and consent letters families need.",
    category: "Visa Requirements",
    image: "/images/articles/children-family-visa.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-16",
    readingMinutes: 5,
    body: `## Introduction
Travelling to the United Arab Emirates (UAE) as a minor involves additional visa requirements and documentation to ensure compliance with UAE immigration regulations and international child travel policies.

The main purpose of the additional requirements is always aimed at protecting minors and combatting child trafficking.

## What is the difference between a normal birth certificate and an unabridged birth certificate?
A normal birth certificate will contain only the details of the minor child, whereas an unabridged birth certificate will additionally contain the full names and ID numbers of that minor's parents.

This is an official document issued by the Department of Home Affairs in South Africa.

When applying for a visa, immigration officials rely on this document to ensure that the minor is travelling with their legal parents.

## UAE Visa Applications for Minors Travelling with Parents
Where a child is travelling with their legal parent(s), the minor's visa application must be submitted together with the travelling parent. In most cases, the child must travel with the same legal parent whose documentation was used to support the visa application.

In addition to the normal document requirements, a copy of the child's unabridged birth certificate must be included in their application.

The accompanying parent or legal guardian's details should also appear on the minor's unabridged birth certificate submitted with the visa application.

## Can a minor travel to the UAE without their parents?
In general, children under the age of 18 cannot apply for a UAE visa or travel to the UAE independently. Minors must typically travel with at least one legal parent or guardian. The accompanying parent or legal guardian's details should also appear on the minor's unabridged birth certificate submitted with the visa application.

The only exceptions are where the child is travelling as part of an organised group, such as:

- School tours or educational trips
- Sporting teams or tournaments
- Cultural or exchange programmes
- Travel accompanied by an officially appointed parent, guardian, teacher, or coach

Where a child under the age of 18 is travelling without a legal parent, the visa application must be submitted as part of a group application. Additional supporting documentation is required to verify parental consent and the purpose of travel.

Please note that group visa applications involving minors typically require 5 to 10 working days for processing. Processing times may be longer depending on the size of the group, the nature of the travel, and any additional verification requirements requested by UAE immigration authorities.

The following documents must be provided for each minor applicant:

- Certified copy of the child's passport
- Recent colour passport photograph with a plain white background
- Certified copy of the unabridged birth certificate showing both parents' full names
- Certified Home Affairs parental consent affidavit authorising travel without the legal parent(s)
- Certified copy of the mother's ID document or passport
- Certified copy of the father's ID document or passport
- Certified and signed invitation letter from the host organisation, school, event organiser, or sponsor, detailing the purpose of travel, itinerary, and travel dates
- Certified and signed confirmation or enrolment letter from the child's school
- Confirmed flight itinerary
- Confirmed hotel accommodation booking matching the travel dates submitted

### Certification Requirements
For minors travelling without a legal parent or guardian, all supporting documents listed above (excluding the passport photograph, flight itinerary, and hotel confirmation) must be:

- Certified,
- Officially stamped, and
- Signed at a South African Police Service (SAPS) station.

Please note that certification by a Commissioner of Oaths alone is generally not sufficient for these applications.

As UAE immigration requirements may change without prior notice, applicants are advised to ensure that all documentation is complete, correctly certified, and submitted well in advance of their planned travel date.

## Visa Fees for Minor Children
In many cases, reduced visa fees may apply for minors travelling with their parents. However, for organised group travel, minors are generally charged the standard adult visa fee.

Because minor applications are detailed and easily delayed by incorrect or incomplete certification, many families choose to have their documents checked before submitting.`,
  },
  {
    slug: "dubai-visa-application-step-by-step",
    title: "Dubai Visa for South Africans: Step-by-Step Application Guide",
    excerpt:
      "A complete walkthrough of applying for a Dubai visa from South Africa, from documents to approval.",
    category: "Visa Requirements",
    image: "/images/articles/application-steps.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-22",
    readingMinutes: 7,
    body: `## Introduction
Travelling to Dubai or anywhere in the United Arab Emirates (UAE) is an exciting experience, whether you're planning a holiday, business trip, family visit, or stopover. Before travelling, South African passport holders must obtain a valid UAE visa.

At Dubai Visas Online, we have simplified the application process to make obtaining your Dubai visa as quick and stress-free as possible. This step-by-step guide explains exactly how South African travellers can apply for a UAE visa.

## Step 1: Select your dates, visa type and complete the online visa application form.
Begin your application by visiting our website: [www.dubaivisasonline.co.za](https://www.dubaivisasonline.co.za) or [www.dubaivisa.co.za](https://www.dubaivisa.co.za)

On the home page, complete the travel date, citizenship and location questions.

In the next section, you will choose the visa type that you wish to apply for and will then access the online visa application form.

Please complete the form for each passenger, ensuring that all information entered matches the passport details exactly, including full names, passport numbers, nationality, and travel dates. Incorrect information may result in delays or visa rejection.

## Step 2: Submit the Required Supporting Documents
After completing your application, you will need to upload or email the required supporting documents.

### Standard Supporting Documents
All applicants must provide the following:

- **Passport copy** — A perfectly clear scanned copy of your passport information page.
- **Passport cover** — A clear copy of both the front and back cover of your passport in the same frame.
- **Recent colour photograph** — A clear head-and-shoulders photograph taken within the last six months against a plain white background.
- **Flight itinerary or ticket** — Showing the applicant's full name exactly as it appears in the passport.
- **Hotel reservation or accommodation confirmation** — The hotel voucher must clearly display the traveller's full name and the booking confirmation number.

### Additional Requirements for Children Under 18
Applicants under the age of 18 must also provide:

- A high-quality copy of their unabridged birth certificate. The document must be free from ink marks, damage, or folds. At least one parent named on the birth certificate must be travelling with the minor.

### Visiting Family or Friends in the UAE?
If you will be staying with family or friends instead of a hotel, additional documentation is required.

Please submit:

**1. Signed Invitation Letter from Your Host**

The invitation letter must include:

- Full names of all applicants staying with the host
- The relationship between the host and applicants
- The dates of the visit (arrival and departure dates)
- The complete residential address in the UAE
- The host's contact telephone number
- The host's signature

**2. Copy of the Host's UAE Residency Visa**

A clear copy of the host's valid UAE residence visa must be provided.

**3. Host's Tenancy Agreement**

A copy of the host's tenancy contract or proof of residence in the UAE is required.

## Step 3: Make Payment
Once your application has been completed online through our website, you may proceed with payment.

Our website allows you to make secure online payments using your Visa or Mastercard credit or debit card, or using our online instant EFT portal.

You also have the option to make a manual EFT, but in this case, please remember:

- Use your DBV reference number (located at the bottom left of your invoice) as your payment reference.
- Upload your proof of payment through our system, or email it through to us at [info@dubaivisasonline.co.za](mailto:info@dubaivisasonline.co.za).
- Providing the correct reference number helps us process your application without delays.

## What Happens After Submission?
Once we have received and checked your completed application, supporting documents, and payment confirmation, we submit your visa application to the UAE immigration authorities for processing.

Standard tourist and business visa applications are typically processed within 24 to 48 hours, although processing times may vary during peak travel periods or when additional verification is required.

## Tips for a Smooth Dubai Visa Application Process
To avoid unnecessary delays, we recommend:

- Ensuring all passport scans are clear and readable.
- Providing recent passport photographs that comply with UAE visa photo requirements.
- Double-checking that names match exactly across all documents, and ensuring no nicknames are used.
- Submitting accommodation and flight confirmations with the applicant's full name.
- Applying well in advance of your intended travel date, particularly during school holidays and peak travel seasons.

## Need Assistance During the Application Process?
Our experienced visa service advisors are always available on phone, email or WhatsApp to assist you in compiling your visa application for the best possible chance of a successful outcome.

Whether you're travelling for tourism, business, a family visit, or a short stopover, our team is available to guide you through every step of the application process.`,
  },
  {
    slug: "dubai-visa-on-arrival-myths",
    title: "Dubai Visa on Arrival: Myths vs Reality for South Africans",
    excerpt:
      "Can South Africans get a Dubai visa on arrival? We clear up the confusion and explain what's actually required.",
    category: "Visa Requirements",
    image: "/images/articles/visa-on-arrival.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-28",
    readingMinutes: 4,
    body: `## Introduction
One of the most common questions asked by South African travellers planning a trip to Dubai is: "Can I get a visa on arrival?"

Unfortunately, there is a significant amount of conflicting information online, leading many travellers to believe they can simply board a flight and obtain their visa upon arrival in the United Arab Emirates (UAE). In reality, the answer depends on your individual circumstances.

In this article, we separate the myths from the facts so that South African passport holders can travel to Dubai and the UAE with confidence.

## Myth #1: All South Africans Receive a Free Visa on Arrival
**Reality: Most South African passport holders require a visa prior to arrival.**

Traditionally, South African citizens have been required to obtain a UAE visa before travelling. However, recent changes to UAE immigration regulations have expanded visa-on-arrival eligibility for certain South African travellers. To qualify, South African passport holders must hold a valid residence permit from specific countries, including the United States, United Kingdom, European Union member states, Canada, Australia, New Zealand, Singapore, Japan, or South Korea.

If you do not hold one of these qualifying foreign residence permits, you will need to apply for a UAE visa before departure.

## Myth #2: If You Arrive Without a Visa, Immigration Will Issue One Anyway
**Reality: Airlines may refuse boarding before you even leave South Africa.**

One of the biggest misconceptions is that travellers can simply arrive in Dubai and sort out their visa at immigration. In practice, airlines are required to verify that passengers have the correct travel documentation before boarding, and if they allow you to travel without one, they could face significant fines. The airline is not going to risk this, so they ensure that you have the proper visa in place before you even board the aircraft.

If you require a pre-approved UAE visa and do not have one, you will most likely be denied boarding at the airport in South Africa.

## Myth #3: Visa on Arrival Means No Documents Are Required
**Reality: Supporting documents may still be requested.**

Even travellers who qualify for visa on arrival should be prepared to provide supporting documentation if requested by immigration authorities.

You should always travel with:

- A passport valid for at least six months.
- A confirmed return or onward flight ticket.
- Proof of accommodation, such as a hotel reservation or host details.
- Evidence of sufficient funds for your stay if requested.

Having these documents readily available can help avoid delays at immigration.

## Myth #4: Visa Rules Never Change
**Reality: UAE immigration policies are regularly updated.**

The UAE frequently reviews and updates its visa regulations to support tourism, business travel, and international relations. Eligibility for visa-on-arrival programmes, visa validity periods, and documentary requirements can change with little notice.

For this reason, travellers should always verify the latest requirements before booking flights or travelling.

## So, Can South Africans Get a Visa on Arrival in Dubai?
**The answer is: sometimes, but in most cases not.**

You may qualify for a UAE visa on arrival if:

- You hold a South African passport; and
- You also hold a valid residence permit issued by the United States, United Kingdom, a European Union country, Canada, Australia, New Zealand, Singapore, Japan, or South Korea.

If you do not have one of these valid residence permits in your current passport, you should apply for a UAE visa before travelling.

## Some Final Advice for South African Travellers
When planning a trip to Dubai or elsewhere in the UAE, never rely solely on social media posts, travel forums, or information from friends who travelled previously. Visa regulations change regularly, and requirements can differ depending on your nationality, residency status, and purpose of travel.

The safest approach is always to confirm your visa eligibility before booking your trip, ensuring a smooth and stress-free journey to the UAE. If you are ready to begin, see our [step-by-step Dubai visa application guide for South Africans](/articles/dubai-visa-application-step-by-step).`,
  },
  {
    slug: "arriving-at-dubai-airport",
    title: "Arriving at Dubai Airport: Immigration & What to Expect",
    excerpt:
      "From landing to baggage claim — how UAE immigration works and how to breeze through with your e-visa.",
    category: "Travel Guide",
    image: "/images/articles/dubai-airport-arrival.png",
    author: "Dubai Visas Online",
    datePublished: "2026-03-31",
    readingMinutes: 5,
    body: `## Introduction
Dubai International Airport is one of the busiest and most efficient airports in the world, welcoming millions of visitors to the United Arab Emirates (UAE) each year. If you're travelling to Dubai for the first time, understanding the arrival process can help make your journey stress-free and straightforward.

This guide explains what to expect when arriving at Dubai Airport, from disembarking your flight to collecting your luggage and entering the UAE.

## Step 1: Disembark and Follow the Immigration Signs
After landing, passengers will be directed through the airport terminal towards immigration control. Clear signage in English and Arabic makes navigating the airport relatively easy.

Depending on your arrival terminal and the number of incoming flights, the walk to immigration can take anywhere from a few minutes to around 20 minutes. South African travellers usually arrive on direct Emirates or flydubai flights from Johannesburg or Cape Town, which land at Terminal 3 — Dubai International's largest and most modern terminal.

Before joining the immigration queue, ensure you have the following documents readily available:

- Your passport with at least six months' validity remaining.
- Your approved UAE visa (if required). If you still need to apply, see our [step-by-step Dubai visa application guide for South Africans](/articles/dubai-visa-application-step-by-step).
- Your return or onward flight details.
- Hotel reservation or accommodation details.
- Any additional supporting documents requested during your visa application.

Having these documents easily accessible will help speed up the immigration process.

## Step 2: Immigration Clearance
At the immigration counter, a UAE immigration officer will review your travel documents and verify your eligibility to enter the country.

During the process, you may be asked simple questions such as:

- What is the purpose of your visit?
- How long will you be staying?
- Where will you be staying in the UAE?
- When is your return flight?

Most travellers complete immigration clearance within a few minutes. However, waiting times can vary depending on the time of arrival and passenger volumes.

### Biometric Verification
The UAE uses advanced biometric systems at its airports. Immigration authorities may verify your identity using:

- Facial recognition technology.
- Passport scanning.
- Other biometric security measures where applicable.

These procedures are routine and help ensure efficient and secure entry into the country.

## Step 3: Proceed to Baggage Claim
Once you have cleared immigration, follow the signs to the baggage reclaim area.

To locate your luggage carousel:

- Check the flight information screens located throughout the arrivals hall.
- Match your flight number with the designated baggage belt.

Dubai airports are known for efficient baggage handling, although collection times can vary depending on flight schedules and passenger numbers.

If your luggage does not arrive, proceed immediately to your airline's baggage assistance desk before leaving the arrivals area.

## Step 4: Customs Clearance
After collecting your baggage, you will proceed through customs screening.

Most visitors will pass through customs without issue, provided they are not carrying prohibited or restricted items.

Travellers should familiarise themselves with UAE customs regulations before departure, particularly regarding:

- Prescription medication.
- Large amounts of cash.
- Restricted goods.
- Alcohol and tobacco allowances.
- Commercial goods and gifts.

Failure to declare restricted items may result in delays, confiscation, fines, or other penalties.

## Step 5: Entering the Arrivals Hall
After clearing customs, you will enter the public arrivals area where you can:

- Meet family members or friends.
- Locate hotel transfer services.
- Access taxi services.
- Arrange private transfers.
- Use public transport connections.

Dubai airports offer numerous facilities, including:

- Currency exchange services.
- SIM card providers.
- ATMs.
- Restaurants and coffee shops.
- Car rental services.

If you require internet access immediately upon arrival, free airport Wi-Fi is available throughout most terminals.

## How Long Does Arrival Processing Take?
The total time from aircraft arrival to exiting the airport varies depending on passenger volumes and the time of day.

As a general guideline:

| Process | Estimated Time |
| --- | --- |
| Walking to immigration | 5–20 minutes |
| Immigration clearance | 5–45 minutes |
| Baggage collection | 15–45 minutes |
| Customs clearance | 5–15 minutes |

In most cases, travellers can expect to leave the airport within one to two hours after landing.

## Tips for a Smooth Arrival in Dubai
To make your arrival experience as smooth as possible:

- Keep your passport and visa documents easily accessible.
- Ensure your phone is charged before landing.
- Complete any required arrival forms accurately.
- Confirm your accommodation address before travel.
- Familiarise yourself with UAE customs regulations.
- Allow extra time during peak holiday seasons and major events.

## Final Thoughts
Arriving in Dubai is generally a quick and efficient process thanks to the UAE's modern airport infrastructure and advanced immigration systems. By ensuring your documents are prepared and understanding what to expect upon arrival, you can begin your trip with confidence and focus on enjoying everything the UAE has to offer.

Whether you're visiting for tourism, business, or to see family and friends, a little preparation before departure can help ensure a smooth and hassle-free arrival experience.`,
  },
  {
    slug: "dubai-dress-code-and-customs",
    title: "Dubai Dress Code & Local Customs Every Visitor Should Know",
    excerpt:
      "Respect local culture and avoid awkward moments with this practical guide to dressing and behaving in Dubai.",
    category: "Travel Guide",
    image: "/images/articles/dress-code-customs.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-03",
    readingMinutes: 5,
    body: `The United Arab Emirates (UAE) is one of the world's most popular travel destinations, attracting millions of visitors each year for tourism, business, shopping, and family holidays. The country is known for its luxury hotels, modern cities, beautiful beaches, and welcoming hospitality.

Although the UAE is a multicultural and relatively liberal country by regional standards, it remains rooted in Islamic traditions and local customs. Visitors are expected to dress respectfully and behave appropriately in public spaces. Many South African visitors are pleasantly surprised to find the everyday dress norms far more relaxed and cosmopolitan than they expected.

Understanding the local culture before you travel — and making sure your visa is sorted with our [step-by-step Dubai visa application guide for South Africans](/articles/dubai-visa-application-step-by-step) — can help ensure a respectful, enjoyable, and stress-free visit.

## Is There a Strict Dress Code in Dubai and the UAE?
Contrary to popular belief, there is no single national dress code for visitors in the UAE. However, modest and respectful clothing is expected in most public places.

In general, visitors should avoid clothing that is excessively revealing, offensive, or inappropriate for the environment they are visiting.

The level of formality and modesty expected often depends on where you are.

## Dress Code in Shopping Malls and Public Areas
Shopping malls, government buildings, markets, and public spaces generally require modest attire.

Recommended clothing includes:

**For Women:**

- Dresses, skirts, or shorts of a reasonable length.
- Shirts, blouses, and tops that cover the shoulders and chest.
- Trousers, jeans, or modest casual wear.

**For Men:**

- T-shirts, collared shirts, or casual tops.
- Shorts of an appropriate length.
- Trousers or jeans.

Visitors should avoid:

- Extremely short shorts or skirts.
- Clothing with offensive language or images.
- Transparent or excessively revealing clothing.
- Swimwear outside designated beach or pool areas.

While enforcement is generally relaxed, dressing respectfully helps avoid unwanted attention or requests to cover up.

## Dress Code at Beaches and Swimming Pools
Swimwear is permitted at:

- Hotel swimming pools.
- Private beaches.
- Public beaches designated for swimming.
- Water parks and resort facilities.

Acceptable beach attire includes:

- Swimsuits.
- Bikinis.
- One-piece swimwear.
- Swimming trunks and board shorts.

However, visitors should remember that swimwear should only be worn in designated swimming areas. Walking through shopping centres, restaurants, or public streets in swimwear is considered inappropriate.

When leaving the beach or pool, visitors should cover up with suitable clothing.

## Visiting Mosques and Religious Sites
Visitors planning to visit mosques or religious sites should dress conservatively and respectfully.

Generally:

**Women should:**

- Wear clothing that covers the arms and legs.
- Cover their hair with a scarf when required.
- Avoid tight-fitting or transparent clothing.

**Men should:**

- Wear long trousers.
- Wear shirts that cover the shoulders.
- Avoid sleeveless tops.

Some religious sites may provide appropriate clothing for visitors if necessary.

## Business Attire in the UAE
For business meetings and professional events, conservative business attire is recommended.

**Men:**

- Business suits or smart business casual clothing.
- Closed shoes.

**Women:**

- Professional dresses.
- Business suits.
- Smart blouses and trousers or skirts of an appropriate length.

The UAE maintains a strong business culture, and professional appearance is generally appreciated.

## Public Behaviour and Local Customs
In addition to dress codes, visitors should be aware of certain cultural expectations.

### Public Displays of Affection
While holding hands is generally acceptable for married couples, excessive public displays of affection are discouraged.

Visitors should avoid:

- Kissing in public.
- Intimate physical behaviour.
- Behaviour considered disrespectful or offensive.

### Photography
Visitors should always ask permission before photographing individuals, especially:

- Local Emirati citizens.
- Women and families.
- Government buildings.
- Military facilities.
- Airports and security areas.

Taking photographs without permission may lead to legal issues.

### Alcohol Consumption
Alcohol is available in many hotels, licensed restaurants, bars, and entertainment venues.

However:

- Drinking alcohol in public places is prohibited.
- Public intoxication is a criminal offence.
- Visitors should consume alcohol responsibly and only in licensed establishments.

### Respect During Religious Occasions
During religious periods such as Ramadan, visitors are encouraged to show additional respect for local customs.

This may include:

- Dressing more conservatively.
- Being respectful of those who are fasting.
- Following any temporary regulations or guidelines implemented during the holy month.

The UAE welcomes visitors of all faiths and backgrounds, but cultural sensitivity is always appreciated.

## Common Myths About Dubai and UAE Dress Codes
**Myth: Women must wear a headscarf everywhere.**
Reality: Female visitors are not generally required to wear headscarves except when visiting certain religious sites.

**Myth: Visitors can be arrested for wearing shorts.**
Reality: Shorts are commonly worn throughout the UAE, provided they are appropriate for the setting.

**Myth: Western clothing is prohibited.**
Reality: Western clothing is widely accepted and commonly worn by both residents and visitors.

**Myth: Tourists must follow the same dress standards as local Emirati citizens.**
Reality: Visitors are not expected to dress like locals but are expected to dress respectfully.

## Final Thoughts
The UAE is a welcoming, diverse, and internationally minded destination that welcomes millions of visitors every year. Most travellers find that local customs are straightforward and easy to follow.

The best rule of thumb is simple: dress modestly, behave respectfully, and be mindful of local traditions. By doing so, you'll enjoy a comfortable, respectful, and memorable experience throughout Dubai and the rest of the United Arab Emirates.

A little cultural awareness goes a long way in ensuring a pleasant and hassle-free visit.`,
  },
  {
    slug: "dubai-money-currency-getting-around",
    title: "Dubai on a Budget: Money, Currency & Getting Around",
    excerpt:
      "Currency, tipping, the Dubai Metro, taxis and apps — everything you need to manage money and travel smart.",
    category: "Travel Guide",
    image: "/images/articles/money-getting-around.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-06",
    readingMinutes: 6,
    body: `Dubai is often associated with luxury hotels, supercars, and extravagant shopping malls. However, many visitors are surprised to discover that travelling to Dubai and the United Arab Emirates (UAE) can be affordable with a little planning.

Whether you're visiting for a short city break, a family holiday, or a business trip, understanding the local currency, payment methods, and transport options can help you make the most of your travel budget. The first step in that planning is making sure your visa is sorted — see our [step-by-step Dubai visa application guide for South Africans](/articles/dubai-visa-application-step-by-step).

This guide covers everything you need to know about money, currency, and getting around Dubai without overspending.

## What Currency Is Used in Dubai and the UAE?
The official currency of the United Arab Emirates is the UAE Dirham (AED).

The Dirham is abbreviated as:

- AED (international code)
- Dhs or DH (commonly used locally)

Banknotes are available in denominations of:

- AED 5
- AED 10
- AED 20
- AED 50
- AED 100
- AED 200
- AED 500
- AED 1,000

Coins are available in:

- 25 fils
- 50 fils
- AED 1

The UAE Dirham is pegged to the US Dollar, which helps maintain a stable exchange rate.

## Should You Carry Cash in Dubai?
Dubai is largely a cashless city, and most businesses accept:

- Credit cards
- Debit cards
- Contactless payments
- Mobile payment platforms

You can comfortably travel throughout Dubai using a bank card for most purchases, including:

- Hotels
- Restaurants
- Shopping malls
- Public transport
- Taxis
- Tourist attractions

However, carrying a small amount of cash is still advisable for:

- Small shops and markets
- Local taxis in some areas
- Tips and gratuities
- Emergency situations

## Should You Exchange Money Before Travelling?
Many travellers choose to exchange a small amount of money before departure for immediate expenses upon arrival.

However, exchange rates in Dubai are often competitive, and visitors can easily exchange foreign currency at:

- Dubai International Airport
- Exchange bureaux
- Shopping malls
- Banks

ATMs are widely available throughout the UAE and generally offer convenient access to local currency.

**A note for South African travellers:** the South African Rand (ZAR) generally fetches a better rate when exchanged in Dubai than at South African airports, so it's usually best to change only a small amount before you leave and the rest on arrival. Because Dubai is largely cashless, most South African visitors find that a bank card covers the majority of their spending, with a little cash kept on hand for markets, taxis, and tips.

Before travelling, check with your bank regarding:

- International transaction fees
- Foreign ATM withdrawal charges
- Daily withdrawal limits

## Is Dubai Expensive?
Dubai can be as expensive or as affordable as you choose to make it.

Budget travellers can save money by:

- Staying in mid-range hotels or apartments.
- Using public transport.
- Eating at local restaurants and food courts.
- Booking attractions online in advance.
- Travelling outside peak holiday periods.

Typical daily expenses may include:

| Expense | Budget Estimate |
| --- | --- |
| Metro travel | AED 5–20 |
| Taxi ride | AED 15–60 |
| Casual meal | AED 25–60 |
| Coffee | AED 15–30 |
| Hotel accommodation | AED 200–600 per night |

Luxury experiences are certainly available, but budget-conscious travellers can still enjoy an excellent UAE holiday without overspending.

## Getting Around Dubai: Public Transport Options
Dubai has one of the safest and most modern public transport systems in the world.

### Dubai Metro
The Dubai Metro is one of the easiest and most affordable ways to travel around the city.

Benefits include:

- Air-conditioned trains and stations.
- Frequent services.
- Affordable fares.
- Connections to major attractions and business districts.

Popular destinations accessible by metro include:

- Dubai International Airport
- Downtown Dubai
- Dubai Mall
- Burj Khalifa
- Dubai Marina
- Mall of the Emirates

Purchasing a Nol Card allows visitors to use the metro, buses, trams, and some water transport services.

### Public Buses
Dubai's bus network covers areas not directly served by the metro.

Advantages include:

- Low fares.
- Extensive routes.
- Air-conditioned vehicles.
- Integration with the Nol Card system.

Buses can be particularly useful for reaching residential areas and tourist attractions outside the city centre.

### Dubai Tram
The Dubai Tram serves popular tourist and residential areas including:

- Dubai Marina
- Jumeirah Beach Residence (JBR)
- Palm Jumeirah connections

The tram system integrates seamlessly with the metro network.

### Taxis
Dubai taxis are considered safe, reliable, and relatively affordable compared to many international cities.

Taxis can be:

- Hailed on the street.
- Booked through mobile applications.
- Found at hotels, malls, and airports.

Visitors should ensure they use licensed taxis, which are clearly marked and regulated.

### Ride-Hailing Services
Ride-hailing applications are widely available throughout the UAE.

These services provide:

- Fixed fare estimates.
- Electronic payment options.
- Convenient pick-up locations.
- English-language support.

While often slightly more expensive than standard taxis, they remain a popular option for visitors.

## Money-Saving Tips for Travelling in Dubai
If you're travelling on a budget, consider these practical tips:

### Purchase a Nol Card
A Nol Card provides access to multiple forms of public transport and can save money compared to frequent taxi journeys.

### Book Attractions Online
Many attractions offer discounted online tickets compared to walk-in prices.

### Use Food Courts and Local Restaurants
Dubai offers excellent and affordable dining options from around the world, particularly in local neighbourhoods.

### Travel During Off-Peak Seasons
Flights and accommodation are often significantly cheaper outside the busy winter tourism season.

### Compare Currency Exchange Rates
Small differences in exchange rates can make a noticeable difference over the course of your trip.

## Final Thoughts
While Dubai has earned a reputation for luxury and extravagance, it is entirely possible to enjoy a memorable holiday on a reasonable budget. By understanding the local currency, using public transport, and planning your expenses carefully, visitors can experience the best of Dubai and the UAE without breaking the bank.

Whether you're travelling for a weekend getaway or an extended holiday, smart planning and local knowledge can help you enjoy a comfortable, affordable, and unforgettable UAE experience.`,
  },
  {
    slug: "things-to-do-in-dubai-first-time",
    title: "Top Things to Do in Dubai for First-Time Visitors",
    excerpt:
      "The must-see attractions and experiences for your first trip to Dubai, from the Burj Khalifa to desert safaris.",
    category: "Travel Guide",
    image: "/images/articles/things-to-do-dubai.png",
    author: "Dubai Visas Online",
    datePublished: "2026-04-09",
    readingMinutes: 7,
    body: `Dubai is one of the world's most exciting travel destinations, offering a unique blend of modern architecture, luxury experiences, cultural attractions, and unforgettable adventures. Whether you're visiting for a short holiday, a business trip, or a family vacation, there are certain experiences that every first-time visitor should add to their itinerary.

If you're planning your first trip to Dubai, here are the top five attractions and experiences you simply shouldn't miss.

For South African travellers, the good news is that all of these experiences are easily reachable within a typical 4 to 7 day trip, and they pair perfectly with the existing direct flight routes from Johannesburg and Cape Town. Before you start planning your itinerary, make sure your visa is sorted — see our [step-by-step Dubai visa application guide for South Africans](/articles/dubai-visa-application-step-by-step).

## 1. Visit the Burj Khalifa – The World's Tallest Building
No first trip to Dubai is complete without visiting the iconic Burj Khalifa.

Standing at an incredible 828 metres tall, the Burj Khalifa is the tallest building in the world and one of Dubai's most recognisable landmarks. Visitors can travel to the observation decks on the 124th, 125th, and 148th floors to enjoy breathtaking panoramic views of the city, desert, and coastline.

Highlights include:

- Spectacular daytime and sunset views.
- Interactive exhibits about the tower's construction.
- Photography opportunities overlooking downtown Dubai.
- Access to luxury restaurants and lounges.

**Tip:** Book your tickets online in advance, especially if you plan to visit during sunset hours.

## 2. Explore Dubai Mall and the Dubai Fountain
Located next to the Burj Khalifa, Dubai Mall is one of the largest shopping and entertainment destinations in the world.

Even if you're not interested in shopping, there is plenty to see and do, including:

- The Dubai Aquarium and Underwater Zoo.
- An Olympic-sized ice rink.
- Hundreds of restaurants and cafes.
- Family entertainment attractions.
- Luxury and international retail stores.

Outside the mall, visitors can experience the famous Dubai Fountain show, where water jets perform choreographed displays set to music and lights.

The fountain performances take place several times each evening and are free to watch.

## 3. Experience a Desert Safari Adventure
A desert safari is one of the most popular experiences for visitors to the UAE and offers a completely different side of Dubai.

Typical desert safari experiences include:

- Dune bashing in four-wheel-drive vehicles.
- Camel rides.
- Sandboarding.
- Traditional Arabic entertainment.
- Henna painting.
- Sunset photography opportunities.
- BBQ dinners under the stars.

Many tours also include cultural performances and opportunities to experience traditional Emirati hospitality.

For many visitors, a desert safari becomes one of the highlights of their trip.

## 4. Visit the Palm Jumeirah and Dubai Marina
The Palm Jumeirah is one of the world's most ambitious engineering projects and an iconic symbol of Dubai's innovation.

Visitors can enjoy:

- Stunning views of the palm-shaped island.
- Luxury hotels and beach clubs.
- Waterfront dining.
- Scenic walks along the coastline.

Nearby, Dubai Marina offers:

- Beautiful waterfront promenades.
- Shopping and entertainment.
- Yacht cruises.
- Restaurants and cafes overlooking the marina.

An evening walk through Dubai Marina is often considered one of the best ways to experience the city's vibrant atmosphere.

## 5. Discover Old Dubai and Traditional Markets
While Dubai is famous for its skyscrapers and luxury lifestyle, its historic districts offer a fascinating glimpse into the city's heritage.

First-time visitors should explore:

### Al Fahidi Historical District
- Traditional architecture.
- Museums and cultural exhibits.
- Art galleries and cafés.

### Dubai Creek
- Traditional wooden abra boat rides.
- Historic trading routes.

### The Gold and Spice Souks
- Authentic local markets.
- Jewellery shops.
- Traditional spices and perfumes.
- Unique souvenirs and gifts.

Exploring Old Dubai provides a deeper understanding of the city's history and cultural heritage.

## Bonus Experiences Worth Considering
If you have additional time during your visit, you may also wish to experience:

- The Museum of the Future.
- Global Village (seasonal).
- Dubai Frame.
- Atlantis Aquaventure Waterpark.
- Ski Dubai.
- A luxury dhow dinner cruise.
- A helicopter tour over the city.

## Tips for First-Time Visitors
To make the most of your first trip to Dubai:

- Book major attractions in advance.
- Use the Dubai Metro where possible — our [money and getting-around guide](/articles/dubai-money-currency-getting-around) explains the Nol Card and fares.
- Stay hydrated, particularly during summer months.
- Dress respectfully in public areas — see our [Dubai dress code and local customs guide](/articles/dubai-dress-code-and-customs).
- Carry a small amount of local currency.
- Allow enough time to experience both modern and traditional Dubai.

## Final Thoughts
Dubai offers something for every type of traveller, from luxury experiences and world-famous landmarks to cultural attractions and outdoor adventures. For first-time visitors, combining iconic attractions with authentic local experiences creates the perfect introduction to one of the world's most fascinating destinations.

Whether you're admiring the skyline from the Burj Khalifa, exploring the desert dunes, or wandering through traditional souks, your first visit to Dubai is likely to be an unforgettable experience.`,
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
    body: `Dubai and the United Arab Emirates (UAE) welcome millions of visitors every year, including many who travel during religious and public holidays. While visiting during these periods can offer a unique cultural experience, travellers should be aware of certain customs, operating hours, and travel considerations.

Whether you're planning to visit during the holy month of Ramadan, Eid celebrations, or other public holidays, understanding what to expect will help ensure a smooth and enjoyable trip.

## What Is Ramadan?
Ramadan is the holiest month in the Islamic calendar and is observed by Muslims worldwide as a period of fasting, prayer, reflection, and community.

During Ramadan, Muslims fast daily from sunrise to sunset, refraining from food, drink, and other activities during daylight hours. The exact dates of Ramadan change each year because they are determined by the Islamic lunar calendar.

For visitors, Ramadan provides a unique opportunity to experience the UAE's rich cultural and religious traditions.

## Can Tourists Visit Dubai During Ramadan?
Absolutely.

Dubai remains fully open to international visitors during Ramadan, and many travellers enjoy visiting during this period due to the special atmosphere, cultural experiences, and festive evening activities.

Hotels, attractions, shopping malls, and tourist facilities continue to operate throughout Ramadan, although some services and operating hours may be adjusted.

## What Should Visitors Expect During Ramadan?

### Respect for Those Who Are Fasting
Visitors are encouraged to be respectful of those observing the fast.

While regulations have become more relaxed in recent years, travellers should still be mindful of local customs and avoid behaviour that may be considered disrespectful.

Simple gestures of cultural sensitivity are always appreciated.

### Changes to Restaurant and Business Hours
Many restaurants, cafes, and businesses adjust their operating hours during Ramadan.

Visitors may notice:

- Some restaurants opening later in the day.
- Extended operating hours after sunset.
- Shopping malls remaining open late into the evening.
- Increased activity after the daily fast ends.

Many hotels and tourist areas continue serving food and beverages throughout the day.

### The Iftar Experience
One of the highlights of visiting during Ramadan is experiencing Iftar, the meal eaten after sunset to break the daily fast.

Throughout the UAE, visitors can enjoy:

- Traditional Emirati cuisine.
- International buffet experiences.
- Special Ramadan tents.
- Cultural entertainment and hospitality events.

Many hotels and restaurants offer elaborate Iftar experiences that are popular with both residents and tourists.

## Should Visitors Dress Differently During Ramadan?
During Ramadan, visitors are encouraged to dress more conservatively than usual, particularly in public places.

General recommendations include:

**For Women:**

- Covering shoulders and knees where possible.
- Avoiding excessively revealing clothing.

**For Men:**

- Wearing appropriate shirts in public areas.
- Avoiding overly casual or revealing attire.

While dress codes are generally not strictly enforced for tourists, modest clothing demonstrates respect for local customs and traditions.

## Can Tourists Eat and Drink During the Day?
In recent years, the UAE has relaxed many of the restrictions that previously applied during Ramadan.

Many restaurants, shopping centres, hotels, and tourist attractions now serve food and beverages during daylight hours.

However, visitors should still exercise discretion and remain respectful when eating or drinking in public spaces.

## Will Tourist Attractions Remain Open?
Most major attractions continue operating during Ramadan, including:

- Burj Khalifa.
- Dubai Mall.
- Dubai Marina.
- Desert safari tours.
- Theme parks.
- Beaches and resorts.
- Museums and cultural attractions.

Some attractions may adjust their opening hours, so it is always advisable to check schedules in advance.

## Visiting During Eid Holidays
At the conclusion of Ramadan, the UAE celebrates Eid al-Fitr, one of the country's most important public holidays.

Another major religious holiday celebrated later in the year is Eid al-Adha.

During Eid periods, visitors can expect:

- Festive celebrations.
- Fireworks displays.
- Extended shopping mall hours.
- Special entertainment events.
- Family gatherings and celebrations.
- Increased domestic and international travel.

For many tourists, Eid offers an exciting opportunity to experience UAE culture and celebrations firsthand.

## Other Public Holidays in the UAE
In addition to Ramadan and Eid, the UAE observes several public holidays throughout the year, including:

- New Year's Day.
- Eid al-Fitr.
- Arafat Day.
- Eid al-Adha.
- Islamic New Year.
- Prophet Muhammad's Birthday (subject to official announcements).
- UAE National Day.

Public holiday dates can vary annually, particularly those based on the Islamic lunar calendar.

## Should You Travel to Dubai During Public Holidays?
There are both advantages and considerations when travelling during major public holidays.

**Advantages:**

- Unique cultural experiences.
- Festive atmosphere.
- Special events and celebrations.
- Extended shopping and entertainment hours.
- Memorable cultural experiences.

**Considerations:**

- Higher hotel prices.
- Increased demand for flights.
- Busy tourist attractions.
- Larger crowds at shopping malls and entertainment venues.

Booking flights, accommodation, and popular attractions well in advance is strongly recommended.

## Tips for Travelling During Ramadan and Public Holidays
To make the most of your trip:

- Book accommodation early.
- Reserve attractions and experiences in advance.
- Check opening hours before visiting attractions.
- Dress respectfully.
- Remain culturally sensitive.
- Allow extra travel time during busy holiday periods.
- Take advantage of special Ramadan and Eid experiences.

## Final Thoughts
Visiting Dubai and the UAE during Ramadan or public holidays offers a unique opportunity to experience the country's rich culture, traditions, and hospitality. While visitors may notice some changes to daily routines and operating hours, most travellers find these periods to be among the most memorable times to visit.

By understanding local customs, respecting cultural traditions, and planning ahead, visitors can enjoy an unforgettable experience while gaining a deeper appreciation for life in the United Arab Emirates.`,
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
