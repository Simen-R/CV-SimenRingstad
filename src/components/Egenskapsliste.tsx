import type { Egenskap } from "@/types/cv";

/**
 * Egenskapene som én gruppert liste, ikke som kort: ordet til venstre og
 * eksempelet til høyre, med hårstrek mellom radene. Formen tåler at det blir
 * flere eller færre egenskaper, og den holder ordet og belegget på samme linje
 * for øyet, som er hele poenget med lista.
 *
 * Egenskaper med `gjemt` står bak «Se flere» nederst i samme flate.
 */
export function Egenskapsliste({ egenskaper }: { egenskaper: Egenskap[] }) {
  const synlige = egenskaper.filter((egenskap) => !egenskap.gjemt);
  const gjemte = egenskaper.filter((egenskap) => egenskap.gjemt);

  return (
    <div className="flate rounded-lg">
      <dl>
        {synlige.map((egenskap) => (
          <EgenskapRad key={egenskap.navn} egenskap={egenskap} />
        ))}
      </dl>

      {/*
        <details> gir knappen gratis, som i footeren: nettleseren tar seg av
        rolle, aria-expanded og tastaturet. Knappen står over de gjemte
        radene, så den blir stående der den var når lista åpnes.
      */}
      {gjemte.length > 0 && (
        <details className="group border-t border-border/60">
          <summary className="flex cursor-pointer list-none items-center gap-2 px-6 py-4 text-sm font-medium text-accent transition-opacity hover:opacity-80 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Se flere ({gjemte.length})</span>
            <span className="hidden group-open:inline">Vis færre</span>
            <svg
              aria-hidden
              viewBox="0 0 12 12"
              className="h-3 w-3 transition-transform duration-500 ease-mjuk group-open:rotate-180 motion-reduce:transition-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 4.5 6 7.5 9 4.5" />
            </svg>
          </summary>
          <dl className="border-t border-border/60">
            {gjemte.map((egenskap) => (
              <EgenskapRad key={egenskap.navn} egenskap={egenskap} />
            ))}
          </dl>
        </details>
      )}
    </div>
  );
}

function EgenskapRad({ egenskap }: { egenskap: Egenskap }) {
  return (
    <div className="grid gap-1.5 border-t border-border/60 p-6 first:border-t-0 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8 sm:py-5">
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
  );
}
