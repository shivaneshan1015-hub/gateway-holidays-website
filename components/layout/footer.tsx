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
              Gateway Holidays is a trusted tour operator and travel curator based in Anna Nagar, Madurai. We craft bespoke domestic and international tour packages with private sanitized transport, handpicked resorts, and round-the-clock trip coordination.
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
                    <span className="text-xs font-bold text-white ml-1">4.8 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">Based on 13 Verified Google Reviews</p>
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
                  href="/cab-services"
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
                  <span>Sanitized Private Cabs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#E61E6E]" />
                  <span>Handpicked Stays Only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="h-3.5 w-3.5 text-[#F25C05]" />
                  <span>24/7 Dedicated Concierge</span>
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
            © {new Date().getFullYear()} Gateway Holidays. All rights reserved. Registered Tour Operator, Madurai, Tamil Nadu.
          </p>
          <div className="flex items-center gap-6">
            <span>Safe, Reliable & Affordable Holidays</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Help & Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
