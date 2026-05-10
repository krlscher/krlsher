import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";
import { ImageZoom } from "./ImageZoom";
import { GalleryRoot } from "./GalleryRoot";
import { getCopy, localized } from "@/lib/i18n";
import { instagramUrl } from "@/lib/contact";
import type { CaseRecord, Lang } from "@/content/types";

type Props = {
  record: CaseRecord;
  reversed?: boolean;
  lang: Lang;
};

export function CaseCard({ record, reversed, lang }: Props) {
  const copy = getCopy(lang);
  const heroAlt = localized(record.heroImageAlt, lang);

  return (
    <Reveal className={"case-card" + (reversed ? " case-card--reversed" : "")}>
      <GalleryRoot id={`case-${record.slug}`}>
        <div className="case-card__media-col">
          <div className="case-card__media">
            <ImageZoom
              src={record.heroImage}
              alt={heroAlt}
              sizes="(max-width: 1023px) 100vw, 60vw"
            />
          </div>
          {record.stages.length > 0 && (
            <div
              className="case-card__stages"
              style={{ gridTemplateColumns: `repeat(${record.stages.length}, 1fr)` }}
            >
              {record.stages.map((stage) => (
                <div key={stage.src} className="case-card__stage">
                  <ImageZoom
                    src={stage.src}
                    alt={localized(stage.alt, lang)}
                    sizes="(max-width: 1023px) 25vw, 15vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </GalleryRoot>
      <div className="case-card__body">
        <div className="t-eyebrow case-card__tag">{localized(record.tag, lang)}</div>
        <h3 className="t-h3 case-card__title">{localized(record.title, lang)}</h3>
        <div className="case-card__blocks">
          <div>
            <div className="case-card__block-label">{copy.cases.blockLabels.patient}</div>
            <p className="case-card__block-text">{localized(record.patient, lang)}</p>
          </div>
          <div>
            <div className="case-card__block-label">{copy.cases.blockLabels.decision}</div>
            <p className="case-card__block-text">{localized(record.decision, lang)}</p>
          </div>
          <div>
            <div className="case-card__block-label">{copy.cases.blockLabels.outcome}</div>
            <p className="case-card__block-text">{localized(record.outcome, lang)}</p>
          </div>
        </div>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--link"
          data-cta-location="case"
        >
          {copy.cases.viewFull} <Arrow />
        </a>
      </div>
    </Reveal>
  );
}
