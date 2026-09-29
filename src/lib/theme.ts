export const THEME_STORAGE_KEY = "portfolio-theme";

export type ThemeMode = "light" | "dark";

export const DEFAULT_THEME: ThemeMode = "dark";

const THEME_OVERLAY_ID = "theme-transition-overlay";

export function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return DEFAULT_THEME;
}

export function isDarkTheme(mode: ThemeMode): boolean {
  return mode === "dark";
}

export const THEME_TRANSITION_MS = 200;

type ApplyThemeOptions = {
  /** When true, reveals the new theme through a single full-page fade. */
  animate?: boolean;
};

export function applyTheme(mode: ThemeMode, options: ApplyThemeOptions = {}) {
  const { animate = false } = options;
  const isDark = isDarkTheme(mode);
  const root = document.documentElement;

  const commit = () => {
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  };

  if (
    !animate ||
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    commit();
    return;
  }

  document.getElementById(THEME_OVERLAY_ID)?.remove();

  const overlay = document.createElement("div");
  overlay.id = THEME_OVERLAY_ID;
  overlay.setAttribute("aria-hidden", "true");
  const previousBackground = getComputedStyle(document.body).backgroundColor;
  overlay.style.cssText = [
    "position:fixed",
    "inset:0",
    "z-index:9999",
    "pointer-events:none",
    `background-color:${previousBackground}`,
    "opacity:1",
    `transition:opacity ${THEME_TRANSITION_MS}ms ease`,
    "will-change:opacity",
  ].join(";");

  document.body.appendChild(overlay);
  commit();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.opacity = "0";
    });
  });

  const removeOverlay = () => overlay.remove();
  overlay.addEventListener(
    "transitionend",
    (event) => {
      if (event.propertyName === "opacity") removeOverlay();
    },
    { once: true },
  );
  window.setTimeout(removeOverlay, THEME_TRANSITION_MS + 80);
}

/** Inline boot script to run before paint and avoid theme flash. */
export const themeBootScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var dark=s!=="light";document.documentElement.classList.toggle("dark",dark);document.documentElement.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;
