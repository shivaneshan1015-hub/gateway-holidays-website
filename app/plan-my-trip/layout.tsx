import React from "react";
import type { Metadata } from "next";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Plan My Trip — Bespoke Itinerary & Cab Quotation | Gateway Holidays",
  description:
    "Design your custom holiday package with Gateway Holidays. Choose your travel dates, hill station or heritage destination, resort category, and AC cab preference for a personalized itinerary from Madurai.",
  alternates: {
    canonical: "https://gatewayholidays.in/plan-my-trip",
  },
  openGraph: {
    title: "Plan My Trip — Custom Holiday Planning | Gateway Holidays",
    description:
      "Design your custom holiday package with dedicated private AC cabs and 24/7 personal tour assistance.",
    url: "https://gatewayholidays.in/plan-my-trip",
    siteName: "Gateway Holidays",
    type: "website",
  },
};

export default function PlanMyTripLayout({ children }: { children: React.ReactNode }) {
  const planSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://gatewayholidays.in/plan-my-trip#service",
        name: "Custom Tour Itinerary & Travel Planning Service",
        serviceType: "Bespoke Tour Package Planning & Private AC Cab Rental",
        description: "Personalized holiday planning service for South India, hill stations, heritage temples, and international destinations.",
        provider: {
          "@type": "TravelAgency",
          name: "Gateway Holidays",
          url: "https://gatewayholidays.in",
          telephone: businessInfo.phonePrimary,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
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
            name: "Plan My Trip",
            item: "https://gatewayholidays.in/plan-my-trip",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planSchema) }}
      />
      {children}
    </>
  );
}
