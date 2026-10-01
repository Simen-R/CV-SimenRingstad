import { readFileSync } from "node:fs";
import path from "node:path";
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";
import { egenskaper } from "@/data/egenskaper";
import { ferdigheter } from "@/data/ferdigheter";
import { profil } from "@/data/profil";
import { prosjekter } from "@/data/prosjekter";
import { sti } from "@/data/sti";
import { brregUrl } from "@/lib/utils";
import type { StiNode } from "@/types/cv";

/*
  CV-en som PDF, satt sammen av de samme dataene som nettsiden. Det er ingen
  egen tekst her: endres noe i src/data, er PDF-en oppdatert ved neste bygg.

  Formen henter det kjennetegnende fra siden: marineblått felt med sjarken
  øverst, stien som en ryggrad med noder, og teknologiene som piller. Resten
  er hvitt ark, så den tåler å bli skrevet ut. All tekst er ekte tekst, så
  rekrutteringssystemer som leser PDF-en, får med seg alt.

  Helvetica er en av de innebygde PDF-fontene, så ingenting må lastes ned, og
  æ, ø og å er med. Siden selv bruker systemfonter, så det står seg.
*/

// Standard orddeling i react-pdf er engelsk og deler norske ord på feil sted
// («arbei-dsmåte»). Hele ord på ny linje leses bedre.
Font.registerHyphenationCallback((ord) => [ord]);

// Sjarken er hvit strek på gjennomsiktig bunn, så den kan legges rett på det
// marineblå feltet. PDF-en bygges ved deploy, og da ligger fila på disk.
const sjark = readFileSync(path.join(process.cwd(), "public/bilder/sjark.png"));

/* Paletten fra globals.css. På papir er det blekket som er aksenten. */
const farge = {
  marine: "#0d1321",
  stal: "#24344a",
  sno: "#fafafa",
  bandDempet: "#b3b3bc",
  tekst: "#14161c",
  dempet: "#5b6270",
  strek: "#d9dce1",
  flate: "#f3f5f8",
};

const MARG = 48;
const PERIODE = 64;
const RYGG = 18;

const s = StyleSheet.create({
  side: {
    paddingTop: 36,
    paddingBottom: 30,
    paddingHorizontal: MARG,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.45,
    color: farge.tekst,
  },

  /* Feltet øverst går ut i kanten av arket, forbi margene. */
  band: {
    marginTop: -36,
    marginHorizontal: -MARG,
    paddingTop: 28,
    paddingBottom: 22,
    paddingHorizontal: MARG,
    backgroundColor: farge.marine,
    flexDirection: "row",
    alignItems: "center",
  },
  bandTekst: { flex: 1 },
  navn: {
    fontSize: 26,
    lineHeight: 1.15,
    fontFamily: "Helvetica-Bold",
    letterSpacing: -0.6,
    color: farge.sno,
  },
  tittel: { marginTop: 3, fontSize: 11.5, color: farge.bandDempet },
  kontakt: { marginTop: 8, fontSize: 8.5, color: farge.bandDempet },
  kontaktLenke: { color: farge.bandDempet, textDecoration: "none" },
  sjark: { width: 124, marginLeft: 16, opacity: 0.75 },

  ingress: { marginTop: 14, fontSize: 10.5, lineHeight: 1.5 },
  soker: { marginTop: 8, flexDirection: "row", alignItems: "center" },
  sokerPrikk: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginRight: 7,
    backgroundColor: farge.marine,
  },
  sokerTekst: { fontSize: 10.5, fontFamily: "Helvetica-Bold" },

  seksjon: { marginTop: 16 },
  seksjonTopp: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  seksjonTittel: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: farge.stal,
    marginRight: 8,
  },
  seksjonStrek: { flex: 1, height: 0.75, backgroundColor: farge.strek },

  /* Stien: perioden, så ryggraden med noden, så innholdet. */
  stiRad: { flexDirection: "row" },
  periode: {
    width: PERIODE,
    paddingTop: 0.5,
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: farge.marine,
  },
  rygg: { width: RYGG, position: "relative" },
  ryggLinje: {
    position: "absolute",
    left: RYGG / 2 - 0.5,
    width: 1,
    backgroundColor: farge.marine,
  },
  node: {
    position: "absolute",
    left: RYGG / 2 - 3.5,
    top: 3.5,
    width: 7,
    height: 7,
    borderRadius: 1.5,
    backgroundColor: farge.marine,
  },
  stiInnhold: { flex: 1, paddingBottom: 7, paddingLeft: 4 },

  overskrift: { fontFamily: "Helvetica-Bold" },
  org: { color: farge.dempet },
  punkt: { flexDirection: "row", marginTop: 1.5 },
  punktTegn: { width: 9, color: farge.dempet },
  punktTekst: { flex: 1 },

  /* Prosjektene: samme venstrekolonne som stien, uten ryggrad. */
  rad: { flexDirection: "row", marginBottom: 6 },
  aar: { width: PERIODE + RYGG, fontSize: 8.5, color: farge.dempet },
  innhold: { flex: 1, paddingLeft: 4 },
  lenke: { color: farge.stal, textDecoration: "none" },

  piller: { flexDirection: "row", flexWrap: "wrap", marginTop: 3 },
  pille: {
    fontSize: 7.5,
    lineHeight: 1.2,
    color: farge.stal,
    backgroundColor: farge.flate,
    borderWidth: 0.6,
    borderColor: farge.strek,
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
  },

  /* Egenskapene: fire kort, to og to. */
  kort: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  kortet: {
    width: "48.8%",
    marginBottom: 6,
    padding: 8,
    borderRadius: 4,
    backgroundColor: farge.flate,
  },
  kortTittel: { fontFamily: "Helvetica-Bold", marginBottom: 2 },
  kortTekst: { fontSize: 8.5, color: farge.dempet, lineHeight: 1.4 },

  gruppe: { flexDirection: "row", marginBottom: 2 },
  gruppeNavn: {
    width: PERIODE + RYGG,
    paddingTop: 5,
    paddingRight: 8,
    fontSize: 8.5,
    color: farge.dempet,
  },
});

