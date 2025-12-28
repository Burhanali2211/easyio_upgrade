import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const currentDate = new Date().toISOString();

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ourteam`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ourwork`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/erp`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Service-based pages
  const servicePages = [
    "web-development",
    "app-development",
    "erp-solutions",
    "digital-transformation",
    "cloud-solutions",
    "technology-consulting",
    "custom-software-development",
    "e-commerce-development",
    "mobile-app-development",
    "website-development",
    "software-maintenance",
    "system-integration",
    "ui-ux-design",
    "seo-services",
    "digital-marketing",
  ];

  const serviceRoutes = servicePages.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Location-based pages
  const locationPages = [
    "kashmir",
    "srinagar",
    "jammu-kashmir",
    "jammu",
    "anantnag",
    "baramulla",
    "pulwama",
    "kupwara",
    "budgam",
    "ganderbal",
  ];

  const locationRoutes = locationPages.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industry-based pages
  const industryPages = [
    "healthcare",
    "education",
    "retail",
    "e-commerce",
    "manufacturing",
    "finance",
    "banking",
    "real-estate",
    "hospitality",
    "logistics",
    "agriculture",
    "government",
    "enterprise",
  ];

  const industryRoutes = industryPages.map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Technology pages
  const technologyPages = [
    "react-development",
    "nextjs-development",
    "nodejs-development",
    "python-development",
    "javascript-development",
    "typescript-development",
    "java-development",
    "php-development",
    "laravel-development",
    "django-development",
    "mongodb-development",
    "postgresql-development",
    "aws-development",
    "azure-development",
    "docker-development",
  ];

  const technologyRoutes = technologyPages.map((tech) => ({
    url: `${baseUrl}/technologies/${tech}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog/Articles (if applicable)
  const blogRoutes = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/software-company-kashmir`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/web-development-srinagar`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-it-company-jk`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [
    ...routes,
    ...serviceRoutes,
    ...locationRoutes,
    ...industryRoutes,
    ...technologyRoutes,
    ...blogRoutes,
  ];
}

