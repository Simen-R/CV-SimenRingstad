// Monogrammet som brukes til fanikonet og hjemskjerm-ikonet på iOS. Begge
// ikonene tegnes av Satori (next/og), som bare har Geist Regular å spille på.
// Derfor er tyngden lagt på med -webkit-text-stroke: uten den forsvinner
// bokstavene i en 16 px-fane.
//
// Alle mål er brøkdeler av flata, så et nytt format bare er ett tall.
export function Monogram({
  storrelse,
  avrunding = 0,
}: {
  storrelse: number;
  avrunding?: number;
}) {
  const sporing = storrelse * -0.0156;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // De samme tre fargene som resten av siden: Stormy Teal øverst,
        // Espresso i dybden, Papaya Whip på bokstavene.
        backgroundImage: "linear-gradient(135deg, #15616d 0%, #4f3130 100%)",
        borderRadius: storrelse * avrunding,
        color: "#ffecd1",
        fontSize: storrelse * 0.5,
        letterSpacing: sporing,
        // Satori legger sporinga også etter siste bokstav, så teksten havner
        // et halvt hakk til høyre. Denne henter den tilbake til midten.
        paddingRight: -sporing,
        WebkitTextStroke: `${storrelse * 0.039}px #ffecd1`,
      }}
    >
      SR
    </div>
  );
}
