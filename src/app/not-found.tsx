import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";

export const metadata: Metadata = {
  title: "Fant ikke siden",
};

export default function IkkeFunnet() {
  return (
    <div className="container py-16">
      <p className="pille inn mb-6">404</p>
      <SideTopp
        tittel="Fant ikke siden"
        ingress="Lenken kan være gammel, eller adressen har fått en skrivefeil. Resten av siden ligger der den skal."
      />

      <div className="inn mt-10 flex flex-wrap gap-3 [animation-delay:120ms]">
        <Link href="/" className="knapp-primar">
          Til forsiden
        </Link>
        <Link href="/prosjekter" className="knapp-glass">
          Se prosjekter
        </Link>
      </div>
    </div>
  );
}
