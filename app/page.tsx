import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Assist } from "@/components/assist"
import { HowItWorks } from "@/components/how-it-works"
import { Prices } from "@/components/prices"
import { WhyUs } from "@/components/why-us"
import { Reviews } from "@/components/reviews"
import { ArticlesPreview } from "@/components/articles-preview"
import { FaqPreview } from "@/components/faq-preview"
import { Contact } from "@/components/contact"
import { CtaBand } from "@/components/cta-band"
import { SiteFooter } from "@/components/site-footer"
import { OrganizationSchema, WebSiteSchema, ServiceSchema, FaqSchema } from "@/components/json-ld"
import { faqs } from "@/lib/faqs"

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <ServiceSchema />
      <FaqSchema items={faqs.slice(0, 6)} />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
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
      <SiteFooter />
    </>
  )
}
