export function Reviews() {
  return (
    <section
      id="Reviews"
      className="border-y-4 border-brand bg-cover bg-center"
      style={{ backgroundImage: "url('/images/dubratingsbg.jpg')" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-balance text-3xl font-bold text-white drop-shadow">What Our Customers Say</h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-white/90 drop-shadow">
          Thousands of travellers trust DubaiVisasOnline for fast, reliable UAE visa processing.
        </p>
        <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-ink/70 p-8 backdrop-blur-sm">
          <a
            href="https://www.trustpilot.com/review/dubaivisa.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-success px-6 py-3 font-semibold text-success-foreground transition hover:opacity-90"
          >
            Read our reviews on Trustpilot
          </a>
        </div>
      </div>
    </section>
  )
}
