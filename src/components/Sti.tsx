import Link from "next/link";
import type { StiInnhold, StiNode } from "@/types/cv";
import { cn } from "@/lib/utils";
import { StoppKort } from "@/components/StiKort";

/**
 * Veien hit, tegnet som en ryggrad: én loddrett linje ned midten, arbeid til
 * venstre og skole til høyre. Radene som pågår nå farger sitt eget stykke av
 * linja, så nåtida skiller seg ut uten at noe trenger en merkelapp.
 *
 * Under lg finnes ikke de to kolonnene. Da flytter ryggraden seg ut i
 * venstrekanten, alle kortene stiller seg opp til høyre for den, og sporet
 * står som tekst på hvert kort i stedet for som en kolonne.
 *
 * Rutenettet trenger ingen oppmåling, så alt utenom selve kortene rendres på
 * serveren. Kortene som kan foldes ut ligger i StiKort.tsx.
 */
export function Sti({ innhold }: { innhold: StiInnhold }) {
  return (
    <section className="container py-14 sm:py-16">
      <div className="flex items-baseline justify-between gap-6 border-b border-border/70 pb-5">
        <h2 className="text-2xl font-semibold tracking-stor sm:text-3xl">
          {innhold.tittel}
        </h2>
        {innhold.spenn && (
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.05em] text-svak">
            {innhold.spenn}
          </p>
        )}
      </div>

      {innhold.ingress && (
        <p className="mt-5 max-w-2xl text-pretty text-muted-foreground">
          {innhold.ingress}
        </p>
      )}

      {/* Spor-etikettene hører til kolonnene, så de følger dem ut av layouten. */}
      <div
        aria-hidden
        className="mt-9 hidden grid-cols-[1fr_100px_1fr] items-baseline lg:grid"
      >
        <p className="text-right font-mono text-[11px] uppercase tracking-[0.1em] text-svak">
          {innhold.spor.arbeid}
        </p>
        <span />
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-svak">
          {innhold.spor.skole}
        </p>
      </div>

      {innhold.nesteStopp && <NesteStopp stopp={innhold.nesteStopp} />}

      <ol>
        {innhold.noder.map((node) => (
          <Rad key={node.id} node={node} spor={innhold.spor} />
        ))}
      </ol>

      {/* Halen: linja tones ut nederst i stedet for å stoppe brått. */}
      <div className="flex justify-start lg:justify-center">
        <span
          aria-hidden
          className="h-7 w-px bg-gradient-to-b from-border to-transparent"
        />
      </div>
    </section>
  );
}

/**
 * Stoppet som ikke er tatt ennå. Det eneste kortet som fører et sted, og det
 * eneste som står stiplet: en boks som venter på å fylles.
 */
function NesteStopp({
  stopp,
}: {
  stopp: NonNullable<StiInnhold["nesteStopp"]>;
}) {
  return (
    <div className="mt-8 border-l border-dashed border-accent/45 pb-9 pl-7 pr-6 sm:pr-0 lg:mt-9 lg:flex lg:flex-col lg:items-center lg:border-l-0 lg:pb-0 lg:pl-0">
      <Link
        href={stopp.lenke.href}
        className="block w-full rounded-lg border border-dashed border-accent/50 bg-accent/5 p-4 transition-colors duration-300 hover:border-accent/80 hover:bg-accent/10 sm:p-5 lg:max-w-[360px] lg:text-center"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
          {stopp.merkelapp}
        </p>
        <p className="mt-2 text-lg font-medium tracking-display">
          {stopp.tittel}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          {stopp.lenke.tekst}
          <span aria-hidden>→</span>
        </span>
      </Link>
      <span
        aria-hidden
        className="hidden h-9 w-px bg-gradient-to-b from-accent/55 to-accent/25 lg:block"
      />
    </div>
  );
}

function Rad({
  node,
  spor,
}: {
  node: StiNode;
  spor: StiInnhold["spor"];
}) {
  const tilVenstre = node.spor === "arbeid";

  return (
    <li
      className={cn(
        // Under lg er ryggraden venstrekanten på selve raden. Da kan hver rad
        // farge sitt eget stykke av linja uten noe ekstra element. På telefon
        // holder pr-6 kortet unna skjermkanten, så det ikke går fra kant til
        // kant.
        "relative border-l py-4 pl-7 pr-6 sm:pr-0",
        "lg:grid lg:grid-cols-[1fr_100px_1fr] lg:border-l-0 lg:py-0 lg:pl-0",
        node.paagaaende ? "border-accent/40" : "border-border",
      )}
    >
      {/* Noden på ryggraden, smal utgave. Sitter på høyde med perioden. */}
      <span
        aria-hidden
        className={cn(
          // top følger perioden på kortet, som flytter seg når innpaddingen
          // krymper på telefon.
          "absolute -left-px top-10 h-2 w-2 -translate-x-1/2 rounded-[2px] sm:top-11 lg:hidden",
          node.paagaaende ? "bg-accent" : "border border-svak/70 bg-background",
        )}
      />

      {/* Midtkolonnen: ryggrad, node og streken bort til kortet. */}
      <div
        aria-hidden
        className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:block"
      >
        <span
          className={cn(
            "absolute inset-y-0 left-1/2 w-px",
            node.paagaaende ? "bg-accent/40" : "bg-border",
          )}
        />
        <span
          className={cn(
            "absolute left-1/2 top-12 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-[2px]",
            node.paagaaende
              ? "bg-accent"
              : "border border-svak/70 bg-background",
          )}
        />
        <span
          className={cn(
            "absolute top-12 h-px bg-border",
            tilVenstre ? "left-0 right-1/2" : "left-1/2 right-0",
          )}
        />
      </div>

      <div
        className={cn(
          "lg:row-start-1 lg:flex lg:py-5",
          tilVenstre
            ? "lg:col-start-1 lg:justify-end"
            : "lg:col-start-3 lg:justify-start",
        )}
      >
        <StoppKort node={node} spor={spor} tilVenstre={tilVenstre} />
      </div>
    </li>
  );
}
