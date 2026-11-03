"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Braces,
  CircuitBoard,
  Code2,
  Database,
  Network,
  Server,
  Smartphone,
} from "lucide-react";
import { getTechnologyIcon } from "@/lib/technology-icons";

export function TechnologyIcon({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const key = name.toLowerCase();
  const Fallback = /sql|database|orm|firebase|firestore/.test(key)
    ? Database
    : /raspberry|iot/.test(key)
      ? CircuitBoard
      : /mobile|native|expo|flutter/.test(key)
        ? Smartphone
        : /api|rtc|media|cloud/.test(key)
          ? Network
          : /server|node|queue|mq|redis|docker|deploy/.test(key)
            ? Server
            : /react|css|html|ui/.test(key)
              ? Braces
              : Code2;

  return (
    <span className="tech-icon" aria-hidden="true">
      {failed ? (
        <Fallback size={16} strokeWidth={1.6} />
      ) : (
        <Image
          src={getTechnologyIcon(name)}
          alt=""
          width={16}
          height={16}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
