import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Keep previews out of search, including PDF and image routes. Crawling is
    // still allowed so search engines can read the noindex directive.
    if (process.env.VERCEL_ENV !== "preview") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
    ];
  },
};

export default nextConfig;
