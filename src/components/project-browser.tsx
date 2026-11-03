"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Code2 } from "lucide-react";
import { projects, otherProjects } from "@/lib/data";
import { ProjectArt } from "@/components/visuals/project-art";

const filters = ["All work", "Web & platforms", "Connected devices"] as const;
type Filter = (typeof filters)[number];
const summaries: Record<string, string> = {
  "NMT Deploy":
    "A self-hosted platform that takes a GitHub repository to a running Docker container. Framework detection, live logs, and your own infrastructure — in one place.",
  "NMT Store":
    "A full-stack electronics store, from product discovery and reviews to checkout and order management.",
  "Meet Flow":
    "Exploring real-time communication with a low-latency WebRTC video app powered by Mediasoup.",
  "AutoPi Hub":
    "Bringing software into the physical world. A Raspberry Pi platform for controlling connected devices at home.",
};
const selected = projects.slice(0, 4);
const additional = [
  ...projects
    .slice(4)
    .map((project) => ({
      title: project.title,
      technologies: project.technologies.join(", "),
      github: project.github || project.link,
    })),
  ...otherProjects,
];

export function ProjectBrowser() {
  const [filter, setFilter] = useState<Filter>("All work");
  const visible = selected.filter(
    (project) =>
      filter === "All work" ||
      (filter === "Connected devices"
        ? project.title === "AutoPi Hub"
        : project.title !== "AutoPi Hub"),
  );

  return (
    <>
      <div className="project-filter-row">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter selected projects"
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              aria-controls="project-results"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="project-count" role="status">
          {visible.length} selected project{visible.length === 1 ? "" : "s"}
        </p>
      </div>
      <div className="project-grid" id="project-results">
        {visible.map((project) => {
          const featured = project.title === "NMT Deploy";
          return (
            <article
              className={`project-card${featured ? " project-featured" : ""}`}
              key={project.title}
            >
              <ProjectArt title={project.title} />
              <div className="project-copy">
                <div className="project-category">
                  {featured
                    ? "From repository to production"
                    : project.subtitle}
                  {project.title === "Meet Flow" && (
                    <span className="project-in-progress">In progress</span>
                  )}
                </div>
                <div className="project-title-row">
                  <h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <p>{summaries[project.title]}</p>
                <ul
                  className="project-technologies"
                  aria-label={`${project.title} technologies`}
                >
                  {(featured
                    ? ["Next.js", "TypeScript", "Docker", "Redis", "PostgreSQL"]
                    : project.technologies.slice(0, 3)
                  ).map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {featured && (
                  <a
                    className="project-visit"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore NMT Deploy{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <details className="more-projects">
        <summary>
          <span>
            <Code2 size={18} aria-hidden="true" />
            There’s more in the workshop
            <span className="additional-count">
              {additional.length} projects
            </span>
          </span>
          <ChevronDown
            className="disclosure-chevron"
            size={19}
            aria-hidden="true"
          />
        </summary>
        <div className="additional-projects">
          {additional.map((project) => (
            <a
              href={project.github}
              key={project.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h3>{project.title}</h3>
                <p>{project.technologies}</p>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </details>
    </>
  );
}
