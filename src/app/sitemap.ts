import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, priority: 1 },
    { url: `${SITE.url}/en`, lastModified: now, priority: 1 },
    { url: `${SITE.url}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${SITE.url}/en/privacy`, lastModified: now, priority: 0.3 },
  ];
}
