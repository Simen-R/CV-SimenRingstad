import type { Prosjekt } from "@/types/cv";

export const prosjekter: Prosjekt[] = [
  {
    id: "pris-kalkulator",
    navn: "Priskalkulator",
    ingress:
      "Internt salgsverktøy som regner ut riktig pakke og pris ut fra kundens behov.",
    beskrivelse:
      "Web-app som tar kundens behov for båndbredde og TV-innhold og regner ut hvilken pakke som passer, med sammenligning mot konkurrentenes priser. Bygget som en ren regnemotor i TypeScript med et tynt UI-lag over, slik at prislogikken kan testes for seg.",
    aar: "2026",
    rolle: "Utvikler – idé, logikk og grensesnitt",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS"],
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
    id: "snartup-forside",
    navn: "Snartup – forside",
    ingress: "Landingsside med videobakgrunn og partnerkarusell.",
    beskrivelse:
      "Forside bygget i ren HTML, CSS og JavaScript, med videobakgrunn, kortseksjon og en logokarusell som ruller kontinuerlig.",
    aar: "2026",
    rolle: "Utvikler",
    teknologier: ["HTML", "CSS", "JavaScript"],
    kodeUrl: "https://github.com/Simen-R/frontpage",
    fremhevet: true,
  },
];

export const fremhevedeProsjekter = prosjekter.filter((p) => p.fremhevet);
