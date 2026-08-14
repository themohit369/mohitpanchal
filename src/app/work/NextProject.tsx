import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    year: "2025",
    title: "PowerPack Elements",
    category: "Product Design · UX/UI",
    image: "/images/work/case-studies/powerpack-elements-product-design.webp",
    alt: "PowerPack Elements product design and UI/UX case study",
    href: "/work/powerpack-elements",
  },
  {
    year: "2025",
    title: "Max Addons for Bricks",
    category: "Product Design · UX/UI",
    image: "/images/work/case-studies/max-addons-product-design.webp",
    alt: "Max Addons for Bricks product design and UI/UX case study",
    href: "/work/max-addons",
  },
];

export default function NextProject() {
  return (
    <section className="case-next-project">
      <div className="site-container">
        <div className="section-meta">
          <span>More work</span>
          <span>Selected projects</span>
          <span>03</span>
        </div>
      </div>
      {/* PROJECTS */}
      <div className="site-container">
        <div className="case-more-work-grid">
          {projects.map((project) => (
            <article className="case-more-work-card" key={project.title}>
              <Link
                href={project.href}
                aria-label={`View ${project.title} case study`}
                className="media-frame case-more-work-image"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="case-more-work-image-inner"
                />
              </Link>

              <Link
                href={project.href}
                className="case-more-work-info"
                aria-label={`Read the ${project.title} case study`}
              >
                <span className="case-more-work-year">{project.year}</span>

                <div className="case-more-work-copy">
                  <h2>{project.title}</h2>
                  <p>{project.category}</p>
                </div>

                <span className="case-more-work-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
