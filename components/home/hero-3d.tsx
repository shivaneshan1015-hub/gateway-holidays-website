"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Plane,
  Compass,
  ShieldCheck,
  Star,
  MapPin,
  ChevronRight,
  MessageCircle,
  Clock,
  Car,
  Calendar,
} from "lucide-react";
import { businessInfo } from "@/data/business";

interface Hero3DProps {
  onOpenEnquiry: (destination?: string) => void;
}

const featuredSpots = [
  {
    name: "Munnar & Alleppey",
    category: "Kerala Mist & Houseboats",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    slug: "munnar",
    tag: "Most Popular",
    color: "from-emerald-600/80 to-teal-900/90",
  },
  {
    name: "Kolukkumalai Adventure",
    category: "Sunrise Jeep Safari & Clouds",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    slug: "vagamon-adventure-tour",
    tag: "Adventure Special",
    color: "from-orange-600/80 to-amber-950/90",
  },
  {
    name: "Rameswaram & Dhanushkodi",
    category: "Pamban Bridge & Sacred Island",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    slug: "rameshwaram",
    tag: "Spiritual Circuit",
    color: "from-amber-600/80 to-orange-950/90",
  },
  {
    name: "Bali Luxury Escape",
    category: "Private Pool Villa & Ubud Swing",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    slug: "bali-tour",
    tag: "Passport Favorite",
    color: "from-rose-600/80 to-pink-950/90",
  },
];

export function Hero3D({ onOpenEnquiry }: Hero3DProps) {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const activeSpot = featuredSpots[activeSpotIndex];

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.defaultWhatsAppMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white text-slate-900 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
      {/* Soft Light Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#E61E6E]/10 via-[#F25C05]/10 to-[#F59E0B]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F25C05]/8 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#E61E6E]/8 blur-[100px] pointer-events-none rounded-full" />

      {/* Decorative SVG Flight Paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100,200 Q 400,-50 900,250 T 1800,100"
          fill="none"
          stroke="url(#hero-gradient)"
          strokeWidth="2.5"
          className="animate-flight-path"
        />
        <path
          d="M -50,450 Q 500,250 1100,550 T 1900,400"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          className="animate-flight-path"
          style={{ animationDuration: "6s" }}
        />
        <defs>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E61E6E" />
            <stop offset="50%" stopColor="#F25C05" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Trust Badges & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-semibold text-amber-900 shadow-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-amber-300">|</span>
              <span className="font-bold text-slate-800">Anna Nagar Madurai&apos;s 4.9★ Rated Travel Curator</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-slate-900">
              Your Journey,{" "}
              <span className="text-gradient-brand">Crafted Perfectly</span>{" "}
              Without The Hassle.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From misty South Indian hill stations and high-altitude <span className="text-[#F25C05] font-semibold">Adventure Treks</span> to sacred temple circuits and tropical island escapes. Every tour includes a <strong className="text-slate-900 font-bold">dedicated private AC cab</strong>, handpicked resorts, and 24/7 personal trip coordination.
            </p>

            {/* 3 Core Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs text-left">
                <Car className="h-5 w-5 text-emerald-600 mb-1" />
                <p className="text-xs font-bold text-slate-900">Private AC Cab</p>
                <p className="text-[11px] text-slate-500">Included on all tours</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs text-left">
                <Compass className="h-5 w-5 text-[#F25C05] mb-1" />
                <p className="text-xs font-bold text-slate-900">100% Customized</p>
                <p className="text-[11px] text-slate-500">No fixed group rush</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs text-left">
                <ShieldCheck className="h-5 w-5 text-[#E61E6E] mb-1" />
                <p className="text-xs font-bold text-slate-900">Zero Hidden Fees</p>
                <p className="text-[11px] text-slate-500">Clear custom quotes</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Sparkles className="h-5 w-5 text-amber-200" />
                <span>Plan My Bespoke Trip</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Helper Note */}
            <p className="text-xs text-slate-500 pt-1">
              💬 Average response time within 15 minutes • No automated bots
            </p>
          </div>

          {/* Right Column: 3D Floating Showcase Card on Light Theme */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-4 sm:p-5 group transform-style-3d hover:rotate-x-2 transition-transform duration-500"
            >
              {/* Airplane Flight Badge */}
              <div className="absolute top-7 right-7 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                <Plane className="h-3.5 w-3.5 text-[#F25C05] -rotate-45" />
                <span>{activeSpot.tag}</span>
              </div>

              {/* Main Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={activeSpot.image}
                  alt={activeSpot.name}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                    {activeSpot.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white mt-0.5">
                    {activeSpot.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-200">
                    <span className="flex items-center gap-1">
                      <Car className="h-3.5 w-3.5 text-emerald-400" /> Private Cab Included
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-amber-300" /> Tailored Itinerary
                    </span>
                  </div>
                </div>
              </div>

              {/* Destination Selector Tabs */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                  <span className="font-semibold text-slate-700">Explore Handcrafted Journeys:</span>
                  <span className="text-[#F25C05] font-bold">Click to preview</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {featuredSpots.map((spot, idx) => (
                    <button
                      key={spot.slug}
                      onClick={() => setActiveSpotIndex(idx)}
                      className={`text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                        activeSpotIndex === idx
                          ? "bg-orange-50/80 border-[#F25C05] text-[#F25C05] shadow-xs ring-1 ring-[#F25C05]"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <p className="font-bold truncate text-slate-900">{spot.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{spot.tag}</p>
                    </button>
                  ))}
                </div>

                {/* Direct Action inside Card */}
                <div className="pt-2 flex items-center gap-2">
                  <Link
                    href={`/tours/${activeSpot.slug}`}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Full Day-by-Day Itinerary</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry(activeSpot.name)}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white font-bold text-xs shadow-md transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
