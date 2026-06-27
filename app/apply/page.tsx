import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Start your application",
  robots: { index: false, follow: false },
}

export default function ApplyPage() {
  return (
    <main
      className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center"
      style={{ backgroundColor: "#0c0a08" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Application</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl" style={{ color: "#f4f1ea" }}>
        Your application starts here
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base leading-relaxed" style={{ color: "rgba(244,241,234,0.6)" }}>
        This page is coming soon. We&apos;ll build the full application flow here next.
      </p>
    </main>
  )
}
