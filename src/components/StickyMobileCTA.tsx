"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";
import { getCopy } from "@/lib/i18n";
import { telegramUrl } from "@/lib/contact";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function StickyMobileCTA({ lang }: Props) {
  const h = getCopy(lang).hero;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const footer = document.querySelector("footer.footer");
    if (!heroCta || !footer) return;

    let heroInView = true;
    let footerInView = false;
    const update = () => setVisible(!heroInView && !footerInView);

    const heroObs = new IntersectionObserver(([e]) => {
      heroInView = e.isIntersecting;
      update();
    });
    const footerObs = new IntersectionObserver(([e]) => {
      footerInView = e.isIntersecting;
      update();
    });
    heroObs.observe(heroCta);
    footerObs.observe(footer);

    return () => {
      heroObs.disconnect();
      footerObs.disconnect();
    };
  }, []);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--primary sticky-cta__btn"
        data-cta-location="sticky"
        tabIndex={visible ? 0 : -1}
      >
        {h.cta}
        <Arrow />
      </a>
    </div>
  );
}
