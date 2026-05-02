import { Reveal } from "./Reveal";
import { getCopy } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Stats({ lang }: Props) {
  const stats = getCopy(lang).stats;

  return (
    <section
      className="section section--bordered section--stats"
      style={{ paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)" }}
    >
      <div className="container">
        <div className="section__inner">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} className="stat" delay={i * 80}>
                <span className="t-stat-num stat__num">{s.num}</span>
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
