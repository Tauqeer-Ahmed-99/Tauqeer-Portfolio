import { MetadataRoute } from 'next';
import { siteMetadata } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.website}/sitemap.xml`,
  };
}
