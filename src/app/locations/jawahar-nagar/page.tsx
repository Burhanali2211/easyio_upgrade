import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Jawahar Nagar | IT Services Jawahar Nagar Srinagar",
  description: "Best software company in Jawahar Nagar, Srinagar. Web development, app development, hospital software near Jawahar Nagar. EASYIO Technologies J&K.",
  keywords: "software company in jawahar nagar srinagar, it company jawahar nagar, web development jawahar nagar, software developers jawahar nagar",
  openGraph: {
    title: "Software Company in Jawahar Nagar | IT Services Srinagar",
    description: "Best software company in Jawahar Nagar, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/jawahar-nagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/jawahar-nagar` },
};

const services = [
  { title: "Web Development", description: "Professional websites", href: "/services/web-development-company-kashmir" },
  { title: "Hospital Software", description: "Healthcare management systems", href: "/services/hospital-management-software-kashmir" },
  { title: "Clinic Software", description: "Doctor practice management", href: "/services/clinic-management-system-srinagar" },
  { title: "Mobile Apps", description: "Healthcare and business apps", href: "/services/mobile-app-development-kashmir" },
];

export default function JawaharNagarPage() {
  return (
    <LocalityPageTemplate
      localityName="Jawahar Nagar"
      localitySlug="jawahar-nagar"
      pincode="190008"
      nearbyAreas={["Karan Nagar", "Raj Bagh", "Rainawari", "Shivpora", "Amirakadal"]}
      services={services}
      description="EASYIO Technologies provides software services to Jawahar Nagar's healthcare facilities and businesses. With several hospitals and clinics in the area, we specialize in healthcare software, clinic management systems, and patient apps for the medical community."
    />
  );
}