function Seksjon({
  tittel,
  children,
}: {
  tittel: string;
  children: React.ReactNode[];
}) {
  const [forste, ...resten] = children;
  return (
    <View style={s.seksjon}>
      {/* Overskrifta og første rad henger sammen, så overskrifta aldri blir
          stående alene nederst på en side. */}
      <View wrap={false}>
        <View style={s.seksjonTopp}>
          <Text style={s.seksjonTittel}>{tittel}</Text>
          <View style={s.seksjonStrek} />
        </View>
        {forste}
      </View>
      {resten}
    </View>
  );
}

function Piller({ ord }: { ord: string[] }) {
  return (
    <View style={s.piller}>
      {ord.map((ett) => (
        <Text key={ett} style={s.pille}>
          {ett}
        </Text>
      ))}
    </View>
  );
}

function Punkter({ punkter }: { punkter?: string[] }) {
  if (!punkter?.length) return null;
  return (
    <View>
      {punkter.map((punkt) => (
        <View key={punkt} style={s.punkt}>
          <Text style={s.punktTegn}>•</Text>
          <Text style={s.punktTekst}>{punkt}</Text>
        </View>
      ))}
    </View>
  );
}

/**
 * Ett stopp på stien. Linja, nodene og periodene er markert likt hele veien,
 * så ryggraden leses som én sammenhengende vei og ikke som to deler. Linja
 * går fra node til node: starter ved noden i første rad og stopper ved noden
 * i siste.
 */
function StiRad({
  node,
  forste,
  sist,
}: {
  node: StiNode;
  forste: boolean;
  sist: boolean;
}) {
  const linje = sist ? { top: 0, height: 4 } : { top: forste ? 4 : 0, bottom: 0 };

  return (
    <View style={s.stiRad} wrap={false}>
      <Text style={s.periode}>{node.periode}</Text>
      <View style={s.rygg}>
        {!(forste && sist) && <View style={[s.ryggLinje, linje]} />}
        <View style={s.node} />
      </View>
      <View style={s.stiInnhold}>
        <Text>
          <Text style={s.overskrift}>{node.tittel}</Text>
          {node.organisasjon && (
            <Text style={s.org}>, {node.organisasjon}</Text>
          )}
        </Text>
        {node.beskrivelse && <Text>{node.beskrivelse}</Text>}
        <Punkter punkter={node.punkter} />
      </View>
    </View>
  );
}

