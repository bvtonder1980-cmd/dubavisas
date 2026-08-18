import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimer",
  description: "The terms of use and disclaimer governing the use of our UAE visa application service.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use & Disclaimer"
      description="Please read these terms carefully before using our visa application service."
      breadcrumbLabel="Terms of Use & Disclaimer"
      lastUpdated="January 2026"
      sections={[
        {
          heading: "Terms of Use & Disclaimer",
          paragraphs: [
            "Dubai Visas Online is a registered business in the Republic Of South Africa and provides visa acquisition services on behalf of travelers wishing to obtain a visa for travel to the UAE.",
            "By using our website and paying for our services, you agree to the below terms and conditions.",
            "Dubai Visas Online has no right to issue visas. The right to issue or deny your visa to the UAE rests solely with the UAE Ministry of Interior. Therefore should your visa be denied, or not processed in time, Dubai Visas Online will not be held liable for any loss or damage whatsoever that may be the result of your visa being denied or not issued in time for travel.",
            "The UAE Ministry of Interior advises against making unalterable travel plans until such time that your visa has been approved. Should you make unalterable travel plans (such as booking, paying and confirming an airline ticket), you do so at your own risk and neither the UAE Ministry of Interior nor Dubai Visas Online will be held liable for any costs in changing the travel plans made before obtaining a visa.",
            "Payment can be made online (card or instant EFT) or via manual EFT. Should payment be made in the form of a manual EFT, the proof of payment must be emailed to us, or uploaded to your profile on our website, before we start the visa application process. Should you fail to email or upload your proof of payment in due time, and this causes your visa application to be submitted late, Dubai Visas Online will not be held liable for any damage or losses arising as a result of the late submission. We only start the application and document preparation process once we receive payment.",
            "Although every effort is made to ensure your visa application is successful, we cannot guarantee that the UAE Ministry of Interior will grant your visa.",
            "Dubai Visas Online is a service provider through which your visa application will be prepared and submitted to the UAE Ministry of Interior on your behalf.",
            "Should we request additional documents from you and you fail to provide them, we will submit your documents as is, however this could have a detrimental effect on the issuance of your visa.",
            "Please note that Dubai Visas Online will always do our best to get your visa on time and approved, however should the UAE Ministry of Interior decide to delay your visa for any reason whatsoever or deny your visa, we will not be held liable in any way whatsoever.",
          ],
        },
        {
          heading: "Return and Refunds Policy",
          paragraphs: [
            "The provision of visa application services by Dubai Visas Online is subject to availability. In cases of unavailability, or inability of Dubai Visas Online to fulfill the agreed upon service, Dubai Visas Online will refund the client in full within 30 days. Should your visa be applied for but rejected by the Ministry of Interior, no refund is due.",
          ],
        },
        {
          heading: "Customer Privacy Policy",
          paragraphs: [
            "Dubai Visas Online shall take all reasonable steps to protect the personal information of users. For the purpose of this clause, \u201CPersonal Information\u201D shall be defined as detailed in the Promotion of Access to Information Act 2 of 2000 (PAIA). The PAIA may be downloaded from: http://www.polity.org.za/attachment.php?aa_id=3569.",
          ],
        },
        {
          heading: "Payment options accepted",
          paragraphs: [
            "Payment may be made online via card (Visa & MasterCard) and instant EFT, or by a manual bank transfer into the Dubai Visas Online bank account - the details of which will be provided in your application process.",
          ],
        },
        {
          heading: "Card acquiring and security",
          paragraphs: [
            "Card transactions will be acquired for Dubai Visas Online by TravelPay (Pty) Ltd who is an approved third-party payment gateway. TravelPay uses very strict forms of encryption and no financial details are stored on the Dubai Visas Online website. Users may got to http://www.travelpay.com to view their security certificate and security policy.",
          ],
        },
        {
          heading: "Customer details seperate from card details",
          paragraphs: [
            "Customer details will be stored by Dubai Visas Online seperately from card details which are entered by the client on TravelPay's secure site. For more detail on TravelPay refer to http://www.travelpay.com.",
          ],
        },
        {
          heading: "Merchant Outlet country and transaction currency",
          paragraphs: [
            "The merchant outlet country at the time of presenting payment options to the cardholder is South Africa. Transaction currency is South African Rand (ZAR).",
          ],
        },
        {
          heading: "Responsibility",
          paragraphs: [
            "Dubai Visas Online takes responsibility for all aspects relating to the transaction including sale of goods and services sold on this website, customer service and support, dispute resolution and delivery of goods and services.",
          ],
        },
      ]}
    />
  )
}
