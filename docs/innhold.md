# Hva bør stå i CV-en

Kort guide til feltene i `src/data/`. Poenget er å gjøre det lett for en som leser
raskt å skjønne hva du kan.

## profil.ts

- **kortIngress** – én setning som sier hva du gjør og hva du er god på. Dette er det
  første folk leser. Unngå «engasjert og motivert»; skriv heller hva du faktisk bygger.
- **lenker** – GitHub og LinkedIn holder. Ta bare med det som viser noe.

## ferdigheter.ts

Nivå 1–5 der 3 = «jobber selvstendig med det» og 5 = «kan lære det bort».
Vær ærlig – nivå 5 på ti ting er mindre troverdig enn nivå 4 på tre.

Grupper ting som hører sammen. Legg gjerne til egne grupper (Backend, Design,
Sertifiseringer) ved å legge til et objekt i lista.

## sti.ts

«Veien hit» på forsiden, og det eneste stedet jobb og skole står. Stien er tegnet som
en ryggrad: én loddrett linje ned midten, arbeid til venstre og skole til høyre.

- **noder** – ett objekt per boks, nyeste først. Rekkefølgen her er rekkefølgen
  nedover ryggraden, både på brede og smale skjermer.
- **spor** – `arbeid` eller `skole`. Bestemmer hvilken side av linja boksen står på.
- **paagaaende: true** – fyller noden på ryggraden og farger linja gjennom raden. Alt
  som pågår nå ligger øverst, så fargen henger sammen.
- **periode** – ferdig formatert tekst, som `"2018–2022"`, `"2024–nå"` eller
  `"Høst 2023"`. Ingen datologikk å forholde seg til.
- **organisasjon** – kan utelates for milepæler som ikke hører til et sted, som et
  fagbrev.
- **beskrivelse** – én setning. Boksene skal kunne leses på tvers i ett blikk.
- **medbrakt** – to–tre korte uttrykk for hva du tok med deg. «Ro under press» sier
  mer enn «helsefagarbeider» alene gjør. Kan utelates.

De fire siste feltene er CV-innholdet, og de vises først når noen trykker på boksen:

- **utdyping** – det som ikke fikk plass i den ene setningen på det lukkede kortet.
  Ikke gjenta beskrivelsen med andre ord.
- **punkter** – to til fire konkrete ting du fikk til. Tall gjør dem sterkere:
  «kuttet behandlingstiden fra 10 til 3 minutter» slår «jobbet med effektivisering».
- **stikkord** – ferdighetene rollen viste. Hold deg til fire.
- **lenke** – `{ href, tekst }` til noe utenfor siden, som studieprogrammet hos
  OsloMet. Står nederst i det åpne kortet og åpnes i ny fane. Kan utelates.

Har en node ingen av de fire, blir kortet en vanlig boks uten noe å åpne. Det er greit
for skolestoppene, der perioden og én setning er hele historien.

Under 1024 px finnes ikke de to kolonnene. Da flytter ryggraden seg ut i venstrekanten,
alle kortene stiller seg opp til høyre for den, og sporet står som tekst på hvert kort.

## prosjekter.ts

Det viktigste på hele siden – her ser folk hva du faktisk kan.

- **ingress** – én setning, vises på kortet på forsiden.
- **beskrivelse** – hva problemet var, hva du bygde, og ett valg du tok underveis.
  Det siste er det som skiller en portefølje fra en liste.
- **rolle** – hva du gjorde selv, særlig hvis prosjektet var i gruppe.
- **bildeUrl** – skjermbilde i `public/bilder/`, tatt i full bredde på en vanlig
  skjerm (rundt 1900 × 900). Det vises i 2:1 fra toppen, så det viktigste må stå
  øverst. Ta det fra produksjonsversjonen, ellers kommer dev-ikonet til Next med.
- **fremhevet: true** – løfter prosjektet til forsiden. Tre eller fire passer: tre
  står på én rad, fire står to og to.

## Profil og logo

Notater som ikke står på siden ennå.

- **Motto (ikke i bruk):** «Gjør det uoversiktlige forståelig.» Hentet fra egenskapen
  «God på kommunikasjon» i `egenskaper.ts`. Kan stå under navnet på delingsbildet
  (`src/app/opengraph-image.tsx`) eller på forsiden hvis det tas i bruk.
- **Sjarken er logoen**, for meg og for foretaket Simen Ringstad. Den kommer fra farfar,
  som er fisker og har sjark. Tegningen ligger i `public/bilder/sjark.png`,
  hvit strek på gjennomsiktig bunn, og brukes på forsiden, i PDF-en og på
  delingsbildet. Den er for detaljert til fanikonet, så der står SR-monogrammet til
  det finnes en forenklet versjon av sjarken.
