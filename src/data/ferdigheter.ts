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
    // Uten nivå med vilje: dette er stakken jeg har bygget i, ikke noe jeg
    // påstår å mestre alene ennå. Selvstendigheten hører hjemme i gruppa
    // under, der den faktisk kan etterprøves.
    navn: "Bygget med",
    ferdigheter: [
      { navn: "TypeScript" },
      { navn: "React" },
      { navn: "Next.js" },
      { navn: "HTML & CSS" },
    ],
  },
  {
    // Verktøynavn framfor kategori: «Claude Code» kan etterprøves i en samtale,
    // «AI» kan ikke. Dette er den sterkeste gruppa – Claude Code er verktøyet
    // som er brukt daglig gjennom hele dette prosjektet.
    navn: "Verktøy og arbeidsmåte",
    ferdigheter: [
      { navn: "Claude Code", nivaa: 5 },
      { navn: "AI-assistert utvikling", nivaa: 4 },
      { navn: "Prompting og kontekststyring", nivaa: 4 },
      { navn: "Git & GitHub", nivaa: 3 },
      { navn: "Gjennomgang av AI-generert kode", nivaa: 3 },
    ],
  },
  {
    navn: "Annet",
    ferdigheter: [{ navn: "Førerkort klasse B (med manuell)" }],
  },
];
