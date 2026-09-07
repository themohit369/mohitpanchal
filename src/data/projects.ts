/* =====================================================
   PROJECT DATA — SINGLE SOURCE OF TRUTH

   HOW TO ADD A NEW PROJECT
   -----------------------------------------------------
   Add ONE object to the `projects` array below.

   Required:
   - id: unique internal id
   - type: controls the section
   - title: project name
   - category: metadata shown under the title
   - image: path from /public
   - alt: accessible image description
   - showOnHome: true = homepage + All Work; false = All Work only

   Optional:
   - year: used for case studies
   - href: route or external URL. Leave "" when there is no page yet.

   PROJECT TYPES
   -----------------------------------------------------
   case-study   → Featured Case Studies
   identity     → Brand Identity & Graphic Design
   selected-web → Selected Product & Website Work
   template     → Website Templates

   IMAGE FOLDERS
   -----------------------------------------------------
   Case studies: /public/images/work/case-studies/
   Identity:     /public/images/work/logos/
   Selected web: /public/images/work/websites/
   Templates:    /public/images/work/templates/

   RULE
   -----------------------------------------------------
   Future projects are added ONLY inside `projects`.
   Do not create another project array. Counts, numbering,
   sections and homepage filtering are generated automatically.
===================================================== */

export type ProjectType =
  | "case-study"
  | "identity"
  | "selected-web"
  | "template";

export type Project = {
  id: string;
  type: ProjectType;
  title: string;
  year?: string;
  category: string;
  image: string;
  alt: string;
  href?: string;
  showOnHome: boolean;
};

