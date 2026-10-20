"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Compass,
  Clock,
  MapPin,
  Car,
  Search,
  Sparkles,
  Mountain,
  Landmark,
  Palmtree,
  Plane,
  ChevronRight,
  Send,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { EnquiryModal } from "@/components/tours/enquiry-modal";
import { tourPackages, tourCategories, TourCategory } from "@/data/tours";
import { SectionHeading } from "@/components/ui/section-heading";

function ToursContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as TourCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<"all" | TourCategory>(
    categoryParam || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTourForModal, setActiveTourForModal] = useState<string | undefined>();

  // Sync if URL query param changes
  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredTours = useMemo(() => {
    return tourPackages.filter((tour) => {
      const matchesCategory =
        selectedCategory === "all" || tour.category === selectedCategory;
      const matchesTheme =
        selectedTheme === "all" || tour.theme.toLowerCase() === selectedTheme.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.startingHub.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTheme && matchesSearch;
    });
  }, [selectedCategory, selectedTheme, searchQuery]);

  const handleOpenQuote = (tourTitle: string) => {
    setActiveTourForModal(tourTitle);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />

      {/* Hero Header Strip (Clean Light Theme) */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E61E6E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F25C05]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
            <Sparkles className="h-3.5 w-3.5 text-[#F25C05]" />
            <span>Tour Hub & Signature Circuits</span>
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Curated Holidays & <span className="text-gradient-brand">Adventure Tours</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every itinerary is private, handcrafted, and includes a <strong className="text-slate-900 font-bold">dedicated AC cab</strong> with a vetted chauffeur. Explore our itineraries below or request a custom combination.
          </p>

          {/* Quick Search Input */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination (e.g. Munnar, Vagamon, Rameswaram, Bali)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#F25C05] focus:ring-1 focus:ring-[#F25C05] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-900"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Tour Listing Area */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips including ADVENTURE & TREKKING */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-slate-200">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Tours ({tourPackages.length})
            </button>

            {tourCategories.map((cat) => {
              const count = tourPackages.filter((t) => t.category === cat.id).length;
              const isAdventure = cat.id === "adventure-trekking";

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as TourCategory)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white shadow-md shadow-orange-500/20"
                      : isAdventure
                      ? "bg-orange-50 text-[#F25C05] border border-orange-200 hover:bg-orange-100 font-extrabold"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {isAdventure && <span>🔥</span>}
                  <span>{cat.name}</span>
                  <span className="text-[11px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Theme Quick Filter */}
          <div className="py-6 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#F25C05]" />
              <span className="font-bold text-slate-800">Filter by Travel Style:</span>
              <div className="flex flex-wrap gap-1.5 ml-2">
                {["all", "honeymoon", "family", "adventure", "pilgrimage", "luxury"].map(
                  (theme) => (
                    <button
                      key={theme}
                      onClick={() => setSelectedTheme(theme)}
                      className={`px-3 py-1 rounded-lg capitalize text-xs cursor-pointer font-medium ${
                        selectedTheme === theme
                          ? "bg-slate-900 text-white font-bold"
                          : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {theme}
                    </button>
                  )
                )}
              </div>
            </div>

            <p className="text-slate-500 font-medium">
              Showing <strong className="text-slate-900">{filteredTours.length}</strong> itineraries • Zero Fixed Rush
            </p>
          </div>

          {/* Tour Grid */}
          {filteredTours.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <p className="text-lg font-bold text-slate-900">No tours matched your criteria.</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Don&apos;t worry! We design completely bespoke itineraries for any destination across India and worldwide.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedTheme("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-[#F25C05] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, idx) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-orange-500/10 group"
                >
                  {/* Card Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                      {tour.badge && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E61E6E] text-white shadow-lg">
                          {tour.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 border border-slate-200">
                        {tour.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 flex items-center gap-1 shadow-lg">
                        <Clock className="h-3 w-3 text-[#F25C05]" />
                        <span>{tour.duration}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 text-slate-100 drop-shadow">
                        <MapPin className="h-3.5 w-3.5 text-amber-300" />
                        <span>Starts: {tour.startingHub}</span>
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm text-slate-200 font-medium">
                        {tour.theme}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {tour.subtitle}
                      </p>
                    </div>

                    {/* Transport reassurance */}
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                        <Car className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{tour.transportIncluded}</span>
                      </div>
                      <p className="text-[11px] text-emerald-700">
                        {tour.stayStyle}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Highlights:
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

                    {/* Action buttons: ZERO RATES */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Full Itinerary</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>

                      <button
                        onClick={() => handleOpenQuote(tour.title)}
                        className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <StickyMobileCTA onOpenEnquiry={() => setModalOpen(true)} />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDestination={activeTourForModal}
      />
    </div>
  );
}

export default function ToursHubPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ToursContent />
    </Suspense>
  );
}
