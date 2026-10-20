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
} from "lucide-react";
import { googleReviews } from "@/data/reviews";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";

export function GoogleReviews() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredReviews =
    activeFilter === "all"
      ? googleReviews
      : googleReviews.filter((r) =>
          r.tourTaken.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/60">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Trust Scorecard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <SectionHeading
              badge="Google Maps Verified Reviews"
              title="Loved by Travelers Across Tamil Nadu"
              subtitle="Authentic experiences shared by our valued guests. Every itinerary is backed by personalized care from our Anna Nagar Madurai office."
              light={false}
            />
          </div>

          {/* Google Scorecard Box (Crisp White Light Theme) */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200 flex items-center gap-6 shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-md">
                G
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-lg font-extrabold text-slate-900 ml-1.5">
                    {businessInfo.rating}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Over {businessInfo.reviewCount}+ Google Maps Ratings
                </p>
              </div>
            </div>

            <div className="border-l border-slate-200 pl-5">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 transition-colors border border-slate-200"
              >
                <span>View on Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#F25C05]" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs text-slate-500 mr-2 font-bold">Filter by Tour:</span>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setActiveFilter("kerala")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "kerala"
                ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Kerala & Munnar
          </button>
          <button
            onClick={() => setActiveFilter("adventure")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "adventure"
                ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            🔥 Adventure & Safari
          </button>
          <button
            onClick={() => setActiveFilter("heritage")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "heritage"
                ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Rameswaram Pilgrimage
          </button>
          <button
            onClick={() => setActiveFilter("kashmir")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "kashmir"
                ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Kashmir Paradise
          </button>
          <button
            onClick={() => setActiveFilter("bali")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "bali"
                ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Bali Island
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
                    className={`h-11 w-11 rounded-2xl ${rev.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-sm`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    </h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#F25C05]" />
                      <span>{rev.location}</span>
                    </p>
                  </div>
                </div>

                {/* Stars and Tour Badge */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-[11px] text-slate-500 ml-2 font-medium">{rev.date}</span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {rev.tourTaken}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Verified Google maps badge at bottom */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <ThumbsUp className="h-3 w-3" /> Verified Google Customer
                </span>
                <span className="text-slate-400">Google Maps Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-5 w-5 text-[#F25C05]" />
              <span>Visit Us in Person at Anna Nagar, Madurai</span>
            </h4>
            <p className="text-xs text-slate-600">
              {businessInfo.address} • Open Mon-Sat 9:30 AM to 8:00 PM for face-to-face itinerary consultation.
            </p>
          </div>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F25C05] transition-colors flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
