"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Car,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";

interface AboutUsProps {
  onOpenEnquiry?: () => void;
}

export function AboutUs({ onOpenEnquiry }: AboutUsProps) {
  const commitments = [
    {
      icon: <Car className="h-6 w-6 text-emerald-600" />,
      title: "100% Private Chauffeured Cabs",
      description:
        "We never combine strangers or group tours. Every booking includes a private, well-maintained AC vehicle driven by courteous, route-savvy chauffeurs.",
      badge: "Exclusive Privacy",
    },
    {
      icon: <Award className="h-6 w-6 text-[#E61E6E]" />,
      title: "Handpicked Verified Accommodations",
      description:
        "No misleading photos or surprise downgrades. We inspect and select properties with stellar hospitality, scenic vistas, and impeccable hygiene.",
      badge: "Inspected Stays",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "Zero Hidden Costs Policy",
      description:
        "Transparent, comprehensive quotations. Tolls, driver allowances, and permits are clearly itemized so you can travel with complete peace of mind.",
      badge: "Honest Pricing",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-[#F25C05]" />,
      title: "24/7 Madurai Travel Concierge",
      description:
        "You are never alone on the road. Our central Anna Nagar team monitors your journey live and provides immediate assistance whenever needed.",
      badge: "Round-the-Clock Support",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/60 scroll-mt-20">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            badge="About Gateway Holidays"
            title="Safe, Reliable & Affordable Holidays — Crafted from Madurai"
            subtitle="Founded with a passion for authentic travel, Gateway Holidays is Anna Nagar's dedicated tour specialist curating bespoke journeys across India and the globe."
            light={false}
          />
        </div>

        {/* Narrative & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-orange-800">
              <Building2 className="h-3.5 w-3.5 text-[#F25C05]" />
              <span>Headquartered in Anna Nagar, Madurai (Opp. Ambika College)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Travel should be personal, unhurried, and genuinely memorable.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At <strong>Gateway Holidays</strong>, we believe the best vacations aren&apos;t found in generic packaged itineraries. Whether it&apos;s a tranquil tea-plantation retreat in Munnar, sacred darshans in Rameswaram, high-altitude treks in Himachal, or an exotic island villa in Bali, our local experts craft every day around your personal rhythm.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate the stress of logistics — arranging dedicated private cabs, premium sanitization, comfortable hotel check-ins, and flexible pickup points so you spend less time coordinating and more time creating memories with loved ones.
            </p>

            {/* Credential Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Verified Google Tour Operator (4.8★)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Custom Private Itineraries (No Mixed Groups)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Free Gifts on All Domestic Bookings</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Flat 10% Concession on International Tours</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                <span>Plan Your Vacation</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200 flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 text-[#F25C05]" />
                <span>Visit Madurai Office</span>
              </Link>
            </div>
          </div>

          {/* Right Highlight Box / Stats Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#101935] to-slate-900 text-white relative shadow-xl overflow-hidden">
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#F25C05]/30 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold border border-white/15">
                  <Sparkles className="h-3 w-3" />
                  <span>The Gateway Advantage</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                  Built on Transparency, Comfort & Safety
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Headquartered at Anna Nagar Main Road, Madurai, our team has organized hundreds of successful family holidays, honeymoon escapes, institutional retreats, and overseas tours.
                </p>

                {/* Numbers Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">56+</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-1">Curated Packages</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-rose-400">4.8★</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-1">Google Reviews Rating</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-1">Private AC Cabs</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-sky-400">24/7</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-1">Madurai Travel Desk</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Phone className="h-3.5 w-3.5 text-[#E61E6E]" />
                    <span>{businessInfo.phonePrimary}</span>
                  </span>
                  <span className="text-slate-400">{businessInfo.city}, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
