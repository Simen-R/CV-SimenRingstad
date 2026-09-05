import type { Profil } from "@/types/cv";

export const profil: Profil = {
  navn: "Simen Ringstad",
  tittel: "Student i anvendt datateknologi ved OsloMet",
  kortIngress:
    "Helsefagarbeideren som ble teknolog. Jeg tar en bachelor i anvendt datateknologi, samtidig som jeg er CTO i Snartup og jobber med teknisk kundeservice i Telia.",
  // Gateadressen fra PDF-en er med vilje utelatt – den hører hjemme i søknaden,
  // ikke på en åpen nettside.
  sted: "Oslo, Norge",
  epost: "simen.ringstad@icloud.com",
  // Telefonnummeret er bevisst holdt utenfor nettsiden – som gateadressen
  // hører det hjemme i søknaden. Fjern kommentaren for å vise det igjen.
  // telefon: "FJERNET",
  bildeUrl: "/bilder/portrett.jpg",
  // PDF-en inneholder gateadresse og telefonnummer. Vil du tilby nedlasting,
  // legg en versjon uten adresse i public/ og fjern kommentaren under.
  // cvPdfUrl: "/cv-simen-ringstad.pdf",
  lenker: [
    { navn: "GitHub", url: "https://github.com/Simen-R" },
    // TODO: Fyll inn LinkedIn-URL-en din, eller slett linja.
    { navn: "LinkedIn", url: "https://www.linkedin.com/in/" },
  ],
};
