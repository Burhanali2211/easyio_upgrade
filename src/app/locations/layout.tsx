import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: {
    default: "Software Company Near Me | Service Locations Srinagar Kashmir | EASYIO",
    template: "%s | EASYIO Technologies",
  },
  description:
    "EASYIO Technologies serves businesses across all localities in Srinagar and Kashmir. Find the best software company, web developer, and app developer near you in Lal Chowk, Karan Nagar, Raj Bagh, Batamaloo, and more.",
  keywords: [
    // Near Me Keywords
    "software company near me",
    "IT company near me",
    "web developer near me",
    "app developer near me",
    "erp software near me",
    "software company near me srinagar",
    "web developer near me srinagar",
    "erp software near me srinagar",
    "mobile app developer near me srinagar",
    // Locality Keywords
    "software company lal chowk",
    "software company karan nagar",
    "software company raj bagh",
    "software company batamaloo",
    "software company nowgam",
    "software company dalgate",
    "software company bemina",
    "software company jawahar nagar",
    "software company sanat nagar",
    // ERP Near Me
    "erp software developers near me srinagar",
    "erp software lal chowk",
    "erp software raj bagh",
    "erp software bemina",
    // Web Dev Near Me
    "web development near me kashmir",
    "website development near me srinagar",
    // Service Area Keywords
    "software development srinagar",
    "IT services kashmir region",
    "tech company J&K localities",
  ].join(", "),
  openGraph: {
    title: "Software Company Near Me | Service Locations Srinagar Kashmir | EASYIO Technologies",
    description:
      "Find the best software company near you in Srinagar, Kashmir. EASYIO Technologies serves Lal Chowk, Karan Nagar, Raj Bagh, and all localities.",
    url: `${siteUrl}/locations`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies Service Locations - Software Company Near Me",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company Near Me | Service Locations Srinagar Kashmir | EASYIO",
    description:
      "Find the best software company near you in Srinagar, Kashmir. EASYIO Technologies serves all localities.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/locations`,
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

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
