"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gift,
  Percent,
  Sparkles,
  Plane,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HeartHandshake,
} from "lucide-react";

interface SpecialOffersProps {
  onOpenEnquiry: (offerContext?: string) => void;
}

export function SpecialOffers({ onOpenEnquiry }: SpecialOffersProps) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden border-b border-slate-200/60">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/80 text-xs font-bold text-slate-800 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F25C05]" />
            <span>Exclusive Seasonal Privileges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Special Booking Rewards for Every Traveler
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether you are exploring holy South Indian temple circuits, hill stations in Munnar, or crossing oceans to Bali and Dubai — enjoy hand-crafted rewards from Gateway Holidays.
          </p>
        </div>

        {/* Dual Promotional Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Domestic Packages (Free Gifts) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white border-2 border-amber-200/90 p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden group"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-amber-400/20 via-orange-400/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider border border-amber-300/80">
                  <Gift className="h-4 w-4 text-[#F25C05]" />
                  Domestic Privilege
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Clock className="h-3 w-3" />
                  All 2026 Departures
                </span>
              </div>

              {/* Title & Offer Headline */}
              <div className="space-y-3 mb-6">
                <div className="inline-block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    For All India & South India Tours
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Free Travel Gift Kit on Every Domestic Package
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Book any South India, North India, Kerala, Heritage Pilgrimage, or Hill Station package and receive our bespoke complimentary travel kit packed with essential tour accessories and surprise holiday gifts.
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-3 pt-2 mb-8 border-t border-slate-100">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Curated Travel Hamper:</strong> Premium travel accessories, organizer kit, and special holiday keepsake for your family.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed for Every Group:</strong> Automatic enrollment across all 45+ domestic packages without minimum seat caps.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Delivered Upon Arrival:</strong> Handed over by your dedicated private cab driver or local tour executive.
                  </span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenEnquiry("Domestic Tour (Free Gift Claimed)")}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#F25C05] to-[#E61E6E] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                <span>Claim Gift & Plan Tour</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/tours?category=south-india"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200"
              >
                <Compass className="h-3.5 w-3.5" />
                <span>Browse Domestic</span>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: International Packages (Flat 10% Offer) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white border-2 border-rose-200/90 p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden group"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-rose-500/20 via-pink-400/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-100 text-rose-900 font-extrabold text-xs uppercase tracking-wider border border-rose-300/80">
                  <Percent className="h-4 w-4 text-[#E61E6E]" />
                  International Offer
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                  <Plane className="h-3 w-3 text-[#E61E6E]" />
                  Flat 10% Savings
                </span>
              </div>

              {/* Title & Offer Headline */}
              <div className="space-y-3 mb-6">
                <div className="inline-block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Bali • Dubai • Thailand • Malaysia • Singapore
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Flat 10% OFF on All International Packages
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Embark on your dream international vacation with exclusive savings. Enjoy an instant 10% concession applied across complete customized land packages and luxury island stays.
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-3 pt-2 mb-8 border-t border-slate-100">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Instant Concession:</strong> 10% discount transparently calculated on your customized itinerary quotation.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Full International Inclusions:</strong> Handpicked 4★/5★ hotels, private airport transfers, and guided sightseeing.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Visa & Travel Guidance:</strong> Free step-by-step visa assistance and document clearance handled directly from Madurai.
                  </span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenEnquiry("International Tour (10% Off Claimed)")}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E61E6E] to-[#9333EA] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-rose-500/20 transition-all cursor-pointer"
              >
                <span>Unlock 10% OFF & Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/tours?category=international"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200"
              >
                <Plane className="h-3.5 w-3.5" />
                <span>View International</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Reassurance Micro-banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Direct Booking Privilege — No Hidden Agency Surcharges</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <HeartHandshake className="h-4 w-4 text-[#F25C05]" />
            <span>Honored Across All Family, Corporate & Honeymoon Itineraries</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Verified & Managed from Anna Nagar, Madurai Office</span>
          </div>
        </div>
      </div>
    </section>
  );
}
