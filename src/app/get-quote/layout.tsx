import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Get Free Quote | Software Development Cost Kashmir | EASYIO Technologies",
  description:
    "Get a free quote for your software project from EASYIO Technologies. Web development, app development, ERP software pricing in Kashmir, Srinagar. Free consultation and detailed proposal within 24 hours!",
  keywords: [
    // Quote Keywords
    "get quote software company srinagar",
    "free quote web development kashmir",
    "software quotation kashmir",
    "free software consultation srinagar",
    // Pricing Keywords
    "software development cost kashmir",
    "website development cost srinagar",
    "app development cost srinagar",
    "erp software cost kashmir",
    "erp software price srinagar",
    "ecommerce website cost kashmir",
    "custom software development pricing kashmir",
    "monthly website maintenance cost srinagar",
    // Hire Keywords
    "hire developers srinagar",
    "hire software company kashmir",
    "hire web developers kashmir",
    "hire app developers srinagar",
    // Service Keywords
    "software development kashmir",
    "web development srinagar",
    "app development kashmir",
    "erp development srinagar",
    // Best/Top Keywords
    "best software company kashmir quote",
    "top IT company srinagar pricing",
    "affordable software company kashmir",
  ].join(", "),
  openGraph: {
    title: "Get Free Quote | Software Development Cost Kashmir | EASYIO Technologies",
    description:
      "Get a free quote for your software project. Web development, app development, ERP pricing in Kashmir. Free consultation within 24 hours!",
    url: `${siteUrl}/get-quote`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Get Free Quote - EASYIO Technologies Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free Quote | Software Development Cost Kashmir | EASYIO",
    description:
      "Get a free quote for your software project. Web development, app development, ERP pricing in Kashmir. Free consultation!",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/get-quote`,
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

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

