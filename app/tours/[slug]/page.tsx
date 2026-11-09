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
  const absoluteImageUrl = tour.image.startsWith("/")
    ? `https://gatewayholidays.in${tour.image}`
    : tour.image;

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
          url: absoluteImageUrl,
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
      images: [absoluteImageUrl],
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
  const absoluteImageUrl = tour.image.startsWith("/")
    ? `https://gatewayholidays.in${tour.image}`
    : tour.image;

  // Schema.org Structured Data for Tour Packages (TouristTrip, Breadcrumbs & AEO FAQPage)
  // NOTE: Strict adherence to prompt constraint: NO price or offers added.
  const tourSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `https://gatewayholidays.in/tours/${tour.slug}#trip`,
        name: tour.title,
        description: tour.overview || tour.subtitle,
        image: absoluteImageUrl,
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
          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.9252,
            longitude: 78.1198,
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
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is included in the ${tour.title} package?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The ${tour.title} includes dedicated private AC cab transportation with experienced driver, fuel, highway tolls, parking fees, interstate permits, handpicked hotel/resort stays, daily breakfast, and 24/7 on-tour customer support from Gateway Holidays.`
            }
          },
          {
            "@type": "Question",
            name: `What is the pickup and starting point for ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Pickup is arranged upon arrival at Madurai Airport (IXM), Madurai Junction (MDU), or your doorstep in Southern Tamil Nadu. Custom pickups from Coimbatore, Trichy, or Cochin are also available.`
            }
          },
          {
            "@type": "Question",
            name: `Can we customize the itinerary or hotel category for this ${tour.duration} tour?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, all Gateway Holidays packages are 100% customizable. You can adjust the duration, add stopovers, upgrade to luxury pool villas, or modify sightseeing spots by connecting with our trip architect on WhatsApp.`
            }
          }
        ]
      }
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
