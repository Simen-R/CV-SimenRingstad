import type { StiInnhold } from "@/types/cv";

// Stien er tegnet som et kart, ikke som en liste: hver boks har en fast plass
// (kolonne + rad), og `ledetTil` sier hvilke bokser det går pil til. Rad 1 er
// nåtid, og tallene vokser bakover i tid. Kolonnene holder de tre sporene fra
// hverandre – jobb til venstre, det som møtes i midten, skolen til høyre.
//
// Sesongjobbene (Coop Extra, Hurum Dekk) er med vilje holdt utenfor – de står
// på /erfaring, og stien skal fortelle én historie, ikke liste alt.
export const sti: StiInnhold = {
  tittel: "Veien hit",

  noder: [
    {
      id: "telia",
      tittel: "Service Crew",
      organisasjon: "Telia Norge AS",
      periode: "2024–nå",
      beskrivelse:
        "Hjem til kunder for å installere og feilsøke TV-bokser og modem.",
      type: "jobb",
      kolonne: 1,
      rad: 1,
      paagaaende: true,
      ledetTil: ["snartup"],
    },
    {
      // Ett stopp på kartet, selv om rollen har skiftet form tre ganger:
      // inn som selvstendig IT-arbeider, så studentassistent, så CTO.
      // Hele rekkefølgen står på /erfaring.
      id: "snartup",
      tittel: "CTO",
      organisasjon: "Snartup",
      periode: "2026–nå",
      beskrivelse:
        "Inn som selvstendig IT-arbeider, videre som studentassistent – og CTO fra september 2026.",
      type: "jobb",
      kolonne: 2,
      rad: 1,
      paagaaende: true,
      ledetTil: [],
    },
    {
      id: "anvendt-datateknologi",
      tittel: "Anvendt datateknologi",
      organisasjon: "OsloMet",
      periode: "2024–nå",
      beskrivelse:
        "Bachelor. Steget fra helsefag til teknologi, med påbygget som mellomledd.",
      type: "utdanning",
      kolonne: 3,
      rad: 1,
      paagaaende: true,
      ledetTil: ["snartup"],
    },
    {
      id: "hjemmetjenesten",
      tittel: "Tilkallingsvikar",
      organisasjon: "Hjemmesykepleien, Asker kommune",
      periode: "2023–2024",
      beskrivelse:
        "Alene hjemme hos pasienter, med ansvar for at det gikk riktig for seg.",
      type: "jobb",
      kolonne: 2,
      rad: 2,
      medbrakt: ["Møte folk hjemme", "Selvstendig ansvar"],
      ledetTil: ["telia"],
    },
    {
      id: "sykehjem-asker",
      tittel: "Fast stilling",
      organisasjon: "Sykehjem, Asker kommune",
      periode: "2022–2023",
      beskrivelse:
        "Pleie og omsorg i turnus, tett på kolleger og beboere hver vakt.",
      type: "jobb",
      kolonne: 2,
      rad: 3,
      medbrakt: ["Ro under press", "Dokumentasjon", "Turnus"],
      ledetTil: ["hjemmetjenesten"],
    },
    {
      // TODO: Sjekk året for fagbrevet, og om det kom før eller etter påbygget.
      // Pilene her følger skissen: påbygg → fagbrev → sykehjem og studiet.
      id: "fagbrev",
      tittel: "Helsefagarbeider",
      periode: "2022",
      beskrivelse:
        "Fagbrevet. Det som gjorde helsefag til et yrke og ikke bare en linje på skolen.",
      type: "milepael",
      kolonne: 3,
      rad: 3,
      medbrakt: ["Fagbrev", "Pleie og omsorg"],
      ledetTil: ["sykehjem-asker", "anvendt-datateknologi"],
    },
    {
      id: "lier-paabygg",
      tittel: "Påbygg til studiespesialiserende",
      organisasjon: "Lier videregående skole",
      periode: "2022–2023",
      beskrivelse:
        "Tok generell studiekompetanse etter fagbrevet – døra inn til OsloMet.",
      type: "utdanning",
      kolonne: 3,
      rad: 4,
      medbrakt: ["Studiekompetanse", "Realfag"],
      ledetTil: ["fagbrev"],
    },
    {
      id: "royken-helse-og-oppvekst",
      tittel: "Helse og oppvekst",
      organisasjon: "Røyken videregående skole",
      periode: "2018–2022",
      beskrivelse:
        "Helse- og oppvekstfag, med praksis i pleie og omsorg hele veien.",
      type: "utdanning",
      kolonne: 3,
      rad: 5,
      medbrakt: ["Grunnfag", "Praksis"],
      ledetTil: ["lier-paabygg"],
    },
  ],
};
