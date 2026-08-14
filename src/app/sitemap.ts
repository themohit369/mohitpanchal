import type { MetadataRoute } from "next";

const siteUrl = "https://mohitpanchal.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/hero/mohit-hero.png`,
        `${siteUrl}/images/about/about-image.png`,
        `${siteUrl}/images/work/case-studies/powerpack-elements-product-design.webp`,
        `${siteUrl}/images/work/case-studies/max-addons-product-design.webp`,
        `${siteUrl}/images/work/logos/powerpack-logo.webp`,
        `${siteUrl}/images/work/logos/max-addons-logo.webp`,
        `${siteUrl}/images/work/logos/the-drip-line-logo.webp`,
        `${siteUrl}/images/work/logos/wpfomify-logo.webp`,
        `${siteUrl}/images/work/logos/smart-docs-logo.webp`,
        `${siteUrl}/images/work/logos/oxyextended-logo.webp`,
      ],
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${siteUrl}/images/about/about-image.png`,
        `${siteUrl}/images/book/cover.webp`,
      ],
    },
    {
      url: `${siteUrl}/work`,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${siteUrl}/images/work/case-studies/powerpack-elements-product-design.webp`,
        `${siteUrl}/images/work/case-studies/max-addons-product-design.webp`,
        `${siteUrl}/images/work/logos/powerpack-logo.webp`,
        `${siteUrl}/images/work/logos/max-addons-logo.webp`,
        `${siteUrl}/images/work/logos/the-drip-line-logo.webp`,
        `${siteUrl}/images/work/logos/wpfomify-logo.webp`,
        `${siteUrl}/images/work/logos/smart-docs-logo.webp`,
        `${siteUrl}/images/work/logos/oxyextended-logo.webp`,
        `${siteUrl}/images/work/templates/powerpack-anniversary-website.webp`,
        `${siteUrl}/images/work/templates/black-friday-campaign-ui.webp`,
        `${siteUrl}/images/work/templates/design-agency-website.webp`,
        `${siteUrl}/images/work/templates/digital-marketing-website.webp`,
        `${siteUrl}/images/work/templates/builder-real-estate-website.webp`,
        `${siteUrl}/images/work/templates/furniture-ecommerce-website.webp`,
        `${siteUrl}/images/work/templates/fitness-website.webp`,
        `${siteUrl}/images/work/templates/home-space-website.webp`,
        `${siteUrl}/images/work/templates/jewellery-ecommerce-website.webp`,
        `${siteUrl}/images/work/templates/food-restaurant-website.webp`,
      ],
    },
    {
      url: `${siteUrl}/work/powerpack-elements`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${siteUrl}/images/work/case-studies/powerpack-elements-product-design.webp`,
        `${siteUrl}/images/work/case-studies/powerpack-elements-ui-ux-story.webp`,
        `${siteUrl}/images/work/case-studies/powerpack-elements-final-ui.webp`,
        `${siteUrl}/images/work/logos/powerpack-logo.webp`,
      ],
    },
    {
      url: `${siteUrl}/work/max-addons`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${siteUrl}/images/work/case-studies/max-addons-product-design.webp`,
        `${siteUrl}/images/work/case-studies/max-addons-brand-ui-story.webp`,
        `${siteUrl}/images/work/case-studies/max-addons-final-website-ui.webp`,
        `${siteUrl}/images/work/logos/max-addons-logo.webp`,
      ],
    },
  ];
}
