import type { Metadata } from "next";
import { profil } from "@/data/profil";
import { SideTopp } from "@/components/SideTopp";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Ta kontakt med ${profil.navn}.`,
};

export default function Kontakt() {
  return (
    <div className="container py-16">
      <SideTopp
        tittel="Kontakt"
        ingress="Send meg gjerne en e-post. Jeg svarer som regel samme dag."
      />

      <ul className="inn mt-10 max-w-xl space-y-4 [animation-delay:120ms]">
        <KontaktRad
          etikett="E-post"
          href={`mailto:${profil.epost}`}
          tekst={profil.epost}
        />

        {profil.telefon && (
          <KontaktRad
            etikett="Telefon"
            href={`tel:${profil.telefon.replace(/\s/g, "")}`}
            tekst={profil.telefon}
          />
        )}

        {profil.lenker.map((lenke) => (
          <KontaktRad
            key={lenke.url}
            etikett={lenke.navn}
            href={lenke.url}
            tekst={lenke.url.replace(/^https?:\/\//, "")}
            ekstern
          />
        ))}
      </ul>
    </div>
  );
}

function KontaktRad({
  etikett,
  href,
  tekst,
  ekstern = false,
}: {
  etikett: string;
  href: string;
  tekst: string;
  /** Åpnes i ny fane. Gjelder lenker ut, ikke e-post og telefon. */
  ekstern?: boolean;
}) {
  return (
    <li className="flate flate-interaktiv rounded-lg p-5">
      <p className="text-sm text-muted-foreground">{etikett}</p>
      <a
        href={href}
        {...(ekstern && { target: "_blank", rel: "noopener noreferrer" })}
        className="mt-1 block rounded-md text-lg font-medium transition-colors hover:text-accent"
      >
        {tekst}
      </a>
    </li>
  );
}
