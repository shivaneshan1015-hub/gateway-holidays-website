"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { Hero3D } from "@/components/home/hero-3d";
import { JourneyThemes3D } from "@/components/home/journey-themes-3d";
import { CuratedTours } from "@/components/home/curated-tours";
import { SpecialOffers } from "@/components/home/special-offers";
import { TransportBanner } from "@/components/home/transport-banner";
import { AboutUs } from "@/components/home/about-us";
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

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What tour and travel services does Gateway Holidays offer in Madurai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gateway Holidays is a verified tour operator based in Anna Nagar, Madurai, providing customized holiday packages, private AC cab rentals with professional drivers, temple pilgrimage circuits, Kerala hill station tours, and island/international getaways."
        }
      },
      {
        "@type": "Question",
        name: "Are highway tolls, parking fees, and driver allowances included in your tour packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All Gateway Holidays packages follow a transparent pricing model where dedicated private AC vehicle, fuel, driver night allowances, highway tolls, parking charges, and interstate road permits are included and listed in your quote."
        }
      },
      {
        "@type": "Question",
        name: "Can we get doorstep pickup from Madurai Airport (IXM) or Madurai Railway Station (MDU)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our drivers provide direct on-arrival reception and pickup from Madurai Airport (IXM), Madurai Junction (MDU), Mattuthavani Bus Stand, or any local hotel/residence in Madurai."
        }
      },
      {
        "@type": "Question",
        name: "Which popular destinations can be visited on road trips from Madurai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular road trip destinations from Madurai include Rameswaram & Dhanushkodi (3 hrs via NH-87), Kodaikanal (3.5 hrs via Batlagundu), Munnar (4.5 hrs via Bodimettu), Kanyakumari (4 hrs via NH-44), and Thanjavur (3.5 hrs via Trichy)."
        }
      },
      {
        "@type": "Question",
        name: "Where is the Gateway Holidays office located in Madurai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our head office is located at 4C, Opposite Ambika College, Anna Nagar, Madurai, Tamil Nadu 625020. We welcome visitors for in-person itinerary consultations Monday through Saturday."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
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

        {/* 4. Special Seasonal Offers: Free Gifts on Domestic & 10% Off International */}
        <SpecialOffers onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Transport Assurance: Private Cab Available / Included (No Raw Fleet Models) */}
        <TransportBanner onOpenEnquiry={() => handleOpenEnquiry("Custom Cab + Tour Package")} />

        {/* 6. About Us: Safe, Reliable & Affordable (Anna Nagar, Madurai) */}
        <AboutUs onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 7. Google Maps Verified Testimonials (Anna Nagar Madurai 4.8★) */}
        <GoogleReviews />

        {/* 8. Why Choose Us — 4 Pillars of Trust */}
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
