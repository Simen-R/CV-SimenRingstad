/** Felles typer for alt CV-innhold i src/data. */

export type Profil = {
  navn: string;
  tittel: string;
  kortIngress: string;
  sted: string;
  epost: string;
  telefon?: string;
  bildeUrl?: string;
  cvPdfUrl?: string;
  lenker: Lenke[];
};

export type Lenke = {
  navn: string;
  url: string;
};

/** Brukes av både erfaring og utdanning – samme tidslinje-form. */
export type TidslinjePost = {
  id: string;
  tittel: string;
  organisasjon: string;
  sted?: string;
  fra: string; // "2024-08" eller "2024"
  til: string | "nå";
  beskrivelse: string;
  punkter?: string[];
  stikkord?: string[];
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
  teknologier: string[];
  demoUrl?: string;
  kodeUrl?: string;
  bildeUrl?: string;
  /** Løftes fram på forsiden. */
  fremhevet?: boolean;
};

/* ---------- Stien: kartet over veien hit ---------- */

/** Ett stopp på stien – en boks i diagrammet. */
export type StiNode = {
  id: string;
  tittel: string;
  /** Utelates for milepæler som ikke hører til et sted, f.eks. et fagbrev. */
  organisasjon?: string;
  /** Ferdig formatert, f.eks. "2018–2022" eller "2024–nå". */
  periode: string;
  /** Én setning om hva dette var. */
  beskrivelse: string;
  type: "jobb" | "utdanning" | "milepael";
  /** Plassen i diagrammet. Kolonne 1 er venstre, rad 1 er øverst (nåtid). */
  kolonne: 1 | 2 | 3;
  rad: number;
  /** Merkes med «Nå» og får fylt prikk. */
  paagaaende?: boolean;
  /** Hva jeg tok med meg videre – to–tre korte uttrykk. */
  medbrakt?: string[];
  /** id-ene dette førte videre til. Det er disse pilene som tegnes. */
  ledetTil: string[];
};

export type StiInnhold = {
  tittel: string;
  ingress: string;
  /** Rekkefølgen her er lesarekkefølgen på smale skjermer: nyeste først. */
  noder: StiNode[];
};
