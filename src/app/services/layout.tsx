import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: {
    default: "Software Development Services | Best IT Company Kashmir | EASYIO Technologies",
    template: "%s | EASYIO Technologies",
  },
  description:
    "Explore comprehensive software development services from EASYIO Technologies - the best IT company in Kashmir. Web development, mobile app development, ERP solutions, SEO services, and digital transformation in Srinagar, J&K.",
  keywords: [
    // Service Keywords
    "software development services kashmir",
    "web development services srinagar",
    "app development services kashmir",
    "erp services srinagar",
    "IT services kashmir",
    "digital transformation services J&K",
    // Best/Top Keywords
    "best software services kashmir",
    "top IT services srinagar",
    "best web development services kashmir",
    "best app development services srinagar",
    // Specific Services
    "custom software development kashmir",
    "ecommerce development kashmir",
    "wordpress development srinagar",
    "react development srinagar",
    "flutter development kashmir",
    "seo services srinagar",
    // Industry Services
    "school software services kashmir",
    "hospital software services srinagar",
    "hotel software services kashmir",
    // Pricing Keywords
    "affordable software services kashmir",
    "software development cost kashmir",
  ].join(", "),
  openGraph: {
    title: "Software Development Services | Best IT Company Kashmir | EASYIO Technologies",
    description:
      "Best software development services in Kashmir including web development, app development, ERP solutions by EASYIO Technologies Srinagar.",
    url: `${siteUrl}/services`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Services - Best IT Company Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Best IT Company Kashmir | EASYIO",
    description:
      "Best software development services in Kashmir including web development, app development, ERP solutions.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
