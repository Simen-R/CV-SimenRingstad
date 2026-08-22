import type { Metadata } from "next";
import { ferdigheter } from "@/data/ferdigheter";
import { FadeUp } from "@/components/FadeUp";
import { SkillGroup } from "@/components/SkillGroup";

export const metadata: Metadata = {
  title: "Ferdigheter",
  description: "Teknologier og verktøy jeg jobber med.",
};

export default function Ferdigheter() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Ferdigheter
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Nivåene sier hvor selvstendig jeg jobber med hver ting – ikke hvor mange
        år jeg har på papiret.
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
