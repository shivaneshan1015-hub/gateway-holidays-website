"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BrandLogoProps {
  variant?: "header" | "footer" | "icon" | "stacked";
  className?: string;
  imageClassName?: string;
}

export function BrandLogo({
  variant = "header",
  className = "",
  imageClassName = "",
}: BrandLogoProps) {
  // 1. Standalone Icon Variant (App icon / compact mobile)
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-11 w-11 rounded-2xl p-1 shadow-sm overflow-hidden flex items-center justify-center bg-white border border-slate-200"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Gateway Holidays Icon"
            width={44}
            height={44}
            priority
            className="object-contain"
          />
        </motion.div>
      </Link>
    );
  }

  // 2. Footer Variant (Optimized for dark #070B19 background with crisp white typography)
  if (variant === "footer") {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`}>
        <div className="relative flex items-center">
          <Image
            src="/images/logo-dark-bg.png"
            alt="Gateway Holidays"
            width={566}
            height={150}
            loading="lazy"
            className={`h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-102 ${imageClassName}`}
          />
        </div>
      </Link>
    );
  }

  // 3. Stacked Logo Variant (Trimmed tight 625x491)
  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Gateway Holidays"
            width={625}
            height={491}
            priority
            className={`h-16 w-auto object-contain ${imageClassName}`}
          />
        </motion.div>
      </Link>
    );
  }

  // 4. Header Default Variant (Optimized 566x150 Horizontal Lockup for Light Navbar)
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative flex items-center"
      >
        <Image
          src="/images/logo-horizontal.png"
          alt="Gateway Holidays"
          width={566}
          height={150}
          priority
          sizes="(max-width: 640px) 160px, 220px"
          className={`h-11 sm:h-13 w-auto object-contain ${imageClassName}`}
        />
      </motion.div>
    </Link>
  );
}
