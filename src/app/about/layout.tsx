import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "About Us | EASYIO Technologies - Leading Software Company in Kashmir",
  description:
    "Learn about EASYIO Technologies, the best software company in Kashmir. We engineer high-performance enterprise systems, custom ERP solutions, and innovative software. Based in Srinagar, J&K with a proven track record of successful projects.",
  keywords: [
    // Brand Keywords
    "about easyio technologies",
    "easyio technologies company",
    "easyio tech team",
    // Company Keywords
    "software company kashmir about",
    "IT company srinagar about",
    "technology company J&K",
    "enterprise software kashmir",
    // Trust Keywords
    "trusted software company srinagar",
    "professional software developers kashmir",
    "software company with portfolio srinagar",
    "software company with reviews kashmir",
    "enterprise software solutions kashmir",
    // Service Keywords
    "custom ERP solutions kashmir",
    "neural logic engines",
    "high-performance systems",
    "web development company kashmir",
    "app development company srinagar",
    // Location Keywords
    "best software company kashmir",
    "top IT company srinagar",
    "software developers srinagar",
    "technology experts J&K",
  ].join(", "),
  openGraph: {
    title: "About EASYIO Technologies | Leading Software Company in Kashmir",
    description:
      "Learn about EASYIO Technologies, the best software company in Kashmir engineering high-performance enterprise systems with a proven track record.",
    url: `${siteUrl}/about`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About EASYIO Technologies - Best Software Company in Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EASYIO Technologies | Leading Software Company in Kashmir",
    description:
      "Learn about EASYIO Technologies, the best software company in Kashmir engineering high-performance enterprise systems.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
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
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
