import React from "react";
import type { Metadata } from "next";
import { BlogShell } from "@/components/blog/blog-shell";

export const metadata: Metadata = {
  title: "Travel Guides, Weekend Getaways & Itinerary Insights | Gateway Holidays Blog",
  description:
    "Expert travel guides, hill station itineraries, temple circuit tips, and local insider advice from Gateway Holidays Madurai.",
  alternates: {
    canonical: "https://gatewayholidays.in/blog",
  },
  openGraph: {
    title: "Gateway Holidays Travel Blog & Destination Guides",
    description: "Expert travel guides, hill station itineraries, and temple circuit tips from Madurai.",
    url: "https://gatewayholidays.in/blog",
    siteName: "Gateway Holidays",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <BlogShell>{children}</BlogShell>;
}
