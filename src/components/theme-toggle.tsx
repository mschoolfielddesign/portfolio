import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const ICON_STROKE = 2;

/** Matches the hero “Start a conversation” control (border + surface hover). */
const outlineSurfaceButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-2 active:bg-surface-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(outlineSurfaceButtonClassName, "size-10 shrink-0", className)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="relative block size-4" aria-hidden="true">
        <Sun
          className={cn(
            "absolute inset-0 size-4 transition-opacity duration-200 ease-linear",
            isDark ? "opacity-100" : "opacity-0",
          )}
          strokeWidth={ICON_STROKE}
        />
        <Moon
          className={cn(
            "absolute inset-0 size-4 transition-opacity duration-200 ease-linear",
            isDark ? "opacity-0" : "opacity-100",
          )}
          strokeWidth={ICON_STROKE}
        />
      </span>
    </button>
  );
}
