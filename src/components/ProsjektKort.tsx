import type { Prosjekt } from "@/types/cv";

export function ProsjektKort({ prosjekt }: { prosjekt: Prosjekt }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <p className="text-sm text-muted-foreground">{prosjekt.aar}</p>
      <h3 className="mt-1 text-lg font-semibold">{prosjekt.navn}</h3>
      <p className="mt-2 text-muted-foreground">{prosjekt.ingress}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {prosjekt.teknologier.map((teknologi) => (
          <li
            key={teknologi}
            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            {teknologi}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4 pt-2 text-sm">
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
            Kode
          </a>
        )}
      </div>
    </article>
  );
}
