import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Oppslaget på foretaket i Enhetsregisteret. Org.nr. kan ha mellomrom. */
export function brregUrl(orgnr: string) {
  return `https://virksomhet.brreg.no/nb/oppslag/enheter/${orgnr.replace(/\s/g, "")}`;
}
