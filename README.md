# Digital CV – Simen Ringstad

Personlig CV og portefølje på nett. Bygget med Next.js, TypeScript og Tailwind CSS
– samme stack som [Akuttmedisin.com](https://github.com/Simen-R) og Priskalkulatoren.

Alt innhold ligger som data i `src/data/`, adskilt fra utseendet i `src/components/`.
Det betyr at du oppdaterer CV-en ved å redigere noen få TypeScript-filer – du trenger
ikke å røre selve sidene.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne http://localhost:3000.

| Kommando        | Hva den gjør                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Utviklingsserver med hot reload       |
| `npm run build` | Produksjonsbygg – kjør før deploy     |
| `npm run start` | Kjører produksjonsbygget lokalt       |
| `npm run lint`  | ESLint over hele prosjektet           |

## Oppdatere innholdet

| Hva du vil endre            | Fil                        |
| --------------------------- | -------------------------- |
| Navn, tittel, om meg, lenker | `src/data/profil.ts`      |
| Jobber og verv              | `src/data/erfaring.ts`     |
| Skole og studier            | `src/data/utdanning.ts`    |
| Teknologier og språk        | `src/data/ferdigheter.ts`  |
| Prosjekter                  | `src/data/prosjekter.ts`   |

Formen på hvert felt er definert i `src/types/cv.ts`. Skriver du noe feil,
sier TypeScript fra med én gang.

Se [docs/innhold.md](docs/innhold.md) for tips til hva som faktisk bør stå i feltene.

## Mappestruktur

```
src/
├── app/                  # Sider (Next.js App Router)
│   ├── layout.tsx        # Felles ramme: header, footer, metadata
│   ├── page.tsx          # Forside
│   ├── globals.css       # Fargevariabler og grunnstiler
│   ├── erfaring/         # Jobb + utdanning på samme tidslinje
│   ├── prosjekter/
│   ├── ferdigheter/
│   └── kontakt/
├── components/           # Gjenbrukbare byggeklosser
│   ├── Header.tsx        # Navigasjon med mobilmeny
│   ├── Footer.tsx
│   ├── Section.tsx       # Seksjon med overskrift og ingress
│   ├── FadeUp.tsx        # Fader inn innhold ved scroll
│   ├── Timeline.tsx      # Tidslinje for erfaring og utdanning
│   ├── SkillGroup.tsx    # Ferdighetsgruppe med nivåindikator
│   └── ProsjektKort.tsx
├── data/                 # ALT innhold – her redigerer du
├── lib/utils.ts          # cn() for å slå sammen Tailwind-klasser
└── types/cv.ts           # Typene som holder dataene i form

public/
├── bilder/               # Portrett og skjermbilder av prosjekter
└── cv-....pdf            # PDF-versjon til nedlasting
```

## Bilder og PDF

Legg portrettet som `public/bilder/portrett.jpg` og PDF-CV-en i `public/`.
Stiene settes i `src/data/profil.ts`. Skjermbilder av prosjekter kan ligge i
`public/bilder/` og pekes på med `bildeUrl` i `src/data/prosjekter.ts`.

## Publisering

Prosjektet er laget for Vercel:

1. Push til GitHub.
2. Importer repoet på [vercel.com/new](https://vercel.com/new).
3. Vercel oppdager Next.js selv – ingen konfigurasjon trengs.

Hver push til `main` gir en ny produksjonsversjon, og hver pull request får sin egen
forhåndsvisning.

## Valg som er tatt

- **Next.js App Router** – sidene rendres på serveren, så innholdet er synlig for
  søkemotorer og lenkedelinger uten ekstra arbeid.
- **Innhold som data, ikke markup** – å oppdatere CV-en skal være å endre en linje i
  en liste, ikke å lete i JSX.
- **Norske ruter og feltnavn** – samme som i Akuttmedisin.com, og CV-en er på norsk.
- **Ingen komponentbibliotek** – siden er liten nok til at Tailwind alene holder.
