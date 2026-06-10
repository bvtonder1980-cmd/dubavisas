import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Dubai Visas Online",
  description:
    "Quick online UAE visa services. The easiest way to get to the United Arab Emirates - online application, fly any airline, minimal documents required, expert assistance.",
  keywords: [
    "Dubai visa",
    "UAE visa",
    "Dubai visa online",
    "UAE tourist visa",
    "Dubai transit visa",
  ],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#484848",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
