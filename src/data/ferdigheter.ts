import type { FerdighetsGruppe } from "@/types/cv";

// Grupper uten `nivaa` vises som en enkel liste – bruk det til egenskaper og
// annet som ikke lar seg måle på en skala. Nivå 1–5 der 3 = bruker det
// selvstendig og 5 = kan lære det bort.
export const ferdigheter: FerdighetsGruppe[] = [
  {
    navn: "Egenskaper",
    ferdigheter: [
      { navn: "Serviceinnstilt og kundeorientert" },
      { navn: "Ryddig og ansvarsbevisst" },
      { navn: "Gode samarbeidsevner" },
      { navn: "Praktisk og løsningsorientert" },
      { navn: "Punktlig og strukturert" },
      { navn: "Teknologisk og teknisk interessert" },
    ],
  },
  {
    // TODO: Disse nivåene er ikke hentet fra CV-en – sett dem selv, og slett
    // det du ikke faktisk har brukt. Fire på tre ting er mer troverdig enn
    // fem på ti.
    navn: "Teknisk",
    ferdigheter: [
      { navn: "TypeScript", nivaa: 3 },
      { navn: "React", nivaa: 3 },
      { navn: "Next.js", nivaa: 3 },
      { navn: "HTML & CSS", nivaa: 3 },
      { navn: "Git & GitHub", nivaa: 3 },
    ],
  },
  {
    // Verktøynavn framfor kategori: «Claude Code» kan etterprøves i en samtale,
    // «AI» kan ikke. Nivåene er anslag – juster dem selv.
    navn: "Verktøy og arbeidsmåte",
    ferdigheter: [
      { navn: "Claude Code", nivaa: 4 },
      { navn: "AI-assistert utvikling", nivaa: 4 },
      { navn: "Prompting og kontekststyring", nivaa: 3 },
      { navn: "Gjennomgang av AI-generert kode", nivaa: 3 },
    ],
  },
  {
    navn: "Annet",
    ferdigheter: [{ navn: "Førerkort klasse B (med manuell)" }],
  },
];
