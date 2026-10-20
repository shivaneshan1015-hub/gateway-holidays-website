import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Travel Guides, Pilgrimage Insights & Holiday Tips | Gateway Holidays Blog",
  description:
    "Expert South India travel guides, weekend itineraries from Madurai, temple darshan advice, Kolukkumalai sunrise safari guides, and Kerala backwater planning.",
  keywords: [
    "Gateway Holidays blog",
    "Madurai travel guide",
    "places to visit from Madurai",
    "South India temple tour guide",
    "Munnar Alleppey travel tips",
    "tour operator in Madurai",
  ],
  alternates: {
    canonical: "https://gatewayholidays.in/blog",
  },
  openGraph: {
    title: "Gateway Holidays Travel Blog & Guides",
    description:
      "Expert local travel guides, weekend road trip circuits, temple darshan rules, and itinerary planning across South India.",
    url: "https://gatewayholidays.in/blog",
    siteName: "Gateway Holidays",
    type: "website",
  },
};

export default function BlogHubPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  // Schema.org Blog collection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Gateway Holidays Travel Insights & Guides",
    description:
      "Curated travel articles, road trip itineraries, and temple circuit guides by Gateway Holidays Madurai.",
    url: "https://gatewayholidays.in/blog",
    publisher: {
      "@type": "TravelAgency",
      name: "Gateway Holidays",
      url: "https://gatewayholidays.in",
      telephone: businessInfo.phonePrimary,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate,
      dateModified: post.modifiedDate,
      url: `https://gatewayholidays.in/blog/${post.slug}`,
      image: post.heroImage,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-20 border-b border-slate-200">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E61E6E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F25C05]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F25C05] text-xs font-bold mb-4 shadow-xs">
            <BookOpen className="h-4 w-4" />
            <span>Travel Intel, AEO Answers & Expert Guides</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
            Curated Insights for the Discerning Traveler
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Written by local South India tour architects. Explore distances, temple protocols, hidden mountain trails, and bespoke travel planning tips.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Featured Post Card */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Sparkles className="h-4 w-4 text-[#F25C05]" />
              <span>Featured Travel Guide</span>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-[#F25C05]/50 shadow-md hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="relative h-72 sm:h-96 lg:h-full lg:col-span-7 overflow-hidden">
                  <Image
                    src={featuredPost.heroImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-900 border border-slate-200 shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span>{featuredPost.publishDate}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-amber-500" />
                        <span>{featuredPost.readingTime}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#F25C05] transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Quick AEO Answer highlight */}
                    <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-xs text-slate-800 space-y-1">
                      <p className="font-bold text-[#F25C05] flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Quick Summary (At a Glance):</span>
                      </p>
                      <p className="text-slate-600 leading-relaxed line-clamp-2">
                        {featuredPost.quickAnswer}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#E61E6E] to-[#F25C05] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                        GH
                      </div>
                      <span className="text-xs font-semibold text-slate-800">
                        {featuredPost.author.name}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F25C05] group-hover:translate-x-1 transition-transform">
                      <span>Read Full Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Section Heading for All Articles */}
        <div className="mb-8">
          <SectionHeading
            badge="Knowledge Base"
            title="All Travel Articles & Insights"
            subtitle="Deep-dive into individual routes, sacred circuits, wildlife timings, and road recommendations."
          />
        </div>

        {/* Grid of Remaining Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 border border-slate-200 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span>{post.publishDate}</span>
                    <span>•</span>
                    <span className="text-amber-600 font-medium">{post.readingTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F25C05] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F25C05]">
                  <span>Explore Travel Details</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-white to-pink-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900">
              Need a personalized circuit tailored to your family?
            </h4>
            <p className="text-xs text-slate-600 max-w-xl">
              Talk directly with our Madurai travel experts on WhatsApp. We provide doorstep or airport pickup, private AC vehicles, and custom quotes within minutes.
            </p>
          </div>
          <Link
            href="/plan-my-trip"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E61E6E] to-[#F25C05] text-white font-bold text-xs shadow-md hover:scale-105 transition-all whitespace-nowrap"
          >
            Plan My Trip in 3D
          </Link>
        </div>
      </div>
    </div>
  );
}
