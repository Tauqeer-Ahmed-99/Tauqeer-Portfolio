import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

// Check the actual production artifact, including the no-JavaScript experience.
const html = await readFile(".next/server/app/index.html", "utf8");
assert.equal(
  [...html.matchAll(/<h1(?:\s|>)/g)].length,
  1,
  "The page must have one main heading",
);
assert.match(
  html,
  /<main\b/,
  "The main landmark must be rendered on the server",
);
assert.match(html, /class="skip-link"/, "Keyboard users need the skip link");

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, "Rendered IDs must be unique");
const links = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
const projectTitles = [
  ...html.matchAll(
    /<article class="project-card[^\"]*"[\s\S]*?<h3><a[^>]*>([^<]+)<\/a><\/h3>/g,
  ),
].map((match) => match[1]);
assert.deepEqual(
  projectTitles.slice(0, 3),
  ["NMT Deploy", "Control Nest V2", "Vaultify"],
  "New projects must lead the portfolio in the requested order",
);
assert.equal(
  (html.match(/class="project-card project-leading"/g) || []).length,
  2,
  "The first two projects must share the desktop row",
);
assert.match(
  html,
  /class="project-card project-wide"/,
  "Vaultify must occupy the following row",
);
for (const link of links.filter((link) => link.startsWith("#"))) {
  assert(ids.includes(link.slice(1)), `Missing destination for ${link}`);
}
for (const link of links.filter((link) => link.startsWith("mailto:"))) {
  assert.match(
    link,
    /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Email links must be usable",
  );
}

const structuredData = [
  ...html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]));
assert(
  structuredData
    .flatMap((item) => item["@graph"] || [item])
    .some((item) => item["@type"] === "Person" && item.name === "Tauqeer Khan"),
  "Profile metadata must survive the revamp",
);

const assets = new Set(["/resume.pdf"]);
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = new URL(
    match[1].replaceAll("&amp;", "&"),
    "https://portfolio.local",
  );
  if (url.hostname !== "portfolio.local") continue;
  if (url.pathname === "/_next/image") assets.add(url.searchParams.get("url"));
  else if (
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/svg/")
  )
    assets.add(url.pathname);
}
for (const asset of assets) {
  assert(asset?.startsWith("/"), "Local images need a local source");
  await access(path.join("public", asset));
}
assert.match(
  html,
  /<details\b/,
  "Additional projects must work without client JavaScript",
);
assert.match(
  html,
  /systems-fallback/,
  "The initial page must include the non-WebGL illustration",
);
console.log(
  `Production artifact verified: ${ids.length} unique IDs, ${links.filter((link) => link.startsWith("#")).length} anchor links, ${assets.size} local assets, profile metadata, and static fallback.`,
);
