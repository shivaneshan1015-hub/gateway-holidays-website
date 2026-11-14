import React from "react";
import type { Metadata } from "next";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact Us — Anna Nagar, Madurai",
  description:
    "Get in touch with Gateway Holidays Madurai. Call +91 81227 12587 or visit our office at 4C, Opp. Ambika College, Anna Nagar, Madurai. Plan your trip with us on WhatsApp.",
  alternates: {
    canonical: "https://gatewayholidays.in/contact",
  },
  openGraph: {
    title: "Contact Gateway Holidays — Anna Nagar, Madurai",
    description:
      "Call +91 81227 12587 or visit our office at 4C, Opp. Ambika College, Anna Nagar, Madurai. Plan your trip with us on WhatsApp.",
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
          "@type": ["TravelAgency", "LocalBusiness"],
          name: "Gateway Holidays",
          telephone: businessInfo.phonePrimary,
          email: businessInfo.email,
          currenciesAccepted: "INR",
          paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
          hasMap: businessInfo.googleMapsUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: businessInfo.address,
            addressLocality: businessInfo.city,
            addressRegion: businessInfo.state,
            postalCode: businessInfo.postalCode,
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.9252,
            longitude: 78.1198,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "19:00",
            },
          ],
          sameAs: [
            businessInfo.socials.instagram,
            businessInfo.socials.facebook,
            businessInfo.googleMapsUrl,
          ],
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
