import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing the use of our UAE visa application service.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="Please read these terms carefully before using our visa application service."
      breadcrumbLabel="Terms & Conditions"
      lastUpdated="January 2026"
      sections={[
        {
          heading: "1. Our service",
          paragraphs: [
            "We provide a visa facilitation service that assists travellers in applying for UAE tourist and transit visas. We are an independent agency and are not a government department. The final decision on any visa application rests solely with the relevant UAE authorities.",
          ],
        },
        {
          heading: "2. Your responsibilities",
          paragraphs: ["By using our service, you agree to:"],
          bullets: [
            "Provide accurate, complete and truthful information and documents.",
            "Ensure your passport is valid for at least 6 months from your date of travel.",
            "Review all details before submission, as errors may lead to rejection.",
            "Comply with all UAE immigration laws during your stay.",
          ],
        },
        {
          heading: "3. Fees and payment",
          paragraphs: [
            "Our fees include government charges and our service charge, as displayed at the time of application. Payment is required in full before we submit your application. All prices are shown in the currency stated at checkout.",
          ],
        },
        {
          heading: "4. Processing times",
          paragraphs: [
            "Stated processing times are estimates only and are not guaranteed. Delays may occur due to public holidays, additional checks or factors outside our control. We recommend applying well ahead of your travel date.",
          ],
        },
        {
          heading: "5. Approvals and rejections",
          paragraphs: [
            "Visa approval is at the sole discretion of the UAE authorities. We cannot guarantee approval. Where an application is rejected for reasons within our control, our refund and resubmission policy will apply as set out in our Cancellation Policy.",
          ],
        },
        {
          heading: "6. Limitation of liability",
          paragraphs: [
            "To the maximum extent permitted by law, our liability is limited to the service fee paid. We are not liable for losses arising from rejected applications, travel disruption, or delays caused by third parties.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "If you have any questions about these terms, please contact our support team before applying.",
          ],
        },
      ]}
    />
  )
}
