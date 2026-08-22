import type { TidslinjePost } from "@/types/cv";

// Nyeste først – rekkefølgen i denne lista er rekkefølgen på siden.
export const erfaring: TidslinjePost[] = [
  {
    id: "stillingstittel-arbeidsgiver",
    tittel: "Stillingstittel",
    organisasjon: "Arbeidsgiver",
    sted: "Oslo",
    fra: "2024",
    til: "nå",
    beskrivelse:
      "En setning om hva rollen går ut på og hva du har ansvar for.",
    punkter: [
      "Konkret resultat eller oppgave – gjerne med et tall.",
      "Noe du bygde, forbedret eller innførte.",
    ],
    stikkord: ["Kundekontakt", "Salg"],
  },
  {
    id: "tidligere-rolle",
    tittel: "Tidligere rolle",
    organisasjon: "Tidligere arbeidsgiver",
    fra: "2022",
    til: "2024",
    beskrivelse: "Kort beskrivelse av hva du gjorde her.",
    stikkord: ["Teamarbeid"],
  },
];
