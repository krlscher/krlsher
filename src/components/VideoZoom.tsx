"use client";

import { useState } from "react";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";

type Props = {
  src: string;
  poster: string;
  alt: string;
  sizes?: string;
  caption?: string;
};

// PhotoSwipe needs width/height up front to size the zoom canvas. Videos
// scale to fit, so we use a generic 16:9 canvas rather than poster dims.
const VIDEO_CANVAS = { w: 1920, h: 1080 };

export function VideoZoom({ src, poster, alt, sizes, caption }: Props) {
  const [thumbLoaded, setThumbLoaded] = useState(false);

  return (
    <Item
      content={
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="auto"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      }
      width={VIDEO_CANVAS.w}
      height={VIDEO_CANVAS.h}
      thumbnail={poster}
      alt={alt}
      caption={caption ?? alt}
    >
      {({ ref, open }) => (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className="image-zoom video-zoom"
          onClick={open}
          aria-label={alt}
        >
          <span className={"image-skeleton" + (thumbLoaded ? " is-loaded" : "")} aria-hidden />
          <Image
            src={poster}
            alt={alt}
            fill
            sizes={sizes}
            style={{ objectFit: "cover" }}
            onLoad={() => setThumbLoaded(true)}
          />
          <span className="video-zoom__play" aria-hidden>
            ▶
          </span>
        </button>
      )}
    </Item>
  );
}
