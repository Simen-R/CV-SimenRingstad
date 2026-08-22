"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profil } from "@/data/profil";
import { cn } from "@/lib/utils";

const navigasjon = [
  { navn: "Om meg", url: "/om-meg" },
  { navn: "Erfaring", url: "/erfaring" },
  { navn: "Prosjekter", url: "/prosjekter" },
  { navn: "Ferdigheter", url: "/ferdigheter" },
  { navn: "Kontakt", url: "/kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [apen, setApen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {profil.navn}
        </Link>

        <nav className="hidden gap-1 md:flex">
          {navigasjon.map((punkt) => (
            <Link
              key={punkt.url}
              href={punkt.url}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                pathname === punkt.url
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {punkt.navn}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setApen((forrige) => !forrige)}
          aria-expanded={apen}
          aria-label="Meny"
          className="rounded-md border border-border px-3 py-2 text-sm md:hidden"
        >
          Meny
        </button>
      </div>

      {apen && (
        <nav className="border-t border-border/60 md:hidden">
          <div className="container flex flex-col py-2">
            {navigasjon.map((punkt) => (
              <Link
                key={punkt.url}
                href={punkt.url}
                onClick={() => setApen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {punkt.navn}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
