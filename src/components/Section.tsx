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
    <section className={cn("py-14 sm:py-16", className)}>
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-stor sm:text-4xl">
          {tittel}
        </h2>
        {ingress && (
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
            {ingress}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
