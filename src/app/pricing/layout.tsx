import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: {
    default: "Software Development Pricing & Cost | Get Free Quote | EASYIO Technologies Kashmir",
    template: "%s | EASYIO Technologies",
  },
  description:
    "Transparent software development pricing from EASYIO Technologies. Website development cost, app development cost, ERP software price in Kashmir, Srinagar. Get a free quote today!",
  keywords: [
    // Primary Pricing Keywords
    "software development cost kashmir",
    "website development cost srinagar",
    "app development cost srinagar",
    "erp software cost kashmir",
    "erp software price srinagar",
    "ecommerce website cost kashmir",
    "custom software development pricing kashmir",
    "monthly website maintenance cost srinagar",
    // Quote Keywords
    "get quote software company srinagar",
    "free quote web development kashmir",
    "software quotation kashmir",
    "hire developers srinagar",
    // Affordable Keywords
    "affordable software development kashmir",
    "affordable website design srinagar",
    "affordable app development kashmir",
    "affordable erp software kashmir",
    // Budget Keywords
    "budget software company kashmir",
    "cheap website development srinagar",
    "low cost app development kashmir",
    // Service Pricing
    "web development pricing kashmir",
    "mobile app pricing srinagar",
    "erp implementation cost kashmir",
    "seo services cost srinagar",
  ].join(", "),
  openGraph: {
    title: "Software Development Pricing & Cost | Get Free Quote | EASYIO Technologies Kashmir",
    description:
      "Transparent software development pricing in Kashmir, Srinagar. Website, app, ERP costs. Get free quote from EASYIO Technologies.",
    url: `${siteUrl}/pricing`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Software Development Pricing - EASYIO Technologies Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Pricing & Cost | Get Free Quote | EASYIO Kashmir",
    description:
      "Transparent software development pricing in Kashmir, Srinagar. Website, app, ERP costs. Get free quote!",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/pricing`,
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
