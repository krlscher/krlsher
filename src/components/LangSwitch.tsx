"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { langPath, otherLang } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang; className?: string };

function equivalentPath(pathname: string, target: Lang): string {
  // Strip a leading "/en" prefix if present so we can re-derive the suffix.
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
  const suffix = stripped === "" || stripped === "/" ? "" : stripped.slice(1);
  return langPath(target, suffix);
}

export function LangSwitch({ lang, className = "nav__lang" }: Props) {
  const pathname = usePathname() || "/";
  const uaHref = equivalentPath(pathname, "ua");
  const enHref = equivalentPath(pathname, "en");

  return (
    <div className={className} aria-label="Language">
      <Link href={uaHref} className={lang === "ua" ? "is-active" : ""} prefetch={false}>
        UA
      </Link>
      <span>·</span>
      <Link href={enHref} className={lang === "en" ? "is-active" : ""} prefetch={false}>
        EN
      </Link>
    </div>
  );
}

export { otherLang };
