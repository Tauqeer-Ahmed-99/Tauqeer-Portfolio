import {
  Braces,
  CircuitBoard,
  Container,
  Database,
  Smartphone,
} from "lucide-react";
import { skills } from "@/lib/data";
import { TechnologyIcon } from "@/components/technology-icon";

const groups = [
  {
    name: "Frontend",
    detail: "React and TypeScript applications",
    icon: Braces,
    tools: skills.frontend.slice(0, 6),
    accent: "iris",
  },
  {
    name: "Backend & data",
    detail: "APIs, authentication, and databases",
    icon: Database,
    tools: [
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
    detail: "Deployments and background jobs",
    icon: Container,
    tools: [
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
    name: "Mobile & IoT",
    detail: "Mobile apps and connected devices",
    icon: Smartphone,
    tools: [
      "React Native",
      "Flutter",
      "Expo",
      "Raspberry Pi",
      "WebRTC",
      "Mediasoup",
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
        <h2 id="skills-heading">Tools I use</h2>
        <p className="section-description">
          Most of my day-to-day work is in React and TypeScript.
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
              {group.tools.map((tool) => (
                <li key={tool}>
                  <TechnologyIcon name={tool} />
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="learning-note">
        <span className="learning-symbol">
          <CircuitBoard size={19} aria-hidden="true" />
        </span>
        <p>I'm currently learning Go and Rust.</p>
      </div>
    </section>
  );
}
