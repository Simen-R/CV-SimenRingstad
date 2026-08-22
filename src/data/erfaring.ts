import type { TidslinjePost } from "@/types/cv";

// Hentet fra CV-en (2026). Nyeste først – rekkefølgen her er rekkefølgen på siden.
export const erfaring: TidslinjePost[] = [
  {
    // Tre former for samme sted: først som selvstendig gjennom eget
    // enkeltpersonforetak, så studentassistent gjennom SEFiO, og CTO fra
    // september 2026. Én oppføring – historikken står i punktene.
    id: "snartup",
    tittel: "CTO",
    organisasjon: "Snartup",
    fra: "2026-05",
    til: "nå",
    beskrivelse:
      "Teknisk ansvar i en tidligfase-startup, ved siden av studiet.",
    punkter: [
      "Kom inn som IT-arbeider gjennom mitt eget enkeltpersonforetak.",
      "Ansatt som studentassistent gjennom SEFiO – Studentenes Entreprenørfond i Oslo.",
      "Går inn i rollen som CTO fra september 2026.",
      "Bygger med AI-verktøy i det daglige – særlig Claude Code – og går gjennom det som blir foreslått før det går videre.",
    ],
    stikkord: [
      "Teknisk ledelse",
      "Webutvikling",
      "Selvstendig næringsdrivende",
      "Startup",
    ],
  },
  {
    id: "telia-service-crew",
    tittel: "Service Crew",
    organisasjon: "Telia Norge AS",
    sted: "Oslo",
    fra: "2024",
    til: "nå",
    beskrivelse:
      "Del av Telia Personlig Service Crew – jeg besøker kunder for å levere og installere Telia-utstyr som TV-bokser og modem.",
    stikkord: [
      "Teknisk kundeservice",
      "Feilsøking",
      "Kundekontakt",
      "Selvstendig arbeid",
    ],
  },
  {
    id: "hjemmetjenesten-asker",
    tittel: "Tilkallingsvikar",
    organisasjon: "Hjemmetjenesten, Asker kommune",
    sted: "Asker",
    fra: "2023-05",
    til: "2024",
    beskrivelse:
      "Varierte oppgaver innen pleie og omsorg hjemme hos pasienter.",
    punkter: [
      "Sikret høy kvalitet og trygghet i tjenesteleveransen.",
      "Kommuniserte med pasienter, pårørende, kolleger og tverrfaglige enheter.",
    ],
    stikkord: ["Pleie og omsorg", "Tverrfaglig samarbeid", "Dokumentasjon"],
  },
  {
    id: "hurum-dekk",
    tittel: "Sesongarbeider",
    organisasjon: "Hurum Dekk",
    fra: "Høst 2023",
    til: "Høst 2023",
    beskrivelse: "Dekkskift, rengjøring og kontroll av kundebiler.",
    punkter: [
      "Sørget for effektiv drift gjennom godt samarbeid og rask tilpasning til nye rutiner.",
    ],
    stikkord: ["Praktisk arbeid", "Tempo", "Kvalitetskontroll"],
  },
  {
    id: "sykehjem-asker",
    tittel: "Helsefagarbeider",
    organisasjon: "Sykehjem, Asker kommune",
    sted: "Asker",
    fra: "2022",
    til: "2023",
    beskrivelse: "Pleie og omsorg for beboere, i tett samarbeid med kolleger.",
    punkter: ["Jobbet for å sikre trygghet og trivsel i avdelingen."],
    stikkord: ["Pleie og omsorg", "Teamarbeid", "Ansvar"],
  },
  {
    id: "coop-extra-tofte",
    tittel: "Butikkmedarbeider",
    organisasjon: "Coop Extra, Tofte",
    fra: "Sommeren 2020",
    til: "Sommeren 2020",
    beskrivelse: "Kundebehandling, varepåfylling og kassaarbeid.",
    punkter: ["Bidro til et ryddig og effektivt butikkmiljø."],
    stikkord: ["Kundebehandling", "Orden"],
  },
];
