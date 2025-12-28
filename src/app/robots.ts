import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          "*.json",
          "/404",
          "/500",
        ],
      },
      // Google
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },
      // Google Image
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // Bing
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },
      // Yandex
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 1,
      },
      // Baidu
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 1,
      },
      // Facebook
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      // Twitter
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      // LinkedIn
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      // WhatsApp
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
      // Instagram
      {
        userAgent: "Instagram",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

