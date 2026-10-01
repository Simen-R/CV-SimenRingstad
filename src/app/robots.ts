import type { MetadataRoute } from "next";
import { SIDE_URL } from "@/lib/side";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", SIDE_URL).toString(),
  };
}
