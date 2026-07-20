import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mohitpanchal.com",
      priority: 1,
    },
    {
      url: "https://mohitpanchal.com/about",
      priority: 0.8,
    },
    {
      url: "https://mohitpanchal.com/work/powerpack-elements",
      priority: 0.8,
    },
  ];
}
