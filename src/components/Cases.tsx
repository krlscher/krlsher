import { CaseCard } from "./CaseCard";
import { EyebrowRule } from "./EyebrowRule";
import { Reveal } from "./Reveal";
import { Arrow } from "./Arrow";
import { cases } from "@/content/cases";
import { getCopy } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Cases({ lang }: Props) {
  const c = getCopy(lang).cases;

  return (
    <section className="section section--cases" id="cases">
      <div className="container">
        <Reveal className="section__header">
          <EyebrowRule>{c.eyebrow}</EyebrowRule>
          <h2 className="t-h2">{c.h2}</h2>
        </Reveal>
        {cases
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((item, i) => (
            <CaseCard key={item.slug} record={item} reversed={i % 2 === 1} lang={lang} />
          ))}
        <div className="cases__all-link">
          <a href="#cases" className="btn btn--link">
            {c.all} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
