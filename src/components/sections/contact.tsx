import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteMetadata } from "@/lib/data";
import { CopyEmail } from "@/components/copy-email";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section-shell section-space"
      aria-labelledby="contact-heading"
    >
      <div className="contact-panel">
        <div className="contact-orb" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Let’s connect</p>
          <h2 id="contact-heading">
            Have something
            <br />
            good in mind?
          </h2>
          <p>
            An interesting problem, a collaboration, or just a conversation
            about building things. I’d love to hear it.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href={`mailto:${siteMetadata.email}`}
          >
            Say hello <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="email-row">
            <Mail size={17} aria-hidden="true" />
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
            <CopyEmail />
          </div>
          <div className="contact-socials">
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}>
              <Phone size={13} aria-hidden="true" />
              Call me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
