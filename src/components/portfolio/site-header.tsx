import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  ["Work", "work"],
  ["Approach", "approach"],
  ["About", "about"],
] as const;

type SiteHeaderProps = {
  home?: boolean;
  maxWidthClass?: string;
};

export function SiteHeader({ home = false, maxWidthClass = "max-w-6xl" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="px-6">
        <div className={cn("mx-auto flex items-center justify-between py-4", maxWidthClass)}>
        <Link
          to="/"
          className="min-w-0 truncate font-display text-sm font-semibold tracking-tight"
        >
          Matt Schoolfield
          <span className="ml-2 text-signal">/</span>
          <span className="ml-2 text-muted-foreground">Product Designer</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {SECTIONS.map(([label, id]) => (
            <a
              key={id}
              href={href(id)}
              className="mono-label transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <a
            href={href("contact")}
            className="rounded-full border border-signal/40 px-4 py-1.5 text-xs font-semibold text-signal transition-colors hover:bg-signal/10"
          >
            Available for work
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-signal/50 hover:text-signal md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6">
          <nav className={cn("mx-auto flex flex-col gap-1 py-4", maxWidthClass)}>
          {SECTIONS.map(([label, id], index) => (
            <a
              key={id}
              href={href(id)}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-2 py-3 font-display text-lg text-foreground transition-colors hover:text-signal"
            >
              {label}
              <span className="mono-label text-signal">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <a
            href={href("contact")}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-signal/40 px-4 py-3 text-sm font-semibold text-signal"
          >
            Available for work
          </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
