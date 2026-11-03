import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { siteMetadata } from "@/lib/data";
import { HeroVisual } from "@/components/visuals/hero-visual";

const technologies = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="hero section-shell"
      aria-labelledby="hero-heading"
    >
      <div className="hero-main">
        <div className="hero-copy">
          <div className="role-badge">
            <span className="status-dot" />
            Senior Software Engineer at Ingram Micro
          </div>
          <p className="hero-intro">
            Hi, I’m Tauqeer <span aria-hidden="true">↗</span>
          </p>
          <h1 id="hero-heading">
            Good software.
            <br />
            <span>Every layer.</span>
          </h1>
          <p className="hero-description">
            I build thoughtful interfaces and the systems behind them. From
            products used across 50+ countries to the connected devices on my
            desk.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="/resume.pdf"
              download="Tauqeer-Khan-Resume.pdf"
            >
              Download résumé <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={14} aria-hidden="true" />
            <span>Kalyan, India</span>
            <span className="location-divider" />
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me on GitHub <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-evidence">
        <p className="evidence-caption">
          Built with care.
          <br />
          <span>Made for the real world.</span>
        </p>
        <dl className="profile-numbers">
          <div>
            <dt>Years of experience</dt>
            <dd>
              5<span>+</span>
            </dd>
          </div>
          <div>
            <dt>Countries using my work</dt>
            <dd>
              50<span>+</span>
            </dd>
          </div>
          <div>
            <dt>Teams using shared UI</dt>
            <dd>
              15<span>+</span>
            </dd>
          </div>
        </dl>
        <a
          className="scroll-cue"
          href="#projects"
          aria-label="Scroll to selected work"
        >
          <ArrowDown size={19} aria-hidden="true" />
        </a>
      </div>
      <div className="technology-strip" aria-label="Core technologies">
        <span className="technology-caption">
          A few tools
          <br />
          of the trade
        </span>
        {technologies.map((technology) => (
          <span className="technology-logo" key={technology.name}>
            <Image
              src={`/svg/${technology.icon}.svg`}
              width={23}
              height={23}
              alt=""
            />
            {technology.name}
          </span>
        ))}
      </div>
    </section>
  );
}
