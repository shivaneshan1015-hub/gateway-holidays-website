"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BrandLogoProps {
  variant?: "header" | "footer" | "icon";
  className?: string;
  imageClassName?: string;
}

export function BrandLogo({
  variant = "header",
  className = "",
  imageClassName = "",
}: BrandLogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-11 w-11 rounded-xl p-1 shadow-sm overflow-hidden flex items-center justify-center bg-white"
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

  if (variant === "footer") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <div className="relative flex items-center rounded-2xl bg-white/95 p-3.5 shadow-xl border border-white/20 transition-all hover:scale-102">
          <Image
            src="/images/logo.png"
            alt="Gateway Holidays"
            width={240}
            height={80}
            loading="lazy"
            className={`h-12 sm:h-14 w-auto object-contain ${imageClassName}`}
          />
        </div>
      </Link>
    );
  }

  // Header Default Variant
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative flex items-center rounded-xl bg-white px-3 py-1.5 shadow-xs border border-slate-200/80 hover:border-pink-500/40 transition-all"
      >
        <Image
          src="/images/logo.png"
          alt="Gateway Holidays"
          width={220}
          height={68}
          priority
          sizes="(max-width: 640px) 150px, 200px"
          className={`h-9 sm:h-11 w-auto object-contain ${imageClassName}`}
        />
      </motion.div>
    </Link>
  );
}
