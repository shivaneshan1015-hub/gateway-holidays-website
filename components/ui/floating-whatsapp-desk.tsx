"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  CheckCheck,
  ShieldCheck,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { businessInfo } from "@/data/business";

interface QuickPrompt {
  id: string;
  icon: string;
  label: string;
  desc: string;
  message: string;
}

const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: "kerala",
    icon: "🌿",
    label: "Munnar & Kerala Tour",
    desc: "3 to 5 Days • Cab + Hill Resort",
    message:
      "Hello Gateway Holidays! I am interested in a customized Munnar & Kerala tour package with private cab. Please share itinerary options & best quote.",
  },
  {
    id: "heritage",
    icon: "🛕",
    label: "Rameshwaram & Kanyakumari",
    desc: "2 to 3 Days • Temple & Coastal Circuit",
    message:
      "Hello Gateway Holidays! I want to plan a Rameshwaram & Kanyakumari private trip with pickup from Madurai. Please share details & quotation.",
  },
  {
    id: "cab",
    icon: "🚗",
    label: "Private AC Cab with Driver",
    desc: "Sedan / Ertiga / Innova Crysta",
    message:
      "Hello Gateway Holidays! We need an all-inclusive Private AC Cab with driver for South India sightseeing. Please share car availability & tariff.",
  },
  {
    id: "custom",
    icon: "✨",
    label: "Custom Family / Honeymoon Trip",
    desc: "Tailored schedule & handpicked stays",
    message:
      "Hello Gateway Holidays! We are planning a vacation and would like a customized holiday package. Please assist with personalized recommendations.",
  },
];

export function FloatingWhatsAppDesk() {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  const handleSendPrompt = (messageText: string) => {
    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;
    handleSendPrompt(customText.trim());
    setCustomText("");
  };

  return (
    // Strictly hidden on mobile (sm:hidden handles mobile with existing StickyMobileCTA)
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-3 w-[370px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white p-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-lg font-bold">
                      GH
                    </div>
                    {/* Live Online Green Dot */}
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm tracking-tight text-white">
                        Gateway Holidays Desk
                      </h4>
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    </div>
                    <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse" />
                      <span>Online • Anna Nagar, Madurai</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close WhatsApp Desk"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-100/90">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-300" />
                  Opp. Ambika College, Madurai
                </span>
                <span className="font-semibold text-emerald-200">
                  ⚡ 5 Min Response
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50/80 overflow-y-auto space-y-3.5 flex-1 text-slate-800 text-xs">
              {/* Agent Greeting Bubble */}
              <div className="flex gap-2 items-start">
                <div className="w-7 h-7 rounded-full bg-[#128C7E] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  GH
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200/80 shadow-xs space-y-1.5 max-w-[85%]">
                  <p className="leading-relaxed">
                    👋 <strong>Namaste!</strong> Welcome to Gateway Holidays.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    How can we help plan your journey? Tap a quick option below for an instant quotation:
                  </p>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 justify-end pt-0.5">
                    <span>Just now</span>
                    <CheckCheck className="w-3 h-3 text-[#25D366]" />
                  </span>
                </div>
              </div>

              {/* Quick Reply Prompts */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-1">
                  Popular Travel Inquiries
                </p>

                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.id}
                    onClick={() => handleSendPrompt(prompt.message)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-sm transition-all duration-150 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{prompt.icon}</span>
                      <div>
                        <p className="font-bold text-slate-800 group-hover:text-emerald-800 text-xs transition-colors">
                          {prompt.label}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {prompt.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Bar */}
            <form
              onSubmit={handleCustomSubmit}
              className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2"
            >
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your destination or travel dates..."
                className="flex-1 py-2 px-3 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!customText.trim()}
                className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-40 text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shrink-0 shadow-xs"
                aria-label="Send custom message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <div className="flex items-center justify-end gap-2.5">
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-full border border-slate-200/90 shadow-md text-xs font-semibold text-slate-700 flex items-center gap-1.5 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Chat with Madurai Desk</span>
          </motion.div>
        )}

        <button
          onClick={handleOpen}
          className="relative group p-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
          aria-label="Toggle WhatsApp Desk"
        >
          {/* Subtle Outer Pulsing Wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <div className="relative z-10 flex items-center">
              <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
              {!hasInteracted && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  1
                </span>
              )}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
