"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { StiInnhold, StiNode } from "@/types/cv";
import { cn } from "@/lib/utils";

type Retning = "opp" | "venstre" | "hoyre";

type Kobling = {
  fra: string;
  til: string;
  d: string;
  pil: string;
};

type Boks = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  cx: number;
};

/** Liten glippe mellom kortkanten og streken, så pilene ikke klistrer seg. */
const LUFT = 4;

function maalBoks(container: HTMLElement, id: string): Boks | null {
  const element = container.querySelector<HTMLElement>(`[data-sti="${id}"]`);
  if (!element) return null;

  const ytre = container.getBoundingClientRect();
  const indre = element.getBoundingClientRect();
  const x1 = indre.left - ytre.left;
  const x2 = indre.right - ytre.left;

  return {
    x1,
    x2,
    y1: indre.top - ytre.top,
    y2: indre.bottom - ytre.top,
    cx: Math.round((x1 + x2) / 2),
  };
}

/** Pilspissen: en liten vinkel som peker inn i kortet linja ender i. */
function pilspiss(x: number, y: number, retning: Retning) {
  const bredde = 5.5;
  const dybde = 7;

  if (retning === "opp") {
    return `M ${x - bredde} ${y + dybde} L ${x} ${y} L ${x + bredde} ${y + dybde}`;
  }
  if (retning === "venstre") {
    return `M ${x + dybde} ${y - bredde} L ${x} ${y} L ${x + dybde} ${y + bredde}`;
  }
  return `M ${x - dybde} ${y - bredde} L ${x} ${y} L ${x - dybde} ${y + bredde}`;
}

/**
 * Rettvinklet rute mellom to kort – som i et flytskjema, ikke som en bue.
 * Tre tilfeller: rett opp i samme kolonne, rett bortover i samme rad, og
 * albuen (opp, bortover, opp igjen) når kortene står på skrå for hverandre.
 */
function rutt(fra: Boks, til: Boks) {
  const sammeKolonne = Math.abs(fra.cx - til.cx) < 4;
  const sammeRad = fra.y1 < til.y2 - 8 && til.y1 < fra.y2 - 8;

  if (sammeKolonne && til.y2 <= fra.y1) {
    const x = til.cx;
    const slutt = til.y2 + LUFT;
    return {
      d: `M ${x} ${fra.y1 - LUFT} L ${x} ${slutt}`,
      pil: pilspiss(x, slutt, "opp"),
    };
  }

  if (sammeRad) {
    const y = Math.round(
      (Math.max(fra.y1, til.y1) + Math.min(fra.y2, til.y2)) / 2,
    );

    if (til.x1 >= fra.x2) {
      const slutt = til.x1 - LUFT;
      return {
        d: `M ${fra.x2 + LUFT} ${y} L ${slutt} ${y}`,
        pil: pilspiss(slutt, y, "hoyre"),
      };
    }

    const slutt = til.x2 + LUFT;
    return {
      d: `M ${fra.x1 - LUFT} ${y} L ${slutt} ${y}`,
      pil: pilspiss(slutt, y, "venstre"),
    };
  }

  const sx = fra.cx;
  const sy = fra.y1 - LUFT;
  const tx = til.cx;
  const ty = til.y2 + LUFT;
  const midt = Math.round((sy + ty) / 2);
  const mot = Math.sign(tx - sx) || 1;
  const r = Math.max(
    0,
    Math.min(16, Math.abs(tx - sx) / 2, sy - midt, midt - ty),
  );

  return {
    d: [
      `M ${sx} ${sy}`,
      `L ${sx} ${midt + r}`,
      `Q ${sx} ${midt} ${sx + mot * r} ${midt}`,
      `L ${tx - mot * r} ${midt}`,
      `Q ${tx} ${midt} ${tx} ${midt - r}`,
      `L ${tx} ${ty}`,
    ].join(" "),
    pil: pilspiss(tx, ty, "opp"),
  };
}

