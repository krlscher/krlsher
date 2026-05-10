"use client";

import { useState } from "react";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";
import { imageSize } from "@/lib/imageSize";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  fadeIn?: boolean;
  caption?: string;
};

export function ImageZoom({ src, alt, sizes, priority, fadeIn = true, caption }: Props) {
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const { w, h } = imageSize(src);

  return (
    <Item original={src} thumbnail={src} width={w} height={h} alt={alt} caption={caption ?? alt}>
      {({ ref, open }) => (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={"image-zoom" + (fadeIn ? " image-zoom--fade" : "")}
          onClick={open}
          aria-label={alt}
        >
          <span className={"image-skeleton" + (thumbLoaded ? " is-loaded" : "")} aria-hidden />
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            style={{ objectFit: "cover" }}
            onLoad={() => setThumbLoaded(true)}
          />
        </button>
      )}
    </Item>
  );
}
