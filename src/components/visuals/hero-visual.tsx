"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";
import { SystemsIllustration } from "./systems-illustration";

const SystemScene = dynamic(() => import("./system-scene"), {
  ssr: false,
  loading: () => <SystemsIllustration />,
});

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <SystemsIllustration /> : this.props.children;
  }
}

export function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="scene-aura" aria-hidden="true" />
      <figure
        className="scene-figure"
        aria-label="Isometric illustration connecting a user interface, a deployment server, and a Raspberry Pi"
      >
        <SceneBoundary>
          <SystemScene />
        </SceneBoundary>
        <figcaption className="sr-only">
          A desktop computer, a server, and a Raspberry Pi on a shared base.
        </figcaption>
      </figure>
    </div>
  );
}
