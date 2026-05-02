"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { EyebrowRule } from "./EyebrowRule";
import { Reveal } from "./Reveal";
import { faqItems } from "@/content/faq";
import { getCopy, localized } from "@/lib/i18n";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.scrollHeight);
  }, [a]);

  return (
    <div className={"accordion__item" + (isOpen ? " is-open" : "")}>
      <button className="accordion__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <span className="accordion__icon" aria-hidden="true"></span>
      </button>
      <div className="accordion__content" style={{ height: isOpen ? height : 0 }}>
        <div ref={ref}>
          <p className="accordion__answer">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ lang }: Props) {
  const f = getCopy(lang).faq;
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--faq" id="faq">
      <div className="container container--narrow">
        <Reveal className="section__header">
          <EyebrowRule>{f.eyebrow}</EyebrowRule>
          <h2 className="t-h2" style={{ maxWidth: 600 }}>
            {f.h2}
          </h2>
        </Reveal>
        <div className="accordion">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.id}
              q={localized(item.question, lang)}
              a={localized(item.answer, lang)}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
