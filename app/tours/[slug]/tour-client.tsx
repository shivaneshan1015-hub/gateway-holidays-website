"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Compass,
  PhoneCall,
  UserCheck,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { EnquiryModal } from "@/components/tours/enquiry-modal";
import { TourPackage } from "@/data/tours";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";

interface IndividualTourClientProps {
  tour: TourPackage;
  relatedTours: TourPackage[];
}

export function IndividualTourClient({
  tour,
  relatedTours,
}: IndividualTourClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<number | null>(1);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Gateway Holidays! I am interested in the "${tour.title}" (${tour.duration}). Could you share a customized quotation and itinerary?`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />

      {/* Hero Header Section */}
      <section className="relative h-[480px] sm:h-[540px] w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E61E6E] text-white shadow-lg">
                {tour.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-amber-300 border border-white/20 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{tour.duration}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 backdrop-blur-md flex items-center gap-1.5">
                <Car className="h-3.5 w-3.5" />
                <span>Private Cab Included</span>
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight drop-shadow-md">
              {tour.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed drop-shadow">
              {tour.subtitle}
            </p>

            {/* Quick Details Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-200">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#F25C05]" />
                <span>Pickup & Assistance: <strong className="text-white">{tour.pickupAssistance || "On Arrival at Destination / Station / Airport"}</strong></span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Building className="h-4 w-4 text-amber-300" />
                <span>Stay: <strong className="text-white">{tour.stayStyle}</strong></span>
              </span>
              <span>•</span>
              <span className="text-slate-300">Theme: {tour.theme}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Action Strip: No Rates, Direct Customized Quotes */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-xs py-3.5 px-4 text-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#E61E6E] to-[#F25C05] flex items-center justify-center font-bold text-white text-sm shadow-sm">
              GH
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">100% Bespoke Itinerary</p>
              <p className="text-sm font-bold text-slate-900">Private Tour • Custom Dates</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Concierge</span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Get Custom Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Overview, Itinerary Timeline, Inclusions */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#F25C05]" />
                <span>Tour Overview</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {tour.overview}
              </p>

              {/* Highlights Box */}
              <div className="mt-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Key Experience Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-[#F25C05] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Day-by-Day Interactive Timeline */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#E61E6E]" />
                    <span>Day-by-Day Detailed Itinerary</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Every day is private and adjustable to your family&apos;s schedule.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#F25C05] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  {tour.daysCount} Days / {tour.nightsCount} Nights
                </span>
              </div>

              <div className="space-y-4">
                {tour.itinerary.map((day) => {
                  const isCurrent = activeDay === day.day;

                  return (
                    <div
                      key={day.day}
                      className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                        isCurrent
                          ? "bg-white border-[#F25C05] shadow-lg ring-1 ring-[#F25C05]"
                          : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveDay(isCurrent ? null : day.day)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-11 w-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                              isCurrent
                                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            Day {day.day}
                          </div>

                          <div>
                            <span className="text-[11px] font-bold text-[#F25C05] uppercase tracking-wider block">
                              {day.location}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900">
                              {day.title}
                            </h3>
                          </div>
                        </div>

                        <ChevronRight
                          className={`h-5 w-5 text-slate-400 transition-transform ${
                            isCurrent ? "rotate-90 text-[#F25C05]" : ""
                          }`}
                        />
                      </button>

                      {isCurrent && (
                        <div className="px-6 pb-6 pt-4 border-t border-slate-100 space-y-4 bg-slate-50/50">
                          <div className="space-y-3">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5 text-[#F25C05]" />
                              <span>Day {day.day} Plan & Sightseeing Highlights</span>
                            </p>

                            <ul className="space-y-2.5">
                              {(day.bullets && day.bullets.length > 0
                                ? day.bullets
                                : [day.description]
                              ).map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-orange-200 transition-colors"
                                >
                                  <div className="h-5 w-5 rounded-lg bg-orange-50 text-[#F25C05] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/60 font-bold text-[10px]">
                                    {idx + 1}
                                  </div>
                                  <span className="leading-relaxed font-medium">
                                    {bullet}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span>What&apos;s Included & Excluded</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Package Inclusions</span>
                  </h3>
                  <div className="space-y-2.5">
                    {tour.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div className="p-6 rounded-3xl bg-rose-50/80 border border-rose-200 space-y-3">
                  <h3 className="text-sm font-bold text-rose-800 uppercase tracking-wider flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-600" />
                    <span>Package Exclusions</span>
                  </h3>
                  <div className="space-y-2.5">
                    {tour.exclusions.map((exc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Private Cab Details & Consultation Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Sticky Box (Clean White) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5 sticky top-36">
              <div>
                <span className="text-[11px] font-bold text-[#F25C05] uppercase tracking-wider block">
                  Bespoke Consultation
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Customize This Tour
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Travel on your own dates with your family. Zero hidden charges.
                </p>
              </div>

              {/* Private Cab Inclusion Reassurance */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <Car className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Private AC Cab Service</span>
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Dedicated sanitized vehicle for your family throughout the tour. Experienced local driver, toll gates, fuel, and parking included.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Request Custom Quotation</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Office Contact Info */}
              <div className="pt-3 border-t border-slate-100 text-center space-y-1">
                <p className="text-[11px] text-slate-500">
                  Prefer a direct phone conversation?
                </p>
                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#F25C05] transition-colors"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#F25C05]" />
                  <span>{businessInfo.phonePrimary}</span>
                </a>
                <p className="text-[10px] text-slate-500">
                  Anna Nagar, Madurai (Opp. Ambika College)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: RELEVANT / RELATED TOURS YOU MAY ALSO LIKE */}
        <section className="pt-16 border-t border-slate-200 space-y-10">
          <SectionHeading
            badge="Continue Exploring"
            title="Relevant Tours You May Also Like"
            subtitle="Discover other handpicked journeys that pair wonderfully with your travel style."
            center
            light={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTours.map((relTour) => (
              <div
                key={relTour.id}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={relTour.image}
                    alt={relTour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E61E6E] text-white shadow-lg">
                      {relTour.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 flex items-center gap-1 shadow-lg">
                      <Clock className="h-3 w-3 text-[#F25C05]" />
                      <span>{relTour.duration}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors">
                      {relTour.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {relTour.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                    <Car className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Private AC Cab Included</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                    <Link
                      href={`/tours/${relTour.slug}`}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>View Itinerary</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      onClick={() => setModalOpen(true)}
                      className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA onOpenEnquiry={() => setModalOpen(true)} />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTourSlug={tour.slug}
        defaultDestination={tour.title}
      />
    </div>
  );
}
