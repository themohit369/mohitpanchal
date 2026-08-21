/**
 * Centralized services data — single source of truth for offered services.
 * Currently consumed by: about page (service descriptions).
 * Extend this file as services are surfaced in the UI.
 */

export type Service = {
  title: string;
  description: string;
  slug: string;
};

export const services: Service[] = [
  {
    title: "Product Design",
    description:
      "End-to-end product design for SaaS and digital products — from research and wireframes to high-fidelity interfaces and design systems.",
    slug: "product-design",
  },
  {
    title: "UI/UX Design",
    description:
      "User interface and experience design that balances clarity, usability, and aesthetics across web and mobile platforms.",
    slug: "ui-ux-design",
  },
  {
    title: "Design Systems",
    description:
      "Scalable, token-based design systems with reusable components, documentation, and guidelines for product teams.",
    slug: "design-systems",
  },
  {
    title: "Brand Identity",
    description:
      "Logo design, visual identity, and brand guidelines that communicate clearly and consistently across every touchpoint.",
    slug: "brand-identity",
  },
  {
    title: "Web Design",
    description:
      "Website and landing page design — marketing sites, campaign pages, and e-commerce experiences.",
    slug: "web-design",
  },
  {
    title: "Front-end Prototyping",
    description:
      "Interactive prototypes and front-end implementation with React, Next.js, and modern CSS to validate and ship designs.",
    slug: "front-end-prototyping",
  },
];