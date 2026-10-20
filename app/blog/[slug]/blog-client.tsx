"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
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
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Top Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href="/blog" className="hover:text-slate-900 transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-slate-700 font-semibold truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#F25C05] border border-orange-200 shadow-xs">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span>{post.publishDate}</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5 text-amber-500" />
            <span>{post.readingTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {post.title}
        </h1>

        {/* Author Bio Strip & Share buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#E61E6E] to-[#F25C05] flex items-center justify-center text-white font-bold text-sm shadow-xs">
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
              className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Share</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative h-72 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
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

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Left Body (8 cols) */}
          <article className="lg:col-span-8 space-y-8">
            {/* AEO: Direct Answer Snippet Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-white border-2 border-[#F25C05]/30 shadow-md">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F25C05] mb-2.5">
                <Sparkles className="h-4 w-4" />
                <span>At a Glance (Quick Summary)</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {post.quickAnswer}
              </p>
            </div>

            {/* GEO: Key Facts Table */}
            {post.keyFacts && post.keyFacts.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Bookmark className="h-4 w-4 text-[#E61E6E]" />
                  <span>Essential Route & Trip Facts</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {post.keyFacts.map((fact, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5"
                    >
                      <p className="text-[11px] font-semibold text-slate-500">{fact.label}</p>
                      <p className="text-xs font-bold text-slate-900">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Render Main Article HTML Content */}
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* FAQ Accordion Section (AEO Target) */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F25C05]">
                    Frequently Asked Questions
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
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
                          <ChevronRight
                            className={`h-4 w-4 text-slate-400 transition-transform ${
                              isOpen ? "rotate-90 text-[#F25C05]" : ""
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
              </div>
            )}
          </article>

          {/* Sticky Sidebar Right (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Consultation Card */}
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold border border-white/20">
                  <Car className="h-3.5 w-3.5" />
                  <span>Doorstep & Airport Cab</span>
                </div>

                <h3 className="text-xl font-bold leading-snug">
                  Plan This Exact Circuit with Gateway Holidays
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Skip the hassle of public transit or self-driving ghat roads. We provide a sanitized AC vehicle, certified courteous chauffeur, and handpicked resort stays.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Direct pickup on arrival (station/airport)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>No hidden fees — tolls & permits included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Tailored day-by-day customized schedule</span>
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
                    <span>Request Custom Callback</span>
                  </button>
                </div>
              </div>

              {/* Related Articles in Sidebar */}
              {relatedPosts.length > 0 && (
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    More Travel Guides
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="group block space-y-1"
                      >
                        <p className="text-xs text-amber-600 font-semibold">{r.category}</p>
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

        {/* Relevant Tour Packages Section (Bottom) */}
        {relatedTours.length > 0 && (
          <section className="mt-20 pt-14 border-t border-slate-200">
            <SectionHeading
              badge="Handcrafted Packages"
              title="Recommended Packages for This Destination"
              subtitle="Turn this travel guide into reality. All tours include private AC cab transfers, polite chauffeurs, and handpicked stays."
              center
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <span>View Itinerary</span>
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
      </main>

      {/* 1-Click Consultation Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDestination={modalDestination}
      />
    </div>
  );
}
