"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FadeUpProps = {
  children: React.ReactNode;
  /** Forsinkelse i millisekunder, for å trappe inn flere elementer. */
  delay?: number;
  className?: string;
};

/** Fader inn innholdet når det ruller inn i skjermbildet. */
export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [synlig, setSynlig] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respekter brukere som har slått av animasjoner.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSynlig(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSynlig(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        synlig ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
