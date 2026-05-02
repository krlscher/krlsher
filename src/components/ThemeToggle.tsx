"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "auto";

const MODES: { value: Mode; labelUA: string; labelEN: string }[] = [
  { value: "light", labelUA: "Світла тема", labelEN: "Light theme" },
  { value: "dark", labelUA: "Темна тема", labelEN: "Dark theme" },
  { value: "auto", labelUA: "Авто (за системою)", labelEN: "Auto (follow system)" },
];

function readStoredMode(): Mode {
  if (typeof window === "undefined") return "auto";
  const v = window.localStorage.getItem("theme");
  return v === "light" || v === "dark" || v === "auto" ? v : "auto";
}

function resolve(mode: Mode): "light" | "dark" {
  if (mode !== "auto") return mode;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

type Props = { className?: string; lang?: "ua" | "en" };

export function ThemeToggle({ className = "theme-toggle", lang = "ua" }: Props) {
  const [mode, setMode] = useState<Mode>("auto");

  useEffect(() => {
    setMode(readStoredMode());
  }, []);

  function pick(next: Mode) {
    setMode(next);
    window.localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = resolve(next);
  }

  return (
    <div className={className} role="group" aria-label={lang === "en" ? "Theme" : "Тема"}>
      {MODES.map((m) => {
        const label = lang === "en" ? m.labelEN : m.labelUA;
        return (
          <button
            key={m.value}
            type="button"
            className={mode === m.value ? "is-active" : ""}
            aria-pressed={mode === m.value}
            aria-label={label}
            title={label}
            onClick={() => pick(m.value)}
          >
            <ThemeIcon mode={m.value} />
          </button>
        );
      })}
    </div>
  );
}

function ThemeIcon({ mode }: { mode: Mode }) {
  if (mode === "light") {
    // Sun
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1" />
        <path
          d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (mode === "dark") {
    // Moon
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M13 9.5A5 5 0 0 1 6.5 3a.5.5 0 0 0-.7-.5A6 6 0 1 0 13.5 10.2a.5.5 0 0 0-.5-.7Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  // Auto — half-disc
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1" />
      <path d="M8 2.5a5.5 5.5 0 0 1 0 11V2.5Z" fill="currentColor" />
    </svg>
  );
}
