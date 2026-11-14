"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Car,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const trustPillars = [
  {
    icon: <Compass className="h-7 w-7 text-[#F25C05]" />,
    title: "Itineraries Built Around You",
    subtitle: "Tailored to your family or group",
    description:
      "We never force you into rigid bus schedules or crowded tour groups. Every day is planned around your desired wake-up time, preferred temples, viewpoints, and meal breaks.",
    bulletPoints: [
      "Custom starting city (Madurai, Chennai, Coimbatore, Cochin)",
      "Flexible stop times for photography & local food",
      "Child & senior citizen friendly itineraries",
    ],
    borderAccent: "hover:border-[#F25C05]/50",
  },
  {
    icon: <Car className="h-7 w-7 text-emerald-600" />,
    title: "Private AC Cab for Your Group",
    subtitle: "Dedicated driver with every package",
    description:
      "Travel with your family in a clean, air-conditioned vehicle used only by your group, with a driver who knows the ghat roads and local routes.",
    bulletPoints: [
      "Doorstep home or airport/station pickup and drop",
      "Tolls, fuel, parking, and driver batta included",
      "Zero vehicle sharing with strangers",
    ],
    borderAccent: "hover:border-emerald-500/50",
  },
  {
    icon: <Headphones className="h-7 w-7 text-[#E61E6E]" />,
    title: "Personal WhatsApp Support",
    subtitle: "Talk to a real person",
    description:
      "From your first message until you are back home, our Madurai team is on WhatsApp and phone to help with check-ins, route changes and questions.",
    bulletPoints: [
      "One contact person for your trip",
      "Route and weather updates",
      "Local food and restaurant suggestions",
    ],
    borderAccent: "hover:border-[#E61E6E]/50",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-amber-500" />,
    title: "Clear, Itemised Quotes",
    subtitle: "Know what you are paying for",
    description:
      "Every quote lists exactly what is included and what is not, so you can compare and decide with confidence.",
    bulletPoints: [
      "Detailed inclusions & exclusions in advance",
      "Handpicked 3-Star, 4-Star resorts or private pool villas",
      "Hotels we know and work with regularly",
    ],
    borderAccent: "hover:border-amber-400/50",
  },
];

export function WhyUs3D() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/60">
      {/* Background Soft Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#E61E6E]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#F25C05]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Gateway Difference"
          title="Why Discerning Travelers Choose Gateway Holidays"
          subtitle="We combine local Madurai hospitality with carefully planned custom itineraries to make your vacation effortless, relaxing, and memorable."
          center
          light={false}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {trustPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-slate-50/70 border border-slate-200 ${pillar.borderAccent} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform-style-3d group`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#F25C05] font-bold mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed font-normal">
                {pillar.description}
              </p>

              {/* Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                {pillar.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
