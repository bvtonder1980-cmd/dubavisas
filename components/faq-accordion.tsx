"use client"

import Link from "next/link"
import { Plus, ArrowRight } from "lucide-react"
import { type FaqItem } from "@/lib/faqs"

export function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div
      className={`divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card${
        className ? ` ${className}` : ""
      }`}
    >
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-foreground transition-colors hover:bg-secondary [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-base leading-snug">{item.question}</span>
            <Plus
              className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <div className="whitespace-pre-line px-6 pb-5 text-pretty leading-relaxed text-muted-foreground">
            {item.answer}
            {item.link ? (
              <Link
                href={item.link.href}
                className="mt-3 inline-flex items-center gap-1.5 font-medium text-accent underline underline-offset-4 hover:text-accent/80"
              >
                {item.link.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  )
}
