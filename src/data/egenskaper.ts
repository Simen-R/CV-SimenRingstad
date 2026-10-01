import type { Egenskap } from "@/types/cv";

// Adjektiver alene er gratis å skrive og umulige å etterprøve. Hver egenskap
// her står derfor med et konkret eksempel bak seg, hentet fra jobbene og veien
// jeg faktisk har gått, slik at linjene tåler et oppfølgingsspørsmål i et
// intervju. Rekkefølgen her er rekkefølgen på siden.
//
// `gjemt: true` legger egenskapen bak «Se flere» og holder den ute av PDF-en.
// De fire som står synlig, er de som treffer best i en søknad.
export const egenskaper: Egenskap[] = [
  {
    navn: "Målrettet",
    belegg:
      "Fagbrev, påbygg og bachelor på rad, med jobb ved siden av hele veien. Hvert steg var valgt for å komme dit jeg er nå.",
  },
  {
    navn: "Arbeidsvillig",
    belegg:
      "Studiet på OsloMet, Service Crew i Telia og teknisk ansvar i Snartup går side om side. Fra turnus har jeg med meg at man møter opp når man har sagt at man skal.",
  },
  {
    navn: "Teknisk sterk",
    belegg:
      "Installerer og feilsøker modem, TV-bokser og hjemmenett hos kunder hver uke. Denne siden har jeg bygget og satt i drift selv, med Claude Code som makker.",
  },
  {
    navn: "Handy",
    gjemt: true,
    belegg:
      "Har alltid hatt hendene i noe: dekkskift på Hurum Dekk, montering hjemme hos folk og skruing på mine egne maskiner. Jeg finner som regel ut av det med det jeg har for hånda.",
  },
  {
    navn: "God på kommunikasjon",
    belegg:
      "Har forklart medisinbruk til pårørende og rutere til kunder på døra, og samarbeidet tverrfaglig i begge bransjer. Jobben er den samme: gjøre det uoversiktlige forståelig for den som står foran meg.",
  },
  {
    navn: "Tilpasningsdyktig",
    gjemt: true,
    belegg:
      "Gikk fra helsefag til teknologi og fant meg til rette begge steder. Nye rutiner, nye systemer og nye kolleger krever ikke lang oppvarming.",
  },
  {
    navn: "Rettferdig",
    gjemt: true,
    belegg:
      "Alle får den samme tida og tålmodigheten, enten det er en beboer på sykehjemmet eller en kunde som er lei av at internett faller ut. Jeg sier fra når noe ikke er riktig, også når det er ubehagelig.",
  },
];
