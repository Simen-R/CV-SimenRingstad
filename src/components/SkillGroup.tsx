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
    <div className="glass rounded-lg p-6">
      <h3 className="text-lg font-semibold tracking-display">{gruppe.navn}</h3>
      <ul className="mt-4 space-y-3">
        {gruppe.ferdigheter.map((ferdighet) =>
          // Uten nivå er det en egenskap, ikke noe som kan måles på en skala.
          ferdighet.nivaa === undefined ? (
            <li key={ferdighet.navn} className="flex gap-2 text-sm">
              <span aria-hidden className="text-accent">
                ·
              </span>
              {ferdighet.navn}
            </li>
          ) : (
            <li key={ferdighet.navn} className="pt-1">
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
                  className="h-full rounded-full bg-accent transition-[width] duration-700 ease-mjuk"
                  style={{ width: `${(ferdighet.nivaa / 5) * 100}%` }}
                />
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
