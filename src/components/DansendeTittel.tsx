"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/*
  Overskriften danser mellom fire fonter, én bokstav om gangen, i en bølge fra
  venstre mot høyre. To ting gjør at det ser elegant ut i stedet for hektisk:

  1. Alle fire variantene av en bokstav ligger i samme rute i et inline-grid.
     Bare hvilefonten har bredde; gjestene står med bredde null og er sentrert
     over ruta. Da beholder tittelen sporingen sin når den ligger stille, og
     ingenting flytter på seg når fonten byttes, uansett hvor mye breiere en
     mono-«i» er enn en SF-«i».
  2. Byttet er en kryssfade med et lite løft og en anelse uskarphet, ikke et
     hardt hopp. Bokstaven bytter ansikt, den blinker ikke.

  Fontene er systemfonter, så det koster ingen nedlasting og ingen FOUT. På
  Apple-utstyr blir det SF Pro, New York, SF Mono og New York kursiv. Windows
  faller ned på Georgia og Consolas, og får den samme dansen.
*/

/**
 * Første variant er hvilefonten: dansen starter og ender alltid der.
 * `skala` retter opp at fontene tegner ulikt stort på samme punktstørrelse,
 * så bokstavene holder samme optiske høyde gjennom hele runden.
 */
const varianter = [
  { klasse: "font-sans", skala: 1 },
  { klasse: "font-serif", skala: 0.97 },
  { klasse: "font-mono", skala: 0.84 },
  { klasse: "font-serif italic", skala: 0.97 },
] as const;

/** Rekkefølgen én bokstav går gjennom: hjemme, tre gjester, hjemme igjen. */
const sekvens = [0, 1, 2, 3, 0];

/** Millisekunder en bokstav blir stående i én font. */
const HOLD = 420;
/** Millisekunder bokstav nummer i venter lenger enn bokstaven foran. */
const FORSKYVNING = 55;
/** Pust etter at siden har fadet inn, før dansen starter. */
const OPPSTART = 620;

type DansendeTittelProps = {
  tekst: string;
  className?: string;
};

function likeTall(a: number[], b: number[]) {
  return a.length === b.length && a.every((verdi, i) => verdi === b[i]);
}

/**
 * H1 der hver bokstav bytter font i en bølge. Kjører én gang når siden lastes,
 * og på nytt når pekeren er innom eller noen trykker på tittelen.
 */
export function DansendeTittel({ tekst, className }: DansendeTittelProps) {
  const tegn = useMemo(() => Array.from(tekst), [tekst]);
  const [aktive, setAktive] = useState<number[]>(() => tegn.map(() => 0));
  const rammeRef = useRef<number | null>(null);
  const kjorerRef = useRef(false);

  const dans = useCallback(() => {
    if (kjorerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    kjorerRef.current = true;
    const start = performance.now();
    const varighet = (tegn.length - 1) * FORSKYVNING + sekvens.length * HOLD;

    const steg = (na: number) => {
      const tid = na - start;

      // Hver bokstav leser av sin egen posisjon i sekvensen, forskjøvet etter
      // hvor langt ut i ordet den står. Det er bølgen.
      const neste = tegn.map((_, i) => {
        const lokal = tid - i * FORSKYVNING;
        if (lokal < 0) return 0;
        const plass = Math.floor(lokal / HOLD);
        return plass < sekvens.length ? sekvens[plass] : 0;
      });

      setAktive((forrige) => (likeTall(forrige, neste) ? forrige : neste));

      if (tid < varighet) {
        rammeRef.current = requestAnimationFrame(steg);
      } else {
        rammeRef.current = null;
        kjorerRef.current = false;
      }
    };

    rammeRef.current = requestAnimationFrame(steg);
  }, [tegn]);

  useEffect(() => {
    const klokke = window.setTimeout(dans, OPPSTART);

    return () => {
      window.clearTimeout(klokke);
      if (rammeRef.current !== null) cancelAnimationFrame(rammeRef.current);
      rammeRef.current = null;
      kjorerRef.current = false;
    };
  }, [dans]);

  return (
    <h1 onPointerEnter={dans} onClick={dans} className={className}>
      {/* Skjermlesere får navnet én gang, som vanlig tekst. */}
      <span className="sr-only">{tekst}</span>

      <span aria-hidden="true">
        {tegn.map((bokstav, i) =>
          bokstav === " " ? (
            " "
          ) : (
            <span
              key={`${bokstav}-${i}`}
              className="inline-grid items-baseline justify-items-center"
            >
              {varianter.map((variant, nummer) => {
                const aktiv = nummer === aktive[i];
                const hvile = nummer === 0;

                return (
                  <span
                    key={variant.klasse}
                    style={{ fontSize: `${variant.skala}em` }}
                    className={cn(
                      "dans-variant [grid-area:1/1] transition-[opacity,transform,filter] duration-500 ease-mjuk",
                      variant.klasse,
                      hvile ? "dans-hvile" : "w-0 justify-self-center",
                      aktiv
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-[0.07em] opacity-0 blur-[3px]",
                    )}
                  >
                    {/* Gjestefontene får tegne utenfor ruta si, sentrert om
                        midten, i stedet for å dytte på nabobokstavene. */}
                    <span
                      className={cn(
                        "inline-block whitespace-pre",
                        !hvile && "-translate-x-1/2",
                      )}
                    >
                      {bokstav}
                    </span>
                  </span>
                );
              })}
            </span>
          ),
        )}
      </span>
    </h1>
  );
}
