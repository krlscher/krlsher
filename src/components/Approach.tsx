import { EyebrowRule } from "./EyebrowRule";
import { Reveal } from "./Reveal";
import { ImageZoom } from "./ImageZoom";
import { getCopy } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Approach({ lang }: Props) {
  const a = getCopy(lang).approach;

  return (
    <section className="section section--alt section--approach" id="approach">
      <div className="container">
        <div className="approach__grid">
          <Reveal className="approach__media">
            <ImageZoom
              src="/images/approach/cbct.jpg"
              alt={a.mediaAlt}
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </Reveal>
          <div>
            <Reveal>
              <EyebrowRule>{a.eyebrow}</EyebrowRule>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="t-h2"
                style={{ marginTop: "var(--space-5)", maxWidth: 520, whiteSpace: "pre-line" }}
              >
                {a.h2}
              </h2>
            </Reveal>
            <div className="approach__items">
              {a.items.map((it, i) => (
                <Reveal key={it.n} className="approach__item" delay={120 + i * 80}>
                  <div className="approach__num">{it.n}</div>
                  <div>
                    <h3 className="approach__item-title">{it.title}</h3>
                    <p className="approach__item-desc">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
