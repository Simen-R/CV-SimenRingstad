import type { Metadata } from "next";
import { prosjekter } from "@/data/prosjekter";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Prosjekter",
  description: "Prosjekter jeg har bygget, med teknologi og rolle.",
};

export default function Prosjekter() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Prosjekter
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Hvert prosjekt her er noe jeg har bygget selv – med en kort forklaring
        på hva problemet var og hvordan jeg løste det.
      </p>

      <div className="mt-12 space-y-12">
        {prosjekter.map((prosjekt, indeks) => (
          <FadeUp key={prosjekt.id} delay={indeks * 80}>
            <article className="border-t border-border pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-2xl font-semibold">{prosjekt.navn}</h2>
                <p className="text-sm text-muted-foreground">{prosjekt.aar}</p>
              </div>
              <p className="mt-1 text-muted-foreground">{prosjekt.rolle}</p>
              <p className="mt-4 max-w-2xl leading-relaxed">
                {prosjekt.beskrivelse}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {prosjekt.teknologier.map((teknologi) => (
                  <li
                    key={teknologi}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {teknologi}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-5 text-sm">
                {prosjekt.demoUrl && (
                  <a
                    href={prosjekt.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Se live →
                  </a>
                )}
                {prosjekt.kodeUrl && (
                  <a
                    href={prosjekt.kodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Se koden
                  </a>
                )}
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