export function Sti({ innhold }: { innhold: StiInnhold }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flate, setFlate] = useState({ bredde: 0, hoyde: 0 });
  const [koblinger, setKoblinger] = useState<Kobling[]>([]);
  const [tegnet, setTegnet] = useState(false);
  const [aktiv, setAktiv] = useState<string | null>(null);

  const navn = useMemo(() => {
    const oppslag = new Map<string, string>();
    // Framtidsstoppet står først i lesarekkefølgen uansett, så «førte videre
    // til»-teksten skal ikke gjenta det rett under.
    for (const node of innhold.noder) {
      if (node.type !== "framtid") oppslag.set(node.id, node.tittel);
    }
    return oppslag;
  }, [innhold.noder]);

  // Pilene tegnes ut fra hvor kortene faktisk havnet, så de må måles opp på
  // nytt hver gang bredden endrer seg.
  const maalOpp = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const ytre = container.getBoundingClientRect();
    setFlate({ bredde: ytre.width, hoyde: ytre.height });

    // Diagrammet forutsetter rutenettet. Under lg står kortene i én kolonne,
    // og der forteller kortene i stedet med tekst hva de førte videre til.
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      setKoblinger([]);
      return;
    }

    const nye: Kobling[] = [];
    for (const node of innhold.noder) {
      const fra = maalBoks(container, node.id);
      if (!fra) continue;

      for (const tilId of node.ledetTil) {
        const til = maalBoks(container, tilId);
        if (!til) continue;

        nye.push({ fra: node.id, til: tilId, ...rutt(fra, til) });
      }
    }
    setKoblinger(nye);
  }, [innhold.noder]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    maalOpp();

    const observer = new ResizeObserver(maalOpp);
    observer.observe(container);

    // Webfonter kan endre korthøydene etter første måling.
    document.fonts?.ready.then(maalOpp).catch(() => {});

    return () => observer.disconnect();
  }, [maalOpp]);

  // Pilene tegner seg først når seksjonen er på skjermen.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTegnet(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([oppslag]) => {
        if (oppslag.isIntersecting) {
          setTegnet(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  /** Er dette kortet en del av det som er markert akkurat nå? */
  const erFramhevet = (id: string) => {
    if (!aktiv || aktiv === id) return true;

    const markert = innhold.noder.find((node) => node.id === aktiv);
    if (markert?.ledetTil.includes(id)) return true;

    return innhold.noder.some(
      (node) => node.id === id && node.ledetTil.includes(aktiv),
    );
  };

  return (
    <section className="container py-12 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
        {innhold.tittel}
      </p>
      {innhold.ingress && (
        <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
          {innhold.ingress}
        </p>
      )}

      <div
        ref={containerRef}
        className={cn("relative mt-12", tegnet && "sti-tegnet")}
        onMouseLeave={() => setAktiv(null)}
      >
        {flate.bredde > 0 && koblinger.length > 0 && (
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${flate.bredde} ${flate.hoyde}`}
            fill="none"
          >
            {koblinger.map((kobling, indeks) => {
              const framhevet =
                !aktiv || aktiv === kobling.fra || aktiv === kobling.til;

              return (
                <g
                  key={`${kobling.fra}-${kobling.til}`}
                  className="transition-opacity duration-300 ease-out"
                  opacity={framhevet ? 1 : 0.12}
                  stroke="hsl(var(--accent))"
                  strokeWidth={aktiv && framhevet ? 2.25 : 1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    className="sti-linje"
                    style={{ transitionDelay: `${indeks * 90}ms` }}
                    d={kobling.d}
                    pathLength={1}
                  />
                  <path
                    className="sti-pil"
                    style={{ transitionDelay: `${indeks * 90 + 650}ms` }}
                    d={kobling.pil}
                  />
                </g>
              );
            })}
          </svg>
        )}

        <h2 className="sr-only">Veien hit, stopp for stopp</h2>

        {/* Rutenettet er kartet: kolonne og rad ligger på hver node. På smale
            skjermer faller det tilbake til én kolonne, nyeste først. */}
        <ul className="relative flex flex-col gap-4 lg:grid lg:auto-rows-fr lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
          {innhold.noder.map((node) => (
            <NodeKort
              key={node.id}
              node={node}
              framhevet={erFramhevet(node.id)}
              aktiv={aktiv === node.id}
              navn={navn}
              onMarker={setAktiv}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function NodeKort({
  node,
  framhevet,
  aktiv,
  navn,
  onMarker,
}: {
  node: StiNode;
  framhevet: boolean;
  aktiv: boolean;
  navn: Map<string, string>;
  onMarker: (id: string | null) => void;
}) {
  const videre = node.ledetTil
    .map((id) => navn.get(id))
    .filter((tittel): tittel is string => Boolean(tittel));
  const framtid = node.type === "framtid";

  const klasse = cn(
    // Kortene er innhold, ikke navigasjon – de får flata, ikke glasset.
    "flate flex h-full w-full flex-col rounded-lg p-5 text-left",
    "transition-[opacity,transform,box-shadow,border-color] duration-500 ease-mjuk",
    framhevet ? "opacity-100" : "opacity-35",
    // Stoppet som ikke er tatt ennå står stiplet – en boks som venter på å fylles.
    framtid && "border-dashed border-accent/45",
    aktiv &&
      "-translate-y-1 border-accent/50 shadow-[0_16px_40px_hsl(var(--skygge)/0.55)]",
  );

  // Samme markering enten kortet er en knapp eller en lenke.
  const markering = {
    onMouseEnter: () => onMarker(node.id),
    onFocus: () => onMarker(node.id),
    onBlur: () => onMarker(null),
  };

  const innhold = (
    <>
      <span
        className={cn(
          "flex items-center gap-2 text-xs",
          framtid ? "font-medium text-accent" : "text-muted-foreground",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            node.paagaaende || framtid
              ? "bg-accent"
              : node.type === "milepael"
                ? "bg-accent-2"
                : "bg-border",
          )}
        />
        {node.periode}
        {node.paagaaende && (
          <span className="rounded-full bg-accent-2 px-2 py-0.5 font-medium text-foreground">
            Nå
          </span>
        )}
      </span>

      <span
        className={cn(
          "mt-2 block text-pretty font-semibold tracking-display",
          framtid && "text-lg",
        )}
      >
        {node.tittel}
      </span>
      {node.organisasjon && (
        <span className="block text-sm text-muted-foreground">
          {node.organisasjon}
        </span>
      )}

      {node.beskrivelse && (
        <span className="mt-3 block text-pretty text-sm text-muted-foreground">
          {node.beskrivelse}
        </span>
      )}

      {node.medbrakt && node.medbrakt.length > 0 && (
        <span className="mt-4 flex flex-wrap gap-1.5">
          {node.medbrakt.map((ting) => (
            <span key={ting} className="pille px-2.5">
              {ting}
            </span>
          ))}
        </span>
      )}

      {node.lenke && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          {node.lenke.tekst}
          <span aria-hidden>→</span>
        </span>
      )}

      {/* Samme informasjon som pilene, i tekst – for smale skjermer og
          skjermlesere, som ikke får noe ut av SVG-en. */}
      {videre.length > 0 && (
        <span className="mt-4 block text-xs text-accent lg:sr-only">
          Førte videre til {videre.join(" og ")}
        </span>
      )}
    </>
  );

  return (
    <li
      data-sti={node.id}
      className="relative"
      style={{ gridColumn: node.kolonne, gridRow: node.rad }}
    >
      {node.lenke ? (
        // Framtidsstoppet er den eneste boksen som fører et sted – da skal den
        // være en lenke, ikke en knapp som bare markerer seg selv.
        <Link href={node.lenke.href} className={klasse} {...markering}>
          {innhold}
        </Link>
      ) : (
        <button
          type="button"
          aria-pressed={aktiv}
          onClick={() => onMarker(aktiv ? null : node.id)}
          className={klasse}
          {...markering}
        >
          {innhold}
        </button>
      )}
    </li>
  );
}
