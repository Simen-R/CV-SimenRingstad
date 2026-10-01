import type { Profil } from "@/types/cv";

export const profil: Profil = {
  navn: "Simen Ringstad",
  tittel: "Student i anvendt datateknologi ved OsloMet",
  kortIngress:
    "Helsefagarbeideren som ble teknolog. Jeg tar en bachelor i anvendt datateknologi, samtidig som jeg er CTO i Snartup og jobber med teknisk kundeservice i Telia.",
  // Står under ingressen på forsiden og øverst i PDF-en.
  soker: "Ser etter en fulltidsjobb. Gjerne tett på teknologien, men ikke som ren utvikler.",
  // Gateadressen fra PDF-en er med vilje utelatt – den hører hjemme i søknaden,
  // ikke på en åpen nettside.
  sted: "Oslo, Norge",
  epost: "simen.ringstad@icloud.com",
  // Telefonnummeret er bevisst holdt utenfor nettsiden – som gateadressen
  // hører det hjemme i søknaden. Fjern kommentaren for å vise det igjen.
  // telefon: "FJERNET",
  // PDF-en lages av src/app/cv.pdf/route.ts fra de samme dataene som siden,
  // så den er alltid oppdatert og har verken gateadresse eller telefon.
  cvPdfUrl: "/cv.pdf",
  lenker: [
    // Ute til GitHub-kontoen er ryddet og har offentlige repoer å vise.
    // { navn: "GitHub", url: "https://github.com/Simen-R" },
    {
      navn: "LinkedIn",
      url: "https://www.linkedin.com/in/simen-ringstad-3b0878425",
    },
  ],
  foretak: {
    navn: "Simen Ringstad",
    orgnr: "936 587 178",
  },
};
