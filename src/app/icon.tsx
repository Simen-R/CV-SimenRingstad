import { ImageResponse } from "next/og";
import { Monogram } from "@/lib/monogram";

// Fanikonet. Next lager PNG-en på build og setter <link rel="icon"> i head.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  // 64 px i stedet for 32: nettleseren skalerer ned selv, og da holder ikonet
  // seg skarpt på retina og i bokmerkelista.
  return new ImageResponse(<Monogram storrelse={size.width} avrunding={0.22} />, {
    ...size,
  });
}
