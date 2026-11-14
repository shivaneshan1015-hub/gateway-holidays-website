import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blogs";
import { tourPackages } from "@/data/tours";
import { businessInfo } from "@/data/business";
import { BlogClient } from "./blog-client";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Gateway Holidays",
    };
  }

  const absoluteImageUrl = post.heroImage.startsWith("/")
    ? `https://gatewayholidays.in${post.heroImage}`
    : post.heroImage;

  return {
    title: {
      absolute:
        post.metaTitle.length <= 41 ? `${post.metaTitle} | Gateway Holidays` : post.metaTitle,
    },
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://gatewayholidays.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://gatewayholidays.in/blog/${post.slug}`,
      siteName: "Gateway Holidays",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author.name],
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [absoluteImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug);
  const relatedTours = tourPackages.filter((t) =>
    post.relatedTourSlugs.includes(t.slug)
  );

  const absoluteImageUrl = post.heroImage.startsWith("/")
    ? `https://gatewayholidays.in${post.heroImage}`
    : post.heroImage;

  // Schema.org Structured Data with deep AEO & GEO attribution
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://gatewayholidays.in/blog/${post.slug}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `https://gatewayholidays.in/blog/${post.slug}`,
          url: `https://gatewayholidays.in/blog/${post.slug}`,
          name: post.title,
        },
        headline: post.title,
        description: post.metaDescription,
        image: absoluteImageUrl,
        datePublished: post.publishDate,
        dateModified: post.modifiedDate,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@type": "TravelAgency",
          name: "Gateway Holidays",
          url: "https://gatewayholidays.in",
          telephone: businessInfo.phonePrimary,
          address: {
            "@type": "PostalAddress",
            streetAddress: businessInfo.address,
            addressLocality: businessInfo.city,
            addressRegion: businessInfo.state,
            postalCode: businessInfo.postalCode,
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.9252,
            longitude: 78.1198,
          },
          logo: {
            "@type": "ImageObject",
            url: "https://gatewayholidays.in/images/logo.png",
          },
        },
        mainEntityOfPage: `https://gatewayholidays.in/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gatewayholidays.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://gatewayholidays.in/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://gatewayholidays.in/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient
        post={post}
        relatedPosts={relatedPosts}
        relatedTours={relatedTours}
      />
    </>
  );
}
