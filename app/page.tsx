import { Hero } from "@/components/hero"
import { Assist } from "@/components/assist"
import { HowItWorks } from "@/components/how-it-works"
import { Prices } from "@/components/prices"
import { WhyUs } from "@/components/why-us"
import { Reviews } from "@/components/reviews"
import { ArticlesPreview } from "@/components/articles-preview"
import { FaqPreview } from "@/components/faq-preview"
import { Contact } from "@/components/contact"
import { CtaBand } from "@/components/cta-band"
import { ServiceSchema, FaqSchema } from "@/components/json-ld"
import { faqs } from "@/lib/faqs"

export default function HomePage() {
  return (
    <main>
      <ServiceSchema />
      <FaqSchema items={faqs.slice(0, 6)} />
      <Hero />
      <Assist />
      <HowItWorks />
      <Prices />
      <WhyUs />
      <Reviews />
      <ArticlesPreview />
      <FaqPreview />
      <Contact />
      <CtaBand />
    </main>
  )
}
