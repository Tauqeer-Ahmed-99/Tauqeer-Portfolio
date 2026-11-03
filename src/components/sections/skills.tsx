import { skills } from "@/lib/data";

const groups = [
  { name: "Frontend", tools: skills.frontend.slice(0, 6) },
  {
    name: "Backend & data",
    tools: [
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Drizzle ORM",
      "REST APIs",
    ],
  },
  {
    name: "Infrastructure",
    tools: [
      "Docker",
      "Redis",
      "BullMQ",
      "Traefik",
      "CI/CD",
      "Cloudflare Tunnel",
    ],
  },
  {
    name: "Mobile & IoT",
    tools: [
      "React Native",
      "Flutter",
      "Expo",
      "Raspberry Pi",
      "WebRTC",
      "Mediasoup",
    ],
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
          <div className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul className="skill-tags">
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="learning-note">I'm also learning Go and Rust.</p>
    </section>
  );
}
