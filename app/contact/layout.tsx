import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Anna Nagar, Madurai",
  description:
    "Get in touch with Gateway Holidays Madurai. Call +91 81110 18881 or visit our office at 4C, Opp. Ambiga College, Anna Nagar, Madurai. Plan your trip with us on WhatsApp.",
  alternates: {
    canonical: "https://gatewayholidays.in/contact",
  },
  openGraph: {
    title: "Contact Gateway Holidays — Anna Nagar, Madurai",
    description:
      "Call +91 81110 18881 or visit our office at 4C, Opp. Ambiga College, Anna Nagar, Madurai. Plan your trip with us on WhatsApp.",
    url: "https://gatewayholidays.in/contact",
    siteName: "Gateway Holidays",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://gatewayholidays.in/contact#webpage",
        url: "https://gatewayholidays.in/contact",
        name: "Contact Gateway Holidays Madurai",
        description: "Official contact portal, office address, and direct phone lines for Gateway Holidays.",
        mainEntity: {
          "@type": "TravelAgency",
          "@id": "https://gatewayholidays.in/#agency",
          name: "Gateway Holidays",
          url: "https://gatewayholidays.in",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gatewayholidays.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://gatewayholidays.in/contact",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
