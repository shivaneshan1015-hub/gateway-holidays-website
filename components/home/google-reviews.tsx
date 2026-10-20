"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Quote,
  MessageCircle,
  ThumbsUp,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { googleReviews } from "@/data/reviews";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";

export function GoogleReviews() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredReviews =
    activeFilter === "all"
      ? googleReviews
      : googleReviews.filter((r) => r.category === activeFilter);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/60">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Trust Scorecard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <SectionHeading
              badge="Official Google Maps Reviews"
              title="Verified Guest Reviews on Google"
              subtitle="Real, unfiltered reviews from students, corporate teams, and families who traveled with Gateway Holidays from our Anna Nagar, Madurai hub."
              light={false}
            />
          </div>

          {/* Google Scorecard Box */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200 flex flex-wrap items-center gap-6 shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#EA4335] via-[#FBBC05] to-[#4285F4] text-white font-black text-xl flex items-center justify-center shadow-md">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xl font-extrabold text-slate-900">
                    {businessInfo.rating}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">/ 5.0</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 inline" />
                  {businessInfo.reviewCount} Verified Google Reviews
                </p>
              </div>
            </div>

            <div className="border-l border-slate-200 pl-5">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#F25C05] text-xs font-bold text-white transition-colors shadow-xs"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs text-slate-500 mr-2 font-bold">Category:</span>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-slate-900 text-white font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Reviews ({googleReviews.length})
          </button>
          <button
            onClick={() => setActiveFilter("corporate")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "corporate"
                ? "bg-slate-900 text-white font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            🏫 Institutional & Corporate
          </button>
          <button
            onClick={() => setActiveFilter("hill-station")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "hill-station"
                ? "bg-slate-900 text-white font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            ⛰️ Munnar Hill Station
          </button>
          <button
            onClick={() => setActiveFilter("packages")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "packages"
                ? "bg-slate-900 text-white font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            ✨ Tour Packages
          </button>
          <button
            onClick={() => setActiveFilter("hospitality")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "hospitality"
                ? "bg-slate-900 text-white font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            🤝 Hospitality
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-300 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative group"
            >
              {/* Quote Watermark */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-100 pointer-events-none group-hover:text-amber-100 transition-colors" />

              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`h-11 w-11 rounded-2xl ${rev.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    </h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#F25C05] shrink-0" />
                      <span>{rev.location}</span>
                    </p>
                  </div>
                </div>

                {/* Stars and Tour Badge */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/60">
                    {rev.tourTaken}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100">
                  &ldquo;{rev.content}&rdquo;
                </p>

                {/* Owner Response Box */}
                {rev.ownerResponse && (
                  <div className="p-3 rounded-2xl bg-amber-50/50 border border-amber-200/50 text-[11px] space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-amber-950">
                        <MessageCircle className="h-3.5 w-3.5 text-[#F25C05]" />
                        <span>Response from Gateway Holidays</span>
                      </div>
                      {rev.ownerResponseDate && (
                        <span className="text-[10px] text-amber-800/70">{rev.ownerResponseDate}</span>
                      )}
                    </div>
                    <p className="text-slate-600 pl-5 text-[11px] leading-relaxed italic">
                      &ldquo;{rev.ownerResponse}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Verified Google maps badge at bottom */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <ThumbsUp className="h-3 w-3" /> Verified Google Customer
                </span>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps Review</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Profile Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <Building2 className="h-5 w-5 text-[#F25C05]" />
              <span>Gateway Holidays — Anna Nagar, Madurai Office</span>
            </h4>
            <p className="text-xs text-slate-600">
              {businessInfo.address} • Rated 4.8 / 5.0 with {businessInfo.reviewCount} reviews on Google Maps.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-[#F25C05] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>View All Reviews on Google</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
