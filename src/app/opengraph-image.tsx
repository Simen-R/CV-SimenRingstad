import { ImageResponse } from "next/og";
import { Monogram } from "@/lib/monogram";
import { profil } from "@/data/profil";

// Kortet som vises når URL-en limes inn i Slack, LinkedIn eller iMessage.
export const alt = `${profil.navn}, ${profil.tittel}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function DelingsBilde() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#ffecd1",
          // Espresso med Stormy Teal som en glød nede til høyre. Gløden ligger
          // med vilje motsatt av monogrammet: med teal i samme hjørne forsvant
          // kanten på ikonflata inn i bakgrunnen.
          backgroundImage: "linear-gradient(130deg, #140b0b 42%, #16343a 100%)",
        }}
      >
        <div style={{ display: "flex", width: 104, height: 104 }}>
          <Monogram storrelse={104} avrunding={0.22} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              letterSpacing: -2.7,
              WebkitTextStroke: "1.4px #ffecd1",
            }}
          >
            {profil.navn}
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 32,
              letterSpacing: -0.6,
              color: "#cebba1",
            }}
          >
            {profil.tittel}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 24 }}>
          <div
            style={{
              width: 10,
              height: 10,
              marginRight: 14,
              borderRadius: 5,
              backgroundColor: "#2095a7",
            }}
          />
          <div style={{ color: "#cebba1" }}>cv-simen-ringstad.vercel.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
