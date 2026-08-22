import type { Profil } from "@/types/cv";

export const profil: Profil = {
  navn: "Simen Ringstad",
  tittel: "Student i anvendt datateknologi ved OsloMet",
  kortIngress:
    "Helsefagarbeider som ble teknolog. Jeg jobber med teknisk kundeservice i Telia og bygger web med Next.js og TypeScript ved siden av studiene.",
  // Gateadressen fra PDF-en er med vilje utelatt – den hører hjemme i søknaden,
  // ikke på en åpen nettside.
  sted: "Oslo, Norge",
  epost: "simen.ringstad@icloud.com",
  telefon: "FJERNET",
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
