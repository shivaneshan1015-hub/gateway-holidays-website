import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  center?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  badge,
  title,
  subtitle,
  centered = false,
  center = false,
  className = "",
  light = true,
}: SectionHeadingProps) {
  const isCentered = centered || center;
  const label = badge || eyebrow;

  return (
    <div
      className={`space-y-3 mb-8 sm:mb-12 ${
        isCentered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      } ${className}`}
    >
      {label && (
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full ${
            light
              ? "bg-[#E61E6E]/15 text-rose-300 border border-[#E61E6E]/30"
              : "bg-rose-50 text-rose-700 border border-rose-200/80 shadow-xs"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E61E6E] animate-pulse" />
          {label}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.2] ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
