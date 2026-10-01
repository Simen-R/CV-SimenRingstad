/** Felles typer for alt CV-innhold i src/data. */

export type Profil = {
  navn: string;
  tittel: string;
  kortIngress: string;
  /** Hva slags jobb jeg ser etter. Utelates når jeg ikke søker. */
  soker?: string;
  sted: string;
  epost: string;
  telefon?: string;
  cvPdfUrl?: string;
  lenker: Lenke[];
  /** Enkeltpersonforetaket mitt, slik det står i Enhetsregisteret. */
  foretak?: {
    navn: string;
    /** Med mellomrom, slik det skrives: «936 587 178». */
    orgnr: string;
  };
};

export type Lenke = {
  navn: string;
  url: string;
};

/** En egenskap uten eksempel er bare et adjektiv, så `belegg` er påkrevd. */
export type Egenskap = {
  navn: string;
  /** Én eller to setninger med det konkrete som ligger bak ordet. */
  belegg: string;
  /** Står bak «Se flere» på siden og er utelatt fra PDF-en. */
  gjemt?: boolean;
};

export type FerdighetsGruppe = {
  navn: string;
  ferdigheter: Ferdighet[];
};

export type Ferdighet = {
  navn: string;
  /** 1–5, der 5 = bruker det daglig og kan lære det bort.
   *  Utelat den for egenskaper og annet som ikke hører hjemme på en skala. */
  nivaa?: 1 | 2 | 3 | 4 | 5;
};

export type Prosjekt = {
  id: string;
  navn: string;
  ingress: string;
  beskrivelse: string;
  aar: string;
  rolle: string;
  /** Navnet i PDF-en, der «denne siden» ikke gir mening. */
  pdfNavn?: string;
  teknologier: string[];
  demoUrl?: string;
  /** Kort notat som vises ved demo-lenka, f.eks. tilgangskode. */
  demoNotat?: string;
  kodeUrl?: string;
  /** Skjermbilde i public/bilder, i liggende format. Toppen av bildet er det
   *  som vises når det beskjæres, så ta det fra toppen av siden. */
  bildeUrl?: string;
  /** Løftes fram på forsiden. */
  fremhevet?: boolean;
};

/* ---------- Stien: kartet over veien hit ---------- */

/** Ett stopp på stien – en boks i diagrammet. */
export type StiNode = {
  id: string;
  tittel: string;
  /** Utelates for milepæler som ikke hører til et sted. */
  organisasjon?: string;
  /** Ferdig formatert, f.eks. "2018–2022" eller "2024–nå". */
  periode: string;
  /** Én setning om hva dette var. */
  beskrivelse?: string;
  /** Hvilken side av ryggraden stoppet står på. */
  spor: "arbeid" | "skole";
  /** Fyller noden på ryggraden og farger linja gjennom raden. */
  paagaaende?: boolean;
  /** Hva jeg tok med meg videre, to eller tre korte uttrykk. */
  medbrakt?: string[];

  /*
    Feltene under vises først når kortet er åpnet. Har noden ingen av dem, er
    kortet en vanlig boks uten knappefakter.
  */

  /** Det som ikke fikk plass i den ene setningen på det lukkede kortet. */
  utdyping?: string;
  /** Konkrete ting fra rollen, to til fire punkter. */
  punkter?: string[];
  /** Ferdighetene rollen viste. Hold deg til fire. */
  stikkord?: string[];
  /** Lenke ut, for eksempel til studieprogrammet. Står nederst i det åpne kortet. */
  lenke?: { href: string; tekst: string };
};

export type StiInnhold = {
  tittel: string;
  ingress?: string;
  /** Står til høyre for overskriften, f.eks. "2018–nå". */
  spenn?: string;
  /** Etikettene over de to sporene. */
  spor: { arbeid: string; skole: string };
  /**
   * Stoppet som ikke er tatt ennå. Det står midtstilt over ryggraden og er det
   * eneste kortet som fører et sted, så det har ikke noe spor.
   */
  nesteStopp?: {
    merkelapp: string;
    tittel: string;
    lenke: { href: string; tekst: string };
  };
  /** Nyeste først. Rekkefølgen her er rekkefølgen nedover ryggraden. */
  noder: StiNode[];
};
