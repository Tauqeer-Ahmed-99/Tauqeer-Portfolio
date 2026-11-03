# Tauqeer Khan — engineering portfolio

A Next.js portfolio connecting thoughtful interfaces, reliable infrastructure, and connected devices.

## Run locally

```sh
npm ci
npm run dev
```

`npm run build` makes the production build. `npx tsc --noEmit` checks types. After a build, `node scripts/check-build.mjs` verifies rendered navigation, local assets, profile metadata, and the non-WebGL fallback.

## Revamp 1 plan

**Purpose.** Help engineering teams, collaborators, and hiring managers understand Tauqeer's work, explore real projects, and make contact. The profile and resume in this repository are the source of truth. No invented clients, availability claims, or project metrics.

**Thesis.** Good software at every layer: a senior frontend engineer who also builds deployment platforms and connected devices. The signature is a custom isometric assembly of an interface, a server, and a Raspberry Pi. These objects map to the actual projects. Generic floating shapes were removed from the plan in favor of this connected system.

**Materials.** A quiet canvas and substantial content surfaces, with glass reserved for floating navigation and scene controls. No nested translucent panels. The illustration uses physical transmission as artwork. Appearance follows the operating system.

### Tokens

Contrast is calculated against the corresponding canvas. Glass uses a substantial backing for legibility.

| Role              | Light     | Contrast | Dark      | Contrast |
| ----------------- | --------- | -------- | --------- | -------- |
| Canvas            | `#F7F8FC` | —        | `#101219` | —        |
| Surface           | `#FFFFFF` | —        | `#1A1D28` | —        |
| Content           | `#202431` | 14.57:1  | `#F2F3FA` | 16.90:1  |
| Secondary content | `#626879` | 5.24:1   | `#A8AFC2` | 8.53:1   |
| Iris / action     | `#5147C8` | 6.41:1   | `#B9B1FF` | 9.62:1   |
| Positive signal   | `#24705D` | 5.57:1   | `#86D9BE` | 11.30:1  |

System sans-serif with optical sizing throughout. Display: responsive 52–88px / 1.04, weight 600, tight tracking. Section headings: 36–52px / 1.12. Intro: 17px / 1.8. Body: 15–17px. Utility labels: at least 12px. Layout and type scale in rem. Tiny type inside decorative project illustrations is hidden from assistive technology and carries no essential information.

**Layout.** A generous split hero leads into selected work, engineering experience, toolbox, personal introduction, and direct contact.

```text
Regular                            Compact
+--------------------------------+ +----------------------+
| TK   Work Experience About     | | TK              Menu |
+----------------+---------------+ +----------------------+
| Profile        | Isometric     | | Profile + actions    |
| Headline       | system        | | Isometric system     |
| Actions        | illustration  | | Profile evidence     |
+----------------+---------------+ +----------------------+
| Profile evidence               | | Selected projects    |
| Selected work: feature + three  | | Experience           |
| Experience / Toolbox           | | Toolbox / About      |
| About / Contact                | | Contact              |
+--------------------------------+ +----------------------+
```

**Motion.** The scene follows pointer input with interruptible damping and renders on demand, returning to idle when settled. A labeled control separates its layers. No perpetual rotation, scroll hijacking, or animated full-screen background. Reduced motion uses immediate updates. Reduced transparency uses opaque functional surfaces. Non-WebGL devices and context loss receive a static SVG.

**Sequence.** Accessible tokens and semantic structure; navigation and content; scene and project artwork; responsive and appearance adaptations; production checks.

**Restraint pass.** No decorative section numbers, fake terminal activity, proficiency meters, or form requiring unconfigured email credentials. Contact uses email and copy-email actions. Other projects live in a native disclosure. The design is specific to Tauqeer's interface/infrastructure/IoT work; navigation remains familiar web navigation.

### Guidance applied

- `apple-design`: press feedback, interruptible motion, optical typography, material hierarchy, and accessibility preferences.
- `apple-design-diwu`: foundations and web translation. References include `materials.md › Liquid Glass` (“Use Liquid Glass effects sparingly”), `layout.md › Visual hierarchy`, `typography.md › Ensuring legibility`, `accessibility.md › Vision`, and `motion.md › Best practices`. Native app conventions are not imposed on this website.
- [EnzeD/r3f-skills](https://github.com/enzed/r3f-skills): `r3f-fundamentals`, `r3f-materials`, and `r3f-animation`. Installed in the user's Codex skills directory and applied to the existing React 19 / Fiber 9 / Drei 10 stack.
- [React Three Fiber performance guidance](https://r3f.docs.pmnd.rs/advanced/scaling-performance): demand rendering, capped pixel ratio, and explicit invalidation.
- [Drei Environment](https://drei.docs.pmnd.rs/staging/environment): procedural local lighting instead of a remote HDRI preset.

## Content and assets

Profile data: `src/lib/data.ts`. Resume: `public/resume.pdf`. Screenshots and portrait are existing local assets. Hero geometry, fallback SVG, and isometric project diagrams are authored in code and require no external models, textures, fonts, or image service.

The portfolio is a static page. Filtering, navigation disclosure, scene controls, and clipboard feedback run on the client. Email links open the visitor's email application.
