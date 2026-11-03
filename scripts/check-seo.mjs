import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { siteMetadata } from "../src/lib/data.ts";

const preview = process.argv.includes("--preview");
const canonical = new URL("/", siteMetadata.website).href;
const html = await readFile(".next/server/app/index.html", "utf8");
const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => match[0]);
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const meta = (name) =>
  tags
    .filter(
      (tag) => attr(tag, "name") === name || attr(tag, "property") === name,
    )
    .map((tag) => attr(tag, "content"));
const singleMeta = (name) => {
  const values = meta(name);
  assert.equal(values.length, 1, `Expected one ${name} meta tag`);
  return values[0];
};

const head = html.slice(0, html.indexOf("</head>"));
assert.match(head, /<title>Tauqeer Khan \| Senior Software Engineer<\/title>/);
assert.equal(singleMeta("description"), siteMetadata.description);
assert(
  siteMetadata.description.length <= 160,
  "Keep the search description concise",
);
const canonicals = [...head.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
assert.equal(canonicals.length, 1, "There must be one canonical URL");
assert.equal(new URL(attr(canonicals[0][0], "href")).href, canonical);
assert.equal(new URL(singleMeta("og:url")).href, canonical);
assert.equal(singleMeta("og:type"), "website");
assert.equal(singleMeta("og:title"), "Tauqeer Khan | Senior Software Engineer");
assert.equal(singleMeta("twitter:card"), "summary_large_image");
for (const property of ["og:image", "twitter:image"]) {
  const url = new URL(singleMeta(property).replaceAll("&amp;", "&"));
  assert.equal(url.protocol, "https:");
  assert.equal(url.pathname, "/opengraph-image");
  if (!preview) assert.equal(url.origin, new URL(canonical).origin);
}
assert(singleMeta("og:image:alt").includes(siteMetadata.name));
assert.equal(singleMeta("og:image:width"), "1200");
assert.equal(singleMeta("og:image:height"), "630");

for (const name of ["robots", "googlebot"]) {
  const directives = singleMeta(name)
    .split(",")
    .map((value) => value.trim());
  assert(
    directives.includes(preview ? "noindex" : "index"),
    `${name} has the wrong indexing policy`,
  );
  assert(!directives.includes(preview ? "index" : "noindex"));
  assert(directives.includes("follow"));
}

const sitemap = await readFile(".next/server/app/sitemap.xml.body", "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
assert.deepEqual(
  locations,
  [canonical],
  "The sitemap must contain only the canonical page, without section fragments",
);
assert(
  !sitemap.includes("<lastmod>"),
  "Don't invent content modification dates",
);
const robots = await readFile(".next/server/app/robots.txt.body", "utf8");
assert(robots.includes(`Sitemap: ${new URL("/sitemap.xml", canonical).href}`));
assert.match(robots, /^Allow: \/$/m);
assert(
  !/^Disallow: \/$/m.test(robots),
  "Crawlers must be able to read the page's indexing directives",
);

const documents = [
  ...html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]));
const nodes = documents.flatMap((document) => document["@graph"] || [document]);
const person = nodes.find((node) => node["@type"] === "Person");
const profile = nodes.find((node) => node["@type"] === "ProfilePage");
const website = nodes.find((node) => node["@type"] === "WebSite");
assert(
  person && profile && website,
  "Profile, person, and website structured data are required",
);
assert.equal(profile.mainEntity["@id"], person["@id"]);
assert.equal(profile.isPartOf["@id"], website["@id"]);
assert.equal(person.name, siteMetadata.name);
assert.equal(person.url, canonical);
assert.equal(person.worksFor.name, "Ingram Micro");
assert.deepEqual(person.sameAs, [siteMetadata.github, siteMetadata.linkedin]);
assert(profile.hasPart.some((project) => project.name === "Control Nest V2"));
assert(profile.hasPart.some((project) => project.name === "Vaultify"));

const image = await readFile(".next/server/app/opengraph-image.body");
assert.equal(
  image.subarray(0, 8).toString("hex"),
  "89504e470d0a1a0a",
  "The social image must be a PNG",
);
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
assert(
  image.length < 5 * 1024 * 1024,
  "The social image must fit social card size limits",
);

const routes = JSON.parse(await readFile(".next/routes-manifest.json", "utf8"));
const noindex = routes.headers.some(
  (rule) =>
    rule.source === "/:path*" &&
    rule.headers.some(
      (header) =>
        header.key.toLowerCase() === "x-robots-tag" &&
        header.value.includes("noindex"),
    ),
);
assert.equal(
  noindex,
  preview,
  "Only preview builds may set a global noindex response header",
);
console.log(
  `${preview ? "Preview" : "Production"} SEO verified: canonical URL, search and social metadata, structured data, sitemap, crawler policy, and 1200×630 PNG.`,
);
