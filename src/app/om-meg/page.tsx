import type { Metadata } from "next";
import { profil } from "@/data/profil";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Om meg",
  description: profil.kortIngress,
};

export default function OmMeg() {
  return (
    <div className="container py-16">
      <FadeUp>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Om meg
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed">
          {profil.omMeg.map((avsnitt) => (
            <p key={avsnitt}>{avsnitt}</p>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={120}>
        <dl className="mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted-foreground">Sted</dt>
            <dd className="mt-1 font-medium">{profil.sted}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">E-post</dt>
            <dd className="mt-1 font-medium">
              <a href={`mailto:${profil.epost}`} className="hover:underline">
                {profil.epost}
              </a>
            </dd>
          </div>
        </dl>
      </FadeUp>
    </div>
  );
}
