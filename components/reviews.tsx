export function Reviews() {
  return (
    <section
      id="Reviews"
      className="border-y-4 border-brand bg-cover bg-center"
      style={{ backgroundImage: "url('/images/dubratingsbg.jpg')" }}
    >
      <div className="mx-auto max-w-5xl px-4 py-20">
        <iframe
          title="Customer reviews powered by Trustpilot"
          loading="lazy"
          src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&businessunitId=5e314f74d67fcd00016e3c15#locale=en-GB&styleHeight=240px&styleWidth=100%25&theme=dark&stars=4%2C5"
          className="block w-full overflow-hidden border-0"
          style={{ height: "240px" }}
        />
      </div>
    </section>
  )
}
