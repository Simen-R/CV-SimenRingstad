import type { Prosjekt } from "@/types/cv";

export const prosjekter: Prosjekt[] = [
  {
    // Repoet er privat, så her står bare demoUrl – ingen kodeUrl.
    // TODO: fyll ut teknologilista. Next.js og Firebase er lest ut av selve
    // nettstedet; resten (TypeScript? Tailwind? Firestore?) vet bare du.
    id: "snartup-plattform",
    navn: "Snartup.no",
    // Uten årstall og deltakertall med vilje, så teksten holder seg sann fra
    // festival til festival.
    ingress:
      "Plattformen bak Snartup Festival, den årlige møteplassen for innovasjon og oppstart i Oslo.",
    beskrivelse:
      "Snartup er møteplassen der studenter, gründere, akademia og næringsliv i Oslo finner hverandre. Hvert år samles miljøet på Snartup Festival, med pitchkonkurranse, utstillinger og partnere som BI, UiO, OsloMet og Oslo kommune. Plattformen holder miljøet samlet mellom festivalene, med startups, prosjekter og challenges som søker samarbeid, et kart over økosystemet og oversikt over arrangementer. Som CTO har jeg ansvaret for hele kodebasen, med Next.js i front, Firebase i bunn og feilovervåking og analyse i produksjon.",
    aar: "2026",
    rolle: "CTO, med ansvar for plattformen",
    teknologier: ["Next.js", "React", "Firebase"],
    demoUrl: "https://snartup.no",
    bildeUrl: "/bilder/snartup.png",
    fremhevet: true,
  },
  {
    id: "pris-kalkulator",
    navn: "tstools.no",
    ingress:
      "Internt salgsverktøy som regner ut riktig pakke og pris ut fra kundens behov.",
    beskrivelse:
      "Web-app som tar kundens behov for båndbredde og TV-innhold og regner ut hvilken pakke som passer, med sammenligning mot konkurrentenes priser. Bygget som en ren regnemotor i TypeScript med et tynt UI-lag over, slik at prislogikken kan testes for seg.",
    aar: "2026",
    rolle: "Utvikler med ansvar for idé, logikk og grensesnitt",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://tstools.no",
    demoNotat: "Tilgangskode: 2222",
    // Repoet er privat inntil GitHub-kontoen er ryddet. Gjør det offentlig
    // før kommentaren fjernes, ellers møter leseren en 404.
    // kodeUrl: "https://github.com/Simen-R/Pris-kalkulator",
    bildeUrl: "/bilder/priskalkulator.png",
    fremhevet: true,
  },
  {
    id: "akuttmedisin",
    navn: "Akuttmedisin.com",
    ingress:
      "Nettsted for et selskap som leverer kurs, simulering og arrangementvakthold.",
    beskrivelse:
      "Flersides nettsted med tjenestesider, prisside og kontaktskjema. Fokus på rask lasting, tydelig innholdsstruktur og sikre HTTP-headere.",
    aar: "2026",
    rolle: "Utvikler og design",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://www.akuttmedisin.com",
    bildeUrl: "/bilder/akuttmedisin.png",
    fremhevet: true,
  },
  {
    // Oppstartsselskapet mitt. Jeg har laget alt selv: apparatet, programvaren
    // og nettsiden.
    // TODO: teknologilista er lest ut av nettstedet (Next.js på Vercel, data
    // fra Entur og MET). Legg til resten av stakken. Fjern demoNotat når
    // siden ikke lenger er under utvikling.
    id: "iframe",
    navn: "Iframe.no",
    ingress:
      "Oppstartsselskapet mitt: en informasjonsskjerm i ramme for veggen, med neste avgang, været og dagens avtaler. Resten av tiden henger den der som et bilde.",
    beskrivelse:
      "Et innrammet apparat i A-format som viser det du ellers ville sjekket på mobilen: avganger fra en valgt holdeplass via Entur, vær fra Meteorologisk institutt og dagens kalender. Når skjermen står urørt, faller den tilbake til kunst, egne bilder eller en klokke. Rutetabellen for de neste to døgnene lastes ned hver natt, så skjermen viser planlagte tider også når nettet faller ut. Apparatet har ingen innlogging, og serveren lagrer ingenting om brukeren. Iframe er et oppstartsselskap jeg driver selv, og jeg har laget alt fra apparatet og programvaren til nettsiden.",
    aar: "2026",
    rolle: "Gründer, med ansvar for hele produktet",
    teknologier: ["Next.js", "React", "Entur API", "MET API"],
    demoUrl: "https://iframe.no",
    demoNotat: "Under utvikling",
    bildeUrl: "/bilder/iframe.png",
    fremhevet: true,
  },
  {
    id: "cv-nettside",
    navn: "Denne CV-siden",
    pdfNavn: "Digital CV",
    ingress: "Digital CV bygget i Next.js, med Claude Code som medutvikler.",
    beskrivelse:
      "Alt innholdet ligger som typede data i src/data, så teksten kan endres uten å røre komponentene. «Veien hit» på forsiden er en tidslinje med arbeid på den ene siden og skole på den andre, og hvert kort kan foldes ut med detaljene fra CV-en. Bygget sammen med Claude Code: jeg satte arkitekturen, datamodellen og innholdet, og brukte modellen til å skrive og skrive om koden, og til å diskutere hva som burde stå hvor.",
    aar: "2026",
    rolle: "Utvikler med ansvar for arkitektur, datamodell og innhold",
    teknologier: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code"],
    // Privat inntil videre, se tstools.no over.
    // kodeUrl: "https://github.com/Simen-R/CV-SimenRingstad",
    bildeUrl: "/bilder/cv-siden.png",
    // Ikke på forsiden: leseren står allerede på den, og fire kort gir to
    // rader på to i stedet for ett kort alene under.
  },
];

export const fremhevedeProsjekter = prosjekter.filter((p) => p.fremhevet);
