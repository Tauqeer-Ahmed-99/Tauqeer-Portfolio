// Reuse the logo assets from the original portfolio. Related tools share the
// closest available mark; the technology name remains the visible label.
export const technologyIcons: Record<string, string> = {
  "react.js": "/svg/react.svg",
  react: "/svg/react.svg",
  "react native": "/svg/react.svg",
  typescript: "/svg/typescript.svg",
  "next.js": "/svg/nextjs.svg",
  javascript: "/svg/javascript.svg",
  "javascript (es6+)": "/svg/javascript.svg",
  "tailwind css": "/svg/tailwind.svg",
  tailwind: "/svg/tailwind.svg",
  mui: "/svg/mui.svg",
  html: "/svg/html.svg",
  css: "/svg/css.svg",
  "node.js": "/svg/nodejs.svg",
  python: "/svg/python.svg",
  fastapi: "/svg/fastapi.svg",
  sqlalchemy: "/svg/sqlalchemy.svg",
  "drizzle orm": "/svg/drizzle.svg",
  postgresql: "/svg/postgresql.svg",
  mysql: "/svg/mysql.svg",
  "react query": "/svg/react-query.svg",
  flutter: "/svg/flutter.svg",
  "flutter provider": "/svg/flutter.svg",
  "provider sdk": "/svg/flutter.svg",
  expo: "/svg/expo.svg",
  firebase: "/svg/firebase.svg",
  firestore: "/svg/firestore.svg",
  firestoredb: "/svg/firestore.svg",
  "firestore rtdb": "/svg/firestore.svg",
  mongodb: "/svg/mongodb.svg",
  docker: "/svg/docker.svg",
  "docker compose": "/svg/docker.svg",
  git: "/svg/git.svg",
  github: "/svg/github.svg",
  bitbucket: "/svg/bitbucket.svg",
  redis: "/svg/redis.svg",
  bullmq: "/images/bullmq.png",
  traefik: "/svg/traefik.svg",
  "cloudflare tunnel": "/svg/cloudflare.svg",
  "raspberry pi": "/svg/raspberrypi.svg",
  go: "/svg/go.svg",
  "go (exploring)": "/svg/go.svg",
  rust: "/svg/rust.svg",
  "rust (exploring)": "/svg/rust.svg",
  "azure communication service": "/svg/azure.svg",
  "azure communication services": "/svg/azure.svg",
  "google maps apis": "/svg/google-maps.svg",
  "google maps": "/svg/google-maps.svg",
  jwt: "/svg/jwt.svg",
  "fluent ui": "/svg/fluent.svg",
  "fabric/fluent ui": "/svg/fluent.svg",
  "rest apis": "/svg/api.svg",
  "ci/cd": "/svg/cicd.svg",
  webrtc: "/svg/webrtc.svg",
  mediasoup: "/images/mediasoup.webp",
  iot: "/svg/iot.svg",
  workos: "/svg/workos.svg",
  back4app: "/svg/server.svg",
};

export function getTechnologyIcon(name: string) {
  const key = name.trim().toLowerCase();
  if (technologyIcons[key]) return technologyIcons[key];
  if (/react/.test(key)) return "/svg/react.svg";
  if (/postgres|sql|database|orm/.test(key)) return "/svg/postgresql.svg";
  if (/queue|mq|redis|cache/.test(key)) return "/svg/redis.svg";
  if (/api|trpc|graphql/.test(key)) return "/svg/api.svg";
  if (/auth|clerk|jwt|sso/.test(key)) return "/svg/auth.svg";
  if (/mobile|android|ios|native/.test(key)) return "/svg/mobile.svg";
  if (/cloud|tunnel|hosting/.test(key)) return "/svg/cloudflare.svg";
  if (/deploy|pipeline|build|ci\/cd/.test(key)) return "/svg/cicd.svg";
  if (/rtc|video|stream|media/.test(key)) return "/svg/webrtc.svg";
  if (/css|style|ui/.test(key)) return "/svg/css.svg";
  return "/svg/web.svg";
}
