"use client";

import React from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { businessInfo } from "@/data/business";

interface StickyMobileCTAProps {
  onOpenEnquiry?: () => void;
}

export function StickyMobileCTA({ onOpenEnquiry }: StickyMobileCTAProps) {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs shadow-lg active:scale-97 transition-transform"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span>WhatsApp Quote</span>
        </a>

        {onOpenEnquiry ? (
          <button
            onClick={onOpenEnquiry}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white font-bold text-xs shadow-lg active:scale-97 transition-transform"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Plan My Trip</span>
          </button>
        ) : (
          <a
            href={`tel:${businessInfo.phoneClean}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white font-bold text-xs shadow-lg active:scale-97 transition-transform"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span>Call Concierge</span>
          </a>
        )}
      </div>
    </div>
  );
}
