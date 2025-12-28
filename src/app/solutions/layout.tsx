import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Solutions | EASYIO Technologies - Software Solutions in Kashmir",
  description:
    "Explore EASYIO Technologies' comprehensive software solutions including custom ERP, neural logic engines, enterprise architecture, and high-performance systems. Best software company in Kashmir, Srinagar, J&K.",
  keywords: [
    "software solutions kashmir",
    "ERP solutions srinagar",
    "neural logic engines",
    "enterprise architecture",
    "custom software solutions J&K",
    "business software kashmir",
    "enterprise solutions srinagar",
    "digital solutions J&K",
  ].join(", "),
  openGraph: {
    title: "Solutions | EASYIO Technologies - Software Solutions in Kashmir",
    description:
      "Explore EASYIO Technologies' comprehensive software solutions including custom ERP, neural logic engines, and enterprise architecture.",
    url: `${siteUrl}/solutions`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | EASYIO Technologies - Software Solutions in Kashmir",
    description:
      "Explore EASYIO Technologies' comprehensive software solutions including custom ERP, neural logic engines, and enterprise architecture.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/solutions`,
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

