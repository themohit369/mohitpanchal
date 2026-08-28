import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Max Addons — Product, Brand & UI/UX Case Study",

  description:
    "A design case study for Max Addons for Bricks covering product positioning, brand identity, UI/UX design, reusable components, and a scalable marketing website.",

  alternates: {
    canonical: "/work/max-addons",
  },

  openGraph: {
    title: "Max Addons — Product, Brand & UI/UX Case Study | Mohit Panchal",
    description:
      "A product and brand design case study covering UI/UX, visual identity, design systems, and website design for Max Addons for Bricks.",
    url: "/work/max-addons",
    type: "article",
    images: [
      {
        url: "/images/work/case-studies/max-addons-product-design.webp",
        alt: "Max Addons for Bricks product, brand, and UI/UX design case study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Max Addons — Product, Brand & UI/UX Case Study | Mohit Panchal",
    description:
      "Product, brand identity, UI/UX, and website design case study for Max Addons by Mohit Panchal.",
    images: ["/images/work/case-studies/max-addons-product-design.webp"],
  },
};

export default function MaxAddonsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
