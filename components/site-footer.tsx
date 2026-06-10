export function SiteFooter() {
  return (
    <footer className="bg-ink py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <a href="/terms" className="text-brand hover:underline">
            Terms of Use &amp; Disclaimer
          </a>
          <span className="text-white/40">|</span>
          <a href="/privacy" className="text-brand hover:underline">
            Privacy Policy
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm text-yellow-200">
          DubaiVisasOnline is a service provider and as such we are not affiliated with the UAE Ministry of Interior.
        </p>
        <p className="mt-4 text-xs text-white/50">
          &copy; {new Date().getFullYear()} DubaiVisasOnline. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
