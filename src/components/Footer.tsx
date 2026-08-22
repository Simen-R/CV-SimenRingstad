import { profil } from "@/data/profil";

export function Footer() {
  return (
    <footer className="mt-24 py-12">
      <div aria-hidden className="container h-px bg-border" />
      <div className="container mt-10 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profil.navn}
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href={`mailto:${profil.epost}`}
            className="rounded-full transition-colors hover:text-foreground"
          >
            {profil.epost}
          </a>
          {profil.lenker.map((lenke) => (
            <a
              key={lenke.url}
              href={lenke.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full transition-colors hover:text-foreground"
            >
              {lenke.navn}
            </a>
          ))}
        </div>
      </div>
      {/*
        <details> gir oss knappen gratis: nettleseren tar seg av rolle,
        aria-expanded og tastaturet, så footeren slipper å bli klientkomponent.
      */}
      <details className="group container mt-8">
        <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&::-webkit-details-marker]:hidden">
          Personvern
          <svg
            aria-hidden
            viewBox="0 0 12 12"
            className="h-3 w-3 transition-transform duration-500 ease-mjuk group-open:rotate-180 motion-reduce:transition-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 4.5 6 7.5 9 4.5" />
          </svg>
        </summary>
        <p className="mt-4 max-w-prose text-xs leading-relaxed text-muted-foreground">
          Denne siden bruker Vercel Web Analytics for anonym besøksstatistikk, uten
          informasjonskapsler og uten sporing på tvers av nettsteder.
        </p>
      </details>
    </footer>
  );
}
