/**
 * Overskrifta og ingressen øverst på undersidene. Den står alltid over
 * bretten, så den kommer inn med CSS-inngangen og ikke med FadeUp.
 */
export function SideTopp({
  tittel,
  ingress,
}: {
  tittel: string;
  ingress: string;
}) {
  return (
    <div className="inn">
      <h1 className="text-4xl font-semibold tracking-stor sm:text-5xl">
        {tittel}
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
        {ingress}
      </p>
    </div>
  );
}
