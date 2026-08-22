import type { TidslinjePost } from "@/types/cv";

export const utdanning: TidslinjePost[] = [
  {
    id: "oslomet-bachelor",
    tittel: "Bachelor – fyll inn studieprogram",
    organisasjon: "OsloMet – storbyuniversitetet",
    sted: "Oslo",
    fra: "2024",
    til: "nå",
    beskrivelse:
      "Kort om studieretningen og hvilke emner som er mest relevante for det du søker.",
    punkter: ["Relevante emner: fyll inn", "Eventuell fordypning eller oppgave"],
  },
  {
    id: "videregaende",
    tittel: "Videregående skole",
    organisasjon: "Skolens navn",
    fra: "2021",
    til: "2024",
    beskrivelse: "Studieretning og eventuell fordypning.",
  },
];
