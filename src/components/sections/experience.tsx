import { ArrowUpRight, Building2, Check } from "lucide-react";
import { experience } from "@/lib/data";

const highlights = [
  ["$12B", "Annual claims supported by X4A"],
  ["30%", "IM360 performance improvement"],
  ["30+", "Developers trained in React"],
];
const descriptions = [
  "I lead frontend implementation for the Claiming Microfrontend in X4A. I maintain its codebase structure, build shared UI, and review implementation work.",
  "Built and maintained IM360, a CRM used across 50+ countries. Alongside the web platform, I developed a Flutter desk-booking app and led an employee learning platform.",
];
const contributions = [
  [
    "Shared components across 15+ teams",
    "Code reviews and mentoring for 2 engineers",
    "Around 20% faster PR turnaround",
  ],
  [
    "30% improvement in application performance",
    "90% faster production incident resolution",
    "React training for 30+ developers",
  ],
];

export function Experience() {
  return (
    <section
      id="experience"
      className="experience-section section-space"
      aria-labelledby="experience-heading"
    >
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <p className="section-description">
            Working on enterprise applications at Ingram Micro since 2021.
          </p>
        </div>
        <div className="experience-layout">
          <aside className="experience-company">
            <div className="company-symbol" aria-hidden="true">
              <Building2 size={30} strokeWidth={1.4} />
            </div>
            <h3>Ingram Micro</h3>
            <p>Mumbai, India</p>
            <span className="company-tenure">Dec 2021 to present</span>
            <a
              className="text-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full résumé <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <article className="experience-entry" key={job.role}>
                <span
                  className={`timeline-dot ${index === 0 ? "is-current" : ""}`}
                  aria-hidden="true"
                />
                <div className="experience-entry-top">
                  <p className="job-date">{job.date}</p>
                  {index === 0 && (
                    <span className="current-label">Current role</span>
                  )}
                </div>
                <h3>{job.role}</h3>
                <p className="job-description">{descriptions[index]}</p>
                <ul className="contributions">
                  {contributions[index].map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <dl className="impact-strip">
          {highlights.map(([number, label]) => (
            <div key={label}>
              <dd>{number}</dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
