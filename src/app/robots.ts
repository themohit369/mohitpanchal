import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const siteUrl = "https://mohitpanchal.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
