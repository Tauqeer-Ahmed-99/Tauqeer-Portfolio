import {
  Braces,
  CircuitBoard,
  Container,
  Database,
  Smartphone,
} from "lucide-react";
import { skills } from "@/lib/data";

const groups = [
  {
    name: "Interfaces",
    detail: "Where I spend most of my time",
    icon: Braces,
    skills: skills.frontend.slice(0, 6),
    accent: "iris",
  },
  {
    name: "Backend & data",
    detail: "The work behind the experience",
    icon: Database,
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Drizzle ORM",
      "REST APIs",
    ],
    accent: "blue",
  },
  {
    name: "Infrastructure",
    detail: "From a commit to a running product",
    icon: Container,
    skills: [
      "Docker",
      "Redis",
      "BullMQ",
      "Traefik",
      "CI/CD",
      "Cloudflare Tunnel",
    ],
    accent: "peach",
  },
  {
    name: "Mobile & connected",
    detail: "Beyond the browser",
    icon: Smartphone,
    skills: [
      "React Native",
      "Flutter",
      "Expo",
      "Raspberry Pi",
      "IoT",
      "WebRTC",
    ],
    accent: "mint",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="skills-section section-shell section-space"
      aria-labelledby="skills-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">The toolbox</p>
          <h2 id="skills-heading">
            Different tools.
            <br />
            One builder’s mindset.
          </h2>
        </div>
        <p className="section-description">
          React and TypeScript are home. The best solution sometimes lives a
          little further out.
        </p>
      </div>
      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-group" key={group.name}>
            <span className={`skill-symbol ${group.accent}`}>
              <group.icon size={24} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3>{group.name}</h3>
            <p>{group.detail}</p>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="learning-note">
        <span className="learning-symbol">
          <CircuitBoard size={19} aria-hidden="true" />
        </span>
        <p>
          <strong>Always a work in progress.</strong> Currently exploring Go,
          Rust, and the systems that connect software to the physical world.
        </p>
      </div>
    </section>
  );
}
