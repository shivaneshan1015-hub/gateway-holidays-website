"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  MessageCircle,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Building,
  Car,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { tourPackages } from "@/data/tours";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTourSlug?: string;
  defaultDestination?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  defaultTourSlug,
  defaultDestination,
}: EnquiryModalProps) {
  const selectedTour = tourPackages.find((t) => t.slug === defaultTourSlug);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: defaultDestination || selectedTour?.title || "",
    travelMonth: "",
    durationDays: selectedTour ? String(selectedTour.daysCount) : "4",
    adults: "2",
    children: "0",
    hotelCategory: "4-star",
    cabType: "sedan",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update destination if default prop changes
  const [prevDefaultTourSlug, setPrevDefaultTourSlug] = useState(defaultTourSlug);
  const [prevDefaultDestination, setPrevDefaultDestination] = useState(defaultDestination);
  if (defaultTourSlug !== prevDefaultTourSlug || defaultDestination !== prevDefaultDestination) {
    setPrevDefaultTourSlug(defaultTourSlug);
    setPrevDefaultDestination(defaultDestination);
    if (selectedTour) {
      setFormData((prev) => ({
        ...prev,
        destination: selectedTour.title,
        durationDays: String(selectedTour.daysCount),
      }));
    } else if (defaultDestination) {
      setFormData((prev) => ({
        ...prev,
        destination: defaultDestination,
      }));
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppSubmit = () => {
    const text = `*New Trip Enquiry — Gateway Holidays*
━━━━━━━━━━━━━━━━━━━━
*Guest Name:* ${formData.name || "Traveler"}
*Phone:* ${formData.phone || "Not specified"}
*Destination / Tour:* ${formData.destination || "Custom Itinerary"}
*Travel Month / Dates:* ${formData.travelMonth || "Flexible"}
*Duration:* ${formData.durationDays} Days
*Guests:* ${formData.adults} Adults, ${formData.children} Children
*Hotel Preference:* ${formData.hotelCategory}
*Cab Required:* ${formData.cabType} (Private AC Cab)
*Special Notes:* ${formData.specialRequests || "None"}
━━━━━━━━━━━━━━━━━━━━
_Please share a customized itinerary & quotation._`;

    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        handleWhatsAppSubmit();
      }
    } catch {
      handleWhatsAppSubmit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container (Clean Light Theme) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-slate-900"
          >
            {/* Header */}
            <div className="relative px-6 py-5 bg-gradient-to-r from-rose-50 via-orange-50 to-amber-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E61E6E]/15 text-[#E61E6E] border border-[#E61E6E]/20 mb-1">
                  <Sparkles className="h-3 w-3" /> Bespoke Itinerary & Quote
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Plan Your Dream Holiday
                </h3>
                <p className="text-xs text-slate-600">
                  Customized for you • Private AC Cab included • No hidden costs
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Enquiry Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior holiday curator from the Anna Nagar Madurai office is preparing your custom itinerary with private cab details.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppSubmit}
                      className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" /> Open Instant WhatsApp Chat
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Destination & Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#F25C05]" /> Destination / Tour
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Munnar & Alleppey or Vagamon Adventure"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white focus:ring-1 focus:ring-[#F25C05]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#E61E6E]" /> Tentative Travel Month / Dates
                      </label>
                      <input
                        type="text"
                        name="travelMonth"
                        value={formData.travelMonth}
                        onChange={handleChange}
                        placeholder="e.g. Next weekend / Nov 15th"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#E61E6E] focus:bg-white focus:ring-1 focus:ring-[#E61E6E]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Guests & Duration */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Duration (Days)
                      </label>
                      <select
                        name="durationDays"
                        value={formData.durationDays}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#F25C05] focus:bg-white"
                      >
                        <option value="2">2 Days / 1 Night</option>
                        <option value="3">3 Days / 2 Nights</option>
                        <option value="4">4 Days / 3 Nights</option>
                        <option value="5">5 Days / 4 Nights</option>
                        <option value="6">6 Days / 5 Nights</option>
                        <option value="7">7+ Days Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                        <Users className="h-3 w-3 text-cyan-600" /> Adults
                      </label>
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#F25C05] focus:bg-white"
                      >
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults (Couple)</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5+">5+ Adults (Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Children
                      </label>
                      <select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#F25C05] focus:bg-white"
                      >
                        <option value="0">0 Child</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3+">3+ Children</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Hotel Style & Cab Availability Notice */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-amber-600" /> Preferred Stay Style
                      </label>
                      <select
                        name="hotelCategory"
                        value={formData.hotelCategory}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#F25C05] focus:bg-white"
                      >
                        <option value="3-star">Comfort 3-Star Hotels / Homestays</option>
                        <option value="4-star">Premium 4-Star Valley Resorts</option>
                        <option value="luxury-villa">5-Star Luxury Resorts / Private Pool Villa</option>
                        <option value="adventure-camp">Luxury Glamping & Campfire Tents</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                        <Car className="h-3.5 w-3.5 text-emerald-600" /> Private Cab Service
                      </label>
                      <div className="px-3.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span>Private sanitized AC Cab & verified Chauffeur included</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#E61E6E] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#E61E6E] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 5: Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Special Requests (Pickup city, dietary needs, places you want to visit)
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={2}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="e.g. Please pick us up from Madurai junction early morning, pure vegetarian food preference..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Get Free Custom Quotation</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 pt-1 font-medium">
                    🔒 Your privacy is 100% protected. We will never share or spam your contact number.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
