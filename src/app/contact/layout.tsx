import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Contact Us | EASYIO Technologies - Software Company in Kashmir",
  description:
    "Contact EASYIO Technologies, the best software company in Kashmir. Get in touch for web development, app development, ERP solutions, and digital transformation services in Srinagar, J&K.",
  keywords: [
    "contact easyio technologies",
    "software company kashmir contact",
    "IT company srinagar contact",
    "web development kashmir contact",
    "app development srinagar",
    "ERP solutions contact",
    "digital transformation J&K",
  ].join(", "),
  openGraph: {
    title: "Contact Us | EASYIO Technologies - Software Company in Kashmir",
    description:
      "Contact EASYIO Technologies, the best software company in Kashmir for web development, app development, and ERP solutions.",
    url: `${siteUrl}/contact`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact EASYIO Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | EASYIO Technologies - Software Company in Kashmir",
    description:
      "Contact EASYIO Technologies, the best software company in Kashmir for web development, app development, and ERP solutions.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

