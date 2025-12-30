"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface RelatedService {
  name: string;
  href: string;
  description?: string;
}

interface RelatedServicesProps {
  currentService: string;
  category: "erp" | "web" | "app" | "industry" | "all";
  title?: string;
  maxItems?: number;
}

const serviceLinks = {
  erp: [
    { name: "ERP Software Kashmir", href: "/services/erp-software-kashmir", description: "Complete ERP solutions for businesses in Kashmir" },
    { name: "HRMS Software Srinagar", href: "/services/erp-modules/hrms-software-srinagar", description: "Human Resource Management System" },
    { name: "Payroll Software", href: "/services/erp-modules/payroll-software-kashmir", description: "Automated payroll management" },
    { name: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir", description: "Stock and inventory tracking" },
    { name: "Billing Software", href: "/services/erp-modules/billing-software-srinagar", description: "GST-compliant billing solutions" },
    { name: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir", description: "Financial accounting solutions" },
    { name: "CRM Integration", href: "/services/erp-modules/crm-erp-integration-kashmir", description: "Customer relationship management" },
    { name: "Cloud ERP", href: "/services/erp-modules/cloud-erp-kashmir", description: "Cloud-based ERP solutions" },
  ],
  web: [
    { name: "Web Development", href: "/services/web-development-company-kashmir", description: "Custom website development" },
    { name: "E-commerce Development", href: "/services/ecommerce-website-development-kashmir", description: "Online store development" },
    { name: "WordPress Development", href: "/services/wordpress-development-srinagar", description: "WordPress websites" },
    { name: "Shopify Development", href: "/services/shopify-development-srinagar", description: "Shopify e-commerce stores" },
    { name: "React.js Development", href: "/services/react-js-development-srinagar", description: "React.js web applications" },
    { name: "Next.js Development", href: "/services/next-js-development-kashmir", description: "Next.js web applications" },
    { name: "SEO Services", href: "/services/seo-services-srinagar", description: "Search engine optimization" },
    { name: "Website Redesign", href: "/services/website-redesign-kashmir", description: "Website modernization" },
  ],
  app: [
    { name: "Mobile App Development", href: "/services/mobile-app-development-kashmir", description: "iOS & Android apps" },
    { name: "Android Development", href: "/services/android-app-development-srinagar", description: "Native Android apps" },
    { name: "iOS Development", href: "/services/ios-app-development-kashmir", description: "Native iOS apps" },
    { name: "Flutter Development", href: "/services/flutter-app-development-kashmir", description: "Cross-platform Flutter apps" },
    { name: "React Native", href: "/services/react-native-app-development-srinagar", description: "Cross-platform React Native apps" },
    { name: "E-commerce App", href: "/services/ecommerce-app-development-kashmir", description: "E-commerce mobile apps" },
    { name: "Delivery App", href: "/services/delivery-app-development-kashmir", description: "Delivery & logistics apps" },
    { name: "App Maintenance", href: "/services/app-maintenance-kashmir", description: "App support & maintenance" },
  ],
  industry: [
    { name: "School ERP", href: "/services/school-erp-software-kashmir", description: "School management system" },
    { name: "Hospital Software", href: "/services/hospital-management-software-kashmir", description: "Hospital management system" },
    { name: "Clinic Software", href: "/services/clinic-management-system-srinagar", description: "Clinic management system" },
    { name: "Pharmacy Software", href: "/services/pharmacy-management-software-kashmir", description: "Pharmacy management" },
    { name: "Hotel Software", href: "/services/hotel-management-software-kashmir", description: "Hotel management system" },
    { name: "Restaurant Software", href: "/services/restaurant-billing-software-srinagar", description: "Restaurant billing" },
    { name: "POS Software", href: "/services/pos-software-srinagar", description: "Point of sale system" },
    { name: "Retail ERP", href: "/services/retail-erp-software-kashmir", description: "Retail business management" },
  ],
  all: [],
};

// Combine all for "all" category
serviceLinks.all = [
  ...serviceLinks.erp.slice(0, 2),
  ...serviceLinks.web.slice(0, 2),
  ...serviceLinks.app.slice(0, 2),
  ...serviceLinks.industry.slice(0, 2),
];

export default function RelatedServices({
  currentService,
  category,
  title = "Related Services",
  maxItems = 6,
}: RelatedServicesProps) {
  const services = serviceLinks[category]
    .filter((service) => service.name !== currentService)
    .slice(0, maxItems);

  return (
    <section className="py-12 border-t border-border/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 bg-accent/20 hover:bg-accent/40 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              {service.description && (
                <p className="text-sm text-muted-foreground">{service.description}</p>
              )}
            </Link>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="mt-6 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

