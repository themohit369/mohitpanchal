import Image from "next/image";
import Link from "next/link";
import "@/components/sections/work.css";
import "./work-page.css";
import Footer from "@/components/layout/Footer";

/* =====================================================
   CASE STUDIES
===================================================== */

const caseStudies = [
  {
    number: "01",
    year: "2026",
    title: "PowerPack Elements",
    category: "Product Design + UX/UI",
    image: "/images/work/project-1.png",
    href: "/work/powerpack-elements",
  },
  {
    number: "02",
    year: "2026",
    title: "Max Addons for Bricks",
    category: "Product Design + UX/UI",
    image: "/images/work/project-2.png",
    href: "/work/max-addons",
  },
];

/* =====================================================
   IDENTITY
===================================================== */

const identityWork = [
  {
    title: "Max Addons",
    category: "Logo Design + Brand Identity",
    image: "/images/work/max-addons-logo-img_1_5x-1-scaled.webp",
  },
  {
    title: "The Drip Line",
    category: "Logo Design + Brand Identity",
    image: "/images/work/project-3.png",
  },
];

/* =====================================================
   WEBSITE / TEMPLATE WORK
===================================================== */

const webWork = [
  {
    title: "PowerPack Elements",
    category: "Product Website + UI",
    image: "/images/work/ppe-web-temp-img_1_5x-scaled.webp",
  },
  {
    title: "PowerPack WooCommerce",
    category: "Website Design + UI",
    image: "/images/work/ppe-web-temp-img-scaled.webp",
  },
  {
    title: "Max Addons",
    category: "Product Website + UI",
    image: "/images/work/max-addons-web-temp-img_1_5x-scaled.webp",
  },
  {
    title: "PowerPack Anniversary",
    category: "Campaign Website",
    image: "/images/work/ppe-bday-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Black Friday",
    category: "Campaign Design + UI",
    image: "/images/work/bf-ppe-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Design Agency",
    category: "Website Design",
    image: "/images/work/des-agency-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Digital Marketing",
    category: "Website Design",
    image: "/images/work/digi-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Builder",
    category: "Website Design",
    image: "/images/work/builder-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Furniture",
    category: "E-commerce Website",
    image: "/images/work/furniture-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Fitness",
    category: "Website Design",
    image: "/images/work/gym-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Home Space",
    category: "Website Design",
    image: "/images/work/home-space-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Jewellery",
    category: "E-commerce Website",
    image: "/images/work/jewellery-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Food & Restaurant",
    category: "Website Design",
    image: "/images/work/pizza-temp-img_1_5x-scaled.webp",
  },
];

/* =====================================================
   EXPLORATIONS
===================================================== */

const explorations = [
  {
    title: "Web Exploration 01",
    category: "Visual + Web Design",
    image: "/images/work/section-1-temp-img_1_5x-scaled.webp",
  },
  {
    title: "Web Exploration 02",
    category: "Visual + Web Design",
    image: "/images/work/section-2-temp-img_1_5x-scaled.webp",
  },
];

/* =====================================================
   PAGE
===================================================== */

export default function WorkPage() {
  return (
    <main className="work-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="work-page-hero">
        <div className="site-container">
          <h1 className="work-page-heading">
            Selected
            <br /> Work
          </h1>
        </div>
      </section>

      {/* =====================================================
          PRODUCT / CASE STUDIES
      ===================================================== */}

      <section className="site-container work-projects-container work-page-projects">
        <div className="work-divider" />

        <div className="section-meta work-section-meta">
          <span>Product & UX/UI</span>
          <span>(01 — 02)</span>
          <span>Case Studies</span>
        </div>

        <div className="work-project-grid">
          {caseStudies.map((project, index) => (
            <article
              key={project.title}
              className={`work-project work-project-${index + 1}`}
            >
              <Link
                href={project.href}
                className="media-frame work-project-image"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 34vw"
                  }
                  className="work-project-image-inner"
                />
              </Link>

              <div className="work-project-info">
                <span className="work-project-year">{project.year}</span>

                <div className="work-project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <span className="work-project-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          IDENTITY
      ===================================================== */}

      <section className="site-container work-identity-container">
        <div className="work-divider" />

        <div className="section-meta work-section-meta">
          <span>Identity & Visual Work</span>
          <span>(03 — 04)</span>
          <span>Logo Design + Brand Identity</span>
        </div>

        <div className="work-identity-grid">
          {identityWork.map((project, index) => (
            <article
              key={project.title}
              className={`work-identity-item work-identity-item-${index + 1}`}
            >
              <div className="media-frame work-identity-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="work-identity-image-inner"
                />
              </div>

              <div className="work-gallery-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WEBSITE DESIGN
      ===================================================== */}

      <section className="site-container work-gallery-container work-page-gallery">
        <div className="work-divider" />

        <div className="section-meta work-section-meta">
          <span>Selected Web Work</span>
          <span>(05 — 17)</span>
          <span>Website Design + UI</span>
        </div>

        <div className="work-gallery-grid">
          {webWork.map((project, index) => (
            <article
              key={project.title}
              className={`work-gallery-item work-gallery-item-${index + 1}`}
            >
              <div className="media-frame work-gallery-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="work-gallery-image-inner"
                />
              </div>

              <div className="work-gallery-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          EXPLORATIONS
      ===================================================== */}

      <section className="site-container work-gallery-container work-page-explorations">
        <div className="work-divider" />

        <div className="section-meta work-section-meta">
          <span>Design Explorations</span>
          <span>(18 — 19)</span>
          <span>Visual + Web Design</span>
        </div>

        <div className="work-gallery-grid">
          {explorations.map((project, index) => (
            <article
              key={project.title}
              className={`work-gallery-item work-gallery-item-${index + 1}`}
            >
              <div className="media-frame work-gallery-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="work-gallery-image-inner"
                />
              </div>

              <div className="work-gallery-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="work-divider work-page-bottom-divider" />
      </section>

      <Footer />
    </main>
  );
}
