import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Desert Spray Foaming | Spray Foam Insulation Seminole TX",
  description: "Your premier choice for superior spray foam insulation in Seminole, TX, and surrounding West Texas areas. Open-cell, closed-cell foam, attic insulation, and commercial services. Call 432-209-9154 for a free quote.",
  keywords: "spray foam insulation, insulation contractor, Seminole TX, Lubbock, Midland, Odessa, attic insulation, commercial insulation, West Texas",
  openGraph: {
    title: "Desert Spray Foaming | Spray Foam Insulation Seminole TX",
    description: "Superior spray foam insulation services in West Texas. Save 30-50% on energy costs with our certified technicians.",
    url: "https://desertsprayfoaming.com",
    siteName: "Desert Spray Foaming",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/cropped-desert-spray-foam-logo-32x32.webp",
    apple: "/images/cropped-desert-spray-foam-logo-180x180.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`} suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
