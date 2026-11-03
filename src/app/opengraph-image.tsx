import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteMetadata } from "@/lib/data";

export const alt =
  "Tauqeer Khan, Senior Software Engineer. React, TypeScript, Next.js, mobile apps, and IoT.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/images/profile.jpeg"),
  );
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "64px",
        background: "#f7f8fc",
        color: "#202431",
        fontFamily: "sans-serif",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 740,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", color: "#5147c8", fontSize: 25 }}>
          Software engineer · Kalyan, India
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: "-4px",
              lineHeight: 1.1,
            }}
          >
            {siteMetadata.name}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 31 }}>
            {siteMetadata.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 24,
              color: "#626879",
            }}
          >
            React, TypeScript, Next.js, mobile apps, and IoT
          </div>
        </div>
        <div style={{ display: "flex", color: "#626879", fontSize: 20 }}>
          {new URL(siteMetadata.website).hostname}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: 14,
          background: "#ece9fb",
          borderRadius: 26,
        }}
      >
        {/* ImageResponse renders standard img elements. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
          alt=""
          width={245}
          height={310}
          style={{
            objectFit: "cover",
            objectPosition: "50% 30%",
            borderRadius: 14,
          }}
        />
      </div>
    </div>,
    size,
  );
}
