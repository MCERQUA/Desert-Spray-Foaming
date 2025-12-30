import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://desertsprayfoaming.com";

export const viewport: Viewport = {
  themeColor: "#391F56",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Desert Spray Foaming | Spray Foam Insulation Seminole TX",
    template: "%s | Desert Spray Foaming",
  },
  description:
    "Your premier choice for superior spray foam insulation in Seminole, TX, and surrounding West Texas areas. Open-cell, closed-cell foam, attic insulation, and commercial services. Save 30-50% on energy costs. Call 432-209-9154 for a free quote.",
  keywords: [
    "spray foam insulation",
    "insulation contractor",
    "Seminole TX",
    "Lubbock insulation",
    "Midland insulation",
    "Odessa insulation",
    "attic insulation",
    "commercial insulation",
    "West Texas insulation",
    "open cell foam",
    "closed cell foam",
    "insulation removal",
    "energy efficiency",
    "home insulation",
    "metal building insulation",
  ],
  authors: [{ name: "Desert Spray Foaming" }],
  creator: "Desert Spray Foaming",
  publisher: "Desert Spray Foaming",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Desert Spray Foaming",
    title: "Desert Spray Foaming | Spray Foam Insulation Seminole TX",
    description:
      "Superior spray foam insulation services in West Texas. Residential & commercial insulation contractor. Save 30-50% on energy costs. Free quotes available.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desert Spray Foaming - Quality Spray Foam Insulation in West Texas",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desert Spray Foaming | Spray Foam Insulation Seminole TX",
    description:
      "Superior spray foam insulation services in West Texas. Save 30-50% on energy costs. Call 432-209-9154 for a free quote.",
    images: ["/twitter-image.png"],
    creator: "@desertsprayfoam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#f97316",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Home Services",
  classification: "Insulation Contractor",
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Seminole, Texas",
    "geo.position": "32.7188;-102.6468",
    ICBM: "32.7188, -102.6468",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "Desert Spray Foaming",
  image: `${siteUrl}/images/desert-spray-foaming-logo-quality-you-can-feel.jpg`,
  logo: `${siteUrl}/images/desert-spray-foam-logo.webp`,
  description:
    "Premier spray foam insulation contractor serving West Texas. Specializing in open-cell and closed-cell spray foam insulation for residential and commercial properties.",
  url: siteUrl,
  telephone: "+1-432-209-9154",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Seminole",
    addressLocality: "Seminole",
    addressRegion: "TX",
    postalCode: "79360",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7188,
    longitude: -102.6468,
  },
  areaServed: [
    { "@type": "City", name: "Seminole", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Lubbock", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Midland", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Odessa", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Brownfield", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Plains", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Denver City", containedInPlace: { "@type": "State", name: "Texas" } },
    {
      "@type": "AdministrativeArea",
      name: "Gaines County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "AdministrativeArea",
      name: "Terry County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "AdministrativeArea",
      name: "Yoakum County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "AdministrativeArea",
      name: "Lubbock County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Insulation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spray Foam Insulation",
          description:
            "Professional open-cell and closed-cell spray foam insulation for residential and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Attic Insulation",
          description:
            "Complete attic insulation services to improve energy efficiency and comfort.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Insulation",
          description:
            "Insulation solutions for metal buildings, warehouses, and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Insulation Removal",
          description:
            "Safe removal of old, damaged, or contaminated insulation materials.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-purple-dark text-white`}
        suppressHydrationWarning
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
