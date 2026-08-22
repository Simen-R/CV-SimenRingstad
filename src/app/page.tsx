import Link from "next/link";
import { profil } from "@/data/profil";
import { fremhevedeProsjekter } from "@/data/prosjekter";
import { sti } from "@/data/sti";
import { FadeUp } from "@/components/FadeUp";
import { Section } from "@/components/Section";
import { ProsjektKort } from "@/components/ProsjektKort";
import { Sti } from "@/components/Sti";

export default function Forside() {
  return (
    <>
      <section className="container pb-10 pt-16 sm:pb-14 sm:pt-24">
        <FadeUp>
          <p className="pille">
            <span
              aria-hidden
              className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"
            />
            {profil.sted}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-stor sm:text-7xl">
            {profil.navn}
          </h1>
          <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
            {profil.tittel}
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed">
            {profil.kortIngress}
          </p>
        </FadeUp>

        <FadeUp delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
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
                className="rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Last ned CV (PDF)
              </a>
            )}
          </div>
        </FadeUp>
      </section>

      <Sti innhold={sti} />

      <Section
        tittel="Utvalgte prosjekter"
        ingress="Ting jeg har bygget, fra idé til noe folk faktisk bruker."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
