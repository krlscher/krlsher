import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";
import { getCopy } from "@/lib/i18n";
import { telegramUrl } from "@/lib/contact";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function FinalCTA({ lang }: Props) {
  const c = getCopy(lang).cta;

  return (
    <section className="section section--cta section--alt">
      <div className="container container--wide">
        <div className="section__inner">
          <Reveal className="cta-stack">
            <div className="t-eyebrow">{c.eyebrow}</div>
            <hr className="eyebrow-rule" style={{ margin: 0 }} />
            <h2 className="t-h2">{c.h2}</h2>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
              data-cta-location="final"
            >
              {c.btn}
              <Arrow />
            </a>
            <div className="t-caption">{c.caption}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
