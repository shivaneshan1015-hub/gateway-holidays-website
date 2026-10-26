"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Sparkles,
  Palmtree,
  Sun,
} from "lucide-react";

export interface CalendarDatePickerProps {
  value: string; // Formatted date string or empty
  isoValue?: string; // Optional YYYY-MM-DD
  onChange: (formatted: string, isoDate: string) => void;
  placeholder?: string;
  minDate?: Date;
  maxMonthsAhead?: number;
  className?: string;
  id?: string;
  name?: string;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/**
 * Verified Indian / Tamil Nadu Government Public Holidays for 2026 & 2027
 */
export const PUBLIC_HOLIDAYS: Record<string, { name: string; type?: "national" | "festival" | "state" }> = {
  // 2026
  "2026-01-01": { name: "New Year's Day", type: "festival" },
  "2026-01-14": { name: "Bhogi / Makar Sankranti", type: "festival" },
  "2026-01-15": { name: "Pongal Festival", type: "festival" },
  "2026-01-16": { name: "Thiruvalluvar Day", type: "state" },
  "2026-01-17": { name: "Uzhavar Thirunal", type: "state" },
  "2026-01-26": { name: "Republic Day", type: "national" },
  "2026-02-17": { name: "Maha Shivaratri", type: "festival" },
  "2026-03-04": { name: "Holi Festival", type: "festival" },
  "2026-03-20": { name: "Ramzan / Eid-ul-Fitr", type: "festival" },
  "2026-03-22": { name: "Telugu New Year (Ugadi)", type: "festival" },
  "2026-04-03": { name: "Good Friday", type: "festival" },
  "2026-04-05": { name: "Easter Sunday", type: "festival" },
  "2026-04-14": { name: "Tamil New Year / Dr. Ambedkar Jayanti", type: "state" },
  "2026-05-01": { name: "May Day / Workers Day", type: "national" },
  "2026-05-27": { name: "Bakrid / Eid-al-Adha", type: "festival" },
  "2026-06-25": { name: "Muharram", type: "festival" },
  "2026-08-15": { name: "Independence Day", type: "national" },
  "2026-08-26": { name: "Milad-un-Nabi", type: "festival" },
  "2026-09-04": { name: "Krishna Jayanthi", type: "festival" },
  "2026-09-14": { name: "Vinayaka Chaturthi", type: "festival" },
  "2026-10-02": { name: "Gandhi Jayanti", type: "national" },
  "2026-10-19": { name: "Ayutha Pooja / Saraswathi Pooja", type: "festival" },
  "2026-10-20": { name: "Vijaya Dasami / Dussehra", type: "festival" },
  "2026-11-08": { name: "Deepavali / Diwali", type: "festival" },
  "2026-12-25": { name: "Christmas", type: "festival" },

  // 2027
  "2027-01-01": { name: "New Year's Day", type: "festival" },
  "2027-01-14": { name: "Pongal Festival", type: "festival" },
  "2027-01-15": { name: "Thiruvalluvar Day", type: "state" },
  "2027-01-16": { name: "Uzhavar Thirunal", type: "state" },
  "2027-01-26": { name: "Republic Day", type: "national" },
  "2027-02-09": { name: "Thaipusam", type: "festival" },
  "2027-03-08": { name: "Maha Shivaratri", type: "festival" },
  "2027-03-09": { name: "Ramzan / Eid-ul-Fitr", type: "festival" },
  "2027-03-22": { name: "Holi Festival", type: "festival" },
  "2027-03-26": { name: "Good Friday", type: "festival" },
  "2027-03-28": { name: "Easter Sunday", type: "festival" },
  "2027-04-14": { name: "Tamil New Year / Ambedkar Jayanti", type: "state" },
  "2027-05-01": { name: "May Day", type: "national" },
  "2027-05-17": { name: "Bakrid / Eid-al-Adha", type: "festival" },
  "2027-06-15": { name: "Muharram", type: "festival" },
  "2027-08-15": { name: "Independence Day", type: "national" },
  "2027-08-16": { name: "Milad-un-Nabi", type: "festival" },
  "2027-08-25": { name: "Krishna Jayanthi", type: "festival" },
  "2027-09-04": { name: "Vinayaka Chaturthi", type: "festival" },
  "2027-10-02": { name: "Gandhi Jayanti", type: "national" },
  "2027-10-09": { name: "Ayutha Pooja", type: "festival" },
  "2027-10-10": { name: "Vijaya Dasami", type: "festival" },
  "2027-10-28": { name: "Deepavali / Diwali", type: "festival" },
  "2027-12-25": { name: "Christmas", type: "festival" },
};

function formatReadableDate(date: Date): string {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()].slice(0, 3);
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseInputDate(str?: string): Date | null {
  if (!str || str.toLowerCase().includes("flexible")) return null;
  const parsed = new Date(str);
  if (!isNaN(parsed.getTime())) {
    return parsed;
  }
  return null;
}

/**
 * Checks if a specific day is non-working (Saturday, Sunday, or Public Holiday)
 */
function isOffDay(date: Date): boolean {
  const dow = date.getDay();
  if (dow === 0 || dow === 6) return true; // Sunday or Saturday
  const iso = toISODate(date);
  return Boolean(PUBLIC_HOLIDAYS[iso]);
}

/**
 * Computes consecutive non-working day streak (Continuous Leave / Long Weekend)
 */
function getContinuousStreak(date: Date) {
  if (!isOffDay(date)) return null;

  // Scan backward
  let start = new Date(date);
  while (true) {
    const prev = new Date(start);
    prev.setDate(prev.getDate() - 1);
    if (isOffDay(prev)) {
      start = prev;
    } else {
      break;
    }
  }

  // Scan forward
  let end = new Date(date);
  while (true) {
    const next = new Date(end);
    next.setDate(next.getDate() + 1);
    if (isOffDay(next)) {
      end = next;
    } else {
      break;
    }
  }

  const streakDays = Math.round((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
  const iso = toISODate(date);
  const holiday = PUBLIC_HOLIDAYS[iso];

  return {
    streakDays,
    isLongWeekend: streakDays >= 3,
    start,
    end,
    holiday,
  };
}

export function CalendarDatePicker({
  value,
  isoValue,
  onChange,
  placeholder = "Select travel date from calendar",
  minDate,
  maxMonthsAhead = 18,
  className = "",
  id = "travel-date-picker",
  name = "travelMonth",
}: CalendarDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize today
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const effectiveMinDate = useMemo(() => {
    const min = minDate ? new Date(minDate) : new Date(today);
    min.setHours(0, 0, 0, 0);
    return min;
  }, [minDate, today]);

  // Selected date
  const selectedDate = isoValue ? parseInputDate(isoValue) : parseInputDate(value);

  // View month & year
  const [viewYear, setViewYear] = useState(() =>
    selectedDate ? selectedDate.getFullYear() : today.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(() =>
    selectedDate ? selectedDate.getMonth() : today.getMonth()
  );

  // Hovered / Tapped day preview note
  const [hoveredDayInfo, setHoveredDayInfo] = useState<string | null>(null);

  // Update view when external value changes
  useEffect(() => {
    if (selectedDate) {
      setViewYear(selectedDate.getFullYear());
      setViewMonth(selectedDate.getMonth());
    }
  }, [value, isoValue]);

  // Click outside listener
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Navigation constraints
  const isPrevDisabled =
    viewYear < effectiveMinDate.getFullYear() ||
    (viewYear === effectiveMinDate.getFullYear() &&
      viewMonth <= effectiveMinDate.getMonth());

  const maxDate = useMemo(
    () =>
      new Date(
        effectiveMinDate.getFullYear(),
        effectiveMinDate.getMonth() + maxMonthsAhead,
        1
      ),
    [effectiveMinDate, maxMonthsAhead]
  );

  const isNextDisabled =
    viewYear > maxDate.getFullYear() ||
    (viewYear === maxDate.getFullYear() && viewMonth >= maxDate.getMonth());

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPrevDisabled) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isNextDisabled) return;
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const chosen = new Date(viewYear, viewMonth, day);
    chosen.setHours(0, 0, 0, 0);

    const formatted = formatReadableDate(chosen);
    const iso = toISODate(chosen);
    onChange(formatted, iso);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("", "");
  };

  // Quick Preset Handlers
  const handlePreset = (
    type: "thisWeekend" | "nextWeekend" | "nextLongWeekend" | "nextMonth" | "flexible"
  ) => {
    const d = new Date(today);

    if (type === "thisWeekend") {
      const dayOfWeek = d.getDay();
      const daysUntilSat = dayOfWeek === 6 ? 0 : 6 - dayOfWeek;
      d.setDate(d.getDate() + daysUntilSat);
      onChange(formatReadableDate(d), toISODate(d));
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
      setIsOpen(false);
    } else if (type === "nextWeekend") {
      const dayOfWeek = d.getDay();
      const daysUntilSat = (dayOfWeek === 6 ? 7 : 6 - dayOfWeek) + 7;
      d.setDate(d.getDate() + daysUntilSat);
      onChange(formatReadableDate(d), toISODate(d));
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
      setIsOpen(false);
    } else if (type === "nextLongWeekend") {
      // Find the nearest upcoming 3+ day continuous leave from today
      const cursor = new Date(today);
      let foundDate: Date | null = null;
      for (let i = 0; i < 180; i++) {
        const streak = getContinuousStreak(cursor);
        if (streak && streak.isLongWeekend) {
          foundDate = new Date(streak.start);
          break;
        }
        cursor.setDate(cursor.getDate() + 1);
      }
      if (foundDate) {
        onChange(formatReadableDate(foundDate), toISODate(foundDate));
        setViewYear(foundDate.getFullYear());
        setViewMonth(foundDate.getMonth());
        setIsOpen(false);
      }
    } else if (type === "nextMonth") {
      const nm = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      onChange(formatReadableDate(nm), toISODate(nm));
      setViewYear(nm.getFullYear());
      setViewMonth(nm.getMonth());
      setIsOpen(false);
    } else if (type === "flexible") {
      onChange("Flexible (Next 30 Days)", "");
      setIsOpen(false);
    }
  };

  // Days matrix for current view month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sun
  const emptyDaysBefore = Array.from({ length: firstDayOfWeek });

  // Compute month holidays & long weekends list for the footer callout
  const monthHolidays = useMemo(() => {
    const list: Array<{
      day: number;
      date: string;
      name: string;
      streakDays: number;
      isLongWeekend: boolean;
      dateLabel: string;
    }> = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(viewYear, viewMonth, day);
      const iso = toISODate(cellDate);
      const hol = PUBLIC_HOLIDAYS[iso];
      const streak = getContinuousStreak(cellDate);

      if (hol) {
        list.push({
          day,
          date: iso,
          name: hol.name,
          streakDays: streak?.streakDays || 1,
          isLongWeekend: Boolean(streak?.isLongWeekend),
          dateLabel: `${day} ${MONTH_NAMES[viewMonth].slice(0, 3)}`,
        });
      }
    }
    return list;
  }, [viewYear, viewMonth, daysInMonth]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={value} />

      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border transition-all text-left flex items-center justify-between text-sm cursor-pointer select-none ${
          isOpen
            ? "border-[#E61E6E] bg-white ring-2 ring-[#E61E6E]/20 shadow-sm"
            : "border-slate-300 hover:border-[#E61E6E] hover:bg-white"
        }`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          <CalendarIcon
            className={`h-4 w-4 shrink-0 transition-colors ${
              value ? "text-[#E61E6E]" : "text-slate-400"
            }`}
          />
          {value ? (
            <span className="font-semibold text-slate-900 truncate">{value}</span>
          ) : (
            <span className="text-slate-400 text-sm truncate">{placeholder}</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 ml-2 shrink-0">
          {value && (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={(e) => e.key === "Enter" && handleClear(e as any)}
              aria-label="Clear date"
              className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </span>
          )}
          <ChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#E61E6E]" : ""
            }`}
          />
        </div>
      </button>

