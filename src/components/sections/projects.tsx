import { ArrowUpRight } from "lucide-react";
import { siteMetadata } from "@/lib/data";
import { ProjectBrowser } from "@/components/project-browser";

export function Projects() {
  return (
    <section
      id="projects"
      className="projects-section section-shell section-space"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <div>
          <h2 id="projects-heading">Projects</h2>
        </div>
        <div className="heading-aside">
          <a
            className="text-link"
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <ProjectBrowser />
    </section>
  );
}
