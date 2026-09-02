"use client";

import { useId, useState } from "react";
import type { StiInnhold, StiNode } from "@/types/cv";
import { cn } from "@/lib/utils";

/**
 * Kortet for ett stopp på stien.
 *
 * Lukket ser det ut som før: periode, tittel, sted, én setning og
 * merkelappene. Har stoppet mer å fortelle, dekkes den delen av en knapp som
 * fyller flata, og CV-innholdet folder seg ut under. Knappen ligger oppå i
 * stedet for rundt, så overskrifta blir værende en overskrift og ikke tekst
 * inni en knapp.
 *
 * Høyden animeres med grid-rader fra 0fr til 1fr. Da måler panelet seg selv,
 * og ingenting trenger en fast høyde.
 *
 * Stopp uten utdyping, punkter, stikkord eller lenke blir en vanlig boks. Da er det
 * ingenting å åpne, og kortet later heller ikke som om det er noe å trykke på.
 */
export function StoppKort({
  node,
  spor,
  tilVenstre,
}: {
  node: StiNode;
  spor: StiInnhold["spor"];
  tilVenstre: boolean;
}) {
  const [apen, setApen] = useState(false);
  const panelId = useId();

  const harDetaljer = Boolean(
    node.utdyping || node.punkter?.length || node.stikkord?.length || node.lenke,
  );

  if (!harDetaljer) {
    return (
      <div
        className={cn(
          "flate w-full rounded-lg p-5 lg:max-w-[400px]",
          tilVenstre && "lg:text-right",
        )}
      >
        <Sammendrag node={node} spor={spor} tilVenstre={tilVenstre} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        // Kanten er den eneste tilbakemeldinga på peker og tastatur. Kortet
        // løfter seg ikke, for det skal folde seg ut, ikke sveve.
        "flate w-full rounded-lg transition-colors duration-300 lg:max-w-[400px]",
        "focus-within:border-accent/40 hover:border-accent/40",
        apen && "border-accent/40",
        tilVenstre && "lg:text-right",
      )}
    >
      <div className="relative p-5">
        <Sammendrag
          node={node}
          spor={spor}
          tilVenstre={tilVenstre}
          pil={<Pil apen={apen} />}
        />

        {/* Knappen dekker sammendraget, ikke hele kortet, så teksten i det
            åpne panelet kan markeres og lenkes som vanlig. */}
        <button
          type="button"
          onClick={() => setApen((forrige) => !forrige)}
          aria-expanded={apen}
          aria-controls={panelId}
          className="absolute inset-0 rounded-lg"
        >
          <span className="sr-only">
            {apen ? "Skjul detaljer om" : "Vis detaljer om"} {node.tittel}
            {node.organisasjon ? ` hos ${node.organisasjon}` : ""}
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className={cn(
          "sti-detaljer grid transition-[grid-template-rows] duration-500 ease-mjuk motion-reduce:transition-none",
          apen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        {/* Lukket er innholdet null piksler høyt, men fortsatt i DOM-en.
            `inert` holder det utenfor tabbing og skjermlesere så lenge. */}
        <div className="overflow-hidden" inert={!apen}>
          <div className="border-t border-border/50 px-5 pb-5 pt-4">
            {node.utdyping && (
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {node.utdyping}
              </p>
            )}

            {node.punkter && node.punkter.length > 0 && (
              <ul
                className={cn(
                  "space-y-2 text-sm leading-relaxed text-muted-foreground",
                  node.utdyping && "mt-3.5",
                )}
              >
                {node.punkter.map((punkt) => (
                  <li
                    key={punkt}
                    className={cn(
                      // Kulepunktet er den samme lille firkanten som nodene på
                      // ryggraden, og bytter side sammen med teksten.
                      "flex gap-2.5 text-pretty",
                      tilVenstre && "lg:flex-row-reverse",
                    )}
                  >
                    <span
                      aria-hidden
                      className="mt-[0.7em] h-[3px] w-[3px] shrink-0 rounded-[1px] bg-svak"
                    />
                    <span>{punkt}</span>
                  </li>
                ))}
              </ul>
            )}

            {node.stikkord && node.stikkord.length > 0 && (
              <div
                className={cn(
                  "mt-4 flex flex-wrap gap-1.5",
                  tilVenstre && "lg:justify-end",
                )}
              >
                {node.stikkord.map((ord) => (
                  <span key={ord} className="sti-merke">
                    {ord}
                  </span>
                ))}
              </div>
            )}

            {/* Lenka står nederst, utenfor knappeflata, så den kan trykkes
                som en vanlig lenke når kortet først er åpnet. */}
            {node.lenke && (
              <p className="mt-4 text-sm">
                <a
                  href={node.lenke.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full font-medium text-accent transition-opacity hover:opacity-80"
                >
                  {node.lenke.tekst} →
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Det som står på kortet uansett om det er åpent eller lukket. */
function Sammendrag({
  node,
  spor,
  tilVenstre,
  pil,
}: {
  node: StiNode;
  spor: StiInnhold["spor"];
  tilVenstre: boolean;
  pil?: React.ReactNode;
}) {
  return (
    <>
      {/* Pila står i ytterkanten, motsatt side av perioden, så den følger
          speilinga av kortet i stedet for å bryte den. */}
      <div
        className={cn(
          "flex items-center justify-between gap-3",
          tilVenstre && "lg:flex-row-reverse",
        )}
      >
        <p className="font-mono text-xs text-svak">
          {node.periode}
          {/* Uten kolonnene forsvinner sporet, så det står som tekst her i stedet. */}
          <span className="lg:hidden">
            {" · "}
            {tilVenstre ? spor.arbeid : spor.skole}
          </span>
        </p>
        {pil}
      </div>

      <h3 className="mt-2 text-[17px] font-medium tracking-display">
        {node.tittel}
      </h3>
      {node.organisasjon && (
        <p className="mt-0.5 text-sm text-svak">{node.organisasjon}</p>
      )}

      {node.beskrivelse && (
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {node.beskrivelse}
        </p>
      )}

      {node.medbrakt && node.medbrakt.length > 0 && (
        <div
          className={cn(
            "mt-4 flex flex-wrap gap-1.5",
            tilVenstre && "lg:justify-end",
          )}
        >
          {node.medbrakt.map((merke) => (
            <span key={merke} className="sti-merke">
              {merke}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

/** Vinkelen som snur når kortet åpnes. Ingen tekst, bare et hint om at kortet
 *  har mer å gi. Den er dekorasjon, så den blir borte på papir. */
function Pil({ apen }: { apen: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "no-print h-3 w-3 shrink-0 text-svak transition-transform duration-300 ease-mjuk motion-reduce:transition-none",
        apen && "-rotate-180",
      )}
    >
      <path d="M2.75 4.5 6 7.75 9.25 4.5" />
    </svg>
  );
}
