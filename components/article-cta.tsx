import { ButtonLink } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ArticleCta() {
  return (
    <aside
      className="mt-12 flex flex-col items-center gap-5 overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10"
      style={{ backgroundColor: "#16110d" }}
    >
      <h2
        className="max-w-xl text-balance font-serif text-2xl font-semibold leading-tight sm:text-3xl"
        style={{ color: "#f4f1ea" }}
      >
        Ready to apply for your Dubai visa?
      </h2>
      <p className="max-w-lg text-pretty text-base leading-relaxed" style={{ color: "rgba(244,241,234,0.7)" }}>
        Our specialists handle everything and check your personalised application for the best possible chance of
        success.
      </p>
      <div className="mt-1 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/#apply" variant="primary" size="lg">
          Start your application
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink
          href="/#contact"
          variant="outline"
          size="lg"
          className="border-[rgba(244,241,234,0.3)] text-white hover:bg-white hover:text-[#16110d]"
        >
          Talk to an expert
        </ButtonLink>
      </div>
    </aside>
  )
}
