"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Send,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { EnquiryModal } from "@/components/tours/enquiry-modal";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          destination: "Office Contact Inquiry",
          specialRequests: formData.message,
        }),
      });
    } catch (err) {
      console.warn("[Contact CRM Sync Note]:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    const text = `*New Contact Message — Gateway Holidays*
━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Message:* ${formData.message}
━━━━━━━━━━━━━━━━━━━━`;
    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />

      {/* Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E61E6E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
            <MapPin className="h-3.5 w-3.5 text-[#F25C05]" />
            <span>Anna Nagar, Madurai Office</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Let&apos;s Plan Your <span className="text-gradient-brand">Next Getaway</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Drop by our Madurai office for a warm cup of coffee and itinerary planning, or connect instantly with our senior trip coordinator via WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <main className="flex-1 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Office Credentials & Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl text-slate-900">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Head Office Madurai</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Licensed & Registered Tour Operator
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="h-5 w-5 text-[#F25C05] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Office Address:</p>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {businessInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="h-5 w-5 text-[#E61E6E] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Phone Support:</p>
                      <a
                        href={`tel:${businessInfo.phoneClean}`}
                        className="text-slate-900 hover:text-[#F25C05] font-bold transition-colors block mt-0.5"
                      >
                        {businessInfo.phonePrimary} / {businessInfo.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Email Address:</p>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className="text-slate-900 hover:text-[#F25C05] font-bold transition-colors block mt-0.5"
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Working Hours:</p>
                      <p className="text-slate-600 mt-0.5">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Link Card */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#F25C05]" />
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Support Card */}
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <span>Instant WhatsApp Itinerary Assistance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have quick questions about road conditions, resort availability, or customized temple darshan? Chat directly with our senior trip planner.
                </p>
                <a
                  href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                    businessInfo.defaultWhatsAppMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6 text-slate-900">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your query and our team will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                    <p className="text-xs text-slate-600">
                      Your message has been initiated via WhatsApp. Our team will assist you immediately.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Meenakshi Sundaram"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98421 12345"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        How can we help you? *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the destinations you want to visit, travel dates, or questions about our private cab service..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#F25C05] focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Enquiry Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileCTA onOpenEnquiry={() => setModalOpen(true)} />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
