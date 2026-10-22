import React from "react";
import type { Metadata } from "next";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact Us — Anna Nagar, Madurai Head Office | Gateway Holidays",
  description:
    "Get in touch with Gateway Holidays Madurai. Call +91 81110 18881 or visit our office at 4C, Opp. Ambika College, Anna Nagar, Madurai. 24/7 WhatsApp holiday support.",
  alternates: {
    canonical: "https://gatewayholidays.in/contact",
  },
  openGraph: {
    title: "Contact Gateway Holidays — Anna Nagar, Madurai",
    description:
      "Call +91 81110 18881 or visit our office at 4C, Opp. Ambika College, Anna Nagar, Madurai. 24/7 WhatsApp holiday support.",
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
          name: "Gateway Holidays",
          telephone: businessInfo.phonePrimary,
          email: businessInfo.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: businessInfo.address,
            addressLocality: businessInfo.city,
            addressRegion: businessInfo.state,
            postalCode: businessInfo.postalCode,
            addressCountry: "IN",
          },
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
