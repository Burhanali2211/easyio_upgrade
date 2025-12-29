import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easyio.tech';
  
  return {
    name: 'EASYIO Technologies',
    short_name: 'EASYIO',
    description: 'Best Software Company in Kashmir | Web Development Srinagar | Custom ERP Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#020205',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    id: 'easyio-tech',
    related_applications: [],
    prefer_related_applications: false,
  };
}

