"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, Line, RoundedBox } from "@react-three/drei";
import { MathUtils, type Group } from "three";
import { Layers2, RotateCcw } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { SystemsIllustration } from "./systems-illustration";

type Point = [number, number, number];
type Target = { x: number; y: number };

function ResponsiveCamera() {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    camera.zoom = Math.min(size.width / 6.5, size.height / 5.2, 82);
    camera.updateProjectionMatrix();
    invalidate();
  }, [camera, size.width, size.height, invalidate]);
  return null;
}

function Block({
  size,
  position,
  color,
  metal = false,
  radius = 0.05,
  rotation,
}: {
  size: Point;
  position: Point;
  color: string;
  metal?: boolean;
  radius?: number;
  rotation?: Point;
}) {
  return (
    <RoundedBox
      args={size}
      position={position}
      rotation={rotation}
      radius={radius}
      smoothness={2}
      bevelSegments={2}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        roughness={metal ? 0.28 : 0.42}
        metalness={metal ? 0.8 : 0}
      />
    </RoundedBox>
  );
}

function Monitor() {
  return (
    <group position={[-0.9, 0.2, -0.45]} rotation={[0, 0.08, 0]}>
      <Block
        size={[1.05, 0.07, 0.65]}
        position={[0, 0.08, 0.05]}
        color="#c5bfdc"
        metal
      />
      <Block
        size={[0.2, 0.62, 0.16]}
        position={[0, 0.4, -0.05]}
        color="#a7a0c3"
        metal
      />
      <Block
        size={[2.25, 1.5, 0.14]}
        position={[0, 1.35, 0]}
        color="#625a80"
        metal
        radius={0.08}
      />
      <Block
        size={[2.12, 1.36, 0.04]}
        position={[0, 1.37, 0.087]}
        color="#242537"
        radius={0.04}
      />
      <Block
        size={[2.07, 0.19, 0.02]}
        position={[0, 1.94, 0.115]}
        color="#3a374e"
        radius={0.01}
      />
      {["#d3b6d9", "#e4cba9", "#a8d4c2"].map((color, index) => (
        <mesh key={color} position={[-0.91 + index * 0.105, 1.94, 0.137]}>
          <circleGeometry args={[0.027, 12]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
      <Block
        size={[0.34, 1.04, 0.02]}
        position={[-0.82, 1.3, 0.12]}
        color="#302e43"
        radius={0.01}
      />
      {[0.32, 0.46, 0.37, 0.48, 0.29].map((width, index) => (
        <Block
          key={index}
          size={[width, 0.035, 0.015]}
          position={[-0.57 + width / 2, 1.68 - index * 0.14, 0.14]}
          color={index % 2 ? "#93cbbd" : "#b8a5e7"}
          radius={0.008}
        />
      ))}
      {[0.38, 0.27, 0.4].map((width, index) => (
        <Block
          key={index}
          size={[width, 0.035, 0.015]}
          position={[-0.37 + width / 2, 1.61 - index * 0.14, 0.14]}
          color="#73788f"
          radius={0.008}
        />
      ))}
      <Block
        size={[0.55, 0.69, 0.02]}
        position={[0.66, 1.35, 0.13]}
        color="#45405e"
        radius={0.025}
      />
      <Block
        size={[0.37, 0.25, 0.02]}
        position={[0.66, 1.48, 0.15]}
        color="#9a8ac8"
        radius={0.025}
      />
      <Block
        size={[0.35, 0.035, 0.02]}
        position={[0.66, 1.24, 0.15]}
        color="#bfb4db"
        radius={0.008}
      />
      <Block
        size={[0.23, 0.035, 0.02]}
        position={[0.6, 1.14, 0.15]}
        color="#817793"
        radius={0.008}
      />
      <group position={[0, 0.1, 0.75]}>
        <Block
          size={[1.35, 0.06, 0.45]}
          position={[0, 0, 0]}
          color="#d6d0e5"
          radius={0.04}
        />
        {[0, 1, 2].map((row) => (
          <Block
            key={row}
            size={[1.16, 0.015, 0.065]}
            position={[0, 0.04, -0.12 + row * 0.1]}
            color="#b5acc9"
            radius={0.01}
          />
        ))}
      </group>
    </group>
  );
}

function Server() {
  return (
    <group position={[1.28, 0.25, -0.35]}>
      <Block
        size={[1.03, 0.1, 1.02]}
        position={[0, 0, 0]}
        color="#9a90bc"
        metal
      />
      {[0, 1, 2].map((row) => (
        <group key={row} position={[0, 0.25 + row * 0.38, 0]}>
          <Block
            size={[0.92, 0.31, 0.9]}
            position={[0, 0, 0]}
            color="#514763"
            radius={0.055}
          />
          <Block
            size={[0.8, 0.21, 0.025]}
            position={[0, 0, 0.46]}
            color="#736585"
            radius={0.03}
          />
          <Block
            size={[0.35, 0.025, 0.02]}
            position={[-0.12, 0.035, 0.48]}
            color="#b8a5ce"
            radius={0.006}
          />
          <Block
            size={[0.25, 0.025, 0.02]}
            position={[-0.17, -0.035, 0.48]}
            color="#aa98c0"
            radius={0.006}
          />
          <mesh position={[0.29, 0, 0.483]}>
            <circleGeometry args={[0.027, 12]} />
            <meshBasicMaterial color="#a7e7c8" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function CircuitBoard() {
  return (
    <group position={[-0.45, 0.26, 1.08]} rotation={[0, -0.08, 0]}>
      <Block
        size={[1.02, 0.09, 0.75]}
        position={[0, 0, 0]}
        color="#6aaf9e"
        radius={0.05}
      />
      <Block
        size={[0.33, 0.065, 0.32]}
        position={[-0.05, 0.075, 0]}
        color="#364852"
        radius={0.02}
      />
      <Block
        size={[0.2, 0.12, 0.24]}
        position={[0.37, 0.085, -0.15]}
        color="#d1d5d9"
        metal
        radius={0.02}
      />
      <Block
        size={[0.2, 0.12, 0.19]}
        position={[0.37, 0.085, 0.13]}
        color="#c3c9ce"
        metal
        radius={0.02}
      />
      <Block
        size={[0.65, 0.035, 0.09]}
        position={[-0.08, 0.07, -0.27]}
        color="#34544e"
        radius={0.01}
      />
      {Array.from({ length: 10 }, (_, index) => (
        <Block
          key={index}
          size={[0.025, 0.085, 0.055]}
          position={[-0.37 + index * 0.06, 0.12, -0.27]}
          color="#e2ce94"
          metal
          radius={0.004}
        />
      ))}
      <Line
        points={[
          [-0.4, 0.051, 0.15],
          [-0.25, 0.051, 0.15],
          [-0.25, 0.051, 0.26],
          [0.2, 0.051, 0.26],
        ]}
        color="#b1ddc6"
        lineWidth={1.2}
      />
      <Line
        points={[
          [-0.35, 0.051, -0.1],
          [-0.25, 0.051, -0.1],
          [-0.25, 0.051, -0.2],
          [0.2, 0.051, -0.2],
        ]}
        color="#b1ddc6"
        lineWidth={1.2}
      />
    </group>
  );
}

function FloatingInterface() {
  return (
    <group position={[0.3, 2.1, -1.03]} rotation={[0, -0.22, 0]}>
      <RoundedBox
        args={[1.48, 0.95, 0.1]}
        radius={0.07}
        smoothness={2}
        bevelSegments={2}
      >
        <meshPhysicalMaterial
          color="#b2a5ef"
          transmission={0.6}
          thickness={0.2}
          roughness={0.25}
          ior={1.35}
          clearcoat={0.5}
        />
      </RoundedBox>
      <Block
        size={[0.85, 0.045, 0.015]}
        position={[-0.1, 0.25, 0.063]}
        color="#f5f0ff"
        radius={0.01}
      />
      <Block
        size={[0.55, 0.035, 0.015]}
        position={[-0.25, 0.13, 0.063]}
        color="#d8cff9"
        radius={0.01}
      />
      {[0, 1, 2].map((index) => (
        <Block
          key={index}
          size={[0.32, 0.24, 0.035]}
          position={[-0.4 + index * 0.4, -0.14, 0.073]}
          color={index === 1 ? "#b4cfcf" : "#e3dcf5"}
          radius={0.025}
        />
      ))}
    </group>
  );
}

function Assembly({
  target,
  wake,
  expanded,
  reducedMotion,
}: {
  target: MutableRefObject<Target>;
  wake: MutableRefObject<() => void>;
  expanded: boolean;
  reducedMotion: boolean;
}) {
  const root = useRef<Group>(null);
  const hardware = useRef<Group>(null);
  const interfaceLayer = useRef<Group>(null);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    wake.current = invalidate;
    invalidate();
    return () => {
      wake.current = () => {};
    };
  }, [wake, invalidate]);
  useEffect(() => {
    invalidate();
  }, [expanded, reducedMotion, invalidate]);

  useFrame((_, delta) => {
    if (!root.current || !hardware.current || !interfaceLayer.current) return;
    const destinationX = reducedMotion ? 0 : target.current.y * 0.055;
    const destinationY = reducedMotion ? 0 : target.current.x * 0.1;
    const height = expanded ? 0.4 : 0;
    const cardHeight = expanded ? 0.38 : 0;
    const damp = (value: number, destination: number) =>
      reducedMotion
        ? destination
        : MathUtils.damp(value, destination, 9, Math.min(delta, 0.05));
    root.current.rotation.x = damp(root.current.rotation.x, destinationX);
    root.current.rotation.y = damp(root.current.rotation.y, destinationY);
    hardware.current.position.y = damp(hardware.current.position.y, height);
    interfaceLayer.current.position.y = damp(
      interfaceLayer.current.position.y,
      cardHeight,
    );
    if (
      Math.abs(root.current.rotation.x - destinationX) +
        Math.abs(root.current.rotation.y - destinationY) +
        Math.abs(hardware.current.position.y - height) +
        Math.abs(interfaceLayer.current.position.y - cardHeight) >
      0.0001
    )
      invalidate();
  });

  return (
    <group ref={root} position={[0, -0.55, 0]}>
      <Block
        size={[4.45, 0.18, 3.45]}
        position={[0, 0, 0]}
        color="#b1a5d8"
        radius={0.14}
      />
      <Block
        size={[4.25, 0.07, 3.25]}
        position={[0, 0.13, 0]}
        color="#e2dcf0"
        radius={0.12}
      />
      <Line
        points={[
          [-1.6, 0.175, 0.1],
          [-1.6, 0.175, 1.37],
          [1.6, 0.175, 1.37],
          [1.6, 0.175, 0.6],
        ]}
        color="#a396c7"
        lineWidth={1.5}
      />
      <Line
        points={[
          [-0.4, 0.177, 0.95],
          [0.6, 0.177, 0.95],
          [0.6, 0.177, -0.6],
          [1.3, 0.177, -0.6],
        ]}
        color="#b4a5da"
        lineWidth={2}
        dashed
        dashSize={0.07}
        gapSize={0.045}
      />
      <group ref={hardware}>
        <Monitor />
        <Server />
        <CircuitBoard />
        <group ref={interfaceLayer}>
          <FloatingInterface />
        </group>
      </group>
    </group>
  );
}

export default function SystemScene() {
  const target = useRef<Target>({ x: 0, y: 0 });
  const wake = useRef<() => void>(() => {});
  const reducedMotion = useReducedMotion() ?? true;
  const [expanded, setExpanded] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  if (unavailable) return <SystemsIllustration />;

  return (
    <div
      className="system-scene"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || reducedMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        target.current = {
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
        };
        wake.current();
      }}
      onPointerLeave={() => {
        target.current = { x: 0, y: 0 };
        wake.current();
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [7, 5.5, 8], zoom: 72, near: 0.1, far: 50 }}
        frameloop="demand"
        dpr={[1, 1.5]}
        shadows="percentage"
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        fallback={<SystemsIllustration />}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener(
            "webglcontextlost",
            () => setUnavailable(true),
            { once: true },
          );
        }}
        aria-hidden="true"
      >
        <ResponsiveCamera />
        <ambientLight intensity={1.4} />
        <directionalLight
          position={[3, 7, 5]}
          intensity={3.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0005}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <directionalLight
          position={[-5, 3, -2]}
          intensity={1.7}
          color="#c0b1fa"
        />
        <Environment resolution={64} frames={1}>
          <Lightformer
            position={[0, 5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[8, 8, 1]}
            intensity={2}
          />
          <Lightformer
            position={[-4, 2, 3]}
            scale={[5, 5, 1]}
            intensity={2}
            color="#d1bfff"
          />
        </Environment>
        <Assembly
          target={target}
          wake={wake}
          expanded={expanded}
          reducedMotion={reducedMotion}
        />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.68, 0]}
          receiveShadow
        >
          <planeGeometry args={[30, 30]} />
          <shadowMaterial transparent opacity={0.09} />
        </mesh>
      </Canvas>
      <button
        className="scene-control glass-material"
        type="button"
        aria-pressed={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <RotateCcw size={14} aria-hidden="true" />
        ) : (
          <Layers2 size={14} aria-hidden="true" />
        )}
        {expanded ? "Bring it together" : "Explore the layers"}
      </button>
    </div>
  );
}
