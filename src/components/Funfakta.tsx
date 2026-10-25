/**
 * Funfactene bak en knapp. <details> gir knappen gratis, som i footeren:
 * nettleseren tar seg av rolle, aria-expanded og tastaturet.
 */
export function Funfakta({ funfakta }: { funfakta: string[] }) {
  return (
    <details className="group">
      <summary className="knapp-glass cursor-pointer gap-2 list-none [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">
          {funfakta.length === 1 ? "Se funfacten" : "Se funfactene"}
        </span>
        <span className="hidden group-open:inline">Skjul</span>
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
      <ul className="flate mt-6 rounded-lg">
        {funfakta.map((fakta) => (
          <li
            key={fakta}
            className="border-t border-border/60 p-6 first:border-t-0 sm:py-5"
          >
            {fakta}
          </li>
        ))}
      </ul>
    </details>
  );
}
