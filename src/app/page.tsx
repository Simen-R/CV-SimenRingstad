import Link from "next/link";
import { profil } from "@/data/profil";
import { fremhevedeProsjekter } from "@/data/prosjekter";
import { erfaring } from "@/data/erfaring";
import { FadeUp } from "@/components/FadeUp";
import { Section } from "@/components/Section";
import { ProsjektKort } from "@/components/ProsjektKort";

export default function Forside() {
  return (
    <>
      <section className="container py-20 sm:py-28">
        <FadeUp>
          <p className="text-sm text-muted-foreground">{profil.sted}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {profil.navn}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground">{profil.tittel}</p>
          <p className="mt-6 max-w-2xl text-lg">{profil.kortIngress}</p>
        </FadeUp>

        <FadeUp delay={120}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ta kontakt
            </Link>
            <Link
              href="/prosjekter"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Se prosjekter
            </Link>
            {profil.cvPdfUrl && (
              <a
                href={profil.cvPdfUrl}
                className="rounded-md px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Last ned CV (PDF)
              </a>
            )}
          </div>
        </FadeUp>
      </section>

      <Section
        tittel="Utvalgte prosjekter"
        ingress="Ting jeg har bygget – fra idé til noe folk faktisk bruker."
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
          className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
        >
          Alle prosjekter →
        </Link>
      </Section>

      <Section tittel="Hvor jeg er nå" ingress="Kort oppsummert.">
        <ul className="space-y-4">
          {erfaring.slice(0, 2).map((post, indeks) => (
            <FadeUp key={post.id} delay={indeks * 80}>
              <li className="rounded-lg border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">
                  {post.fra} – {post.til}
                </p>
                <p className="mt-1 font-semibold">
                  {post.tittel}, {post.organisasjon}
                </p>
                <p className="mt-2 text-muted-foreground">{post.beskrivelse}</p>
              </li>
            </FadeUp>
          ))}
        </ul>
        <Link
          href="/erfaring"
          className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
        >
          Hele erfaringen →
        </Link>
      </Section>
    </>
  );
}
