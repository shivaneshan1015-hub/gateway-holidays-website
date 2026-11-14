import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  HeartHandshake,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { businessInfo } from "@/data/business";
import { tourCategories } from "@/data/tours";

export function Footer() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.defaultWhatsAppMessage
  )}`;

  return (
    <footer className="bg-[#070B19] text-slate-300 border-t border-white/10 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Office Credentials */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="footer" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Gateway Holidays is a tour operator based in Anna Nagar, Madurai. We plan domestic and international tour packages with private AC cabs, handpicked hotels and trip support on phone and WhatsApp.
            </p>

            {/* Google Rating Trust Badge */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between max-w-sm">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">{businessInfo.rating} / 5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Based on {businessInfo.reviewCount} Google reviews</p>
                </div>
              </div>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#F25C05] font-bold hover:underline flex items-center gap-1"
              >
                <span>View Map</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Follow us */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href={businessInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gateway Holidays on Instagram"
                  className="h-9 w-9 rounded-lg bg-white/10 hover:bg-[#E61E6E] flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.2-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z" />
                  </svg>
                </a>
                <a
                  href={businessInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gateway Holidays on Facebook"
                  className="h-9 w-9 rounded-lg bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Tour Hub Destinations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Tour Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {tourCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/tours#${cat.id}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#E61E6E]">›</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/plan-my-trip"
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-emerald-400"
                >
                  <span className="text-emerald-400">›</span>
                  <span>Private Cabs & Airport Drops</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Safety */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Travelers Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/plan-my-trip" className="hover:text-white transition-colors">
                  Plan Custom Vacation
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors text-amber-300 font-semibold">
                  Travel Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Office Location
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Pillars of Care
              </div>
              <div className="space-y-1.5 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Clean Private AC Cabs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#E61E6E]" />
                  <span>Handpicked Stays Only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="h-3.5 w-3.5 text-[#F25C05]" />
                  <span>On-Trip Support on WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Anna Nagar Madurai Office Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Madurai Head Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#F25C05] shrink-0 mt-0.5" />
                <span>
                  {businessInfo.address}, {businessInfo.city}, {businessInfo.state} - {businessInfo.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#E61E6E] shrink-0" />
                <a href={`tel:${businessInfo.phoneClean}`} className="hover:text-white font-bold">
                  {businessInfo.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white">
                  {businessInfo.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs shadow-lg hover:scale-102 transition-transform"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Gateway Holidays. All rights reserved. Anna Nagar, Madurai, Tamil Nadu.
          </p>
          <div className="flex items-center gap-6">
            <span>Safe, Reliable & Affordable Holidays</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Help & Support
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
