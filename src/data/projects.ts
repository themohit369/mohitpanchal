/**
 * Centralized project data — single source of truth for all work-related content.
 * Consumed by: Home page (Work section), /work page, NextProject component, sitemap.
 */

export type CaseStudy = {
  number?: string;
  year: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  href: string;
};

export type IdentityProject = {
  title: string;
  category: string;
  image: string;
  alt: string;
  href: string;
};

export type WebProject = {
  title: string;
  category: string;
  image: string;
  alt: string;
  href?: string;
};

export type Exploration = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

/* =====================================================
   FEATURED CASE STUDIES
===================================================== */

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    year: "2025",
    title: "PowerPack Elements",
    category: "Product Design + UI/UX Design",
    image: "/images/work/case-studies/powerpack-elements-product-design.webp",
    alt: "PowerPack Elements product design and UI/UX case study",
    href: "/work/powerpack-elements",
  },
  {
    number: "02",
    year: "2025",
    title: "Max Addons for Bricks",
    category: "Product Design + UI/UX Design",
    image: "/images/work/case-studies/max-addons-product-design.webp",
    alt: "Max Addons for Bricks product design and UI/UX case study",
    href: "/work/max-addons",
  },
];

/* =====================================================
   IDENTITY / BRAND WORK
===================================================== */

export const identityWork: IdentityProject[] = [
  {
    title: "PowerPack Elements",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/powerpack-logo.webp",
    alt: "PowerPack Elements logo and visual identity design by Mohit Panchal",
    href: "/work/powerpack-elements",
  },
  {
    title: "Max Addons",
    category: "Logo Design · Brand Identity",
    image: "/images/work/logos/max-addons-logo.webp",
    alt: "Max Addons logo and brand identity design by Mohit Panchal",
    href: "/work/max-addons",
  },
  {
    title: "The Drip Line",
    category: "Logo Design · Brand Identity",
    image: "/images/work/logos/the-drip-line-logo.webp",
    alt: "The Drip Line logo and brand identity design by Mohit Panchal",
    href: "",
  },
  {
    title: "WPFomify",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/wpfomify-logo.webp",
    alt: "WPFomify logo and visual identity design by Mohit Panchal",
    href: "",
  },
  {
    title: "SmartDocs",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/smart-docs-logo.webp",
    alt: "SmartDocs logo and visual identity design by Mohit Panchal",
    href: "",
  },
  {
    title: "OxyExtended",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/oxyextended-logo.webp",
    alt: "OxyExtended logo and visual identity design by Mohit Panchal",
    href: "",
  },
];

/* =====================================================
   SELECTED WEB WORK
   These are showcase-only items — no individual case study pages exist.
===================================================== */

export const webWork: WebProject[] = [
  {
    title: "Home Space",
    category: "Website Design",
    image: "/images/work/templates/home-space-website.webp",
    alt: "Home Space website design by Mohit Panchal",
  },
  {
    title: "Furniture",
    category: "E-commerce Website",
    image: "/images/work/templates/furniture-ecommerce-website.webp",
    alt: "Furniture e-commerce website design by Mohit Panchal",
  },
  {
    title: "Design Agency",
    category: "Website Design",
    image: "/images/work/templates/design-agency-website.webp",
    alt: "Design agency website design by Mohit Panchal",
  },
  {
    title: "Digital Marketing",
    category: "Website Design",
    image: "/images/work/templates/digital-marketing-website.webp",
    alt: "Digital marketing website design by Mohit Panchal",
  },
  {
    title: "Builder / Real Estate",
    category: "Website Design",
    image: "/images/work/templates/builder-real-estate-website.webp",
    alt: "Builder and real estate website design by Mohit Panchal",
  },
  {
    title: "PowerPack Anniversary",
    category: "Campaign Website",
    image: "/images/work/templates/powerpack-anniversary-website.webp",
    alt: "PowerPack Anniversary campaign website and UI design",
  },
  {
    title: "Black Friday",
    category: "Campaign Design + UI",
    image: "/images/work/templates/black-friday-campaign-ui.webp",
    alt: "Black Friday campaign website and UI design",
  },
  {
    title: "Fitness",
    category: "Website Design",
    image: "/images/work/templates/fitness-website.webp",
    alt: "Fitness website design project",
  },
  {
    title: "Jewellery",
    category: "E-commerce Website",
    image: "/images/work/templates/jewellery-ecommerce-website.webp",
    alt: "Jewellery e-commerce website design project",
  },
  {
    title: "Food & Restaurant",
    category: "Website Design",
    image: "/images/work/templates/food-restaurant-website.webp",
    alt: "Food and restaurant website design project",
  },
];

/* =====================================================
   EXPLORATIONS
===================================================== */

export const explorations: Exploration[] = [
  {
    title: "Web Exploration 01",
    category: "Visual + Web Design",
    image: "/images/work/explorations/web-exploration-01.webp",
    alt: "Visual and web design exploration 01",
  },
  {
    title: "Web Exploration 02",
    category: "Visual + Web Design",
    image: "/images/work/explorations/web-exploration-02.webp",
    alt: "Visual and web design exploration 02",
  },
];

/* =====================================================
   CASE STUDY ROUTES (for sitemap generation)
   Pages that actually exist as routes.
===================================================== */

export const caseStudyRoutes = caseStudies
  .filter((cs) => cs.href.startsWith("/work/"))
  .map((cs) => cs.href);
