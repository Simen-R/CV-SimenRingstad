import type { FerdighetsGruppe } from "@/types/cv";

const NIVAA_TEKST: Record<number, string> = {
  1: "Har prøvd",
  2: "Grunnleggende",
  3: "Selvstendig",
  4: "Trygg",
  5: "Kan lære det bort",
};

export function SkillGroup({ gruppe }: { gruppe: FerdighetsGruppe }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold">{gruppe.navn}</h3>
      <ul className="mt-4 space-y-4">
        {gruppe.ferdigheter.map((ferdighet) => (
          <li key={ferdighet.navn}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium">{ferdighet.navn}</span>
              <span className="text-xs text-muted-foreground">
                {NIVAA_TEKST[ferdighet.nivaa]}
              </span>
            </div>
            <div
              role="meter"
              aria-valuenow={ferdighet.nivaa}
              aria-valuemin={1}
              aria-valuemax={5}
              aria-label={`${ferdighet.navn}: ${NIVAA_TEKST[ferdighet.nivaa]}`}
              className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
            >
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(ferdighet.nivaa / 5) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
