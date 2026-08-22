import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profil } from "@/data/profil";

export const metadata: Metadata = {
  // Delingsbildet og andre URL-felt trenger et absolutt utgangspunkt. Uten
  // dette faller Next tilbake på deployment-URL-en fra Vercel, som endrer seg
  // for hver preview.
  metadataBase: new URL("https://cv-simen-ringstad.vercel.app"),
  title: {
    default: `${profil.navn} · ${profil.tittel}`,
    template: `%s · ${profil.navn}`,
  },
  description: profil.kortIngress,
  openGraph: {
    title: `${profil.navn} · ${profil.tittel}`,
    description: profil.kortIngress,
    locale: "nb_NO",
    type: "profile",
    url: "/",
    siteName: profil.navn,
  },
  // X og LinkedIn henter bildet fra Open Graph, men trenger denne for å vise
  // det stort i stedet for som en liten firkant.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
