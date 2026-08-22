# Hva bør stå i CV-en

Kort guide til feltene i `src/data/`. Poenget er å gjøre det lett for en som leser
raskt å skjønne hva du kan.

## profil.ts

- **kortIngress** – én setning som sier hva du gjør og hva du er god på. Dette er det
  første folk leser. Unngå «engasjert og motivert»; skriv heller hva du faktisk bygger.
- **omMeg** – to–tre avsnitt. Hvem du er, hva du jobber med nå, hva du vil videre.
- **lenker** – GitHub og LinkedIn holder. Ta bare med det som viser noe.

## erfaring.ts

Nyeste jobb øverst. For hver post:

- **beskrivelse** – én setning om hva rollen gikk ut på.
- **punkter** – to–fire konkrete ting du fikk til. Tall gjør dem sterkere:
  «kuttet behandlingstiden fra 10 til 3 minutter» slår «jobbet med effektivisering».
- **stikkord** – ferdigheter rollen viste. Hold deg til fire–fem.

Datoformat: `"2024"` eller `"2024-08"`. Pågående roller får `til: "nå"`.

## utdanning.ts

Samme form som erfaring. Ta med relevante emner under `punkter` hvis du er tidlig i
karrieren – da veier de mer.

## ferdigheter.ts

Nivå 1–5 der 3 = «jobber selvstendig med det» og 5 = «kan lære det bort».
Vær ærlig – nivå 5 på ti ting er mindre troverdig enn nivå 4 på tre.

Grupper ting som hører sammen. Legg gjerne til egne grupper (Backend, Design,
Sertifiseringer) ved å legge til et objekt i lista.

## prosjekter.ts

Det viktigste på hele siden – her ser folk hva du faktisk kan.

- **ingress** – én setning, vises på kortet på forsiden.
- **beskrivelse** – hva problemet var, hva du bygde, og ett valg du tok underveis.
  Det siste er det som skiller en portefølje fra en liste.
- **rolle** – hva du gjorde selv, særlig hvis prosjektet var i gruppe.
- **fremhevet: true** – løfter prosjektet til forsiden. Hold det til tre.
