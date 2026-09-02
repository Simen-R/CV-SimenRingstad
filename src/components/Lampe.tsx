"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Lampa under headeren.
 *
 * Glasspilla øverst er lyskilda: en tynn strek langs underkanten, og under den
 * en kjegle som faller ned over toppen av sida. Lampa ligger bak alt innhold,
 * så den lyser opp lufta rundt overskrifta og aldri teksten oppå.
 *
 * Den henger på toppen av dokumentet og ikke på headeren, enda headeren er
 * klebrig. Lyset blir liggende der det ble tent, og ruller ut av bildet sammen
 * med toppen av sida. Skal det følge headeren nedover i stedet, byttes
 * absolute mot fixed her.
 *
 * Lyset tennes ett bilde etter at sida er tegnet, så nettleseren har noe å
 * animere fra. Er animasjoner skrudd av, står det tent med en gang.
 */
export function Lampe() {
  const [tent, setTent] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTent(true);
      return;
    }

    // To bilder: det første maler av-tilstanden, det andre starter overgangen.
    let indre = 0;
    const ytre = requestAnimationFrame(() => {
      indre = requestAnimationFrame(() => setTent(true));
    });

    return () => {
      cancelAnimationFrame(ytre);
      cancelAnimationFrame(indre);
    };
  }, []);

  // Toppen av laget ligger på underkanten av pilla: lufta over headeren pluss
  // høyden på den. 1rem + 4rem, og 1,25rem + 4,5rem fra sm og opp.
  const midtstilt = "absolute left-1/2 top-0 -translate-x-1/2";
  const mjuk = "transition-all duration-1000 ease-mjuk";

  return (
    <div
      aria-hidden
      className="lampe pointer-events-none absolute inset-x-0 top-20 -z-10 h-[32rem] overflow-hidden sm:top-[5.75rem]"
    >
      <div
        style={{ transitionDelay: "150ms" }}
        className={cn(
          midtstilt,
          mjuk,
          "lampe-kjegle h-[28rem] w-[66rem] origin-top",
          tent ? "scale-x-100 opacity-100" : "scale-x-[0.45] opacity-0",
        )}
      />
      <div
        style={{ transitionDelay: "150ms" }}
        className={cn(
          midtstilt,
          mjuk,
          "lampe-kjerne h-[19rem] w-[36rem] origin-top",
          tent ? "scale-x-100 opacity-100" : "scale-x-[0.5] opacity-0",
        )}
      />
      {/* Gløden i selve pæra. Halve flekken ligger over kanten på laget og
          blir klippet bort, så lyset begynner i streken. */}
      <div
        className={cn(
          midtstilt,
          mjuk,
          "lampe-gloed h-28 w-[32rem] max-w-[calc(100vw-3rem)] -translate-y-1/2 rounded-full blur-3xl",
          tent ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Streken langs underkanten av pilla: en skarp strek med en uskarp
          tvilling under, så lyset ser ut til å komme ut av en kant og ikke
          ligge på den. Begge holder seg innenfor den flate delen av bunnen, så
          de ikke stikker ut av de runde endene. */}
      <div
        style={{ width: tent ? "24rem" : "8rem", transitionDelay: "150ms" }}
        className={cn(
          midtstilt,
          mjuk,
          "lampe-pare h-1.5 max-w-[calc(100vw-6rem)] blur-[6px]",
          tent ? "opacity-80" : "opacity-0",
        )}
      />
      <div
        style={{ width: tent ? "30rem" : "9rem", transitionDelay: "150ms" }}
        className={cn(
          midtstilt,
          mjuk,
          "lampe-pare h-px max-w-[calc(100vw-6rem)]",
          tent ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
