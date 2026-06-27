import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { footerNav, siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex w-fit items-center rounded-lg bg-background px-4 py-3">
              <Image
                src="/images/dubai-visas-online-logo.png"
                alt={siteConfig.name}
                width={260}
                height={37}
                className="h-9 w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-ink-foreground/80">
              <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 hover:text-brand">
                <Mail className="h-4 w-4 text-brand" /> {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center gap-2 hover:text-brand">
                <Phone className="h-4 w-4 text-brand" /> {siteConfig.contact.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" /> {siteConfig.contact.addressLine}
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-foreground/80 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-ink-foreground/15 pt-8">
          <p className="text-pretty text-xs leading-relaxed text-ink-foreground/55">
            {siteConfig.name} is an independent service provider and is not affiliated with, nor
            endorsed by, the UAE Ministry of Interior or the General Directorate of Residency and
            Foreigners Affairs. Service fees include our processing and support.
          </p>
          <p className="mt-4 text-xs text-ink-foreground/45">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