export type CaseStudy = Project & { type: "case-study"; year: string };
export type IdentityProject = Project & { type: "identity" };
export type WebProject = Project & { type: "selected-web" | "template" };
export const projects: Project[] = [
  // FEATURED CASE STUDIES
  {
    id: "powerpack-elements-case-study",
    type: "case-study",
    year: "2025",
    title: "PowerPack Elements",
    category: "Product Design · UX/UI",
    image: "/images/work/case-studies/powerpack-elements-product-design.webp",
    alt: "PowerPack Elements product design and UX/UI case study",
    href: "/work/powerpack-elements",
    showOnHome: true,
  },
  {
    id: "max-addons-case-study",
    type: "case-study",
    year: "2025",
    title: "Max Addons for Bricks",
    category: "Product Design · UX/UI",
    image: "/images/work/case-studies/max-addons-product-design.webp",
    alt: "Max Addons for Bricks product design and UX/UI case study",
    href: "/work/max-addons",
    showOnHome: true,
  },

  // BRAND IDENTITY & GRAPHIC DESIGN
  {
    id: "beaver-builder-icon-system",
    type: "identity",
    title: "Beaver Builder Icon System",
    category: "Icon Design · Visual System",
    image: "/images/work/logos/beaver-builder-icon-system.webp",
    alt: "Beaver Builder icon system designed by Mohit Panchal",
    href: "",
    showOnHome: true,
  },
  {
    id: "oxyextended-icon-system",
    type: "identity",
    title: "OxyExtended Icon System",
    category: "Icon Design · Visual System",
    image: "/images/work/logos/oxyextended-icon-system.webp",
    alt: "OxyExtended icon system designed by Mohit Panchal",
    href: "",
    showOnHome: true,
  },
  {
    id: "powerpack-elements-identity",
    type: "identity",
    title: "PowerPack Elements",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/powerpack-logo.webp",
    alt: "PowerPack Elements logo design",
    href: "/work/powerpack-elements",
    showOnHome: true,
  },
  {
    id: "max-addons-identity",
    type: "identity",
    title: "Max Addons",
    category: "Logo Design · Brand Identity",
    image: "/images/work/logos/max-addons-logo.webp",
    alt: "Max Addons brand identity and logo design",
    href: "/work/max-addons",
    showOnHome: true,
  },
  {
    id: "the-drip-line-identity",
    type: "identity",
    title: "The Drip Line",
    category: "Logo Design · Brand Identity",
    image: "/images/work/logos/the-drip-line-logo.webp",
    alt: "The Drip Line logo and brand identity",
    href: "",
    showOnHome: true,
  },
  {
    id: "wpfomify-identity",
    type: "identity",
    title: "WPFomify",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/wpfomify-logo.webp",
    alt: "WPFomify logo and visual identity",
    href: "",
    showOnHome: true,
  },
  {
    id: "smartdocs-identity",
    type: "identity",
    title: "SmartDocs",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/smart-docs-logo.webp",
    alt: "SmartDocs logo and visual identity",
    href: "",
    showOnHome: true,
  },
  {
    id: "oxyextended-identity",
    type: "identity",
    title: "OxyExtended",
    category: "Logo Design · Visual Identity",
    image: "/images/work/logos/oxyextended-logo.webp",
    alt: "OxyExtended logo and visual identity",
    href: "",
    showOnHome: true,
  },

  // SELECTED PRODUCT & WEBSITE WORK — NOT CASE STUDIES
  {
    id: "ideabox-website",
    type: "selected-web",
    title: "IdeaBox",
    category: "Product & Website Design",
    image: "/images/work/websites/ideabox-website.webp",
    alt: "IdeaBox website design",
    href: "",
    showOnHome: true,
  },
  {
    id: "oxyextended-website",
    type: "selected-web",
    title: "OxyExtended",
    category: "Product & Website Design",
    image: "/images/work/websites/oxyextended-website.webp",
    alt: "OxyExtended website design",
    href: "",
    showOnHome: true,
  },
  {
    id: "smartdocs-website",
    type: "selected-web",
    title: "SmartDocs",
    category: "Product & Website Design",
    image: "/images/work/websites/smartdocs-website.webp",
    alt: "SmartDocs website design",
    href: "",
    showOnHome: true,
  },
  {
    id: "wpfomify-website",
    type: "selected-web",
    title: "WPFomify",
    category: "Product & Website Design",
    image: "/images/work/websites/wpfomify-website.webp",
    alt: "WPFomify website design",
    href: "",
    showOnHome: true,
  },

  // WEBSITE TEMPLATES
  {
    id: "home-space",
    type: "template",
    title: "Home Space",
    category: "Website Design",
    image: "/images/work/templates/home-space-website.webp",
    alt: "Home Space website design template",
    href: "",
    showOnHome: true,
  },
  {
    id: "furniture",
    type: "template",
    title: "Furniture",
    category: "E-commerce Website",
    image: "/images/work/templates/furniture-ecommerce-website.webp",
    alt: "Furniture e-commerce website design template",
    href: "",
    showOnHome: true,
  },
  {
    id: "design-agency",
    type: "template",
    title: "Design Agency",
    category: "Website Design",
    image: "/images/work/templates/design-agency-website.webp",
    alt: "Design agency website template",
    href: "",
    showOnHome: true,
  },
  {
    id: "digital-marketing",
    type: "template",
    title: "Digital Marketing",
    category: "Website Design",
    image: "/images/work/templates/digital-marketing-website.webp",
    alt: "Digital marketing website design template",
    href: "",
    showOnHome: true,
  },
  {
    id: "builder-real-estate",
    type: "template",
    title: "Builder / Real Estate",
    category: "Website Design",
    image: "/images/work/templates/builder-real-estate-website.webp",
    alt: "Builder and real estate website design template",
    href: "",
    showOnHome: true,
  },
  {
    id: "powerpack-anniversary",
    type: "template",
    title: "PowerPack Anniversary",
    category: "Campaign Website",
    image: "/images/work/templates/powerpack-anniversary-website.webp",
    alt: "PowerPack anniversary campaign website",
    href: "",
    showOnHome: false,
  },
  {
    id: "black-friday",
    type: "template",
    title: "Black Friday",
    category: "Campaign Design + UI",
    image: "/images/work/templates/black-friday-campaign-ui.webp",
    alt: "Black Friday campaign website and UI design",
    href: "",
    showOnHome: false,
  },
  {
    id: "fitness",
    type: "template",
    title: "Fitness",
    category: "Website Design",
    image: "/images/work/templates/fitness-website.webp",
    alt: "Fitness website design template",
    href: "",
    showOnHome: false,
  },
  {
    id: "jewellery",
    type: "template",
    title: "Jewellery",
    category: "E-commerce Website",
    image: "/images/work/templates/jewellery-ecommerce-website.webp",
    alt: "Jewellery e-commerce website design template",
    href: "",
    showOnHome: false,
  },
  {
    id: "food-restaurant",
    type: "template",
    title: "Food & Restaurant",
    category: "Website Design",
    image: "/images/work/templates/food-restaurant-website.webp",
    alt: "Food and restaurant website design template",
    href: "",
    showOnHome: false,
  },
  {
    id: "max-addons-template",
    type: "template",
    title: "Max Addons",
    category: "Product Website + UI",
    image: "/images/work/templates/max-addons-website.webp",
    alt: "Max Addons product website design",
    href: "",
    showOnHome: false,
  },
  {
    id: "travel",
    type: "template",
    title: "Travel",
    category: "Website Design",
    image: "/images/work/templates/travel-website.webp",
    alt: "Travel website design template",
    href: "",
    showOnHome: false,
  },

  // ADDITIONAL WEBSITE TEMPLATES
  {
    id: "web-template-13",
    type: "template",
    title: "Web Template 13",
    category: "Website Design",
    image: "/images/work/web-section-01.webp",
    alt: "Web template 13",
    showOnHome: false,
  },
  {
    id: "web-template-14",
    type: "template",
    title: "Web Template 14",
    category: "Website Design",
    image: "/images/work/web-section-02.webp",
    alt: "Web template 14",
    showOnHome: false,
  },
];

// Compatibility exports. Do not add projects here.
export const caseStudies = projects.filter(
  (p): p is CaseStudy => p.type === "case-study",
);
export const identityWork = projects.filter(
  (p): p is IdentityProject => p.type === "identity",
);
export const selectedWebWork = projects.filter(
  (p): p is WebProject => p.type === "selected-web",
);
export const webWork = projects.filter(
  (p): p is WebProject => p.type === "template",
);
