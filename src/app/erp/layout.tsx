import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Best ERP Software Company in Kashmir | Custom ERP Solutions Srinagar | EASYIO",
  description:
    "EASYIO Technologies offers the best custom ERP solutions in Kashmir. Complete ERP systems including HRMS, payroll, inventory, billing, accounting software. Top ERP implementation company in Srinagar, J&K. Get free demo!",
  keywords: [
    // Primary ERP Keywords
    "erp software kashmir",
    "erp software srinagar",
    "erp system development kashmir",
    "erp implementation services srinagar",
    "erp customization company kashmir",
    "cloud erp kashmir",
    "erp solution provider srinagar",
    "enterprise software company kashmir",
    "best erp software company kashmir",
    "best erp company srinagar",
    // ERP Modules Keywords
    "hrms software srinagar",
    "payroll software kashmir",
    "attendance management system srinagar",
    "inventory management software kashmir",
    "billing software srinagar",
    "accounting software integration kashmir",
    "purchase management system kashmir",
    "sales management system kashmir",
    "warehouse management system kashmir",
    "crm erp integration kashmir",
    "erp with mobile app kashmir",
    "erp dashboard analytics srinagar",
    // SAP Keywords
    "sap erp developers srinagar",
    "sap erp consultant kashmir",
    // Pricing Keywords
    "erp software cost kashmir",
    "erp software price srinagar",
    "custom erp development cost kashmir",
    // Industry Keywords
    "school erp software kashmir",
    "hospital erp software kashmir",
    "hotel erp software kashmir",
    "retail erp software kashmir",
    "construction erp software kashmir",
    // Trust Keywords
    "trusted erp company srinagar",
    "erp company with portfolio kashmir",
  ].join(", "),
  openGraph: {
    title: "Best ERP Software Company in Kashmir | Custom ERP Solutions | EASYIO Technologies",
    description:
      "EASYIO Technologies offers the best custom ERP solutions in Kashmir. Complete ERP systems including HRMS, payroll, inventory, billing. Get free demo!",
    url: `${siteUrl}/erp`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best ERP Software Company in Kashmir - EASYIO Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best ERP Software Company in Kashmir | Custom ERP Solutions | EASYIO",
    description:
      "EASYIO Technologies offers the best custom ERP solutions in Kashmir. Complete ERP systems including HRMS, payroll, inventory, billing. Get free demo!",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/erp`,
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

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
