import React from "react";
import type { Metadata } from "next";
import { tourPackages } from "@/data/tours";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Tour Packages — South India, Hill Stations, Temples & Escapes | Gateway Holidays",
  description:
    "Explore 50+ handpicked holiday packages from Madurai with dedicated AC cabs, luxury resort stays, and 24/7 personal trip concierge. Customize your South India, Kerala, Heritage, or International tour.",
  alternates: {
    canonical: "https://gatewayholidays.in/tours",
  },
  openGraph: {
    title: "Tour Packages — Customized Holidays from Madurai | Gateway Holidays",
    description:
      "Explore 50+ handpicked holiday packages from Madurai with dedicated AC cabs and 24/7 personal trip concierge.",
    url: "https://gatewayholidays.in/tours",
    siteName: "Gateway Holidays",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Gateway Holidays Tour Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Packages | Gateway Holidays Madurai",
    description: "Explore 50+ handpicked holiday packages from Madurai.",
  },
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  // Schema.org ItemList for Tour Catalog (Strictly NO pricing fields)
  const catalogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Gateway Holidays Tour Packages Catalog",
        description: "Curated collection of South India, Heritage, Adventure, and International tour packages from Madurai.",
        numberOfItems: tourPackages.length,
        itemListElement: tourPackages.map((tour, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: tour.title,
          url: `https://gatewayholidays.in/tours/${tour.slug}`,
          image: tour.image,
          description: tour.subtitle,
        })),
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
            name: "Tours",
            item: "https://gatewayholidays.in/tours",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      {children}
    </>
  );
}
