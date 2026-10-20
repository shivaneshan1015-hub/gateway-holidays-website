"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Calendar,
  Users,
  Building,
  Car,
  Send,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Mountain,
  Landmark,
  Palmtree,
  Plane,
  ShieldCheck,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { EnquiryModal } from "@/components/tours/enquiry-modal";
import { businessInfo } from "@/data/business";

export default function PlanMyTripPage() {
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("adventure-trekking");
  const [startingCity, setStartingCity] = useState("Madurai");
  const [duration, setDuration] = useState("3 Nights / 4 Days");
  const [travelType, setTravelType] = useState("Couple / Honeymoon");
  const [stayPreference, setStayPreference] = useState("Premium 4-Star Valley Resort");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const themes = [
    {
      id: "adventure-trekking",
      name: "Adventure & Trekking",
      desc: "Kolukkumalai 4x4 sunrise safari, glass bridges & camping",
      icon: <Compass className="h-6 w-6 text-[#F25C05]" />,
    },
    {
      id: "south-india",
      name: "South India Hill Stations",
      desc: "Munnar tea valleys, Alleppey houseboats & Kodai mist",
      icon: <Mountain className="h-6 w-6 text-emerald-600" />,
    },
    {
      id: "heritage-temple",
      name: "Heritage & Temples",
      desc: "Rameswaram theerthams, Dhanushkodi & Madurai Meenakshi",
      icon: <Landmark className="h-6 w-6 text-amber-600" />,
    },
    {
      id: "island",
      name: "Tropical Island",
      desc: "Andaman Havelock scuba & white sand coral lagoons",
      icon: <Palmtree className="h-6 w-6 text-cyan-600" />,
    },
    {
      id: "north-india",
      name: "North India & Himalayas",
      desc: "Kashmir Dal Lake shikara & snowy Gulmarg mountains",
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    },
    {
      id: "international",
      name: "International Escapes",
      desc: "Bali luxury pool villas, Ubud rainforest & cliff sunsets",
      icon: <Plane className="h-6 w-6 text-[#E61E6E]" />,
    },
  ];

  const handleWhatsAppSend = () => {
    const text = `*Bespoke Trip Plan Request — Gateway Holidays*
━━━━━━━━━━━━━━━━━━━━
*Theme Chosen:* ${themes.find((t) => t.id === selectedTheme)?.name || selectedTheme}
*Arrival / Pickup Location:* ${startingCity}
*Duration:* ${duration}
*Traveler Group:* ${travelType}
*Stay Style:* ${stayPreference}
*Private Cab:* Included (Dedicated AC vehicle & chauffeur)
*Guest Name:* ${guestName || "Traveler"}
*Phone:* ${guestPhone || "Direct WhatsApp"}
*Special Requests:* ${specialNotes || "None"}
━━━━━━━━━━━━━━━━━━━━
_Please send me a customized itinerary quotation._`;

    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: guestName,
          phone: guestPhone,
          destination: `${themes.find((t) => t.id === selectedTheme)?.name} (${startingCity})`,
          durationDays: duration,
          adults: travelType,
          hotelCategory: stayPreference,
          specialRequests: specialNotes,
        }),
      });
      setIsCompleted(true);
    } catch {
      handleWhatsAppSend();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />

      <main className="flex-1 py-12 lg:py-20 relative overflow-hidden">
        {/* Soft Ambient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#E61E6E]/8 via-[#F25C05]/8 to-[#F59E0B]/8 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
              <Sparkles className="h-3.5 w-3.5 text-[#F25C05]" />
              <span>3D Interactive Itinerary Builder</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Design Your <span className="text-gradient-brand">Bespoke Holiday</span>
            </h1>
            <p className="text-sm text-slate-600 max-w-lg mx-auto font-normal">
              Tell us your dream route. We handle the private sanitized AC cab, verified hotel stays, and custom timetable. Zero fixed rush.
            </p>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="mb-10 flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step >= s
                      ? "bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white shadow-md shadow-orange-500/25"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {step > s ? <CheckCircle2 className="h-4 w-4" /> : s}
                </div>
                <span
                  className={`text-xs font-bold hidden sm:inline ${
                    step >= s ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {s === 1 ? "Choose Theme" : s === 2 ? "Logistics & Cab" : "Contact & Review"}
                </span>
                {s < 3 && <div className="h-0.5 w-8 bg-slate-200 mx-2" />}
              </div>
            ))}
          </div>

          {/* Wizard Card Container (Clean White) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl relative text-slate-900">
            <AnimatePresence mode="wait">
              {/* STEP 1: SELECT THEME */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Step 1: What type of holiday are you planning?</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Select your primary travel style. We will craft a matching circuit with private transport.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTheme(t.id)}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                          selectedTheme === t.id
                            ? "bg-orange-50/80 border-[#F25C05] shadow-sm ring-1 ring-[#F25C05]"
                            : "bg-slate-50/80 border-slate-200 hover:bg-slate-100 text-slate-800"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-xs">
                          {t.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{t.name}</p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{t.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Continue to Logistics</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: LOGISTICS, DURATION & PRIVATE CAB */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Step 2: Arrival Location, Stay & Duration</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Wherever you arrive — directly at the destination airport, railway station, or from home — our chauffeur will receive you and manage all local arrangements seamlessly.
                    </p>
                  </div>

                  {/* Arrival Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Where should our private chauffeur receive / pick you up?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {["Direct at Destination", "Madurai / Airport / Station", "Chennai", "Coimbatore", "Cochin / Kerala", "Bangalore", "Tiruchirappalli", "Doorstep / Other City"].map(
                        (city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => setStartingCity(city)}
                            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              startingCity === city
                                ? "bg-[#F25C05] text-white border-[#F25C05] shadow-xs"
                                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                            }`}
                          >
                            {city}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Duration
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        "2 Nights / 3 Days",
                        "3 Nights / 4 Days",
                        "4 Nights / 5 Days",
                        "5 Nights / 6 Days",
                        "7+ Days Extended",
                      ].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            duration === d
                              ? "bg-[#E61E6E] text-white border-[#E61E6E] shadow-xs"
                              : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Traveler Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Who is traveling?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        "Couple / Honeymoon",
                        "Family with Kids",
                        "Parents / Senior Citizens",
                        "Friends Adventure Group",
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTravelType(t)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            travelType === t
                              ? "bg-amber-500 text-slate-950 border-amber-500 shadow-xs font-extrabold"
                              : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Private Cab Reassurance Box */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                    <Car className="h-6 w-6 text-emerald-600 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-emerald-900">
                        Dedicated Private AC Cab & Verified Chauffeur Included
                      </p>
                      <p className="text-slate-600 mt-0.5">
                        Tolls, driver batta, interstate taxes, and parking fees are pre-included. No hidden meter charges.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Final Step: Contact Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACT DETAILS & DISPATCH */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {isCompleted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200">
                        <CheckCircle2 className="h-9 w-9" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Your Itinerary Request is Received!</h3>
                      <p className="text-xs text-slate-600 max-w-md mx-auto">
                        Thank you, <strong className="text-slate-900">{guestName}</strong>. A dedicated trip specialist from our Anna Nagar, Madurai office will review your preferences and provide a bespoke day-by-day plan with private cab details.
                      </p>

                      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          type="button"
                          onClick={handleWhatsAppSend}
                          className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                        >
                          <MessageCircle className="h-4 w-4" /> Open Instant WhatsApp Chat
                        </button>
                        <Link
                          href="/tours"
                          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center"
                        >
                          Explore Other Tours
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFinalSubmit} className="space-y-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Step 3: Where should we send your custom quotation?</h2>
                        <p className="text-xs text-slate-500 mt-1">
                          Zero automated bots. You will receive an authentic personalized itinerary directly from our Anna Nagar travel desk.
                        </p>
                      </div>

                      {/* Summary Capsule */}
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-700">
                        <div>
                          <span className="text-slate-500 block text-[10px]">Theme:</span>
                          <span className="font-bold text-slate-900">
                            {themes.find((t) => t.id === selectedTheme)?.name}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Pickup City:</span>
                          <span className="font-bold text-slate-900">{startingCity}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Duration:</span>
                          <span className="font-bold text-slate-900">{duration}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Group:</span>
                          <span className="font-bold text-slate-900">{travelType}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            placeholder="e.g. Anand Sundaram"
                            required
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            WhatsApp / Mobile Number *
                          </label>
                          <input
                            type="tel"
                            value={guestPhone}
                            onChange={(e) => setGuestPhone(e.target.value)}
                            placeholder="+91 98421 12345"
                            required
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Any Specific Places or Requests? (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={specialNotes}
                          onChange={(e) => setSpecialNotes(e.target.value)}
                          placeholder="e.g. Need lake-view balcony resort, early morning temple pooja assistance, pure vegetarian meals..."
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                        >
                          <Send className="h-4 w-4" />
                          <span>Get Free Custom Quotation</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsAppSend}
                          className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Send via WhatsApp</span>
                        </button>
                      </div>

                      <div className="pt-2 flex justify-start">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs flex items-center gap-1.5 cursor-pointer font-bold"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                          <span>Previous Step</span>
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileCTA onOpenEnquiry={() => setModalOpen(true)} />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
