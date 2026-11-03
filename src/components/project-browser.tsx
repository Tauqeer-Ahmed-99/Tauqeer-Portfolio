"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, otherProjects } from "@/lib/data";
import { ProjectArt } from "@/components/visuals/project-art";
import { TechnologyIcon } from "@/components/technology-icon";

const filters = [
  { label: "All projects", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile & IoT", value: "mobile" },
] as const;
type Filter = (typeof filters)[number]["value"];
const selected = projects.filter((project) => project.selected);
const additional = [
  ...projects
    .filter((project) => !project.selected)
    .map((project) => ({
      title: project.title,
      technologies: project.technologies.join(", "),
      github: project.github || project.link,
    })),
  ...otherProjects,
];

export function ProjectBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = selected.filter(
    (project) =>
      filter === "all" ||
      (filter === "web"
        ? project.category === "web"
        : project.category !== "web"),
  );
  return (
    <>
      <div className="project-filter-row">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              aria-pressed={filter === item.value}
              aria-controls="project-results"
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          {visible.length} projects shown
        </p>
      </div>
      <div className="project-grid" id="project-results">
        {visible.map((project) => {
          const leading =
            project.title === "NMT Deploy" ||
            project.title === "Control Nest V2";
          const wide = project.title === "Vaultify";
          return (
            <article
              className={`project-card${leading ? " project-leading" : ""}${wide ? " project-wide" : ""}`}
              key={project.title}
            >
              <ProjectArt title={project.title} />
              <div className="project-copy">
                <p className="project-category">
                  {project.subtitle}
                  {project.title === "Meet Flow" && (
                    <span className="project-in-progress">In progress</span>
                  )}
                </p>
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
                <p>{project.description[0]}</p>
                {wide && (
                  <p className="project-detail">{project.description[1]}</p>
                )}
                <ul
                  className="project-technologies"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <TechnologyIcon name={technology} />
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title === "Vaultify"
                      ? "Android release"
                      : project.link === project.github
                        ? "Source code"
                        : "Visit site"}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  {project.github && project.github !== project.link && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <details className="more-projects">
        <summary>
          <span>
            Other projects
            <span className="additional-count">{additional.length}</span>
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
                <ul
                  className="project-technologies additional-technologies"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.split(",").map((technology) => {
                    const name = technology.trim();
                    return (
                      <li key={name}>
                        <TechnologyIcon name={name} />
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </details>
    </>
  );
}
