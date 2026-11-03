# Tauqeer Khan's portfolio

Next.js, React, TypeScript, and React Three Fiber. Deployed on Vercel.

## Development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run build
node scripts/check-build.mjs
node scripts/check-scene.mjs
```

The production check covers navigation destinations, project order, local images, profile metadata, and the non-WebGL fallback. The scene check builds geometry with the installed Drei shape builder and checks that the devices clear the tabletop in the default and separated views. The scene check needs Node.js 22.18 or later for native TypeScript imports.

## Editing content

Profile, experience, and project data live in `src/lib/data.ts`. A project's `selected` flag controls whether it appears in the main list or under Other projects. Its category controls the project filters.

On desktop, NMT Deploy and Control Nest V2 share the first row. Vaultify occupies the next row. The remaining selected projects follow. Cards stack on smaller screens.

Descriptions for the new projects were checked with `gh` against their READMEs, dependency files, and published releases on 4 November 2026:

- [Control Nest V2](https://github.com/Tauqeer-Ahmed-99/Control-Nest-v2): Expo mobile app, Next.js service, and FastAPI controller for Raspberry Pi home automation.
- [Vaultify](https://github.com/Tauqeer-Ahmed-99/Vaultify): Expo and Firebase ledger app for personal and shared accounts.

The project icons come from those repositories. Screenshots and the portrait are local files in `public/images`. The resume is `public/resume.pdf`.

## Appearance and scene

Colors and layout are in `src/app/portfolio.css`. Light and dark appearance follow the system preference. Navigation uses a glass material with solid alternatives for reduced transparency and increased contrast. Reduced motion disables pointer movement.

The isometric scene uses local geometry and procedural lighting. It renders on demand and has a static SVG fallback. `src/lib/scene-layout.ts` limits corner radii to half the smallest box dimension and derives device mounting heights from the tabletop. This prevents thin rounded boxes from extending into the hardware.

Design guidance used: `apple-design`, `apple-design-diwu`, `unslop`, and the [R3F scene, materials, and animation skills](https://github.com/enzed/r3f-skills).
