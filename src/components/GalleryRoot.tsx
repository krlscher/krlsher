"use client";

import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/style.css";

type Props = { children: React.ReactNode; id?: string };

export function GalleryRoot({ children, id }: Props) {
  return (
    <Gallery
      id={id}
      withCaption
      options={{
        bgOpacity: 1,
        showHideAnimationType: "zoom",
        wheelToZoom: true,
        padding: { top: 24, bottom: 24, left: 16, right: 16 },
      }}
    >
      {children}
    </Gallery>
  );
}
