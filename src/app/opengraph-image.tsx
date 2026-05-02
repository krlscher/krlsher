import { ImageResponse } from "next/og";

export const alt = "dr.Scherbakov — Implant & Aesthetic Dentist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAF7",
          color: "#1A1A1A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#5C5D3E",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>IMPLANTOLOGY · PROSTHODONTICS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: -2,
              maxWidth: 880,
            }}
          >
            Dentistry as a system, not a single tooth.
          </div>
          <div
            style={{
              fontSize: 22,
              fontStyle: "italic",
              color: "#6B6B66",
              maxWidth: 720,
            }}
          >
            Treatment planned ten to twenty years ahead — through diagnostics, not improvisation.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#9A9A93",
            fontSize: 16,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>dr.Scherbakov</span>
          <span>Dnipro · By appointment</span>
        </div>
      </div>
    ),
    size
  );
}
