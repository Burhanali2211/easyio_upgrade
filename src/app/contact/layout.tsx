import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Contact Us | EASYIO Technologies - Get Free Quote | Software Company Kashmir",
  description:
    "Contact EASYIO Technologies, the best software company in Kashmir. Get a free quote for web development, app development, ERP solutions. Located in Srinagar, J&K. Call us today or fill out our contact form.",
  keywords: [
    // Contact Keywords
    "contact easyio technologies",
    "software company kashmir contact",
    "IT company srinagar contact",
    "web development kashmir contact",
    "app development srinagar contact",
    "ERP solutions contact kashmir",
    // Quote/Pricing Keywords
    "get quote software company srinagar",
    "free quote web development kashmir",
    "software development cost kashmir",
    "website development cost srinagar",
    "app development cost srinagar",
    "erp software price kashmir",
    "hire developers srinagar",
    // Near Me Keywords
    "software company near me srinagar",
    "IT company near me kashmir",
    "web developer near me srinagar",
    // Location Keywords
    "software company lal chowk",
    "software company karan nagar",
    "software company raj bagh",
    // Service Keywords
    "digital transformation J&K",
    "custom software development kashmir",
    "enterprise solutions srinagar",
  ].join(", "),
  openGraph: {
    title: "Contact EASYIO Technologies | Get Free Quote | Best Software Company Kashmir",
    description:
      "Contact EASYIO Technologies, the best software company in Kashmir for web development, app development, and ERP solutions. Get free quote today!",
    url: `${siteUrl}/contact`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact EASYIO Technologies - Best Software Company in Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EASYIO Technologies | Get Free Quote | Software Company Kashmir",
    description:
      "Contact EASYIO Technologies, the best software company in Kashmir. Get free quote for web development, app development, and ERP solutions.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
