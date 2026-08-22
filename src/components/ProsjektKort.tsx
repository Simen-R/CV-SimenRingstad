import type { Prosjekt } from "@/types/cv";

export function ProsjektKort({ prosjekt }: { prosjekt: Prosjekt }) {
  return (
    <article className="flate flate-interaktiv flex h-full flex-col rounded-lg p-6">
      <p className="text-sm text-muted-foreground">{prosjekt.aar}</p>
      <h3 className="mt-1 text-lg font-semibold">{prosjekt.navn}</h3>
      <p className="mt-2 text-pretty text-muted-foreground">
        {prosjekt.ingress}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {prosjekt.teknologier.map((teknologi) => (
          <li key={teknologi} className="pille">
            {teknologi}
          </li>
        ))}
      </ul>

      {/* Lenka skyves ned, så kortene i rekka får samme bunnlinje. */}
      <div className="mt-auto flex flex-wrap items-baseline gap-x-5 gap-y-1 pt-6 text-sm">
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
        {prosjekt.demoNotat && (
          <span className="text-muted-foreground">{prosjekt.demoNotat}</span>
        )}
      </div>
    </article>
  );
}
