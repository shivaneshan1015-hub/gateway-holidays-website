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

  return {
    title: `${tour.title} — ${tour.duration} Private Tour | Gateway Holidays`,
    description: `${tour.subtitle}. Private AC Cab, handpicked resort stays, and 24/7 trip coordinator included. Customize your itinerary from Madurai.`,
    openGraph: {
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

  return (
    <IndividualTourClient tour={tour} relatedTours={relatedTours} />
  );
}
