import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "Our cancellation and refund terms for UAE visa applications, including what happens if an application is rejected.",
  alternates: { canonical: "/cancellation" },
}

export default function CancellationPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cancellation & Refund Policy"
      description="This policy explains when cancellations and refunds are possible for visa applications submitted through us."
      breadcrumbLabel="Cancellation Policy"
      lastUpdated="January 2026"
      sections={[
        {
          heading: "1. Before submission",
          paragraphs: [
            "If you wish to cancel before we have submitted your application to the UAE authorities, you may be eligible for a refund of the government fee portion. Our service fee may be non-refundable once work has begun. [PLACEHOLDER: confirm your exact pre-submission refund terms.]",
          ],
        },
        {
          heading: "2. After submission",
          paragraphs: [
            "Once an application has been submitted to the authorities, the government fee is generally non-refundable, as the cost has been incurred on your behalf. This applies regardless of the final outcome.",
          ],
        },
        {
          heading: "3. Rejected applications",
          paragraphs: [
            "Visa decisions are made solely by the UAE authorities. If your application is rejected, the government fee is typically not recoverable. Where a rejection results from an error on our part, we will resubmit at no additional service charge or offer a remedy as appropriate. [PLACEHOLDER: confirm your rejection remedy.]",
          ],
        },
        {
          heading: "4. Duplicate or incorrect payments",
          paragraphs: [
            "If you are charged twice or make a payment in error, please contact us promptly. Verified duplicate payments will be refunded in full.",
          ],
        },
        {
          heading: "5. How to request a cancellation or refund",
          paragraphs: ["To request a cancellation or refund, please contact our support team with:"],
          bullets: [
            "Your application reference number.",
            "The email address used to apply.",
            "A brief explanation of your request.",
          ],
        },
        {
          heading: "6. Processing of refunds",
          paragraphs: [
            "Approved refunds are processed back to your original payment method. Please allow a reasonable period for the funds to appear, depending on your payment provider. [PLACEHOLDER: confirm refund processing timeframe.]",
          ],
        },
      ]}
    />
  )
}
