"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", target: "Home" },
  { label: "Apply Now", target: "Assist" },
  { label: "Reviews", target: "Reviews" },
  { label: "How it Works", target: "HowItWorks" },
  { label: "Prices", target: "Prices" },
  { label: "Contact", target: "ContactUs" },
]

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
  }
}

export function SiteHeader({ onSignIn }: { onSignIn: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const handleNav = (target: string) => {
    setActive(target)
    setMobileOpen(false)
    scrollToId(target)
  }

  return (
    <header>
      {/* Top bar - desktop only */}
      <div className="hidden bg-ink lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Image
            src="/images/dubaivisas.png"
            alt="Dubai Visas Online"
            width={220}
            height={60}
            style={{ height: "auto" }}
            className="h-14 w-auto"
            priority
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded bg-success px-4 py-2 text-sm font-semibold text-success-foreground transition hover:opacity-90"
            >
              Register
            </button>
            <button
              type="button"
              onClick={onSignIn}
              className="rounded bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="border-b border-neutral-200 bg-surface">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4">
          {/* Mobile logo */}
          <a href="#Home" className="py-2 lg:hidden" aria-label="Dubai Visas Online home">
            <Image
              src="/images/dubaivisas-dark.png"
              alt="Dubai Visas Online"
              width={160}
              height={40}
              style={{ height: "auto" }}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.target}>
                <button
                  type="button"
                  onClick={() => handleNav(link.target)}
                  className={`px-4 py-4 text-sm font-medium transition hover:text-brand ${
                    active === link.target ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 text-ink lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-neutral-200 bg-surface lg:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.target)}
                    className="block w-full py-3 text-left text-sm font-medium text-ink-muted transition hover:text-brand"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="py-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    onSignIn()
                  }}
                  className="w-full rounded border border-brand px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brand hover:text-brand-foreground"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
