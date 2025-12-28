import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "ERP Solutions | EASYIO Technologies - Custom ERP Development Kashmir",
  description:
    "EASYIO Technologies offers custom ERP solutions and enterprise resource planning systems in Kashmir, Srinagar, J&K. Best ERP development company for businesses.",
  keywords: [
    "ERP solutions kashmir",
    "custom ERP development srinagar",
    "enterprise resource planning J&K",
    "ERP implementation kashmir",
    "business ERP solutions",
    "ERP software srinagar",
    "ERP development company",
    "enterprise ERP kashmir",
  ].join(", "),
  openGraph: {
    title: "ERP Solutions | EASYIO Technologies - Custom ERP Development Kashmir",
    description:
      "EASYIO Technologies offers custom ERP solutions and enterprise resource planning systems in Kashmir, Srinagar, J&K.",
    url: `${siteUrl}/erp`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies ERP Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions | EASYIO Technologies - Custom ERP Development Kashmir",
    description:
      "EASYIO Technologies offers custom ERP solutions and enterprise resource planning systems in Kashmir, Srinagar, J&K.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/erp`,
  },
};

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

