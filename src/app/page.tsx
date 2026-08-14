import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Product Designer & UI/UX Designer — Mohit Panchal",
  },

  description:
    "Explore the portfolio of Mohit Panchal, a Product Designer and UI/UX Designer creating SaaS products, design systems, websites, and digital experiences for teams worldwide.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Product Designer & UI/UX Designer — Mohit Panchal",
    description:
      "Product design, UI/UX, design systems, web design, and selected case studies by Mohit Panchal.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohit Panchal — Product Designer and UI/UX Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Product Designer & UI/UX Designer — Mohit Panchal",
    description:
      "Product design, UI/UX, design systems, web design, and selected case studies by Mohit Panchal.",
    images: ["/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mohitpanchal.vercel.app/#website",
      name: "Mohit Panchal",
      alternateName: "Mohit Panchal Portfolio",
      url: "https://mohitpanchal.vercel.app/",
    },
    {
      "@type": "Person",
      "@id": "https://mohitpanchal.vercel.app/#person",
      name: "Mohit Panchal",
      url: "https://mohitpanchal.vercel.app/",
      image: "https://mohitpanchal.vercel.app/images/about/about-image.png",
      jobTitle: "Product Designer & UI/UX Designer",
      description:
        "Product Designer and UI/UX Designer creating SaaS products, design systems, websites, and digital experiences for teams worldwide.",
      sameAs: [
        "https://www.linkedin.com/in/mohitpanchal/",
        "https://dribbble.com/mohitpanchal",
        "https://www.behance.net/mohituix/",
      ],
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />
      <Work />
      <About />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
