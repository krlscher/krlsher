import { copyUA } from "@/content/copy.ua";
import { copyEN } from "@/content/copy.en";
import type { Copy, Lang, LocalizedString } from "@/content/types";

export const langs: Lang[] = ["ua", "en"];

export function getCopy(lang: Lang): Copy {
  return lang === "en" ? copyEN : copyUA;
}

export function localized<T extends LocalizedString>(value: T, lang: Lang): string {
  return value[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "ua" ? "en" : "ua";
}

export function langPath(lang: Lang, suffix = ""): string {
  const cleanSuffix = suffix.replace(/^\//, "");
  if (lang === "ua") return cleanSuffix ? `/${cleanSuffix}` : "/";
  return cleanSuffix ? `/en/${cleanSuffix}` : "/en";
}
