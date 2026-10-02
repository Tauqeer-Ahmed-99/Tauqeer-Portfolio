import { MetadataRoute } from 'next';
import { siteMetadata } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '#about', '#experience', '#projects', '#skills', '#contact'].map((route) => ({
    url: `${siteMetadata.website}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
