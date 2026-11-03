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
            Engineer by profession.
            <br />
            Builder by instinct.
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A little about me</p>
          <h2 id="about-heading">
            Curiosity is
            <br />
            the common thread.
          </h2>
          <p>
            I’m Tauqeer, a software engineer based in Kalyan, India. My path
            started in mechanical engineering and led to software systems,
            interfaces, and connected devices.
          </p>
          <p>
            Today, I work on enterprise frontend systems at Ingram Micro.
            Outside work, I follow ideas from end to end: a self-hosted
            deployment platform, a real-time video app, or a Raspberry Pi that
            makes home a little smarter.
          </p>
          <p>
            I care about the details people feel, and the engineering they never
            have to think about.
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
            More about my journey <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
