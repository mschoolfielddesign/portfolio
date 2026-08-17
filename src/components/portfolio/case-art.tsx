import { ModelFlow, SystemsGlyph, TokenStack, WaveField } from "@/components/illustrations";
import type { ArtKey } from "@/data/case-studies";

const TONE: Record<ArtKey, string> = {
  flow: "text-signal",
  tokens: "text-ember",
  orbit: "text-signal-soft",
  wave: "text-signal",
};

export function CaseArt({ art, className = "" }: { art: ArtKey; className?: string }) {
  const cls = `${className} ${TONE[art]}`;
  if (art === "flow") return <ModelFlow className={cls} />;
  if (art === "tokens") return <TokenStack className={cls} />;
  if (art === "orbit") return <SystemsGlyph className={cls} />;
  return <WaveField className={cls} />;
}
