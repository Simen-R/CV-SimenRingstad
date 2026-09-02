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
          color: "#fafafa",
          // Marineblå med en lysere blåtone som glød nede til høyre, samme bunn
          // som forsiden. Gløden ligger med vilje motsatt av monogrammet: i
          // samme hjørne ville den spist kanten på den hvite ikonflata.
          backgroundImage: "linear-gradient(130deg, #0d1321 45%, #24344a 100%)",
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
              WebkitTextStroke: "1.4px #fafafa",
            }}
          >
            {profil.navn}
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 32,
              letterSpacing: -0.6,
              color: "#b3b3bc",
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
              backgroundColor: "#ffffff",
            }}
          />
          <div style={{ color: "#b3b3bc" }}>cv-simen-ringstad.vercel.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
