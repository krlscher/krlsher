import Image from "next/image";
import { Arrow } from "./Arrow";
import { getCopy } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/contact";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Hero({ lang }: Props) {
  const h = getCopy(lang).hero;

  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__text">
          <div className="hero__text-inner">
            <div className="hero-stagger s1">
              <div className="t-eyebrow hero__eyebrow">{h.eyebrow}</div>
            </div>
            <div className="hero-stagger s1">
              <hr className="eyebrow-rule" />
            </div>
            <h1 className="t-h1 hero__headline hero-stagger s2" style={{ whiteSpace: "pre-line" }}>
              {h.headline}
            </h1>
            <p className="t-lead hero__lead hero-stagger s3">{h.lead}</p>
            <div className="hero__cta hero-stagger s4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                data-cta-location="hero"
              >
                {h.cta}
                <Arrow />
              </a>
              <div className="t-caption hero__cta-caption">{h.caption}</div>
            </div>
            <div
              className="t-eyebrow hero__footer-line hero-stagger s5"
              style={{ color: "var(--text-soft)" }}
            >
              {h.footerLine}
            </div>
          </div>
        </div>
        <div className="hero__media hero-image-fade">
          <Image
            src="/images/hero/portrait.jpg"
            alt={h.portraitAlt}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
      </div>
    </section>
  );
}
