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
node scripts/check-seo.mjs
node scripts/check-scene.mjs
```

The production check covers navigation destinations, project order, local images, profile metadata, and the non-WebGL fallback. The scene check builds geometry with the installed Drei shape builder and checks that the devices clear the tabletop in the default and separated views. The scene check needs Node.js 22.18 or later for native TypeScript imports.

## Search and sharing

`src/lib/seo.ts` defines the canonical URL, search description, sharing metadata, and linked Person, ProfilePage, and WebSite structured data. `siteMetadata.website` in `src/lib/data.ts` is the production URL. Update it if the site moves to a custom domain.

The sitemap lists the canonical home page. Section anchors are part of that page and aren't separate sitemap entries. `robots.txt` points to the production sitemap and permits crawling.

Vercel preview builds use `noindex` in both metadata and the `X-Robots-Tag` response header. Production builds permit indexing. Crawling remains allowed so search engines can [read the indexing directives](https://developers.google.com/search/docs/crawling-indexing/block-indexing). The profile schema follows [Google's ProfilePage guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

`src/app/opengraph-image.tsx` generates a 1200 by 630 PNG with the existing portrait and profile details at build time. Open Graph and Twitter cards reference it.

Run `node scripts/check-seo.mjs` after a production build. For a build made with `VERCEL_ENV=preview`, use `node scripts/check-seo.mjs --preview`. The check verifies the rendered canonical link, metadata, schema relationships, sitemap, indexing headers, and generated PNG.

After publishing this branch to production, the sitemap to submit in Google Search Console is `https://tauqeer-portfolio-green.vercel.app/sitemap.xml`. Search Console submission and live indexing have not been performed by these build checks.

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
