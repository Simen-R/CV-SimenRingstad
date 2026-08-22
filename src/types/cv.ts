/** Felles typer for alt CV-innhold i src/data. */

export type Profil = {
  navn: string;
  tittel: string;
  kortIngress: string;
  omMeg: string[];
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
  /** 1–5, der 5 = bruker det daglig og kan lære det bort. */
  nivaa: 1 | 2 | 3 | 4 | 5;
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
