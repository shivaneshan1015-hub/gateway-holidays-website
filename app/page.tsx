"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { Hero3D } from "@/components/home/hero-3d";
import { JourneyThemes3D } from "@/components/home/journey-themes-3d";
import { CuratedTours } from "@/components/home/curated-tours";
import { TransportBanner } from "@/components/home/transport-banner";
import { GoogleReviews } from "@/components/home/google-reviews";
import { WhyUs3D } from "@/components/home/why-us-3d";
import { EnquiryModal } from "@/components/tours/enquiry-modal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | undefined>();

  const handleOpenEnquiry = (destination?: string) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Homepage Flow (Light Theme) */}
      <main className="flex-1">
        {/* 1. 3D Hero Section */}
        <Hero3D onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. 6 Curated Travel Themes (Includes Adventure & Trekking) */}
        <JourneyThemes3D />

        {/* 3. Featured Curated Itineraries (Zero Rates Policy) */}
        <CuratedTours onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Transport Assurance: Private Cab Available / Included (No Raw Fleet Models) */}
        <TransportBanner onOpenEnquiry={() => handleOpenEnquiry("Custom Cab + Tour Package")} />

        {/* 5. Google Maps Verified Testimonials (Anna Nagar Madurai 4.9★) */}
        <GoogleReviews />

        {/* 6. Why Choose Us — 4 Pillars of Trust */}
        <WhyUs3D />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Quick Action Bar */}
      <StickyMobileCTA onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Bespoke Quotation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDestination={selectedDestination}
      />
    </div>
  );
}
