// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Root metadata (fallback for all pages) ───────────────────────────────────
// Individual pages override title + description via their own `metadata` export.
// openGraph and twitter here act as site-wide fallbacks.

export const metadata: Metadata = {
  title: {
    default: "Halo Forge Studio — Catholic Web Design, Branding & Software",
    template: "%s | Halo Forge Studio",
  },
  description:
    "A one-person Catholic design and software studio. Brands, websites, and custom web applications for parishes, ministries, schools, and Catholic-owned businesses across the U.S.",
  keywords: [
    "Catholic web design",
    "Catholic branding",
    "Catholic website designer",
    "Catholic business website",
    "parish website design",
    "ministry website design",
    "Catholic custom software",
    "Catholic web developer",
  ],
  metadataBase: new URL("https://haloforgestudio.com"),
  openGraph: {
    title: "Halo Forge Studio — Catholic Web Design, Branding & Software",
    description:
      "Brands, websites, and custom software built for Catholic organizations and business owners. Work rooted in Truth — designed to grow your mission and your revenue.",
    url: "https://haloforgestudio.com",
    siteName: "Halo Forge Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo Forge Studio — Catholic Web Design, Branding & Software",
    description:
      "A Catholic design and software studio. Brands, websites, and web apps built to witness — for parishes, ministries, and Catholic-owned businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── JSON-LD structured data ──────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Halo Forge Studio",
  description:
    "A Catholic brand, web design, and software studio serving parishes, ministries, schools, and Catholic-owned businesses across the United States.",
  url: "https://haloforgestudio.com",
  logo: "https://haloforgestudio.com/logo.png",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Catholic Web Design",
    "Catholic Branding",
    "Catholic Software Development",
    "Parish Website Design",
    "Ministry Website Design",
  ],
  knowsAbout: [
    "Catholic brand identity",
    "Parish website design",
    "Ministry web development",
    "Catholic custom software",
    "Faith-based web design",
  ],
  sameAs: [
    // Add your live social profile URLs here, e.g.:
    // "https://www.linkedin.com/company/haloforgestudio",
    // "https://www.instagram.com/haloforgestudio",
  ],
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Structured data for Google */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
