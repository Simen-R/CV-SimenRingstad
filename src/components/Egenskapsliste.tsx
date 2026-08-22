import type { Egenskap } from "@/types/cv";

/**
 * Egenskapene som én gruppert liste, ikke som kort: ordet til venstre og
 * eksempelet til høyre, med hårstrek mellom radene. Formen tåler at det blir
 * flere eller færre egenskaper, og den holder ordet og belegget på samme linje
 * for øyet, som er hele poenget med lista.
 */
export function Egenskapsliste({ egenskaper }: { egenskaper: Egenskap[] }) {
  return (
    <dl className="flate rounded-lg">
      {egenskaper.map((egenskap) => (
        <div
          key={egenskap.navn}
          className="grid gap-1.5 border-t border-border/60 p-6 first:border-t-0 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8 sm:py-5"
        >
          <dt className="font-medium">
            <span aria-hidden className="mr-2 text-accent">
              ·
            </span>
            {egenskap.navn}
          </dt>
          <dd className="text-pretty leading-relaxed text-muted-foreground">
            {egenskap.belegg}
          </dd>
        </div>
      ))}
    </dl>
  );
}
