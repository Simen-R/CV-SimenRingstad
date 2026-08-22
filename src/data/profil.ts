import type { Profil } from "@/types/cv";

// TODO: Bytt ut placeholder-tekst med dine egne opplysninger.
export const profil: Profil = {
  navn: "Simen Ringstad",
  tittel: "Utvikler og student ved OsloMet",
  kortIngress:
    "Jeg bygger web-løsninger som er raske, ryddige og faktisk til å bruke – helst med Next.js og TypeScript.",
  omMeg: [
    "Her skriver du et par avsnitt om hvem du er: hva du studerer, hva du jobber med i dag, og hva som gjør at du liker å bygge ting.",
    "Andre avsnitt kan handle om hvordan du jobber – hva du er god på i et team, og hva du vil jobbe mer med framover.",
  ],
  sted: "Oslo, Norge",
  epost: "sirin5962@oslomet.no",
  // telefon: "+47 000 00 000",
  bildeUrl: "/bilder/portrett.jpg",
  cvPdfUrl: "/cv-simen-ringstad.pdf",
  lenker: [
    { navn: "GitHub", url: "https://github.com/Simen-R" },
    { navn: "LinkedIn", url: "https://www.linkedin.com/in/" },
  ],
};
