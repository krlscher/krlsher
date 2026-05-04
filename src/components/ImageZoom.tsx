"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type ZoomItem = { src: string; alt: string };

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  fadeIn?: boolean;
  /** Full set this thumbnail belongs to. When omitted, the lightbox shows just [{src, alt}]. */
  set?: ZoomItem[];
  /** This thumbnail's index inside `set`. Required when `set` is provided. */
  setIndex?: number;
};

const SWIPE_THRESHOLD = 50;

export function ImageZoom({ src, alt, sizes, priority, fadeIn = true, set, setIndex = 0 }: Props) {
  const items: ZoomItem[] = set && set.length > 0 ? set : [{ src, alt }];
  const initialIndex = set ? setIndex : 0;
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % items.length),
    [items.length],
  );
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (!open) return;
    setCurrent(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight" && items.length > 1) next();
      else if (e.key === "ArrowLeft" && items.length > 1) prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev, items.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || items.length < 2) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx < 0) next();
    else prev();
  };

  const item = items[current];
  const showNav = items.length > 1;

  return (
    <>
      <button
        type="button"
        className={"image-zoom" + (fadeIn ? " image-zoom--fade" : "")}
        onClick={() => setOpen(true)}
        aria-label={alt}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      </button>
      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
          >
            ×
          </button>
          {showNav && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                ›
              </button>
              <div className="lightbox__counter" aria-live="polite">
                {current + 1} / {items.length}
              </div>
            </>
          )}
          <div key={item.src} className="lightbox__inner">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="92vw"
              className="lightbox__img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
