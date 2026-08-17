import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </As>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  blurb,
}: {
  index: string;
  label: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="mono-label text-signal">{index}</span>
        <span className="h-px w-10 bg-border" />
        <span className="mono-label">{label}</span>
      </div>
      <h2 className="mt-5 text-3xl leading-[1.08] sm:text-4xl md:text-5xl">{title}</h2>
      {blurb ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{blurb}</p> : null}
    </Reveal>
  );
}
