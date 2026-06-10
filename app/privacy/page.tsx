import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal data when you apply for a UAE visa through us.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="We take the privacy and security of your personal information seriously. This policy explains how we handle your data."
      breadcrumbLabel="Privacy Policy"
      lastUpdated="January 2026"
      sections={[
        {
          heading: "1. Information we collect",
          paragraphs: ["To process your visa application, we may collect:"],
          bullets: [
            "Personal details such as your name, date of birth and nationality.",
            "Passport information and a scan of your passport.",
            "A passport-style photograph.",
            "Contact details including email and phone number.",
            "Travel details such as flight and accommodation information.",
          ],
        },
        {
          heading: "2. How we use your information",
          paragraphs: [
            "We use your information solely to process and manage your visa application, communicate with you about its status, provide customer support, and comply with legal and immigration requirements.",
          ],
        },
        {
          heading: "3. Sharing your information",
          paragraphs: [
            "We share your data only with the relevant UAE government authorities and trusted processing partners strictly for the purpose of completing your application. We never sell your personal data to third parties.",
          ],
        },
        {
          heading: "4. Data security",
          paragraphs: [
            "We use appropriate technical and organisational measures to protect your data against unauthorised access, loss or misuse. Documents are transmitted over secure connections and access is limited to authorised staff.",
          ],
        },
        {
          heading: "5. Data retention",
          paragraphs: [
            "We retain your personal information only for as long as necessary to provide our service and to meet legal obligations, after which it is securely deleted.",
          ],
        },
        {
          heading: "6. Your rights",
          paragraphs: [
            "You have the right to access, correct or request deletion of your personal data, subject to legal retention requirements. To exercise these rights, please contact our support team.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "If you have any questions about how we handle your data, please get in touch with our team.",
          ],
        },
      ]}
    />
  )
}
