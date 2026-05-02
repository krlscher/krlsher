import type { Metadata } from "next";
import { HtmlLang } from "@/components/HtmlLang";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: SITE.title.en, template: "%s · dr.Scherbakov" },
  description: SITE.description.en,
  alternates: {
    canonical: "/en",
    languages: { uk: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: SITE.title.en,
    description: SITE.description.en,
    locale: "en_US",
    url: `${SITE.url}/en`,
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
      {children}
    </>
  );
}
