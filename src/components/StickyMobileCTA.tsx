import { Arrow } from "./Arrow";
import { getCopy } from "@/lib/i18n";
import { telegramUrl } from "@/lib/contact";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function StickyMobileCTA({ lang }: Props) {
  const h = getCopy(lang).hero;

  return (
    <div className="sticky-cta">
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--primary sticky-cta__btn"
        data-cta-location="sticky"
      >
        {h.cta}
        <Arrow />
      </a>
    </div>
  );
}
