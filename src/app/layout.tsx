import type { Metadata } from "next";
import { Space_Grotesk, Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

import ComprehensiveSEO from "@/components/seo/ComprehensiveSEO";
import { primaryKeywords, allKeywords } from "@/lib/seo/seoOptimization";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
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
      { url: "/logo.png", type: "image/png", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png", sizes: "180x180" },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${syne.variable} ${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorReporter />
          <ComprehensiveSEO />
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="lazyOnload"
            data-orchids-project-id="fc58627a-e9ba-4e7e-b15c-55a22843e29d"
          />
          <Script
            id="route-messenger"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="lazyOnload"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}