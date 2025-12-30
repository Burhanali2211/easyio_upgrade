import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Solutions | EASYIO Technologies - ERP, Web & App Development Kashmir",
  description:
    "Explore EASYIO Technologies' comprehensive software solutions including custom ERP systems, web applications, mobile apps, and enterprise architecture. Best software solutions provider in Kashmir, Srinagar, J&K.",
  keywords: [
    // Solutions Keywords
    "software solutions kashmir",
    "ERP solutions srinagar",
    "enterprise solutions J&K",
    "business software kashmir",
    "digital solutions srinagar",
    // ERP Keywords
    "erp software kashmir",
    "erp system development kashmir",
    "erp implementation services srinagar",
    "erp customization company kashmir",
    "cloud erp kashmir",
    "erp solution provider srinagar",
    // Web Development Keywords
    "web development solutions kashmir",
    "custom web application kashmir",
    "website development srinagar",
    "ecommerce solutions kashmir",
    // App Development Keywords
    "mobile app solutions kashmir",
    "android app development srinagar",
    "ios app development kashmir",
    "flutter app development kashmir",
    // Enterprise Keywords
    "neural logic engines",
    "enterprise architecture",
    "high-performance systems",
    "custom software solutions kashmir",
    // Industry Keywords
    "school erp software kashmir",
    "hospital management software kashmir",
    "hotel management software kashmir",
    "retail erp software kashmir",
  ].join(", "),
  openGraph: {
    title: "Software Solutions | EASYIO Technologies - Best Software Company Kashmir",
    description:
      "Explore EASYIO Technologies' comprehensive software solutions including custom ERP, web applications, mobile apps, and enterprise architecture.",
    url: `${siteUrl}/solutions`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Software Solutions - Best in Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions | EASYIO Technologies - Best Software Company Kashmir",
    description:
      "Explore EASYIO Technologies' comprehensive software solutions including custom ERP, web applications, mobile apps, and enterprise architecture.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/solutions`,
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

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
