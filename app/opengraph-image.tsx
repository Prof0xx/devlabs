import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 80,
            fontWeight: 800,
            fontFamily: "sans-serif",
            lineHeight: 1.1,
            textShadow: "0 6px 24px rgba(0,0,0,0.25)",
          }}
        >
          Dev Labs
        </div>
        <div
          style={{
            marginTop: 16,
            color: "#e6f6ff",
            fontSize: 36,
            fontFamily: "sans-serif",
          }}
        >
          Building innovative technology solutions
        </div>
      </div>
    ),
    { ...size }
  );
}


