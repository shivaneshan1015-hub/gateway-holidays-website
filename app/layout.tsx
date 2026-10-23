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
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: "https://gatewayholidays.in",
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification",
    },
  };

  const agencySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": "https://gatewayholidays.in/#agency",
        name: "Gateway Holidays",
        legalName: "Gateway Holidays",
        alternateName: "Gateway Holidays Madurai",
        url: "https://gatewayholidays.in",
        logo: "https://gatewayholidays.in/images/logo.png",
        image: "https://gatewayholidays.in/images/logo.png",
        description:
          "4.8★ Rated tour operator in Anna Nagar, Madurai. Customized South India hill stations, high-altitude adventure trekking tours, heritage temple circuits, and international escapes with private sanitized AC cabs and 24/7 personal trip concierge.",
        telephone: "+91 81227 12587",
        email: "info@gatewayholidays.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4C, Opp. Ambika College, Anna Nagar",
          addressLocality: "Madurai",
          addressRegion: "Tamil Nadu",
          postalCode: "625020",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 9.9252,
          longitude: 78.1498,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "13",
          reviewCount: "13",
        },
        sameAs: [
          "https://www.instagram.com/gatewayholidays.in/",
          "https://www.facebook.com/profile.php?id=61584744403569",
          "https://share.google/Ph649ZSpRfBmBvfY3",
        ],
        areaServed: [
          { "@type": "City", name: "Madurai" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "State", name: "Kerala" },
          { "@type": "State", name: "Karnataka" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://gatewayholidays.in/#website",
        url: "https://gatewayholidays.in",
        name: "Gateway Holidays",
        description: "Bespoke Tour Packages & Private AC Cab Services | Madurai",
        publisher: { "@id": "https://gatewayholidays.in/#agency" },
        inLanguage: "en-IN",
      },
    ],
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
        <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#E61E6E] selection:text-white font-sans">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
          />
          {children}
        </body>
      </html>
    );
  }
