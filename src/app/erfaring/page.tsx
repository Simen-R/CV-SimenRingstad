import type { Metadata } from "next";
import { erfaring } from "@/data/erfaring";
import { utdanning } from "@/data/utdanning";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Erfaring",
  description: "Arbeidserfaring og utdanning.",
};

export default function Erfaring() {
  return (
    <div className="py-8">
      <Section tittel="Arbeidserfaring">
        <Timeline poster={erfaring} />
      </Section>

      <Section tittel="Utdanning">
        <Timeline poster={utdanning} />
      </Section>
    </div>
  );
}
