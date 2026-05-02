import { EyebrowRule } from "./EyebrowRule";
import { Reveal } from "./Reveal";
import { getCopy } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Process({ lang }: Props) {
  const p = getCopy(lang).process;

  return (
    <section className="section section--process" id="process">
      <div className="container">
        <Reveal className="section__header">
          <EyebrowRule>{p.eyebrow}</EyebrowRule>
          <h2 className="t-h2">{p.h2}</h2>
        </Reveal>
        <div className="timeline">
          <div className="timeline__line" aria-hidden="true"></div>
          <div className="timeline__steps">
            {p.steps.map((s, i) => (
              <Reveal key={s.n} className="timeline-step" delay={i * 60}>
                <span className="timeline-step__dot"></span>
                <div className="timeline-step__num">{s.n}</div>
                <h4 className="timeline-step__title">{s.title}</h4>
                <p className="timeline-step__desc">{s.desc}</p>
                <div className="timeline-step__time">{s.time}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
