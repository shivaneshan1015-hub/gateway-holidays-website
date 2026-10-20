"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Mountain,
  Landmark,
  Compass,
  Palmtree,
  Plane,
  Car,
  Star,
  MapPin,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { businessInfo } from "@/data/business";
import { tourCategories } from "@/data/tours";

const categoryIcons: Record<string, React.ReactNode> = {
  "south-india": <Mountain className="h-4 w-4 text-emerald-600" />,
  "heritage-temple": <Landmark className="h-4 w-4 text-amber-600" />,
  "adventure-trekking": <Compass className="h-4 w-4 text-[#F25C05]" />,
  "island": <Palmtree className="h-4 w-4 text-cyan-600" />,
  "north-india": <Sparkles className="h-4 w-4 text-blue-600" />,
  "international": <Plane className="h-4 w-4 text-[#E61E6E]" />,
};

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setToursDropdownOpen(false);
  }, [pathname]);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.defaultWhatsAppMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Hotline Strip */}
      <div className="bg-[#101935] text-slate-200 text-[11px] py-1.5 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3 w-3 text-[#F25C05]" />
              <span>Head Office: Anna Nagar (Opp. Ambika College), Madurai</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>4.8★ Google Verified Tour Operator</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              <Phone className="h-3 w-3 text-[#E61E6E]" /> {businessInfo.phonePrimary}
            </a>
            <span className="text-white/20">•</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-emerald-400 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White Light Theme) */}
      <div
        className={`w-full transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs ${
          scrolled ? "py-2.5 shadow-md" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <BrandLogo variant="header" />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-[#E61E6E] font-bold" : "text-slate-700 hover:text-[#E61E6E]"
              }`}
            >
              Home
            </Link>

            {/* Tours Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToursDropdownOpen(true)}
              onMouseLeave={() => setToursDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#E61E6E] py-2 transition-colors cursor-pointer"
                aria-expanded={toursDropdownOpen}
              >
                <span>Tour Destinations</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    toursDropdownOpen ? "rotate-180 text-[#E61E6E]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {toursDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-84 p-3 rounded-2xl bg-white shadow-2xl border border-slate-200 z-50 grid gap-1.5"
                  >
                    {tourCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/tours?category=${cat.id}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 group-hover:scale-110 transition-transform shrink-0">
                          {categoryIcons[cat.id]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors">
                              {cat.name}
                            </span>
                            {cat.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {cat.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {cat.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* Private Cabs Available */}
            <Link
              href="/#transport"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <Car className="h-4 w-4 text-emerald-600" />
              <span>Private Cabs</span>
            </Link>

            {/* About Us */}
            <Link
              href="/#about"
              className="text-sm font-semibold text-slate-700 hover:text-[#E61E6E] transition-colors"
            >
              About Us
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`text-sm font-semibold transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-[#E61E6E] font-bold"
                  : "text-slate-700 hover:text-[#E61E6E]"
              }`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "text-[#E61E6E] font-bold"
                  : "text-slate-700 hover:text-[#E61E6E]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200"
            >
              <Phone className="h-3.5 w-3.5 text-[#E61E6E]" />
              <span>{businessInfo.phonePrimary}</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Plan My Trip</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              <div className="grid gap-2 border-b border-slate-100 pb-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Home
                </Link>
                <Link
                  href="/tours"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  All Tours
                </Link>

                <Link
                  href="/#transport"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-emerald-700 hover:bg-emerald-50 flex items-center gap-2"
                >
                  <Car className="h-4 w-4 text-emerald-600" /> Private Cab Available
                </Link>
                <Link
                  href="/#about"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-[#F25C05]" /> About Us
                </Link>
                <Link
                  href="/blog"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Travel Blog
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile CTAs */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry?.();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Plan My Custom Itinerary</span>
                </button>

                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200"
                >
                  <Phone className="h-4 w-4 text-[#E61E6E]" />
                  <span>Call {businessInfo.phonePrimary}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
