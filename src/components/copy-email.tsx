"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteMetadata } from "@/lib/data";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(siteMetadata.email);
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("failed");
    }
  }

  return (
    <span className="copy-email">
      <button
        className="icon-button"
        type="button"
        onClick={copy}
        aria-label={
          status === "copied" ? "Email address copied" : "Copy email address"
        }
        title="Copy email address"
      >
        {status === "copied" ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
      </button>
      <span className="copy-feedback" role="status">
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Select the address to copy it, or use the email link."
            : ""}
      </span>
    </span>
  );
}
