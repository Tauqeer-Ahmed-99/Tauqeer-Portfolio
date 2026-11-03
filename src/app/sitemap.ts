import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors are part of this page, not separate crawlable pages.
  return [{ url: canonicalUrl }];
}
