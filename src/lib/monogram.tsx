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
        // Bakgrunnen slik den ser ut under lampa i toppen av siden: marineblå
        // (#0d1321) med lyskjegla (hsl 205 100% 90%) lagt over på 13 %.
        // Teksten er den samme snøhvite som på siden.
        backgroundColor: "#262f3e",
        borderRadius: storrelse * avrunding,
        color: "#fafafa",
        fontSize: storrelse * 0.5,
        letterSpacing: sporing,
        // Satori legger sporinga også etter siste bokstav, så teksten havner
        // et halvt hakk til høyre. Denne henter den tilbake til midten.
        paddingRight: -sporing,
        WebkitTextStroke: `${storrelse * 0.039}px #fafafa`,
      }}
    >
      SR
    </div>
  );
}
