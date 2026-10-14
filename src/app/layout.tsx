import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import { business } from "@/config/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.baseUrl),
  title: {
    default: "ClearFlow Drainage | Drainage Services in Cork",
    template: "%s | ClearFlow Drainage",
  },
  description: business.description,
  alternates: { canonical: business.baseUrl },
  openGraph: {
    siteName: business.name,
    type: "website",
    locale: "en_IE",
    title: "ClearFlow Drainage | Drainage Services in Cork",
    description: business.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE">
      <body className={`${inter.variable} min-h-screen bg-white font-sans text-ink antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
