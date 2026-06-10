export function Hero() {
  return (
    <section
      id="Home"
      className="relative border-y-4 border-brand bg-cover bg-center"
      style={{ backgroundImage: "url('/images/dubheader.jpg')" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <div
            className="rounded-lg p-8 text-center shadow-lg"
            style={{
              backgroundImage: "url('/images/subheader-bg.png')",
              backgroundColor: "rgba(238, 203, 0, 0.45)",
            }}
          >
            <h1 className="text-balance text-3xl font-bold text-white drop-shadow sm:text-4xl lg:text-5xl">
              Quick Online UAE Visa Services
            </h1>
            <p className="mt-4 text-pretty text-base text-white drop-shadow sm:text-lg">
              Welcome to DubaiVisasOnline - the easiest way to get to the United Arab Emirates!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
