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
      <h1 className="text-4xl font-semibold tracking-stor sm:text-5xl">
        Prosjekter
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
        Hvert prosjekt her er noe jeg har bygget selv – med en kort forklaring
        på hva problemet var og hvordan jeg løste det.
      </p>

      <div className="mt-12 space-y-6">
        {prosjekter.map((prosjekt, indeks) => (
          <FadeUp key={prosjekt.id} delay={indeks * 80}>
            <article className="flate rounded-lg p-6 sm:p-8">
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
                  <li key={teknologi} className="pille">
                    {teknologi}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-sm">
                {prosjekt.demoUrl && (
                  <a
                    href={prosjekt.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Se live →
                  </a>
                )}
                {prosjekt.kodeUrl && (
                  <a
                    href={prosjekt.kodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Se koden
                  </a>
                )}
                {prosjekt.demoNotat && (
                  <span className="text-muted-foreground">
                    {prosjekt.demoNotat}
                  </span>
                )}
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
