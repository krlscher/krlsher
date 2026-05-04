"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  fadeIn?: boolean;
};

export function ImageZoom({ src, alt, sizes, priority, fadeIn = true }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

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
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
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
