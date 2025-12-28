import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Our Team | EASYIO Technologies - Elite Engineers in Kashmir",
  description:
    "Meet the world-class engineers and strategists behind EASYIO Technologies, the best software company in Kashmir. Our elite team of 150+ developers in Srinagar, J&K.",
  keywords: [
    "easyio team",
    "software developers kashmir",
    "IT professionals srinagar",
    "engineers J&K",
    "development team kashmir",
    "tech talent srinagar",
    "software engineers kashmir",
    "programmers J&K",
  ].join(", "),
  openGraph: {
    title: "Our Team | EASYIO Technologies - Elite Engineers in Kashmir",
    description:
      "Meet the world-class engineers and strategists behind EASYIO Technologies, the best software company in Kashmir.",
    url: `${siteUrl}/ourteam`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | EASYIO Technologies - Elite Engineers in Kashmir",
    description:
      "Meet the world-class engineers and strategists behind EASYIO Technologies, the best software company in Kashmir.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/ourteam`,
  },
};

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

