import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | EASYIO Technologies - Software Projects Kashmir",
  description:
    "View EASYIO Technologies' portfolio of successful software projects in Kashmir. Web development, mobile app development, ERP implementations, and digital solutions. Trusted software company in Srinagar with proven track record.",
  keywords: [
    // Portfolio Keywords
    "easyio portfolio",
    "software projects kashmir",
    "web development projects srinagar",
    "app development portfolio kashmir",
    "software company projects J&K",
    "IT projects kashmir",
    "tech solutions portfolio srinagar",
    "development work kashmir",
    // Trust Keywords
    "software company with portfolio srinagar",
    "software company with reviews kashmir",
    "trusted software company srinagar",
    "professional software developers kashmir",
    "proven software company kashmir",
    // Service Keywords
    "completed web projects kashmir",
    "successful app development kashmir",
    "erp implementation projects srinagar",
    "ecommerce projects kashmir",
    // Industry Keywords
    "school software projects kashmir",
    "hospital software projects srinagar",
    "hotel software projects kashmir",
    "retail software projects srinagar",
    // Best/Top Keywords
    "best software company portfolio kashmir",
    "top IT company work srinagar",
    "leading software company projects J&K",
  ].join(", "),
  openGraph: {
    title: "Our Work & Portfolio | EASYIO Technologies - Best Software Company Kashmir",
    description:
      "View EASYIO Technologies' portfolio of successful software projects. Trusted software company in Srinagar, Kashmir with proven track record.",
    url: `${siteUrl}/ourwork`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Portfolio - Best Software Company Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Portfolio | EASYIO Technologies - Software Projects Kashmir",
    description:
      "View EASYIO Technologies' portfolio of successful software projects. Trusted software company in Srinagar, Kashmir.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/ourwork`,
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

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
