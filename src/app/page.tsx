import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    absolute:
      "Mohit Panchal — UI/UX Designer & Product Designer in Kota, Udaipur",
  },

  description:
    "Explore the portfolio of Mohit Panchal, a UI/UX Designer and Product Designer serving Kota, Udaipur, Rajasthan and clients across India and worldwide.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Mohit Panchal — UI/UX Designer & Product Designer in Kota, Udaipur, Rajasthan",
    description:
      "UI/UX design, product design, web design, SaaS interfaces, and selected work by Mohit Panchal.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohit Panchal — UI/UX Designer and Product Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mohit Panchal — UI/UX Designer & Product Designer in Kota, Udaipur, Rajasthan",
    description:
      "UI/UX design, product design, web design, SaaS interfaces, and selected work by Mohit Panchal.",
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
      jobTitle: "UI/UX Designer & Product Designer",
      description:
        "UI/UX Designer and Product Designer in Kota, Udaipur, Rajasthan, India, creating SaaS products, websites, digital experiences, and user interfaces for teams worldwide.",
      sameAs: [
        "https://www.linkedin.com/in/mohitpanchal/",
        "https://dribbble.com/mohitpanchal",
        "https://www.behance.net/mohituix/",
        "https://www.instagram.com/themohit369/",
        "https://github.com/mohitpanc",
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
