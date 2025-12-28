import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Our Work | EASYIO Technologies - Software Projects in Kashmir",
  description:
    "View EASYIO Technologies' portfolio of software projects, web development, app development, and digital solutions. Best software company in Kashmir, Srinagar, J&K showcasing our work.",
  keywords: [
    "easyio portfolio",
    "software projects kashmir",
    "web development projects srinagar",
    "app development portfolio J&K",
    "software company projects",
    "IT projects kashmir",
    "tech solutions portfolio",
    "development work srinagar",
  ].join(", "),
  openGraph: {
    title: "Our Work | EASYIO Technologies - Software Projects in Kashmir",
    description:
      "View EASYIO Technologies' portfolio of software projects, web development, app development, and digital solutions.",
    url: `${siteUrl}/ourwork`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | EASYIO Technologies - Software Projects in Kashmir",
    description:
      "View EASYIO Technologies' portfolio of software projects, web development, app development, and digital solutions.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/ourwork`,
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

