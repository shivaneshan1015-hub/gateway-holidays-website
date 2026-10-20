import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070B19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gatewayholidays.in"),
  title: {
    default: "Gateway Holidays — Bespoke Tour Packages & Private Cab Services | Madurai",
    template: "%s | Gateway Holidays",
  },
  description:
    "4.8★ Rated tour operator in Anna Nagar, Madurai. Customized South India hill stations, high-altitude adventure trekking tours, heritage temple circuits, and international escapes with private sanitized AC cabs and 24/7 personal trip concierge.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "Gateway Holidays Madurai",
    "Tour Operator in Anna Nagar Madurai",
    "Kerala Honeymoon Packages from Madurai",
    "Munnar Alleppey Houseboat Tours",
    "Adventure Trekking Tours Vagamon Kolukkumalai",
    "Rameswaram Dhanushkodi Temple Tour",
    "Private AC Cab Tours Madurai",
    "Customized Holiday Packages South India",
    "Bali Holiday Package Madurai",
    "Andaman Tour Packages",
  ],
  authors: [{ name: "Gateway Holidays" }],
  creator: "Gateway Holidays",
  publisher: "Gateway Holidays",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gatewayholidays.in",
    siteName: "Gateway Holidays",
    title: "Gateway Holidays — Bespoke Tours & Private AC Cab Services",
    description:
      "Your journey, crafted perfectly without the hassle. Private AC cabs, handpicked resorts, and 24/7 WhatsApp concierge from Anna Nagar, Madurai.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Gateway Holidays Madurai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gateway Holidays — Bespoke Tours & Private AC Cab Services",
    description:
      "Private AC cabs, handpicked resorts, and 24/7 WhatsApp concierge from Anna Nagar, Madurai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#E61E6E] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
