import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const currentDate = new Date().toISOString();

  // Main pages
  const mainRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/ourteam`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/ourwork`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${baseUrl}/solutions`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/solutions/kashmir-software-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/solutions/roi-calculator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/erp`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/courses`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/programs`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/testimonials`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/innovation`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/innovation/json-validator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/get-quote`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  // ERP Service Pages
  const erpServiceRoutes = [
    { url: `${baseUrl}/services/erp-software-kashmir`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/hrms-software-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/payroll-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/inventory-management-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/billing-software-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/accounting-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/attendance-management-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/purchase-management-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/sales-management-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/warehouse-management-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/crm-erp-integration-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/erp-modules/cloud-erp-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/sap-erp-developers-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  // App Development Service Pages
  const appDevServiceRoutes = [
    { url: `${baseUrl}/services/mobile-app-development-kashmir`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/android-app-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/ios-app-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/flutter-app-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/react-native-app-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/ecommerce-app-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/booking-app-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/delivery-app-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/taxi-app-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/school-app-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/hospital-app-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/app-maintenance-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  // Web Development Service Pages
  const webDevServiceRoutes = [
    { url: `${baseUrl}/services/web-development-company-kashmir`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/ecommerce-website-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/shopify-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/wordpress-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/react-js-development-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/next-js-development-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/responsive-website-design-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/seo-friendly-website-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/landing-page-design-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/website-redesign-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/website-maintenance-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/custom-web-application-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/seo-services-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  // Industry-Specific Service Pages
  const industryServiceRoutes = [
    { url: `${baseUrl}/services/school-erp-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/school-management-system-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/hospital-management-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/clinic-management-system-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/pharmacy-management-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/hotel-management-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/restaurant-billing-software-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/pos-software-srinagar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/retail-erp-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/construction-erp-software-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services/real-estate-crm-kashmir`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  // Location Pages
  const locationRoutes = [
    { url: `${baseUrl}/locations/lal-chowk`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/karan-nagar`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/raj-bagh`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/batamaloo`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/nowgam`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/dalgate`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/bemina`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/jawahar-nagar`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/sanat-nagar`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/software-company-near-me-srinagar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/web-developer-near-me-srinagar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/erp-software-near-me-srinagar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/locations/mobile-app-developer-near-me-srinagar`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Pricing Pages
  const pricingRoutes = [
    { url: `${baseUrl}/pricing/website-development-cost-srinagar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pricing/app-development-cost-srinagar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pricing/erp-software-cost-kashmir`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pricing/ecommerce-website-cost-kashmir`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Combine all routes
  const allRoutes = [
    ...mainRoutes,
    ...erpServiceRoutes,
    ...appDevServiceRoutes,
    ...webDevServiceRoutes,
    ...industryServiceRoutes,
    ...locationRoutes,
    ...pricingRoutes,
  ];

  // Add lastModified to all routes
  return allRoutes.map(route => ({
    ...route,
    lastModified: currentDate,
  }));
}
