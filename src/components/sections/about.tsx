import Image from "next/image";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { siteMetadata } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="about-section section-shell section-space"
      aria-labelledby="about-heading"
    >
      <div className="about-layout">
        <div className="about-portrait">
          <div className="portrait-mat">
            <Image
              src="/images/profile.jpeg"
              alt="Tauqeer Khan"
              width={520}
              height={620}
              sizes="(max-width: 700px) 85vw, 35vw"
              className="portrait-image"
            />
          </div>
          <div className="portrait-caption">
            <MapPin size={14} aria-hidden="true" />
            Kalyan, Maharashtra<span>India</span>
          </div>
          <span className="portrait-note">
            Tauqeer Khan
            <br />
            Software engineer
          </span>
        </div>
        <div className="about-copy">
          <h2 id="about-heading">About me</h2>
          <p>
            I'm based in Kalyan, Maharashtra. I studied mechanical engineering
            before moving into software, and completed an M.Tech in Software
            Systems at BITS Pilani WILP, specializing in IoT.
          </p>
          <p>
            At Ingram Micro, I work on the frontend of X4A's claims platform. I
            also review code, maintain shared components, and mentor engineers.
          </p>
          <p>
            My personal projects give me a reason to work on the other parts:
            APIs, databases, deployments, and hardware. Control Nest started
            with a Raspberry Pi and now includes a mobile app and hosted
            service.
          </p>
          <div className="education-note">
            <GraduationCap size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>M.Tech in Software Systems</strong>
              <span>BITS Pilani WILP · Specialization in IoT · 2025</span>
            </div>
          </div>
          <a
            className="text-link"
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
