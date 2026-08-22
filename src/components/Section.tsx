import { cn } from "@/lib/utils";

type SectionProps = {
  tittel: string;
  ingress?: string;
  children: React.ReactNode;
  className?: string;
};

/** Standard seksjon med overskrift og valgfri ingress. */
export function Section({
  tittel,
  ingress,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("py-12", className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {tittel}
        </h2>
        {ingress && (
          <p className="mt-3 max-w-2xl text-muted-foreground">{ingress}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
