import Link from "next/link";
import { ReactNode } from "react";

type NextProjectProps = {
  title: ReactNode;
  href: string;
};

export default function NextProject({ title, href }: NextProjectProps) {
  return (
    <section className="case-next-project">
      <div className="site-container">
        <div className="section-line" />

        <Link href={href} className="case-next-link">
          <div>
            <p className="meta-text">Next Project</p>

            <h2>{title}</h2>
          </div>

          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
