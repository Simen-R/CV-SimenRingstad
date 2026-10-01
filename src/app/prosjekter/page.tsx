import type { Metadata } from "next";
import { prosjekter } from "@/data/prosjekter";
import { FadeUp } from "@/components/FadeUp";
import {
  ProsjektBilde,
  ProsjektLenker,
  Teknologier,
} from "@/components/ProsjektKort";
import { SideTopp } from "@/components/SideTopp";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Prosjekter",
  description: "Prosjekter jeg har bygget, med teknologi og rolle.",
};

export default function Prosjekter() {
  return (
    <div className="container py-16">
      <SideTopp
        tittel="Prosjekter"
        ingress="Hvert prosjekt her er noe jeg har bygget selv. Under står det kort hva problemet var og hvordan jeg løste det."
      />

      <div className="mt-12 space-y-6">
        {prosjekter.map((prosjekt, indeks) => (
          <FadeUp key={prosjekt.id} delay={indeks * 80}>
            <article
              className={cn(
                "flate rounded-lg p-6 sm:p-8",
                // Fra lg står bildet i en egen kolonne til høyre, der teksten
                // ellers ville latt halve kortet stå tomt.
                prosjekt.bildeUrl &&
                  "lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-10",
              )}
            >
              <ProsjektBilde
                prosjekt={prosjekt}
                sizes="(min-width: 1024px) 352px, 100vw"
                className="mb-6 rounded-md border border-border/60 lg:order-last lg:mb-0"
              />

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-2xl font-semibold">{prosjekt.navn}</h2>
                  <p className="text-sm text-muted-foreground">{prosjekt.aar}</p>
                </div>
                <p className="mt-1 text-muted-foreground">{prosjekt.rolle}</p>
                <p className="mt-4 max-w-2xl leading-relaxed">
                  {prosjekt.beskrivelse}
                </p>

                <Teknologier prosjekt={prosjekt} className="mt-5" />
                <ProsjektLenker prosjekt={prosjekt} className="mt-6" />
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
