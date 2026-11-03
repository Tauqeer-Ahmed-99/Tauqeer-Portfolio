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
      <div className="scene-orbit orbit-one" aria-hidden="true" />
      <div className="scene-orbit orbit-two" aria-hidden="true" />
      <figure
        className="scene-figure"
        aria-label="Isometric illustration connecting a user interface, a deployment server, and a Raspberry Pi"
      >
        <SceneBoundary>
          <SystemScene />
        </SceneBoundary>
        <figcaption className="sr-only">
          Interfaces, infrastructure, and connected devices: the three layers of
          my engineering work.
        </figcaption>
      </figure>
      <span className="scene-label label-interface">
        <span className="label-symbol">&lt;/&gt;</span>Thoughtful interfaces
      </span>
      <span className="scene-label label-systems">
        <span className="label-status" />
        Reliable systems
      </span>
      <span className="scene-caption">
        A little curiosity. Every layer connected.
      </span>
    </div>
  );
}
