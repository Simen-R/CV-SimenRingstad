import type { Metadata } from "next";
import { ferdigheter } from "@/data/ferdigheter";
import { FadeUp } from "@/components/FadeUp";
import { SkillGroup } from "@/components/SkillGroup";

export const metadata: Metadata = {
  title: "Ferdigheter",
  description: "Egenskaper, teknologier og verktøy jeg jobber med.",
};

export default function Ferdigheter() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold tracking-stor sm:text-5xl">
        Ferdigheter
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
        Nivåene sier hvor selvstendig jeg jobber, og står bare der jeg kan vise
        det. «Bygget med» er teknologiene jeg har levert prosjekter i.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ferdigheter.map((gruppe, indeks) => (
          <FadeUp key={gruppe.navn} delay={indeks * 80} className="h-full">
            <SkillGroup gruppe={gruppe} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
