"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profil } from "@/data/profil";
import { cn } from "@/lib/utils";

const navigasjon = [
  { navn: "Erfaring", url: "/erfaring" },
  { navn: "Prosjekter", url: "/prosjekter" },
  { navn: "Ferdigheter", url: "/ferdigheter" },
  { navn: "Kontakt", url: "/kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [apen, setApen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50">
      <div className="container relative pt-4 sm:pt-5">
        <div className="glass flex h-16 items-center justify-between rounded-full pl-6 pr-3 sm:h-[4.5rem] sm:pl-7 sm:pr-4">
          <Link
            href="/"
            className="rounded-full text-base font-semibold tracking-display sm:text-lg"
          >
            {profil.navn}
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex">
            {navigasjon.map((punkt) => {
              const aktiv = pathname === punkt.url;

              return (
                <Link
                  key={punkt.url}
                  href={punkt.url}
                  aria-current={aktiv ? "page" : undefined}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-[0.9375rem] transition-all duration-500 ease-mjuk",
                    // Aktiv side får en egen kapsel – ikke bare en annen tekstfarge.
                    aktiv
                      ? "bg-accent-2 font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                  )}
                >
                  {punkt.navn}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setApen((forrige) => !forrige)}
            aria-expanded={apen}
            aria-label="Meny"
            className="rounded-full border border-border/60 bg-muted/50 px-5 py-2.5 text-[0.9375rem] transition-colors hover:bg-muted md:hidden"
          >
            Meny
          </button>
        </div>

        {apen && (
          <nav className="glass mt-2.5 rounded-lg p-2 md:hidden">
            {navigasjon.map((punkt) => (
              <Link
                key={punkt.url}
                href={punkt.url}
                onClick={() => setApen(false)}
                aria-current={pathname === punkt.url ? "page" : undefined}
                className={cn(
                  "block rounded-md px-4 py-3 text-[0.9375rem] transition-colors",
                  pathname === punkt.url
                    ? "bg-accent-2 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {punkt.navn}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
