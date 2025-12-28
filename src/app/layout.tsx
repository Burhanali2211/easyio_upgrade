import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import CustomCursor from "@/components/ui/custom-cursor";
import ComprehensiveSEO from "@/components/seo/ComprehensiveSEO";
import { primaryKeywords, allKeywords } from "@/lib/seo/seoOptimization";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EASYIO Technologies | Best Software Company in Kashmir | Web Development Srinagar",
    template: "%s | EASYIO Technologies",
  },
  description:
    "EASYIO Technologies is the leading software company in Kashmir, offering web development, app development, custom ERP solutions, and digital transformation services in Srinagar, J&K. Best website creators and IT company in Jammu & Kashmir.",
  keywords: allKeywords.join(", "),
  authors: [{ name: "EASYIO Technologies" }],
  creator: "EASYIO Technologies",
  publisher: "EASYIO Technologies",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "ur_PK"],
    url: siteUrl,
    siteName: "EASYIO Technologies",
    title: "EASYIO Technologies | Best Software Company in Kashmir | Web Development Srinagar",
    description:
      "Leading software company in Kashmir offering web development, app development, custom ERP solutions, and digital transformation services in Srinagar, J&K.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies - Best Software Company in Kashmir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EASYIO Technologies | Best Software Company in Kashmir",
    description:
      "Leading software company in Kashmir offering web development, app development, custom ERP solutions, and digital transformation services.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@easyiotech",
    site: "@easyiotech",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "hi-IN": `${siteUrl}?lang=hi`,
      "ur-PK": `${siteUrl}?lang=ur`,
      "x-default": siteUrl,
    },
  },
  category: "Technology",
  classification: "Software Development Company",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  other: {
    "geo.region": "IN-JK",
    "geo.placename": "Srinagar, Jammu and Kashmir",
    "geo.position": "34.0837;74.7973",
    "ICBM": "34.0837, 74.7973",
    "locality": "Srinagar",
    "region": "Jammu and Kashmir",
    "postal-code": "190001",
    "country-name": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans bg-[#050508]">
        <ComprehensiveSEO />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="afb2314f-67e2-407d-89d7-103620cb16db"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
