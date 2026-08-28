/**
 * Centralized site configuration and canonical social links.
 * Single source of truth for URLs, social profiles, and structured data.
 */

export const SITE_URL = "https://mohitpanchal.vercel.app";

export const siteConfig = {
  name: "Mohit Panchal",
  title: "UI/UX Designer & Product Designer",
  description:
    "UI/UX Designer and Product Designer creating SaaS products, websites, digital experiences, and user interfaces for teams worldwide.",
  url: SITE_URL,
  ogImage: "/og-image.jpg",
  email: "mohitp846@gmail.com",
  phone: "+91 97991 60923",
  location: "Udaipur, Rajasthan, India",
  postalCode: "313001",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohitpanchal/",
    ariaLabel: "LinkedIn profile",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/mohitpanchal",
    ariaLabel: "Dribbble profile",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/mohituix/",
    ariaLabel: "Behance profile",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/themohit369/",
    ariaLabel: "Instagram profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/mohitpanc",
    ariaLabel: "GitHub profile",
  },
] as const;

export const sameAs = socialLinks.map((s) => s.href);

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: siteConfig.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/about/about-image.png`,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  knowsAbout: [
    "UI/UX Design",
    "UI Design",
    "UX Design",
    "Product Design",
    "Web Design",
    "Website Design",
    "Visual Design",
    "SaaS Product Design",
    "Responsive Design",
    "Wireframing",
    "Prototyping",
    "Figma",
    "WordPress",
    "Front-end Design",
    "Front-end Development",
    "AI-assisted Design Workflows",
  ],
  sameAs,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.name,
  alternateName: "Mohit Panchal Portfolio",
  inLanguage: "en",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#profilepage`,
  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },
  url: `${SITE_URL}/about`,
  name: "About Mohit Panchal",
  description: siteConfig.description,
};
