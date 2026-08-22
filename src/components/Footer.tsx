import { profil } from "@/data/profil";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 py-10">
      <div className="container flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profil.navn}
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${profil.epost}`} className="hover:text-foreground">
            {profil.epost}
          </a>
          {profil.lenker.map((lenke) => (
            <a
              key={lenke.url}
              href={lenke.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {lenke.navn}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
