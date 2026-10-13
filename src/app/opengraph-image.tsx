import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { profil } from "@/data/profil";
import { SIDE_URL } from "@/lib/side";

// Kortet som vises når URL-en limes inn i Slack, LinkedIn eller iMessage.
export const alt = `${profil.navn}, ${profil.tittel}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Sjarken er logoen, for meg og for foretaket. Den er hvit strek på
// gjennomsiktig bunn, så den legger seg rett på den marineblå flata.
const sjark = `data:image/png;base64,${await readFile(
  path.join(process.cwd(), "public/bilder/sjark.png"),
  "base64",
)}`;

// Tegningen er 1400 × 854. Bredden bestemmer høyden.
const sjarkBredde = 640;
const sjarkHoyde = Math.round((sjarkBredde * 854) / 1400);

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
          position: "relative",
          color: "#fafafa",
          // Marineblå med en lysere blåtone som glød nede til høyre, samme bunn
          // som forsiden. Sjarken ligger i gløden, så den løfter seg fra flata.
          backgroundImage: "linear-gradient(130deg, #0d1321 45%, #24344a 100%)",
        }}
      >
        {/* Navnet står øverst, så sjarken får hele nedre høyre hjørne. */}
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
          <div style={{ color: "#b3b3bc" }}>{new URL(SIDE_URL).host}</div>
        </div>

        {/* Bølgelinja går ut i høyrekanten, som om sjarken seiler inn i bildet. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sjark}
          width={sjarkBredde}
          height={sjarkHoyde}
          alt=""
          style={{
            position: "absolute",
            right: -40,
            bottom: 0,
            opacity: 0.85,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
