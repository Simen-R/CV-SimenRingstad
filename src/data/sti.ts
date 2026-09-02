import type { StiInnhold } from "@/types/cv";

// Stien er tegnet som en ryggrad: én loddrett linje ned midten, med arbeid på
// venstre side og skole på høyre. Rekkefølgen i lista er rekkefølgen nedover,
// nyeste først, så et nytt stopp legges bare inn på riktig plass.
//
// Alt som pågår nå (Snartup, Telia og studiet) ligger øverst og farger linja
// gjennom sine rader. Under der er linja grå.
//
// Hvert stopp har to lag. Det lukkede kortet er fortellinga: én setning, og to
// eller tre merkelapper for hva jeg tok med meg. Åpner du kortet, kommer
// CV-innholdet fram: utdyping, punkter og stikkord. Stopp uten de feltene står
// som vanlige bokser og kan ikke åpnes.
export const sti: StiInnhold = {
  tittel: "Veien hit",
  spenn: "2016–nå",
  spor: { arbeid: "Arbeid", skole: "Skole og fagbrev" },

  nesteStopp: {
    merkelapp: "Neste stopp",
    tittel: "Er dere mitt neste stopp?",
    lenke: { href: "/kontakt", tekst: "Ta kontakt" },
  },

  noder: [
    {
      // Ett stopp på kartet, selv om rollen har skiftet form tre ganger:
      // inn som selvstendig IT-arbeider, så studentassistent, så CTO.
      // Hele rekkefølgen står i punktene.
      id: "snartup",
      tittel: "CTO",
      organisasjon: "Snartup",
      periode: "2026–nå",
      beskrivelse:
        "Inn som selvstendig IT-arbeider, videre som studentassistent, og CTO fra september 2026.",
      spor: "arbeid",
      paagaaende: true,
      utdyping: "Teknisk ansvar i en tidligfase-startup, ved siden av studiet.",
      punkter: [
        "Kom inn som IT-arbeider gjennom mitt eget enkeltpersonforetak.",
        "Ansatt som studentassistent gjennom SEFiO, Studentenes Entreprenørfond i Oslo.",
        "Går inn i rollen som CTO fra september 2026.",
        "Bygger med AI-verktøy i det daglige.",
      ],
      stikkord: [
        "Teknisk ledelse",
        "Webutvikling",
        "Selvstendig næringsdrivende",
        "Startup",
      ],
    },
    {
      id: "telia",
      tittel: "Service Crew",
      organisasjon: "Telia Norge AS",
      periode: "2024–nå",
      beskrivelse:
        "Hjem til kunder for å installere og feilsøke TV-bokser og modem.",
      spor: "arbeid",
      paagaaende: true,
      utdyping:
        "Del av Telia Personlig Service Crew, med Oslo som arbeidsområde.",
      stikkord: [
        "Teknisk kundeservice",
        "Feilsøking",
        "Kundekontakt",
        "Selvstendig arbeid",
      ],
    },
    {
      // TODO: punktene under er skrevet ut fra studiesiden hos OsloMet, ikke ut
      // fra emnene Simen faktisk har tatt. Vi kommer tilbake hit og bytter dem
      // mot konkrete emner, prosjekter og karakterer når lista er klar.
      id: "anvendt-datateknologi",
      tittel: "Anvendt datateknologi",
      organisasjon: "OsloMet, bachelor",
      periode: "2024–nå",
      beskrivelse:
        "Steget fra helsefag til teknologi, med påbygget som mellomledd.",
      spor: "skole",
      paagaaende: true,
      utdyping:
        "Treårig bachelor på 180 studiepoeng ved Pilestredet i Oslo. Studiet handler om å designe og utvikle løsninger som er til å bruke for alle.",
      punkter: [
        "Programmering, databaser og hvordan delene i et IT-system henger sammen.",
        "Webutvikling, mobilapper og universell utforming gjennom hele løpet.",
        "Valgte spesialiseringen i teknologi-innovasjon og entreprenørskap, som går rett inn i arbeidet i Snartup.",
      ],
      stikkord: [
        "Programmering",
        "Databaser",
        "Webutvikling",
        "Entreprenørskap",
      ],
      lenke: {
        href: "https://www.oslomet.no/studier/tkd/anvendt-datateknologi",
        tekst: "Om studiet på oslomet.no",
      },
    },
    {
      id: "hjemmetjenesten",
      tittel: "Tilkallingsvikar",
      organisasjon: "Hjemmesykepleien, Asker kommune",
      periode: "2023–2024",
      beskrivelse:
        "Alene hjemme hos pasienter, med ansvar for at det gikk riktig for seg.",
      spor: "arbeid",
      medbrakt: ["Møte folk hjemme", "Selvstendig ansvar"],
      utdyping:
        "Vakter på tilkalling, med varierte oppgaver innen pleie og omsorg.",
      punkter: [
        "Sikret høy kvalitet og trygghet i tjenesteleveransen.",
        "Kommuniserte med pasienter, pårørende, kolleger og tverrfaglige enheter.",
      ],
      stikkord: ["Pleie og omsorg", "Tverrfaglig samarbeid", "Dokumentasjon"],
    },
    {
      // Den ene sesongjobben som ble stående da /erfaring ble lagt ned. Kort,
      // men den viser noe stien ellers ikke har: verkstedgulv og tempo.
      id: "hurum-dekk",
      tittel: "Sesongarbeider",
      organisasjon: "Hurum Dekk",
      periode: "Høst 2023",
      beskrivelse: "Dekkskift, rengjøring og kontroll av kundebiler.",
      spor: "arbeid",
      medbrakt: ["Praktisk arbeid", "Tempo"],
      punkter: [
        "Sørget for effektiv drift gjennom godt samarbeid og rask tilpasning til nye rutiner.",
      ],
      stikkord: ["Kvalitetskontroll"],
    },
    {
      id: "sykehjem-asker",
      tittel: "Fast stilling",
      organisasjon: "Sykehjem, Asker kommune",
      periode: "2022–2023",
      beskrivelse:
        "Pleie og omsorg i turnus, tett på kolleger og beboere hver vakt.",
      spor: "arbeid",
      medbrakt: ["Ro under press", "Dokumentasjon", "Turnus"],
      utdyping: "Fast stilling som helsefagarbeider på avdeling.",
      punkter: ["Jobbet for å sikre trygghet og trivsel i avdelingen."],
      stikkord: ["Pleie og omsorg", "Teamarbeid", "Ansvar"],
    },
    {
      // Påbygget kom etter fagbrevet, så det står over her.
      id: "lier-paabygg",
      tittel: "Påbygg til studiespesialiserende",
      organisasjon: "Lier videregående skole",
      periode: "2022–2023",
      beskrivelse:
        "Tok generell studiekompetanse etter fagbrevet. Det var døra inn til OsloMet.",
      spor: "skole",
      medbrakt: ["Studiekompetanse", "Realfag"],
    },
    {
      id: "fagbrev",
      tittel: "Helsefagarbeider",
      organisasjon: "Fagbrev",
      periode: "2022",
      beskrivelse:
        "Det som gjorde helsefag til et yrke og ikke bare en linje på skolen.",
      spor: "skole",
      medbrakt: ["Fagbrev", "Pleie og omsorg"],
    },
    {
      id: "royken-helse-og-oppvekst",
      tittel: "Helse og oppvekst",
      organisasjon: "Røyken videregående skole",
      periode: "2018–2022",
      beskrivelse:
        "Helse- og oppvekstfag, med praksis i pleie og omsorg hele veien.",
      spor: "skole",
      medbrakt: ["Grunnfag", "Praksis"],
    },
    {
      // Står nederst fordi det startet først, selv om det varte lengst. Den
      // gikk året rundt gjennom hele stien og startet før den.
      id: "hagearbeid-private",
      tittel: "Gartner og altmuligmann",
      organisasjon: "Private oppdragsgivere",
      periode: "2016–2023",
      beskrivelse:
        "Egne kunder året rundt ved siden av skole og jobb, fra hagearbeid om sommeren til snømåking om vinteren.",
      spor: "arbeid",
      medbrakt: ["Egne kunder", "Året rundt"],
      utdyping:
        "Hagearbeid og småjobber om sommeren, løvblåsing om høsten, snømåking om vinteren og klargjøring av hagen om våren.",
      punkter: [
        "Skaffet og beholdt kunder år etter år.",
        "Avtalte og planla oppdragene selv, og gjennomførte dem på egen hånd.",
        "Stilte opp når det trengtes, også på kort varsel etter snøfall.",
      ],
      stikkord: ["Praktisk arbeid", "Selvstendig arbeid"],
    },
  ],
};
