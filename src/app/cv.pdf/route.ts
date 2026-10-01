import { profil } from "@/data/profil";
import { lagCvPdf } from "@/lib/cvPdf";

// PDF-en bygges én gang ved deploy og serveres som en statisk fil. Innholdet
// endres bare når src/data endres, og det betyr en ny deploy uansett.
export const dynamic = "force-static";

export async function GET() {
  const pdf = await lagCvPdf();
  const filnavn = `CV ${profil.navn}.pdf`;

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      // Inline, så nettleseren viser den hvis noen åpner lenka direkte.
      // Knappene på siden har `download` og lagrer den med dette navnet.
      "Content-Disposition": `inline; filename="${filnavn}"`,
    },
  });
}
