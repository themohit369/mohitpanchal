import type { MetadataRoute } from "next";

const siteUrl = "https://mohitpanchal.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/about/about-image.png`,
        `${siteUrl}/og-image.jpg`,
      ],
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}/images/about/about-image.png`],
    },
    {
      url: `${siteUrl}/work`,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${siteUrl}/images/work/project-1.webp`,
        `${siteUrl}/images/work/project-2.webp`,
      ],
    },
    {
      url: `${siteUrl}/work/powerpack-elements`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}/images/work/project-1.webp`],
    },
    {
      url: `${siteUrl}/work/max-addons`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}/images/work/project-2.webp`],
    },
  ];
}
