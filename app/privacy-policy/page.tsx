import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { businessInfo } from "@/data/business";

const LAST_UPDATED = "14 November 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Gateway Holidays, Madurai collects, uses and protects the personal details you share when you enquire about or book a tour.",
  alternates: {
    canonical: "https://gatewayholidays.in/privacy-policy",
  },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are",
    body: (
      <p>
        This website is run by {businessInfo.name}, {businessInfo.address}, {businessInfo.city},{" "}
        {businessInfo.state} {businessInfo.postalCode}, India. For any question about your personal
        details, email <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a> or call{" "}
        <a href={`tel:+${businessInfo.phoneClean}`}>{businessInfo.phonePrimary}</a>.
      </p>
    ),
  },
  {
    heading: "What we collect",
    body: (
      <>
        <p>We only collect what you choose to give us through our enquiry and trip planning forms, by phone or on WhatsApp:</p>
        <ul>
          <li>Your name and phone or WhatsApp number</li>
          <li>Your email address, if you give it</li>
          <li>Trip details: destination, travel month or dates, number of days, number of adults and children, hotel category, cab needs and any special requests</li>
          <li>For confirmed bookings, details needed to arrange the trip, such as traveller names and the payments you make to us</li>
        </ul>
        <p>Our website also keeps standard technical logs (such as IP address, browser type and pages visited) for security and to keep the site running.</p>
      </>
    ),
  },
  {
    heading: "Why we use it",
    body: (
      <ul>
        <li>To reply to your enquiry and send you an itinerary and quotation</li>
        <li>To arrange and manage your booking: hotels, cabs, permits and vouchers</li>
        <li>To contact you about your trip by phone, WhatsApp or email</li>
        <li>To meet our legal, tax and accounting duties</li>
      </ul>
    ),
  },
  {
    heading: "Your consent",
    body: (
      <p>
        When you submit a form or message us, you agree that we may use your details for the purposes
        above. You can withdraw this consent at any time by contacting us. We will then stop contacting
        you, except where we must keep records by law or to complete a booking you have already made.
      </p>
    ),
  },
  {
    heading: "Who we share it with",
    body: (
      <>
        <p>We do not sell your personal details. We share them only when needed to run your trip or this website:</p>
        <ul>
          <li>Hotels, cab operators, guides and other travel partners who deliver the services you book</li>
          <li>Service providers that host our website and our customer database on our behalf</li>
          <li>WhatsApp (Meta), when you choose to contact us there</li>
          <li>Government authorities, when the law requires it</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How long we keep it",
    body: (
      <p>
        We keep enquiry details for as long as we need them to reply and follow up, and booking records
        for as long as Indian tax and accounting law requires. After that we delete them or make them
        anonymous.
      </p>
    ),
  },
  {
    heading: "How we protect it",
    body: (
      <p>
        Your details are stored in a secured database that only authorised Gateway Holidays staff can
        access, and our website uses HTTPS. No method is completely secure, but we take reasonable steps
        to protect your information.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Under India&apos;s Digital Personal Data Protection Act, 2023, you can ask us to tell you what
        details we hold about you, correct or update them, or delete them. Contact us using the details
        above and we will respond within a reasonable time.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be on this page,
        with the date it was last updated.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
          <div className="mt-8 space-y-8 text-slate-700 leading-relaxed [&_a]:text-[#E61E6E] [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mt-3 [&_p+p]:mt-3">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">{s.heading}</h2>
                {s.body}
              </section>
            ))}
          </div>
          <p className="mt-12 text-sm text-slate-500">
            Questions? <Link href="/contact">Contact us</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
