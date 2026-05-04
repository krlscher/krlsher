import { EyebrowRule } from "./EyebrowRule";
import { Reveal } from "./Reveal";
import { getCopy } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function About({ lang }: Props) {
  const a = getCopy(lang).about;

  return (
    <section className="section section--about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__lead">
            <Reveal>
              <EyebrowRule>{a.eyebrow}</EyebrowRule>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-h2 about__name" style={{ marginTop: "var(--space-5)" }}>
                {a.name}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-caption about__role">{a.role}</p>
            </Reveal>
          </div>
          <div className="about__body">
            {a.paragraphs.map((p, i) => (
              <Reveal key={i} delay={160 + i * 60}>
                <p className="about__paragraph">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
