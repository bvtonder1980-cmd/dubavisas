import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { OrganizationSchema, WebSiteSchema } from "@/components/json-ld"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Fast UAE Tourist & Transit Visas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Dubai visa",
    "UAE visa",
    "Dubai visa online",
    "UAE tourist visa",
    "Dubai transit visa",
    "Dubai visa South Africa",
    "apply Dubai visa",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Fast UAE Tourist & Transit Visas`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#221d18",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <OrganizationSchema />
        <WebSiteSchema />
        {children}
      </body>
    </html>
  )
}
