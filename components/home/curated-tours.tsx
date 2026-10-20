"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Car,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Send,
  Compass,
} from "lucide-react";
import { tourPackages, TourCategory } from "@/data/tours";
import { SectionHeading } from "@/components/ui/section-heading";

interface CuratedToursProps {
  onOpenEnquiry: (tourTitle?: string) => void;
}

export function CuratedTours({ onOpenEnquiry }: CuratedToursProps) {
  const [activeTab, setActiveTab] = useState<"all" | TourCategory>("all");

  const filteredPackages =
    activeTab === "all"
      ? tourPackages.filter((t) => t.isFeatured)
      : tourPackages.filter((t) => t.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/60">
      {/* Background Soft Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E61E6E]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F25C05]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Handcrafted Itineraries"
          title="Featured Signature Journeys"
          subtitle="Carefully designed day-by-day travel plans. Every itinerary is fully customizable to your schedule, family preferences, and pace."
          center
          light={false}
        />

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            All Featured
          </button>
          <button
            onClick={() => setActiveTab("south-india")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "south-india"
                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            South India
          </button>
          <button
            onClick={() => setActiveTab("adventure-trekking")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "adventure-trekking"
                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/20"
                : "bg-orange-50 text-[#F25C05] hover:bg-orange-100 border border-orange-200 font-extrabold"
            }`}
          >
            🔥 Adventure & Trekking
          </button>
          <button
            onClick={() => setActiveTab("heritage-temple")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "heritage-temple"
                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            Heritage & Temples
          </button>
          <button
            onClick={() => setActiveTab("island")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "island"
                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            Island Tours
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "international"
                ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            International
          </button>
        </div>

        {/* Tour Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Card Image Header */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Badge top left */}
                {tour.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E61E6E] text-white shadow-lg">
                      {tour.badge}
                    </span>
                  </div>
                )}

                {/* Duration top right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 flex items-center gap-1 shadow-lg">
                    <Clock className="h-3 w-3 text-[#F25C05]" />
                    <span>{tour.duration}</span>
                  </span>
                </div>

                {/* Destination & Arrival Support Overlay at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 text-slate-100 drop-shadow">
                    <MapPin className="h-3.5 w-3.5 text-amber-300" />
                    <span>{tour.destination || "Destination Pickup Included"}</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm text-slate-200 font-medium">
                    {tour.theme}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {tour.subtitle}
                  </p>
                </div>

                {/* Inclusions Feature Strip: Transport Reassurance */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                    <Car className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{tour.transportIncluded}</span>
                  </div>
                  <p className="text-[11px] text-emerald-700/90">
                    Handpicked Resort Stay + Dedicated Driver + Toll & Parking All Included
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Itinerary Highlights:
                  </p>
                  {tour.highlights.slice(0, 3).map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F25C05] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: ZERO PRICE, ONLY BESPOKE INQUIRY & FULL ITINERARY */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry(tour.title)}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Tours Hub Button */}
        <div className="mt-14 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-bold text-sm shadow-sm transition-all hover:scale-105"
          >
            <span>Browse All Curated Tours & Custom Circuits</span>
            <ChevronRight className="h-4 w-4 text-[#F25C05]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
