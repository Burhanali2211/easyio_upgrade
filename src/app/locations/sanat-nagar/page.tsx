import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Sanat Nagar | IT Services Sanat Nagar Srinagar",
  description: "Best software company in Sanat Nagar, Srinagar. Web development, app development, ERP software near Sanat Nagar Industrial Estate. EASYIO Technologies J&K.",
  keywords: "software company in sanat nagar, it company sanat nagar, web development sanat nagar, software developers sanat nagar srinagar",
  openGraph: {
    title: "Software Company in Sanat Nagar | IT Services Srinagar",
    description: "Best software company in Sanat Nagar, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/sanat-nagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/sanat-nagar` },
};

const services = [
  { title: "Web Development", description: "Industrial and business websites", href: "/services/web-development-company-kashmir" },
  { title: "ERP Software", description: "Manufacturing and business ERP", href: "/services/erp-software-kashmir" },
  { title: "Inventory Management", description: "Stock and warehouse systems", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Mobile Apps", description: "Business automation apps", href: "/services/mobile-app-development-kashmir" },
];

export default function SanatNagarPage() {
  return (
    <LocalityPageTemplate
      localityName="Sanat Nagar"
      localitySlug="sanat-nagar"
      pincode="190005"
      nearbyAreas={["Rawalpora", "Hyderpora", "Chanpora", "Natipora", "Nowgam"]}
      services={services}
      description="EASYIO Technologies serves the industrial hub of Sanat Nagar with specialized software solutions. From manufacturing ERP to inventory management and business automation, we help industries and businesses in Sanat Nagar Industrial Estate optimize their operations."
    />
  );
}

