import { Nav } from "./Nav";
import { HtmlLang } from "./HtmlLang";
import { Hero } from "./Hero";
import { About } from "./About";
import { Approach } from "./Approach";
import { Stats } from "./Stats";
import { Cases } from "./Cases";
import { Process } from "./Process";
import { FAQ } from "./FAQ";
import { Practical } from "./Practical";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import type { Lang } from "@/content/types";

export function Landing({ lang }: { lang: Lang }) {
  return (
    <>
      <HtmlLang lang={lang === "en" ? "en" : "uk"} />
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Approach lang={lang} />
        <Stats lang={lang} />
        <Cases lang={lang} />
        <Process lang={lang} />
        <FAQ lang={lang} />
        <Practical lang={lang} />
        <FinalCTA lang={lang} />
      </main>
      <Footer lang={lang} />
      <StickyMobileCTA lang={lang} />
    </>
  );
}
