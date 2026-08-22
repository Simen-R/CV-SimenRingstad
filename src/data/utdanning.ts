import type { TidslinjePost } from "@/types/cv";

export const utdanning: TidslinjePost[] = [
  {
    id: "oslomet-anvendt-datateknologi",
    tittel: "Bachelor i anvendt datateknologi",
    organisasjon: "OsloMet – storbyuniversitetet",
    sted: "Oslo",
    fra: "2024",
    til: "nå",
    beskrivelse:
      "TODO: én setning om hva du fordyper deg i og hva som er mest relevant.",
    // TODO: Emner veier tungt når du er tidlig i karrieren – fyll inn de mest relevante.
    punkter: ["Relevante emner: TODO"],
  },
  {
    id: "lier-paabygg",
    tittel: "Påbygg til studiespesialiserende",
    organisasjon: "Lier videregående skole",
    fra: "2022",
    til: "2023",
    beskrivelse:
      "Generell studiekompetanse etter fagbrevet – grunnlaget for å søke OsloMet.",
  },
  {
    id: "royken-helsefag",
    tittel: "Helse og oppvekst",
    organisasjon: "Røyken videregående skole",
    fra: "2018",
    til: "2022",
    beskrivelse:
      "Helse- og oppvekstfag, avsluttet med fagbrev som helsefagarbeider.",
  },
];
