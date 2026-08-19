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
      {/* TEMP PREVIEW — remove later */}
      <div className="flex justify-center bg-black py-8">
        <img
          src="/images/women-conference-clay.png"
          alt="Women's conference — woman being formed from clay into a dress of flowers"
          className="h-auto w-full max-w-md"
        />
      </div>
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
