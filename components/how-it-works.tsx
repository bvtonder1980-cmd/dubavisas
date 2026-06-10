import Image from "next/image"

export function HowItWorks() {
  return (
    <section id="HowItWorks" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-ink">How it works</h2>
        <div className="flex justify-center">
          <Image
            src="/images/howitworks.png"
            alt="How the Dubai visa application works: choose your visa, submit documents, and receive your approved visa"
            width={1000}
            height={400}
            className="h-auto w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
