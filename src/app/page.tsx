import Link from "next/link";
import { profil } from "@/data/profil";
import { fremhevedeProsjekter } from "@/data/prosjekter";
import { sti } from "@/data/sti";
import { FadeUp } from "@/components/FadeUp";
import { Section } from "@/components/Section";
import { ProsjektKort } from "@/components/ProsjektKort";
import { Sti } from "@/components/Sti";
import { DansendeTittel } from "@/components/DansendeTittel";
import { cn } from "@/lib/utils";

export default function Forside() {
  return (
    <>
      <section className="container relative pb-10 pt-16 sm:pb-14 sm:pt-24">
        {/* Alt over bretten kommer inn med ren CSS, ikke FadeUp. Da er navnet
            synlig fra første maling, også før JavaScript har lastet. */}
        <div className="inn">
          <p className="pille">
            <span
              aria-hidden
              className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"
            />
            {profil.sted}
          </p>
          <DansendeTittel
            tekst={profil.navn}
            className="mt-6 text-5xl font-semibold tracking-stor sm:text-7xl"
          />
          <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
            {profil.tittel}
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed lg:max-w-xl">
            {profil.kortIngress}
          </p>
          {profil.soker && (
            <p className="mt-4 flex max-w-2xl items-baseline gap-2.5 text-pretty font-medium lg:max-w-xl">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full bg-accent"
              />
              {profil.soker}
            </p>
          )}
        </div>

        <div className="inn [animation-delay:120ms]">
          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              {/* Bare én handling er tintet – resten holder seg til glasset. */}
              <Link href="/kontakt" className="knapp-primar">
                Ta kontakt
              </Link>
              <Link href="/prosjekter" className="knapp-glass">
                Se prosjekter
              </Link>
              {profil.cvPdfUrl && (
                <a
                  href={profil.cvPdfUrl}
                  download
                  className="rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Last ned CV (PDF)
                </a>
              )}
            </div>

            {/*
              Samme sjark som under. Her fyller den tomrommet til høyre for
              knappene, fra sm og opp til lg. Over lg står den ved siden av
              navnet i stedet, og under sm er det ikke plass: da tar knappene
              hele rada selv.
            */}
            <span
              aria-hidden
              className="sjark hidden w-44 shrink-0 sm:block md:w-56 lg:hidden"
            />
          </div>
        </div>

        {/*
          Sjarken «Lykken» henger i den tomme høyresida av heroen, med midten
          på linje med navnet. Den er ren pynt: ingen tekst, ingen lenke, og
          ingenting å treffe med pekeren eller tastaturet.

          Under lg er det ikke plass ved siden av ingressen. Da flytter den
          opp i knapperada i stedet, der det står et tomrom til høyre.
        */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <span
            aria-hidden
            className="inn sjark block w-[19rem] [animation-delay:200ms] xl:w-[23rem]"
          />
        </div>
      </section>

      <Sti innhold={sti} />

      <Section
        tittel="Utvalgte prosjekter"
        ingress="Ting jeg har bygget, fra idé til noe folk faktisk bruker."
      >
        {/* Tre prosjekter fyller én rad på tre. Med fire blir det to og to,
            i stedet for en rad på tre og ett kort som står alene under. */}
        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2",
            fremhevedeProsjekter.length % 3 === 0 && "lg:grid-cols-3",
          )}
        >
          {fremhevedeProsjekter.map((prosjekt, indeks) => (
            <FadeUp key={prosjekt.id} delay={indeks * 80} className="h-full">
              <ProsjektKort prosjekt={prosjekt} />
            </FadeUp>
          ))}
        </div>
        <Link
          href="/prosjekter"
          className="mt-8 inline-block rounded-full text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Alle prosjekter →
        </Link>
      </Section>
    </>
  );
}
