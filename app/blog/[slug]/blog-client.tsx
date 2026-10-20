"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Share2,
  Check,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  Sparkles,
  MapPin,
  Car,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Lightbulb,
  Compass,
  Star,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { TourPackage } from "@/data/tours";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";
import { EnquiryModal } from "@/components/tours/enquiry-modal";

interface BlogClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  relatedTours: TourPackage[];
}

export function BlogClient({ post, relatedPosts, relatedTours }: BlogClientProps) {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDestination, setModalDestination] = useState<string>(post.title);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Read this travel guide on ${post.title}: https://gatewayholidays.in/blog/${post.slug}`
  )}`;

  const directConsultationUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Gateway Holidays! I read your article "${post.title}" and would like to plan a custom tour package with private cab. Please advise.`
  )}`;

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-24">
      {/* Top Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href="/blog" className="hover:text-slate-900 transition-colors">
            Travel Blog
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-50 text-[#F25C05] border border-orange-200/80 shadow-2xs">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span>{post.publishDate}</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Clock className="h-3.5 w-3.5 text-amber-500" />
            <span>{post.readingTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.2]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Author Bio Strip & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-r from-[#E61E6E] to-[#F25C05] flex items-center justify-center text-white font-black text-sm shadow-sm">
              GH
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
              <p className="text-xs text-slate-500">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Share</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? "Link Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-72 sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Article Main Column (8 Cols) */}
          <main className="lg:col-span-8 space-y-12">
            {/* AEO: Structured "At a Glance" Executive Summary */}
            <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-50/80 via-amber-50/40 to-white border-2 border-orange-200/90 shadow-md space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F25C05]">
                <Sparkles className="h-4 w-4" />
                <span>At a Glance: The Direct Answer</span>
              </div>

              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
                {post.quickAnswer}
              </p>

              {/* Structured Summary Cards Grid */}
              {post.quickSummaryPoints && post.quickSummaryPoints.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {post.quickSummaryPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900">{pt.title}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100/70 text-[#F25C05]">
                          {pt.distance}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">{pt.highlight}</p>
                      <p className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1 pt-0.5">
                        <CheckCircle2 className="h-3 w-3 shrink-0" />
                        <span>Best for: {pt.bestFor}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* GEO: Machine-Readable Entity Facts Table */}
            {post.keyFacts && post.keyFacts.length > 0 && (
              <section className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <Bookmark className="h-4 w-4 text-[#E61E6E]" />
                  <span>Essential Route & Planning Metrics</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {post.keyFacts.map((fact, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5"
                    >
                      <p className="text-[11px] font-semibold text-slate-500">{fact.label}</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Editorial Lead-In */}
            <section className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              {post.introduction.map((p, i) => (
                <p key={i} className={i === 0 ? "first-letter:text-4xl first-letter:font-black first-letter:text-[#F25C05] first-letter:mr-2 first-letter:float-left text-slate-800" : ""}>
                  {p}
                </p>
              ))}
            </section>

            {/* Editorial Chapter Sections */}
            <div className="space-y-16 pt-4">
              {post.sections.map((section, idx) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6 scroll-mt-24 transition-all hover:border-slate-300 hover:shadow-md"
                >
                  {/* Section Title & Distance Badge */}
                  <div className="space-y-2">
                    {section.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        <MapPin className="h-3.5 w-3.5 text-[#F25C05]" />
                        <span>{section.badge}</span>
                      </span>
                    )}
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  {/* Optional Chapter Image */}
                  {section.image && (
                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-xs">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  )}

                  {/* Narrative Body */}
                  <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {section.narrative.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlights Pill Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-[#F25C05]" />
                      <span>Experiences You Cannot Miss</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                      {section.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timing & Insider Tip Callout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-amber-500" />
                        <span>Recommended Pace</span>
                      </p>
                      <p className="text-xs font-bold text-slate-900">{section.idealDuration}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                        <Lightbulb className="h-3.5 w-3.5 text-amber-600" />
                        <span>Local Chauffeur Tip</span>
                      </p>
                      <p className="text-xs text-slate-800 leading-relaxed">{section.insiderTip}</p>
                    </div>
                  </div>

                  {/* Direct Tour Package CTA */}
                  {section.ctaTourSlug && (
                    <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-100">
                      <span className="text-xs text-slate-500 font-medium">
                        Want this circuit arranged end-to-end with private cab?
                      </span>
                      <Link
                        href={`/tours/${section.ctaTourSlug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white text-xs font-bold shadow-xs hover:scale-105 transition-all"
                      >
                        <span>{section.ctaTourTitle || "View Tour Package"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Pro Travel Tips Box */}
            {post.proTips && post.proTips.length > 0 && (
              <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Gateway Holidays Chauffeur Advice</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Golden Rules for Smooth South India Touring
                </h3>
                <div className="space-y-3 pt-2">
                  {post.proTips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Accordion Section (AEO Schema) */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faqs" className="pt-8 border-t border-slate-200 space-y-6 scroll-mt-24">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F25C05]">
                    Frequently Asked Questions
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Everything You Need to Know
                  </h3>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#F25C05] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5">
                            <HelpCircle className="h-4 w-4 text-[#F25C05] shrink-0" />
                            <span>{faq.question}</span>
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 text-slate-400 transition-transform ${
                              isOpen ? "rotate-180 text-[#F25C05]" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents Quick Jump */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#F25C05]" />
                  <span>Table of Contents</span>
                </h4>
                <nav className="space-y-1.5 text-xs">
                  {post.sections.map((sec, sIdx) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-[#F25C05] hover:bg-white font-medium transition-colors truncate"
                    >
                      {sec.title}
                    </a>
                  ))}
                  <a
                    href="#faqs"
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-[#F25C05] hover:bg-white font-medium transition-colors"
                  >
                    Frequently Asked Questions
                  </a>
                </nav>
              </div>

              {/* Consultation / Private Cab Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold border border-white/20">
                  <Car className="h-3.5 w-3.5" />
                  <span>Private AC Vehicle Available</span>
                </div>

                <h3 className="text-xl font-black leading-snug">
                  Plan This Circuit with Zero Hassle
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Skip the stress of public buses or self-driving winding mountain roads. We arrange doorstep or airport pickup, seasoned drivers, and handpicked resort stays.
                </p>

                <div className="space-y-2 pt-1 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Pickup directly on arrival (airport/station)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>All toll, parking & fuel charges included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Flexible pauses for meals & photography</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <a
                    href={directConsultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:scale-102 transition-all cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setModalDestination(post.title);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Request Callback Quotation</span>
                  </button>
                </div>
              </div>

              {/* Related Blog Posts */}
              {relatedPosts.length > 0 && (
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    More South India Guides
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="group block space-y-1"
                      >
                        <p className="text-[11px] text-amber-600 font-bold">{r.category}</p>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors leading-snug line-clamp-2">
                          {r.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Bottom Related Tour Packages */}
        {relatedTours.length > 0 && (
          <section className="mt-24 pt-16 border-t border-slate-200">
            <SectionHeading
              badge="Handcrafted Itineraries"
              title="Recommended Packages for This Route"
              subtitle="Turn this travel guide into a reality. All tours include private AC vehicle transfers, polite chauffeurs, and handpicked stays."
              center
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((tour) => (
                <div
                  key={tour.id}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-2xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E61E6E] text-white shadow-md">
                        {tour.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F25C05]">
                        {tour.categoryLabel}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">
                        {tour.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {tour.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="text-xs font-bold text-[#F25C05] flex items-center gap-1.5 hover:underline"
                      >
                        <span>View Day-by-Day Itinerary</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <button
                        onClick={() => {
                          setModalDestination(tour.title);
                          setIsModalOpen(true);
                        }}
                        className="py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs cursor-pointer"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 1-Click Consultation Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDestination={modalDestination}
      />
    </div>
  );
}
