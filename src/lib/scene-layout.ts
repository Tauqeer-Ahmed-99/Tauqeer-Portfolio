type Dimensions = readonly [number, number, number];

// Drei extrudes inward by twice the corner radius. Larger radii make thin
// plates thicker than their declared dimensions and intersect their contents.
export function blockRadius(size: Dimensions, requested: number) {
  return Math.min(requested, Math.min(...size) * 0.49);
}

export const tableTop = 0.13 + 0.07 / 2;
const clearance = 0.015;
export const mountHeight = {
  monitor: tableTop + clearance - (0.08 - 0.07 / 2),
  server: tableTop + clearance + 0.1 / 2,
  raspberryPi: tableTop + clearance + 0.09 / 2,
};
