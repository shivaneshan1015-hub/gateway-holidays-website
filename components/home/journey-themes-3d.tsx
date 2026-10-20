"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mountain,
  Landmark,
  Compass,
  Palmtree,
  Sparkles,
  Plane,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { tourCategories, tourPackages } from "@/data/tours";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, React.ReactNode> = {
  Mountain: <Mountain className="h-6 w-6 text-emerald-600" />,
  Landmark: <Landmark className="h-6 w-6 text-amber-600" />,
  Compass: <Compass className="h-6 w-6 text-[#F25C05]" />,
  Palmtree: <Palmtree className="h-6 w-6 text-cyan-600" />,
  Sparkles: <Sparkles className="h-6 w-6 text-blue-600" />,
  Plane: <Plane className="h-6 w-6 text-[#E61E6E]" />,
};

export function JourneyThemes3D() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200/60">
      {/* Background Soft Accent Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E61E6E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F25C05]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Travel Themes"
          title="Choose Your Travel Soul"
          subtitle="Whether you crave misty mountain pine valleys, sacred pilgrim corridors, high-altitude 4x4 adventure treks, or tropical island shores — we curate every day exclusively for you."
          center
          light={false}
        />

        {/* 6 Category 3D Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-1000">
          {tourCategories.map((category, idx) => {
            const count = tourPackages.filter((t) => t.category === category.id).length;
            const isAdventure = category.id === "adventure-trekking";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-[#F25C05]/60 transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-orange-500/10 transform-style-3d hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Background Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={category.heroImage}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold shadow-lg backdrop-blur-md ${
                        isAdventure
                          ? "bg-gradient-to-r from-[#F25C05] to-[#E61E6E] text-white border border-white/20"
                          : "bg-white/90 text-slate-900 border border-slate-200"
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  {/* Icon floating top right */}
                  <div className="absolute top-4 right-4 z-10 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    {iconMap[category.icon] || <Sparkles className="h-5 w-5 text-amber-500" />}
                  </div>

                  {/* Title overlay on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                    <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-bold text-emerald-600">
                        Private Cab Included
                      </span>
                      <span className="bg-slate-100 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-slate-600">
                        {count > 0 ? `${count} Signature Circuits` : "Custom Packages Available"}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/tours?category=${category.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#F25C05] hover:text-rose-600 transition-colors"
                    >
                      <span>Explore Itineraries</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-medium text-slate-400">
                      Zero Fixed Rush
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Looking for a custom combination tour?
            </h4>
            <p className="text-xs text-slate-600">
              Combine Kerala + Kanyakumari, or add a Kolukkumalai Adventure safari to your temple pilgrimage.
            </p>
          </div>

          <Link
            href="/plan-my-trip"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105 whitespace-nowrap"
          >
            Design Custom Circuit
          </Link>
        </div>
      </div>
    </section>
  );
}
