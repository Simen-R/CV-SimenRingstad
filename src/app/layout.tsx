import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profil } from "@/data/profil";

export const metadata: Metadata = {
  title: {
    default: `${profil.navn} – ${profil.tittel}`,
    template: `%s · ${profil.navn}`,
  },
  description: profil.kortIngress,
  openGraph: {
    title: `${profil.navn} – ${profil.tittel}`,
    description: profil.kortIngress,
    locale: "nb_NO",
    type: "profile",
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
      </body>
    </html>
  );
}
