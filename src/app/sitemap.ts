import type { MetadataRoute } from "next";
import { SIDE_URL } from "@/lib/side";

// Siden er liten, så lista skrives for hånd. Får den en ny side, legges den
// til her også.
const sider = ["/", "/prosjekter", "/ferdigheter", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return sider.map((sti) => ({
    url: new URL(sti, SIDE_URL).toString(),
    lastModified: new Date(),
  }));
}
