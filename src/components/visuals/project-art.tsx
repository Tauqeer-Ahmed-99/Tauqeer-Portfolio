import Image from "next/image";

export function ProjectArt({ title }: { title: string }) {
  if (title === "Control Nest V2" || title === "Vaultify") {
    const controlNest = title === "Control Nest V2";
    return (
      <div
        className={`project-art brand-art ${controlNest ? "control-nest-art" : "vaultify-art"}`}
      >
        <Image
          src={
            controlNest ? "/images/control-nest-v2.png" : "/images/vaultify.png"
          }
          alt={`${title} app icon`}
          width={160}
          height={160}
          sizes="160px"
          className="project-app-icon"
        />
        <p>
          {controlNest
            ? "Mobile app · Hosted API · Raspberry Pi"
            : "Personal ledgers · Shared accounts"}
        </p>
      </div>
    );
  }
  const screenshots: Record<string, { src: string; alt: string }> = {
    "NMT Deploy": {
      src: "/images/nmt-deploy.png",
      alt: "NMT Deploy dashboard with applications and deployment history",
    },
    "NMT Store": {
      src: "/images/nmt-store.png",
      alt: "NMT Store electronics storefront",
    },
    "Meet Flow": {
      src: "/images/meet-flow.png",
      alt: "Meet Flow video conferencing application",
    },
    "AutoPi Hub": {
      src: "/images/autopi-hub.jpg",
      alt: "AutoPi Hub home automation project",
    },
  };
  const screenshot = screenshots[title];
  if (!screenshot) return null;
  return (
    <div className="project-art screenshot-art">
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={1200}
        height={800}
        sizes="(max-width: 760px) 95vw, (max-width: 1200px) 45vw, 580px"
      />
    </div>
  );
}
