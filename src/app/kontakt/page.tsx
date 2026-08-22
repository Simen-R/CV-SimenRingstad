import type { Metadata } from "next";
import { profil } from "@/data/profil";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Ta kontakt med ${profil.navn}.`,
};

export default function Kontakt() {
  return (
    <div className="container py-16">
      <FadeUp>
        <h1 className="text-4xl font-semibold tracking-stor sm:text-5xl">
          Kontakt
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Send meg gjerne en e-post – jeg svarer som regel samme dag.
        </p>
      </FadeUp>

      <FadeUp delay={120}>
        <ul className="mt-10 max-w-xl space-y-4">
          <li className="flate flate-interaktiv rounded-lg p-5">
            <p className="text-sm text-muted-foreground">E-post</p>
            <a
              href={`mailto:${profil.epost}`}
              className="mt-1 block rounded-md text-lg font-medium transition-colors hover:text-accent"
            >
              {profil.epost}
            </a>
          </li>

          {profil.telefon && (
            <li className="flate flate-interaktiv rounded-lg p-5">
              <p className="text-sm text-muted-foreground">Telefon</p>
              <a
                href={`tel:${profil.telefon.replace(/\s/g, "")}`}
                className="mt-1 block rounded-md text-lg font-medium transition-colors hover:text-accent"
              >
                {profil.telefon}
              </a>
            </li>
          )}

          {profil.lenker.map((lenke) => (
            <li key={lenke.url} className="flate flate-interaktiv rounded-lg p-5">
              <p className="text-sm text-muted-foreground">{lenke.navn}</p>
              <a
                href={lenke.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-md text-lg font-medium transition-colors hover:text-accent"
              >
                {lenke.url.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </div>
  );
}
