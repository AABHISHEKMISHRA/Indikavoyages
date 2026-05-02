import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Indikavoyages — Travel Management (India)";
const siteDescription =
  "Luxury travel management and ground operations across India: curated itineraries, bookings, corporate travel, and on-trip support.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s · Indikavoyages",
  },
  description: siteDescription,
  metadataBase: new URL("https://indikavoyages.com"),
  alternates: {
    canonical: "https://indikavoyages.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indikavoyages.com",
    siteName: "Indikavoyages",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
