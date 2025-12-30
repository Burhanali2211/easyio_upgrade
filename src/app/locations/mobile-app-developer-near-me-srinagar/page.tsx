import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Mobile App Developer Near Me Srinagar | App Development Near Me Kashmir",
  description: "Looking for mobile app developer near me in Srinagar? EASYIO Technologies develops Android, iOS, Flutter apps for businesses across Kashmir. Best app developers near you.",
  keywords: "mobile app developer near me, app developer near me srinagar, android developer near me kashmir, ios developer near me srinagar, app development near me",
  openGraph: {
    title: "Mobile App Developer Near Me Srinagar | App Development Near Me Kashmir",
    description: "Best mobile app developer near you in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/mobile-app-developer-near-me-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/mobile-app-developer-near-me-srinagar` },
};

const services = [
  { title: "Android Apps", description: "Native Android development", href: "/services/android-app-development-srinagar" },
  { title: "iOS Apps", description: "iPhone and iPad apps", href: "/services/ios-app-development-kashmir" },
  { title: "Flutter Apps", description: "Cross-platform solutions", href: "/services/flutter-app-development-kashmir" },
  { title: "E-commerce Apps", description: "Shopping applications", href: "/services/ecommerce-app-development-kashmir" },
];

export default function MobileAppDeveloperNearMeSrinagarPage() {
  return (
    <LocalityPageTemplate
      localityName="All of Srinagar"
      localitySlug="mobile-app-developer-near-me-srinagar"
      pincode="190001-190025"
      nearbyAreas={["Lal Chowk", "Karan Nagar", "Raj Bagh", "Batamaloo", "Nowgam", "Dalgate", "Bemina", "Jawahar Nagar"]}
      services={services}
      description="Need a mobile app developer near you in Srinagar? EASYIO Technologies is the top app development company serving all localities in Srinagar and Kashmir. Android, iOS, Flutter - we build apps for businesses with local support and expertise."
    />
  );
}