      {/* Floating Calendar Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 w-[325px] sm:w-[335px] top-full mt-1.5 z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 text-slate-900 select-none"
          >
            {/* Quick Presets Bar with Long Weekend Shortcut */}
            <div className="mb-2.5 pb-2 border-b border-slate-100 flex flex-wrap gap-1">
              <button
                type="button"
                onClick={() => handlePreset("nextLongWeekend")}
                className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white transition-all shadow-xs cursor-pointer flex items-center gap-1"
                title="Jump to the nearest 3+ day continuous break"
              >
                <Palmtree className="h-3 w-3" />
                Next Long Weekend
              </button>
              <button
                type="button"
                onClick={() => handlePreset("thisWeekend")}
                className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-[#E61E6E] text-slate-700 transition-colors cursor-pointer"
              >
                This Weekend
              </button>
              <button
                type="button"
                onClick={() => handlePreset("nextWeekend")}
                className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-[#E61E6E] text-slate-700 transition-colors cursor-pointer"
              >
                Next Weekend
              </button>
              <button
                type="button"
                onClick={() => handlePreset("flexible")}
                className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <Sparkles className="h-2.5 w-2.5" />
                Flexible
              </button>
            </div>

            {/* Calendar Navigation Header */}
            <div className="flex items-center justify-between mb-2 px-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isPrevDisabled}
                aria-label="Previous month"
                className={`h-7 w-7 rounded-lg flex items-center justify-center transition-colors ${
                  isPrevDisabled
                    ? "text-slate-300 cursor-not-allowed"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                <span>{MONTH_NAMES[viewMonth]} {viewYear}</span>
                {monthHolidays.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {monthHolidays.length} {monthHolidays.length === 1 ? "Holiday" : "Holidays"}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                disabled={isNextDisabled}
                aria-label="Next month"
                className={`h-7 w-7 rounded-lg flex items-center justify-center transition-colors ${
                  isNextDisabled
                    ? "text-slate-300 cursor-not-allowed"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Weekday Labels: Sunday in Rose, Saturday in Indigo, Weekdays in Slate */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {WEEKDAY_NAMES.map((w, idx) => {
                const isSunday = idx === 0;
                const isSaturday = idx === 6;

                return (
                  <div
                    key={w}
                    className={`text-[10px] font-bold uppercase py-0.5 rounded-md ${
                      isSunday
                        ? "text-rose-600 bg-rose-50/90 font-extrabold"
                        : isSaturday
                        ? "text-indigo-600 bg-indigo-50/90 font-extrabold"
                        : "text-slate-400"
                    }`}
                  >
                    {w}
                  </div>
                );
              })}
            </div>

            {/* Month Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {emptyDaysBefore.map((_, i) => (
                <div key={`empty-${i}`} className="h-8 w-8 mx-auto" />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const cellDate = new Date(viewYear, viewMonth, day);
                cellDate.setHours(0, 0, 0, 0);

                const iso = toISODate(cellDate);
                const dayOfWeek = cellDate.getDay();
                const isSunday = dayOfWeek === 0;
                const isSaturday = dayOfWeek === 6;

                const isPast = cellDate.getTime() < effectiveMinDate.getTime();
                const isToday = cellDate.getTime() === today.getTime();
                const isSelected =
                  selectedDate &&
                  cellDate.getTime() ===
                    new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      selectedDate.getDate()
                    ).getTime();

                const holiday = PUBLIC_HOLIDAYS[iso];
                const streak = getContinuousStreak(cellDate);
                const isLongWeekend = Boolean(streak?.isLongWeekend);

                if (isPast) {
                  return (
                    <div
                      key={`day-${day}`}
                      className="h-8 w-8 mx-auto flex flex-col items-center justify-center text-xs text-slate-300 cursor-not-allowed"
                    >
                      <span>{day}</span>
                    </div>
                  );
                }

                if (isSelected) {
                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      onClick={() => handleSelectDay(day)}
                      className="h-8 w-8 mx-auto rounded-lg bg-gradient-to-r from-[#E61E6E] via-[#F25C05] to-[#F59E0B] text-white font-bold text-xs flex flex-col items-center justify-center shadow-md shadow-orange-500/25 scale-105 z-10 transition-all cursor-pointer relative"
                    >
                      <span>{day}</span>
                      {holiday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white -mt-0.5" />
                      )}
                    </button>
                  );
                }

                // Tooltip info generator on hover/focus
                const previewText = holiday
                  ? `${day} ${MONTH_NAMES[viewMonth].slice(0, 3)}: ${holiday.name} (${streak?.streakDays || 1}-Day ${streak?.isLongWeekend ? "Long Weekend" : "Holiday"})`
                  : isLongWeekend
                  ? `${day} ${MONTH_NAMES[viewMonth].slice(0, 3)}: Continuous Leave (${streak?.streakDays}-Day Break)`
                  : isSunday
                  ? `${day} ${MONTH_NAMES[viewMonth].slice(0, 3)}: Sunday Weekend`
                  : isSaturday
                  ? `${day} ${MONTH_NAMES[viewMonth].slice(0, 3)}: Saturday Weekend`
                  : `${day} ${MONTH_NAMES[viewMonth].slice(0, 3)}`;

                // Base styling by day type
                let cellStyle = "text-slate-700 hover:bg-slate-100 border border-transparent";

                if (holiday) {
                  // Public Holiday: Emerald highlight
                  cellStyle =
                    "bg-emerald-50 text-emerald-800 font-bold border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 shadow-2xs";
                } else if (isSunday) {
                  // Sunday: Rose / Red
                  cellStyle =
                    "bg-rose-50/70 text-rose-700 font-semibold border border-rose-200/60 hover:bg-rose-100 hover:text-rose-900";
                } else if (isSaturday) {
                  // Saturday: Indigo / Blue
                  cellStyle =
                    "bg-indigo-50/70 text-indigo-700 font-semibold border border-indigo-200/60 hover:bg-indigo-100 hover:text-indigo-900";
                } else if (isLongWeekend) {
                  // Part of extended leave
                  cellStyle =
                    "bg-amber-50/80 text-amber-900 font-semibold border border-amber-200 hover:bg-amber-100";
                }

                if (isToday) {
                  cellStyle += " ring-2 ring-[#E61E6E] ring-offset-1 font-bold";
                }

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    onClick={() => handleSelectDay(day)}
                    onMouseEnter={() => setHoveredDayInfo(previewText)}
                    onMouseLeave={() => setHoveredDayInfo(null)}
                    title={previewText}
                    className={`h-8 w-8 mx-auto rounded-lg text-xs flex flex-col items-center justify-center transition-all cursor-pointer relative group ${cellStyle}`}
                  >
                    <span>{day}</span>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-0.5 -mt-0.5">
                      {holiday && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-emerald-600 ring-1 ring-white"
                          title={holiday.name}
                        />
                      )}
                      {isLongWeekend && !holiday && (
                        <span
                          className="w-1 h-1 rounded-full bg-amber-500"
                          title="Continuous Leave"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hovered Day Quick Indicator Bar */}
            <div className="mt-2 px-1 min-h-[22px] flex items-center justify-between text-[11px]">
              {hoveredDayInfo ? (
                <span className="text-[#E61E6E] font-semibold truncate flex items-center gap-1 animate-fadeIn">
                  <Sun className="w-3 h-3 text-amber-500 shrink-0" />
                  {hoveredDayInfo}
                </span>
              ) : (
                <span className="text-slate-400 text-[10.5px] truncate">
                  Hover or tap any date to see holiday and weekend details
                </span>
              )}
            </div>

            {/* Color Legend Bar */}
            <div className="mt-1 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-[10px] text-slate-600 px-1">
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                Sunday
              </span>
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                Saturday
              </span>
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                Public Holiday
              </span>
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                Long Weekend
              </span>
            </div>

            {/* Month's Holidays & Long Weekends Summary List */}
            {monthHolidays.length > 0 && (
              <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Holidays in {MONTH_NAMES[viewMonth]}</span>
                  <span className="text-emerald-700 font-semibold">{monthHolidays.length} Days</span>
                </div>
                <div className="space-y-1 max-h-24 overflow-y-auto pr-0.5">
                  {monthHolidays.map((h) => (
                    <div
                      key={h.date}
                      onClick={() => handleSelectDay(h.day)}
                      className="p-1 px-2 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200/60 hover:border-emerald-300 transition-colors cursor-pointer flex items-center justify-between text-[11px]"
                    >
                      <span className="truncate">
                        <strong className="text-slate-900">{h.day} {MONTH_NAMES[viewMonth].slice(0, 3)}:</strong>{" "}
                        <span className="text-slate-700">{h.name}</span>
                      </span>
                      {h.isLongWeekend && (
                        <span className="ml-1 px-1.5 py-0.2 rounded text-[9.5px] font-bold bg-amber-100 text-amber-800 shrink-0">
                          {h.streakDays}-Day Break
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer with Selected Date Summary */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="truncate">
                {value ? (
                  <>
                    Selected: <strong className="text-slate-900">{value}</strong>
                  </>
                ) : (
                  "Please pick your start date"
                )}
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#E61E6E] font-bold hover:underline cursor-pointer ml-2 shrink-0"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
