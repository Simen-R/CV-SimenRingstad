# Hva bør stå i CV-en

Kort guide til feltene i `src/data/`. Poenget er å gjøre det lett for en som leser
raskt å skjønne hva du kan.

## profil.ts

- **kortIngress** – én setning som sier hva du gjør og hva du er god på. Dette er det
  første folk leser. Unngå «engasjert og motivert»; skriv heller hva du faktisk bygger.
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

## sti.ts

Grepet øverst på forsiden, tegnet som et flytskjema: hver boks har en fast plass i et
rutenett, og pilene mellom dem tegnes automatisk ut fra `ledetTil`.

- **noder** – ett objekt per boks, nyeste først. Rekkefølgen her er lesarekkefølgen på
  smale skjermer; på brede skjermer er det `kolonne` og `rad` som bestemmer plassen.
- **kolonne** (1–3) og **rad** (1 = nåtid, høyere tall = lenger tilbake) – posisjonen i
  rutenettet. To bokser kan ikke dele samme rute. Trenger du en rad til, gi den neste
  ledige radnummeret; rutenettet vokser av seg selv.
- **ledetTil** – `id`-ene denne boksen peker videre på. Pila finner selv formen: rett opp
  i samme kolonne, rett bortover i samme rad, ellers en albue (opp, bortover, opp igjen).
  En boks kan peke på flere, og flere kan peke på samme.
- **type** – `jobb`, `utdanning` eller `milepael`. Styrer bare prikken foran perioden.
- **organisasjon** – kan utelates for milepæler som ikke hører til et sted, som et fagbrev.
- **medbrakt** – to–tre korte uttrykk for hva du tok med deg. Dette er hele poenget med
  seksjonen: «Ro under press» sier mer enn «helsefagarbeider» alene gjør. Kan utelates.
- **beskrivelse** – én setning. Boksene skal kunne leses på tvers i ett blikk.

Stien er en fortelling, ikke en full liste – sesongjobber og kortvarige roller hører
hjemme på /erfaring, ikke her.

Under 1024 px faller rutenettet sammen til én kolonne, og da slås pilene av – ellers
ville de krysset tvers over kortene. Koblingen går i stedet fram av teksten «Førte videre
til …», som ligger på kortene og bare skjules visuelt på brede skjermer.

## prosjekter.ts

Det viktigste på hele siden – her ser folk hva du faktisk kan.

- **ingress** – én setning, vises på kortet på forsiden.
- **beskrivelse** – hva problemet var, hva du bygde, og ett valg du tok underveis.
  Det siste er det som skiller en portefølje fra en liste.
- **rolle** – hva du gjorde selv, særlig hvis prosjektet var i gruppe.
- **fremhevet: true** – løfter prosjektet til forsiden. Hold det til tre.
