import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section, Container } from "@/components/ui/layout"
import { ApplyWizard } from "@/components/apply/apply-wizard"

export const metadata: Metadata = {
  title: "Start your application",
  description: "Apply for your UAE visa online in a few simple steps.",
  robots: { index: false, follow: false },
}

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0]
  return value
}

/** Normalise the assist widget's YYYY-M-D (unpadded) into a valid ISO date. */
function normaliseDate(raw?: string): string | undefined {
  if (!raw) return undefined
  const parts = raw.split("-")
  if (parts.length !== 3) return undefined
  const [y, m, d] = parts
  if (!y || !m || !d) return undefined
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`
}

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams

  const defaults = {
    citizenship: firstParam(params.citizen),
    residence: firstParam(params.residence),
    arrivalDate: normaliseDate(firstParam(params.depart)),
  }

  return (
    <main>
      <PageHeader
        eyebrow="Application"
        title="Start your UAE visa application"
        description="A few simple steps — choose your visa, add your travellers, upload documents and submit. It's fully online."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Apply" },
        ]}
      />
      <Section className="bg-background pt-10 sm:pt-12 lg:pt-14">
        <Container>
          <ApplyWizard defaults={defaults} />
        </Container>
      </Section>
    </main>
  )
}
