"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  PhoneCall,
  UserCheck,
} from "lucide-react";
import { businessInfo } from "@/data/business";

interface TransportBannerProps {
  onOpenEnquiry: () => void;
}

export function TransportBanner({ onOpenEnquiry }: TransportBannerProps) {
  return (
    <section id="transport" className="py-16 bg-gradient-to-r from-emerald-50/70 via-white to-orange-50/70 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white border border-emerald-200/90 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold mb-4">
            <Car className="h-4 w-4 text-emerald-600" />
            <span>Private Cab Available & Included With Every Tour</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Stress-Free Travel with Dedicated{" "}
                <span className="text-emerald-600">Private AC Cab</span> & Chauffeur
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                Every Gateway Holidays tour is a private experience — we never bundle you with strangers. A dedicated, sanitized air-conditioned vehicle is arranged exclusively for your family or group from pickup to return.
              </p>

              {/* 4 Feature Reassurance Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <UserCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Verified Local Drivers</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Active onboarding & strict vetting for polite, experienced mountain drivers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <MapPin className="h-5 w-5 text-[#F25C05] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Doorstep Pickup & Drop</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Pickup from your home, Madurai Airport, Railway Station, or nearby cities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Zero Fuel or Toll Haggling</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Driver batta, interstate permits, tolls, and parking are fully pre-included.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Clock className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Flexible Sightseeing Pace</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Stop for photos, refreshments, and sightseeing at your own family schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quick Consultation Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center space-y-4 shadow-xl">
                <div className="h-12 w-12 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Car className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Need Cab + Hotel Custom Package?</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Tell us your pickup city and preferred dates. We will arrange the ideal private cab for your route.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    Request Cab Tour Package
                  </button>

                  <a
                    href={`tel:${businessInfo.phoneClean}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Call Concierge: {businessInfo.phonePrimary}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
