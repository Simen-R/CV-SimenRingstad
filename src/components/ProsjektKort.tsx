import Image from "next/image";
import type { Prosjekt } from "@/types/cv";
import { cn } from "@/lib/utils";

export function ProsjektKort({ prosjekt }: { prosjekt: Prosjekt }) {
  return (
    <article className="flate flate-interaktiv flex h-full flex-col overflow-hidden rounded-lg">
      {/* Bildet går helt ut til kanten av kortet, og kortet klipper hjørnene. */}
      <ProsjektBilde
        prosjekt={prosjekt}
        sizes="(min-width: 1100px) 530px, (min-width: 640px) 50vw, 100vw"
        className="border-b border-border/60"
      />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted-foreground">{prosjekt.aar}</p>
        <h3 className="mt-1 text-lg font-semibold">{prosjekt.navn}</h3>
        <p className="mt-2 text-pretty text-muted-foreground">
          {prosjekt.ingress}
        </p>

        <Teknologier prosjekt={prosjekt} className="mt-4" />

        {/* Lenka skyves ned, så kortene i rekka får samme bunnlinje. */}
        <ProsjektLenker prosjekt={prosjekt} className="mt-auto pt-6" />
      </div>
    </article>
  );
}

/**
 * Skjermbildet av prosjektet, beskåret til 2:1 fra toppen. Der står logoen
 * og overskrifta, og det er det som sier hva prosjektet er. Uten bilde
 * tegnes ingenting, og kortet blir rent tekst.
 */
export function ProsjektBilde({
  prosjekt,
  sizes,
  className,
}: {
  prosjekt: Prosjekt;
  /** Hvor bredt bildet vises, så Next ikke sender større filer enn nødvendig. */
  sizes: string;
  className?: string;
}) {
  if (!prosjekt.bildeUrl) return null;

  return (
    <div className={cn("relative aspect-[2/1] overflow-hidden bg-muted", className)}>
      <Image
        src={prosjekt.bildeUrl}
        alt={`Skjermbilde av ${prosjekt.navn}`}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}

/** Teknologiene som piller. Delt mellom kortet og prosjektsiden. */
export function Teknologier({
  prosjekt,
  className,
}: {
  prosjekt: Prosjekt;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {prosjekt.teknologier.map((teknologi) => (
        <li key={teknologi} className="pille">
          {teknologi}
        </li>
      ))}
    </ul>
  );
}

/**
 * Lenkene ut: demoen først, med notatet sitt rett etter, og koden til slutt.
 * Har prosjektet ingen av delene, tegnes ingenting.
 */
export function ProsjektLenker({
  prosjekt,
  className,
}: {
  prosjekt: Prosjekt;
  className?: string;
}) {
  if (!prosjekt.demoUrl && !prosjekt.demoNotat && !prosjekt.kodeUrl) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-baseline gap-x-5 gap-y-1 text-sm",
        className,
      )}
    >
      {prosjekt.demoUrl && <UtLenke href={prosjekt.demoUrl}>Se live</UtLenke>}
      {prosjekt.demoNotat && (
        <span className="text-muted-foreground">{prosjekt.demoNotat}</span>
      )}
      {prosjekt.kodeUrl && (
        <UtLenke href={prosjekt.kodeUrl}>Se koden</UtLenke>
      )}
    </div>
  );
}

function UtLenke({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full font-medium text-accent transition-opacity hover:opacity-80"
    >
      {children} →
    </a>
  );
}
