import { useId } from "react";

/** Dependency-free artwork for loading, unavailable WebGL, and context loss. */
export function SystemsIllustration() {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className="systems-fallback"
      viewBox="0 0 640 540"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`${id}-base`}
          x1="160"
          y1="180"
          x2="490"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2E0FA" />
          <stop offset="1" stopColor="#A6A1DF" />
        </linearGradient>
        <linearGradient
          id={`${id}-glass`}
          x1="190"
          y1="120"
          x2="480"
          y2="380"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F7FF" stopOpacity=".95" />
          <stop offset="1" stopColor="#AAA2EE" stopOpacity=".8" />
        </linearGradient>
        <linearGradient
          id={`${id}-server`}
          x1="400"
          y1="230"
          x2="500"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58517D" />
          <stop offset="1" stopColor="#26253B" />
        </linearGradient>
        <filter
          id={`${id}-shadow`}
          x="0"
          y="0"
          width="640"
          height="540"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation="17" />
        </filter>
      </defs>
      <ellipse
        cx="338"
        cy="440"
        rx="205"
        ry="38"
        fill="#6D62A4"
        opacity=".15"
        filter={`url(#${id}-shadow)`}
      />
      <path d="m97 349 233-123 231 125v30L330 507 97 379z" fill="#AAA5D3" />
      <path
        d="m97 349 233-123 231 125-231 126z"
        fill={`url(#${id}-base)`}
        stroke="#F4F2FF"
        strokeWidth="2"
      />
      <path
        d="m120 342 210-111 208 113-208 113z"
        fill="#F0EDFC"
        fillOpacity=".55"
        stroke="white"
        strokeOpacity=".7"
      />
      <path
        d="m181 365 113 61 168-91M298 425l-2-69 119-62M296 357l-85-46"
        stroke="#8075CA"
        strokeWidth="3"
        strokeDasharray="5 6"
      />
      <g>
        <path d="m166 185 161 85v130l-161-86z" fill="#77709E" />
        <path d="m166 185 12-7 161 85-12 7z" fill="#E5E2F6" />
        <path d="m327 270 12-7v129l-12 8z" fill="#625C8A" />
        <path d="m178 207 138 73v99l-138-73z" fill="#28273F" />
        <path
          d="m192 225 23 12m-23 3 52 27m-52-12 33 17m-33-2 68 35m-51-12 45 24m-45-10 64 34m-64-20 38 20"
          stroke="#B9AFF2"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="m271 266 27 14m-27 3 27 14m-27 3 20 10"
          stroke="#84D1C5"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="m231 350 29 16v33l-29-16z" fill="#9189B8" />
        <path d="m210 385 36-19 63 34-36 19z" fill="#BEB8DB" stroke="#EEEAFB" />
      </g>
      <g>
        <path d="m378 246 59-32 83 44-59 32z" fill="#8C83B7" />
        <path d="m378 246 83 44v121l-83-44z" fill={`url(#${id}-server)`} />
        <path d="m461 290 59-32v121l-59 32z" fill="#403A62" />
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(0 ${row * 31})`}>
            <path d="m388 264 63 33v21l-63-33z" fill="#71678E" />
            <path
              d="m397 275 28 15"
              stroke="#B5A8E3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <ellipse cx="440" cy="299" rx="2" ry="3" fill="#9EE8CE" />
          </g>
        ))}
      </g>
      <g>
        <path d="m196 379 64-34 73 40v15l-64 35-73-40z" fill="#357F7A" />
        <path d="m196 379 64-34 73 40-64 35z" fill="#80C7B4" stroke="#C4F0DB" />
        <path d="m230 378 26-14 31 17-26 14z" fill="#344F5C" stroke="#A2C7C2" />
        <path d="m296 372 15-8 16 9v16l-15 8-16-9z" fill="#CDD2DC" />
        <path
          d="m213 388 34 19"
          stroke="#EEDDA1"
          strokeWidth="7"
          strokeDasharray="2 3"
        />
      </g>
      <path
        d="m328 137 71-38 114 61v91l-71 38-114-61z"
        fill={`url(#${id}-glass)`}
        stroke="#F6F3FF"
        strokeWidth="2"
      />
      <path d="m328 137 114 61v91l-114-61z" fill="#C2B8F3" fillOpacity=".5" />
      <path
        d="m350 171 26 14m-26 2 56 30m-56-11 41 22"
        stroke="#7563BD"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="m467 185 12 7v14l-12-7z" fill="#F9F6FF" />
      <ellipse cx="358" cy="331" rx="8" ry="5" fill="#8A7ED0" />
    </svg>
  );
}
