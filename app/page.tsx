"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Assist } from "@/components/assist"
import { Reviews } from "@/components/reviews"
import { HowItWorks } from "@/components/how-it-works"
import { Prices } from "@/components/prices"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { LoginModal } from "@/components/login-modal"

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <main>
      <SiteHeader onSignIn={() => setLoginOpen(true)} />
      <Hero />
      <Assist onApply={() => setLoginOpen(true)} />
      <Reviews />
      <HowItWorks />
      <Prices />
      <Contact />
      <SiteFooter />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </main>
  )
}
