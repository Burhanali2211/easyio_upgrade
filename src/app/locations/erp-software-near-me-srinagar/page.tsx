import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "ERP Software Near Me Srinagar | ERP Solutions Near Me Kashmir",
  description: "Looking for ERP software near me in Srinagar? EASYIO Technologies provides custom ERP solutions, HRMS, payroll, inventory management across Kashmir. Best ERP company near you.",
  keywords: "erp software near me, erp software near me in srinagar, erp developers near me, erp company near me kashmir, hrms software near me srinagar",
  openGraph: {
    title: "ERP Software Near Me Srinagar | ERP Solutions Near Me Kashmir",
    description: "Best ERP software near you in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/erp-software-near-me-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/erp-software-near-me-srinagar` },
};

const services = [
  { title: "Custom ERP", description: "Tailored ERP solutions", href: "/services/erp-software-kashmir" },
  { title: "HRMS Software", description: "HR management systems", href: "/services/erp-modules/hrms-software-srinagar" },
  { title: "Inventory Management", description: "Stock tracking systems", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Billing Software", description: "GST invoicing solutions", href: "/services/erp-modules/billing-software-srinagar" },
];

export default function ERPSoftwareNearMeSrinagarPage() {
  return (
    <LocalityPageTemplate
      localityName="All of Srinagar"
      localitySlug="erp-software-near-me-srinagar"
      pincode="190001-190025"
      nearbyAreas={["Lal Chowk", "Karan Nagar", "Raj Bagh", "Batamaloo", "Nowgam", "Dalgate", "Bemina", "Sanat Nagar Industrial Estate"]}
      services={services}
      description="Looking for ERP software near you in Srinagar? EASYIO Technologies is the leading ERP solutions provider serving businesses across all localities in Srinagar and Kashmir. Custom ERP, HRMS, inventory, billing - we provide on-site support and implementation."
    />
  );
}

