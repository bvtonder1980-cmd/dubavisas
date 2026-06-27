"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { mainNav, siteConfig } from "@/lib/site-config"
import { ButtonLink } from "@/components/ui/button"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ backgroundColor: "#f4f1ea" }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/images/dubai-visas-online-logo.png"
            alt={siteConfig.name}
            width={260}
            height={37}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/track"
            className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
          >
            Track
          </Link>
          <ButtonLink href="/#apply" variant="dark" size="sm">
            Apply Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-serif text-2xl font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/track"
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-serif text-2xl font-medium text-ink"
            >
              Track Application
            </Link>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/#apply" variant="dark" size="lg" className="w-full">
                Apply Now
              </ButtonLink>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink-muted"
              >
                <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
