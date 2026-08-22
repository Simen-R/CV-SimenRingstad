import { ImageResponse } from "next/og";
import { Monogram } from "@/lib/monogram";

// Hjemskjerm-ikonet på iOS. iOS runder av hjørnene selv, så flata går helt ut
// til kanten og monogrammet står uten avrunding.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<Monogram storrelse={size.width} />, { ...size });
}
