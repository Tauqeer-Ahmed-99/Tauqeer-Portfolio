import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { ExtrudeGeometry, Shape } from "three";
import { blockRadius, mountHeight, tableTop } from "../src/lib/scene-layout.ts";

// Use the installed Drei shape builder so the check measures the real bevel,
// including the negative extrusion that caused the tabletop intersection.
const require = createRequire(import.meta.url);
const dreiRoot = path.dirname(
  require.resolve("@react-three/drei/package.json"),
);
const source = await readFile(
  path.join(dreiRoot, "core/RoundedBox.js"),
  "utf8",
);
const shapeSource = source.slice(
  source.indexOf("const eps ="),
  source.indexOf("const RoundedBox ="),
);
const createShape = new Function(
  "Shape",
  `${shapeSource}; return createShape;`,
)(Shape);

function bounds(size, requestedRadius) {
  const [width, height, depth] = size;
  const radius = blockRadius(size, requestedRadius);
  const geometry = new ExtrudeGeometry(createShape(width, height, radius), {
    depth: depth - radius * 2,
    bevelEnabled: true,
    bevelSize: radius - 0.00001,
    bevelThickness: radius,
    bevelSegments: 4,
    curveSegments: 2,
    steps: 1,
  });
  geometry.center();
  geometry.computeBoundingBox();
  const box = geometry.boundingBox.clone();
  geometry.dispose();
  for (const [axis, expected] of [
    ["x", width],
    ["y", height],
    ["z", depth],
  ]) {
    assert(
      Math.abs(box.max[axis] - box.min[axis] - expected) < 0.0001,
      `${axis} extent must match the declared ${expected} units`,
    );
  }
  return box;
}

bounds([4.45, 0.18, 3.45], 0.14);
const tabletop = bounds([4.25, 0.07, 3.25], 0.12);
const surface = tabletop.max.y + 0.13;
assert(Math.abs(surface - tableTop) < 0.0001);

const devices = [
  {
    name: "monitor foot",
    size: [1.05, 0.07, 0.65],
    radius: 0.05,
    y: mountHeight.monitor + 0.08,
  },
  {
    name: "keyboard",
    size: [1.35, 0.06, 0.45],
    radius: 0.04,
    y: mountHeight.monitor + 0.1,
  },
  {
    name: "server base",
    size: [1.03, 0.1, 1.02],
    radius: 0.05,
    y: mountHeight.server,
  },
  {
    name: "Raspberry Pi",
    size: [1.02, 0.09, 0.75],
    radius: 0.05,
    y: mountHeight.raspberryPi,
  },
];
for (const device of devices) {
  const box = bounds(device.size, device.radius);
  for (const lift of [0, 0.4]) {
    assert(
      box.min.y + device.y + lift > surface,
      `${device.name} intersects the tabletop with ${lift} units of lift`,
    );
  }
}
console.log(
  "Scene geometry verified: both base plates retain their declared thickness; monitor, keyboard, server, and Raspberry Pi clear the tabletop in both views.",
);
