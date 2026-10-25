# Digital CV: Simen Ringstad

Personlig CV og portefølje på nett, live på [simenringstad.com](https://simenringstad.com).
Bygget med Next.js, TypeScript og Tailwind CSS, med Claude Code som medutvikler.

## Hva siden løser

En CV må finnes i to former: som nettside man kan lenke til, og som PDF til
søknader. Holdes de ved like hver for seg, blir de fort ulike. Her ligger alt
innholdet ett sted, som typede data i `src/data/`, og både nettsiden og PDF-en
lages fra de samme dataene. Endrer jeg én linje, er begge oppdatert ved neste
deploy.

Det viktigste på siden:

- **«Veien hit»** på forsiden: en tidslinje med jobb til venstre og skole til
  høyre. Hvert kort kan foldes ut og viser detaljene fra CV-en.
- **PDF-CV** på [`/cv.pdf`](https://simenringstad.com/cv.pdf), generert fra
  dataene med `@react-pdf/renderer`. Ingen PDF å holde oppdatert for hånd.
- **Prosjekter og ferdigheter** med skjermbilder, teknologier og lenker til
  det som er i drift.

## Slik ble siden laget med AI

Hele siden er bygget i samarbeid med Claude Code (Anthropic), som kjørte i
VS Code mot dette repoet. Arbeidsdelingen var slik:

- **Jeg** bestemte hva siden skulle inneholde, satte arkitekturen og
  datamodellen, skrev og godkjente all tekst, og vurderte hvert forslag før det
  ble commitet.
- **Claude Code** skrev og skrev om komponentene, foreslo løsninger, kjørte
  bygg og lint, og skrev de fleste commit-meldingene. Commits laget sammen med
  modellen er merket `Co-Authored-By: Claude`.

Reglene modellen jobber etter ligger i repoet:

- [`CLAUDE.md`](CLAUDE.md) har skrivereglene for teksten på siden. Den kom til
  etter at de første utkastene var fulle av tankestreker og formuleringer som
  «ikke bare X, men Y», som gjør at tekst leses som AI-generert.
- [`AGENTS.md`](AGENTS.md) minner modellen på at Next.js 16 har endringer den
  ikke kjenner fra treningsdataene, og at den skal lese dokumentasjonen i
  `node_modules/next` før den skriver kode.

Noen eksempler på ting som ble forbedret underveis (se `git log` for resten):

- Erfaring og utdanning lå først på hver sin side med egen tidslinje. Det ble
  samlet til «Veien hit» på forsiden, og de to sidene ble fjernet.
- Innholdet øverst på siden fadet inn med JavaScript og var usynlig til
  skriptet hadde lastet. Det ble byttet til en ren CSS-animasjon.
- Delingsbildet pekte på den midlertidige Vercel-adressen til hver
  forhåndsvisning. `metadataBase` ble satt til produksjonsdomenet.
- Første versjon pekte på en PDF-fil i `public/` som måtte byttes ut for hånd.
  Den ble erstattet av en rute som lager PDF-en fra dataene, så den ikke kan
  bli utdatert.
- Gateadresse og telefonnummer ble tatt ut av siden. Telefonnummeret ble også
  fjernet fra git-historikken før repoet ble gjort offentlig.

## Testing

Siden har ingen automatiske tester. Den er liten og består nesten bare av
innhold. Kvaliteten sikres slik:

- **TypeScript** sjekker at innholdet i `src/data/` har riktig form. Mangler et
  felt eller har det feil type, feiler bygget.
- **ESLint** (`npm run lint`) og **produksjonsbygg** (`npm run build`) kjøres
  før hver commit.
- **Manuell sjekk i nettleseren** med `npm run dev`, på bred og smal skjerm.
- **Vercel** bygger hver push. Feiler bygget, går ikke endringen ut.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne http://localhost:3000.

| Kommando        | Hva den gjør                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Utviklingsserver med hot reload       |
| `npm run build` | Produksjonsbygg. Kjør før deploy      |
| `npm run start` | Kjører produksjonsbygget lokalt       |
| `npm run lint`  | ESLint over hele prosjektet           |

## Oppdatere innholdet

| Hva du vil endre             | Fil                        |
| ---------------------------- | -------------------------- |
| Navn, tittel, om meg, lenker | `src/data/profil.ts`       |
| Jobb, skole og fagbrev       | `src/data/sti.ts`          |
| Egenskaper                   | `src/data/egenskaper.ts`   |
| Teknologier og språk         | `src/data/ferdigheter.ts`  |
| Prosjekter                   | `src/data/prosjekter.ts`   |

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
│   ├── prosjekter/
│   ├── ferdigheter/
│   ├── kontakt/
│   ├── cv.pdf/route.ts   # Lager PDF-CV-en fra dataene
│   └── opengraph-image.tsx  # Bildet som vises når lenken deles
├── components/           # Gjenbrukbare byggeklosser
│   ├── Header.tsx        # Navigasjon med mobilmeny
│   ├── Footer.tsx
│   ├── Section.tsx       # Seksjon med overskrift og ingress
│   ├── FadeUp.tsx        # Fader inn innhold ved scroll
│   ├── Sti.tsx           # «Veien hit»: ryggraden med jobb og skole
│   ├── StiKort.tsx       # Kortene på stien, med detaljene som foldes ut
│   ├── SkillGroup.tsx    # Ferdighetsgruppe med nivåindikator
│   └── ProsjektKort.tsx
├── data/                 # ALT innhold. Her redigerer du
├── lib/
│   ├── cvPdf.tsx         # Oppsettet til PDF-en
│   ├── side.ts           # Produksjonsadressen
│   └── utils.ts          # cn() for å slå sammen Tailwind-klasser
└── types/cv.ts           # Typene som holder dataene i form

public/
└── bilder/               # Sjarken og skjermbilder av prosjekter
```

## Bilder og PDF

PDF-en lages av `src/app/cv.pdf/route.ts` ved hver deploy, med oppsettet i
`src/lib/cvPdf.tsx`. Den bruker de samme dataene som siden, så det er ingen fil
å bytte ut. Skjermbilder av prosjekter ligger i `public/bilder/` og pekes på
med `bildeUrl` i `src/data/prosjekter.ts`.

## Publisering

Prosjektet ligger på Vercel:

1. Push til GitHub.
2. Importer repoet på [vercel.com/new](https://vercel.com/new).
3. Vercel oppdager Next.js selv, så ingen konfigurasjon trengs.

Hver push til `main` gir en ny produksjonsversjon, og hver pull request får sin egen
forhåndsvisning.

## Valg som er tatt

- **Next.js App Router.** Sidene rendres på serveren, så innholdet er synlig for
  søkemotorer og lenkedelinger uten ekstra arbeid.
- **Innhold som data, ikke markup.** Å oppdatere CV-en skal være å endre en linje
  i en liste, ikke å lete i JSX.
- **Norske ruter og feltnavn.** Samme som i Akuttmedisin.com, og CV-en er på norsk.
- **Ingen komponentbibliotek.** Siden er liten nok til at Tailwind alene holder.
