import type { FerdighetsGruppe } from "@/types/cv";

// Nivå 1–5: 1 = har prøvd, 3 = bruker det selvstendig, 5 = kan lære det bort.
export const ferdigheter: FerdighetsGruppe[] = [
  {
    navn: "Frontend",
    ferdigheter: [
      { navn: "TypeScript", nivaa: 4 },
      { navn: "React", nivaa: 4 },
      { navn: "Next.js", nivaa: 4 },
      { navn: "Tailwind CSS", nivaa: 4 },
      { navn: "HTML & CSS", nivaa: 5 },
    ],
  },
  {
    navn: "Verktøy",
    ferdigheter: [
      { navn: "Git & GitHub", nivaa: 4 },
      { navn: "Vercel", nivaa: 3 },
      { navn: "Figma", nivaa: 3 },
    ],
  },
  {
    navn: "Språk",
    ferdigheter: [
      { navn: "Norsk – morsmål", nivaa: 5 },
      { navn: "Engelsk – flytende", nivaa: 4 },
    ],
  },
];
