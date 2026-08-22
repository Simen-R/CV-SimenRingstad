import type { Prosjekt } from "@/types/cv";

export const prosjekter: Prosjekt[] = [
  {
    // Repoet er privat, så her står bare demoUrl – ingen kodeUrl.
    // TODO: fyll ut teknologilista. Next.js og Firebase er lest ut av selve
    // nettstedet; resten (TypeScript? Tailwind? Firestore?) vet bare du.
    id: "snartup-plattform",
    navn: "Snartup.no",
    ingress:
      "Markedsplassen for ideer, innovasjon og samarbeid. Dette er plattformen jeg utvikler hos Snartup.",
    beskrivelse:
      "Nettplattform som kobler studenter, gründere og næringsliv: prosjekter og profiler, et interaktivt kart over startup-økosystemet, og påmelding til arrangementer. Jeg jobber på hele kodebasen, ikke én enkelt side: Next.js i front, Firebase i bunn, med feilovervåking og analyse på plass i produksjon.",
    aar: "2026",
    rolle: "Utvikler på hele kodebasen",
    teknologier: ["Next.js", "React", "Firebase"],
    demoUrl: "https://snartup.no",
    fremhevet: true,
  },
  {
    id: "pris-kalkulator",
    navn: "Priskalkulator",
    ingress:
      "Internt salgsverktøy som regner ut riktig pakke og pris ut fra kundens behov.",
    beskrivelse:
      "Web-app som tar kundens behov for båndbredde og TV-innhold og regner ut hvilken pakke som passer, med sammenligning mot konkurrentenes priser. Bygget som en ren regnemotor i TypeScript med et tynt UI-lag over, slik at prislogikken kan testes for seg.",
    aar: "2026",
    rolle: "Utvikler med ansvar for idé, logikk og grensesnitt",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://pris-kalkulator.vercel.app/",
    demoNotat: "Tilgangskode: 2222",
    kodeUrl: "https://github.com/Simen-R/Pris-kalkulator",
    fremhevet: true,
  },
  {
    id: "akuttmedisin",
    navn: "Akuttmedisin.com",
    ingress:
      "Nettsted for et selskap som leverer kurs, simulering og arrangementvakthold.",
    beskrivelse:
      "Flersides nettsted med tjenestesider, prisside og kontaktskjema. Fokus på rask lasting, tydelig innholdsstruktur og sikre HTTP-headere.",
    aar: "2026",
    rolle: "Utvikler og design",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://www.akuttmedisin.com",
    fremhevet: true,
  },
  {
    id: "cv-nettside",
    navn: "Denne CV-siden",
    ingress: "Digital CV bygget i Next.js, med Claude Code som medutvikler.",
    beskrivelse:
      "Alt innholdet ligger som typede data i src/data, så teksten kan endres uten å røre komponentene. «Veien hit» på forsiden er et flytskjema der pilene måles opp ut fra hvor kortene faktisk havner i rutenettet, og faller tilbake til tekst på smale skjermer. Bygget sammen med Claude Code: jeg satte arkitekturen, datamodellen og innholdet, og brukte modellen til å skrive og skrive om koden, og til å diskutere hva som burde stå hvor.",
    aar: "2026",
    rolle: "Utvikler med ansvar for arkitektur, datamodell og innhold",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code"],
    kodeUrl: "https://github.com/Simen-R/CV-SimenRingsatd",
    fremhevet: true,
  },
];

export const fremhevedeProsjekter = prosjekter.filter((p) => p.fremhevet);
