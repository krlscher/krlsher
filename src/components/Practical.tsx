import Image from "next/image";
import { Arrow } from "./Arrow";
import { EyebrowRule } from "./EyebrowRule";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { getCopy } from "@/lib/i18n";
import { whatsappUrl, telegramUrl, instagramUrl } from "@/lib/contact";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Practical({ lang }: Props) {
  const p = getCopy(lang).practical;

  return (
    <section className="section section--practical" id="contact">
      <div className="container">
        <div className="practical__grid">
          <div>
            <Reveal>
              <EyebrowRule>{p.eyebrow}</EyebrowRule>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="t-h2" style={{ marginTop: "var(--space-5)" }}>
                {p.h2}
              </h2>
            </Reveal>
            <div className="practical__items">
              {p.blocks.map((b, i) => (
                <Reveal key={b.label} className="practical__item" delay={120 + i * 60}>
                  <div className="practical__item-label">{b.label}</div>
                  <p style={{ whiteSpace: "pre-line" }}>{b.text}</p>
                </Reveal>
              ))}
              <Reveal className="practical__item" delay={300}>
                <div className="practical__item-label">{p.contactLabel}</div>
                <div className="practical__links">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="practical__messenger"
                    data-cta-location="practical"
                  >
                    <span>WhatsApp</span>
                    <Arrow />
                  </a>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="practical__messenger"
                    data-cta-location="practical"
                  >
                    <span>Telegram</span>
                    <Arrow />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="practical__messenger"
                    data-cta-location="practical"
                  >
                    <span>Instagram</span>
                    <Arrow />
                  </a>
                </div>
              </Reveal>
              <Reveal className="practical__item practical__item--form" delay={360}>
                <div className="practical__item-label">{p.formLabel}</div>
                <ContactForm lang={lang} />
              </Reveal>
            </div>
          </div>
          <Reveal className="practical__media">
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/images/practical/studio.jpg"
                alt={p.mediaAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
