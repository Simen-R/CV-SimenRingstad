import type { TidslinjePost } from "@/types/cv";
import { FadeUp } from "@/components/FadeUp";

/** Gjør "2024-08" om til "aug. 2024", og lar "2024" og "nå" stå som de er. */
function formaterDato(verdi: string) {
  const treff = verdi.match(/^(\d{4})-(\d{2})$/);
  if (!treff) return verdi;

  const maaneder = [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "mai",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des.",
  ];
  return `${maaneder[Number(treff[2]) - 1]} ${treff[1]}`;
}

export function Timeline({ poster }: { poster: TidslinjePost[] }) {
  return (
    <ol className="relative pl-8">
      <span
        aria-hidden
        className="absolute bottom-6 left-0 top-2 w-px bg-border"
      />

      {poster.map((post, indeks) => (
        <li key={post.id} className="relative pb-12 last:pb-0">
          {/* Punktet sitter oppå skinnen, med bakgrunnsfargen rundt seg så
              linja ikke skinner igjennom. */}
          <span
            aria-hidden
            className="absolute -left-8 mt-2 flex h-3 w-3 -translate-x-[5.5px] items-center justify-center rounded-full bg-background"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>

          <FadeUp delay={indeks * 80}>
            <p className="text-sm text-muted-foreground">
              {/* «Høst 2023 – Høst 2023» leses dårlig – vis den bare én gang. */}
              {post.fra === post.til
                ? formaterDato(post.fra)
                : `${formaterDato(post.fra)} – ${formaterDato(post.til)}`}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{post.tittel}</h3>
            <p className="text-muted-foreground">
              {post.organisasjon}
              {post.sted && ` · ${post.sted}`}
            </p>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed">
              {post.beskrivelse}
            </p>

            {post.punkter && post.punkter.length > 0 && (
              <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-muted-foreground marker:text-accent">
                {post.punkter.map((punkt) => (
                  <li key={punkt}>{punkt}</li>
                ))}
              </ul>
            )}

            {post.stikkord && post.stikkord.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.stikkord.map((stikkord) => (
                  <li key={stikkord} className="pille">
                    {stikkord}
                  </li>
                ))}
              </ul>
            )}
          </FadeUp>
        </li>
      ))}
    </ol>
  );
}