function CvDokument() {
  const arbeid = sti.noder.filter((node) => node.spor === "arbeid");
  const skole = sti.noder.filter((node) => node.spor === "skole");

  return (
    <Document
      title={`CV ${profil.navn}`}
      author={profil.navn}
      subject={profil.tittel}
      language="nb"
    >
      <Page size="A4" style={s.side}>
        <View style={s.band}>
          <View style={s.bandTekst}>
            <Text style={s.navn}>{profil.navn}</Text>
            <Text style={s.tittel}>{profil.tittel}</Text>

            {/* Bare det som trengs for å ta kontakt. LinkedIn og adressen til
                nettsiden er utelatt med vilje, de gjorde feltet rotete.
                Org.nr. får harde mellomrom, så tallet ikke brytes over to
                linjer. */}
            <Text style={s.kontakt}>
              {profil.sted}
              {" · "}
              <Link src={`mailto:${profil.epost}`} style={s.kontaktLenke}>
                {profil.epost}
              </Link>
              {profil.telefon && ` · ${profil.telefon}`}
              {profil.foretak && (
                <Text>
                  {" · "}
                  <Link
                    src={brregUrl(profil.foretak.orgnr)}
                    style={s.kontaktLenke}
                  >
                    {`Org.nr. ${profil.foretak.orgnr}`.replace(/ /g, String.fromCharCode(0xa0))}
                  </Link>
                </Text>
              )}
            </Text>
          </View>
          <Image src={{ data: sjark, format: "png" }} style={s.sjark} />
        </View>

        <Text style={s.ingress}>{profil.kortIngress}</Text>
        {profil.soker && (
          <View style={s.soker}>
            <View style={s.sokerPrikk} />
            <Text style={s.sokerTekst}>{profil.soker}</Text>
          </View>
        )}

        <Seksjon tittel={sti.spor.arbeid}>
          {arbeid.map((node, i) => (
            <StiRad
              key={node.id}
              node={node}
              forste={i === 0}
              sist={i === arbeid.length - 1}
            />
          ))}
        </Seksjon>

        {/* Ferdighetene står rett etter arbeidet. Da fyller de første side,
            og en som skummer, ser dem uten å bla. */}
        <Seksjon tittel="Ferdigheter">
          {ferdigheter.map((gruppe) => (
            <View key={gruppe.navn} style={s.gruppe} wrap={false}>
              <Text style={s.gruppeNavn}>{gruppe.navn}</Text>
              <View style={s.innhold}>
                <Piller ord={gruppe.ferdigheter.map((f) => f.navn)} />
              </View>
            </View>
          ))}
        </Seksjon>

        <Seksjon tittel={sti.spor.skole}>
          {skole.map((node, i) => (
            <StiRad
              key={node.id}
              node={node}
              forste={i === 0}
              sist={i === skole.length - 1}
            />
          ))}
        </Seksjon>

        <Seksjon tittel="Prosjekter">
          {prosjekter.map((prosjekt) => (
            <View key={prosjekt.id} style={s.rad} wrap={false}>
              <Text style={s.aar}>{prosjekt.aar}</Text>
              <View style={s.innhold}>
                <Text>
                  <Text style={s.overskrift}>
                    {prosjekt.pdfNavn ?? prosjekt.navn}
                  </Text>
                  <Text style={s.org}>, {prosjekt.rolle}</Text>
                  {prosjekt.demoUrl && (
                    <Text style={s.org}>
                      {" · "}
                      <Link src={prosjekt.demoUrl} style={s.lenke}>
                        {kortUrl(prosjekt.demoUrl)}
                      </Link>
                    </Text>
                  )}
                </Text>
                <Text>{prosjekt.ingress}</Text>
                <Piller ord={prosjekt.teknologier} />
              </View>
            </View>
          ))}
        </Seksjon>

        <Seksjon tittel="Slik jobber jeg">
          {[
            <View key="kort" style={s.kort}>
              {egenskaper
                .filter((egenskap) => !egenskap.gjemt)
                .map((egenskap) => (
                  <View key={egenskap.navn} style={s.kortet}>
                    <Text style={s.kortTittel}>{egenskap.navn}</Text>
                    <Text style={s.kortTekst}>{egenskap.belegg}</Text>
                  </View>
                ))}
            </View>,
          ]}
        </Seksjon>

      </Page>
    </Document>
  );
}

/** «https://www.linkedin.com/in/navn/» blir «linkedin.com/in/navn». */
function kortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function lagCvPdf() {
  return renderToBuffer(<CvDokument />);
}
