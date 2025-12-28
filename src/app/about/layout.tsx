import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "About Us | EASYIO Technologies - Leading Software Company in Kashmir",
  description:
    "Learn about EASYIO Technologies, the leading software company in Kashmir. We engineer high-performance enterprise systems, custom ERP solutions, and neural logic engines. Based in Srinagar, J&K.",
  keywords: [
    "about easyio technologies",
    "software company kashmir about",
    "IT company srinagar",
    "technology company J&K",
    "enterprise software kashmir",
    "custom ERP solutions",
    "neural logic engines",
    "high-performance systems",
  ].join(", "),
  openGraph: {
    title: "About EASYIO Technologies | Leading Software Company in Kashmir",
    description:
      "Learn about EASYIO Technologies, the leading software company in Kashmir engineering high-performance enterprise systems.",
    url: `${siteUrl}/about`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About EASYIO Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EASYIO Technologies | Leading Software Company in Kashmir",
    description:
      "Learn about EASYIO Technologies, the leading software company in Kashmir engineering high-performance enterprise systems.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

