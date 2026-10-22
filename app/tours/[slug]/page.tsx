import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Clock,
  MapPin,
  Car,
  CheckCircle2,
  XCircle,
  Calendar,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Send,
  Building,
  ChevronRight,
  ArrowRight,
  Share2,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { getTourBySlug, getRelatedTours, tourPackages } from "@/data/tours";
import { businessInfo } from "@/data/business";
import { IndividualTourClient } from "./tour-client";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found | Gateway Holidays",
      description: "The requested tour package could not be found.",
    };
  }

  const canonicalUrl = `https://gatewayholidays.in/tours/${tour.slug}`;

  return {
    title: `${tour.title} — ${tour.duration} Private Tour | Gateway Holidays`,
    description: `${tour.subtitle}. Private AC Cab, handpicked resort stays, and 24/7 trip coordinator included. Customize your itinerary from Madurai.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${tour.title} | Gateway Holidays`,
      description: tour.subtitle,
      url: canonicalUrl,
      siteName: "Gateway Holidays",
      type: "website",
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} | Gateway Holidays`,
      description: tour.subtitle,
      images: [tour.image],
    },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = getRelatedTours(tour.slug);

  // Schema.org Structured Data for Tour Packages (TouristTrip & Breadcrumbs)
  // NOTE: Strict adherence to prompt constraint: NO price or offers added.
  const tourSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `https://gatewayholidays.in/tours/${tour.slug}#trip`,
        name: tour.title,
        description: tour.overview || tour.subtitle,
        image: tour.image,
        touristType: tour.theme,
        touristDestination: {
          "@type": "TouristDestination",
          name: tour.destination,
        },
        provider: {
          "@type": "TravelAgency",
          name: "Gateway Holidays",
          url: "https://gatewayholidays.in",
          telephone: businessInfo.phonePrimary,
          address: {
            "@type": "PostalAddress",
            streetAddress: businessInfo.address,
            addressLocality: businessInfo.city,
            addressRegion: businessInfo.state,
            postalCode: businessInfo.postalCode,
            addressCountry: "IN",
          },
        },
        duration: `P${tour.daysCount}D`,
        itinerary: {
          "@type": "ItemList",
          numberOfItems: tour.itinerary?.length || 0,
          itemListElement: (tour.itinerary || []).map((day, idx) => ({
            "@type": "ListItem",
            position: day.day || idx + 1,
            item: {
              "@type": "TouristAttraction",
              name: day.title,
              description: day.description,
            },
          })),
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
            name: "Tours",
            item: "https://gatewayholidays.in/tours",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tour.title,
            item: `https://gatewayholidays.in/tours/${tour.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <IndividualTourClient tour={tour} relatedTours={relatedTours} />
    </>
  );
}
