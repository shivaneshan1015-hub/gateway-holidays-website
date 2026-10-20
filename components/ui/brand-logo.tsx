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
        <div className="relative flex items-center rounded-2xl bg-white p-3.5 shadow-md border border-slate-200 transition-all hover:scale-102">
          <Image
            src="/images/logo.png"
            alt="Gateway Holidays"
            width={200}
            height={200}
            loading="lazy"
            className={`h-14 sm:h-16 w-auto object-contain ${imageClassName}`}
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
        className="relative flex items-center rounded-xl bg-white p-1 transition-all"
      >
        <Image
          src="/images/logo.png"
          alt="Gateway Holidays"
          width={180}
          height={180}
          priority
          sizes="(max-width: 640px) 130px, 170px"
          className={`h-11 sm:h-13 w-auto object-contain ${imageClassName}`}
        />
      </motion.div>
    </Link>
  );
}
