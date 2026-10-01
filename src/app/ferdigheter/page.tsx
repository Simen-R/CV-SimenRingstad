import type { Metadata } from "next";
import { egenskaper } from "@/data/egenskaper";
import { ferdigheter } from "@/data/ferdigheter";
import { FadeUp } from "@/components/FadeUp";
import { Egenskapsliste } from "@/components/Egenskapsliste";
import { SideTopp } from "@/components/SideTopp";
import { SkillGroup } from "@/components/SkillGroup";

export const metadata: Metadata = {
  title: "Ferdigheter",
  description:
    "Egenskapene mine med eksempelet bak hver av dem, og teknologiene og verktøyene jeg jobber med.",
};

export default function Ferdigheter() {
  return (
    <div className="container py-16">
      <SideTopp
        tittel="Ferdigheter"
        ingress="Egenskapene står med eksempelet bak seg. Nivåene sier hvor selvstendig jeg jobber, og står bare der jeg kan vise det. «Bygget med» er teknologiene prosjektene mine er laget i."
      />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-stor sm:text-3xl">
          Slik jobber jeg
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
          Sju ord jeg kan stå inne for, og det konkrete som ligger bak hvert av
          dem.
        </p>
        <FadeUp className="mt-8">
          <Egenskapsliste egenskaper={egenskaper} />
        </FadeUp>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-stor sm:text-3xl">
          Teknologier og verktøy
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ferdigheter.map((gruppe, indeks) => (
            <FadeUp key={gruppe.navn} delay={indeks * 80} className="h-full">
              <SkillGroup gruppe={gruppe} />
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
