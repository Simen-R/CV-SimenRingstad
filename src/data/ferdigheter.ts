import type { FerdighetsGruppe } from "@/types/cv";

// Grupper uten `nivaa` vises som en enkel liste. Bruk det til det som ikke
// lar seg måle på en skala. Nivå 1 til 5, der 3 = bruker det selvstendig og
// 5 = kan lære det bort.
//
// Egenskapene bor i `egenskaper.ts` og ikke her: de skal stå med eksempelet
// bak seg, ikke som løse stikkord i et kort.
export const ferdigheter: FerdighetsGruppe[] = [
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
