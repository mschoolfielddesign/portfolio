import { useEffect, useState } from "react";
import type { CaseImage } from "@/data/case-studies";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type CaseStudyFigureProps = {
  image: CaseImage;
  loading?: "lazy" | "eager";
  imgClassName?: string;
  wrapperClassName?: string;
};

function CaseStudyFullSizeDialog({
  image,
  open,
  onOpenChange,
}: {
  image: CaseImage;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const fullSrc = image.fullSrc ?? image.src;
  const metaWidth = image.fullWidth ?? image.width;
  const metaHeight = image.fullHeight ?? image.height;
  const [natural, setNatural] = useState({ width: metaWidth, height: metaHeight });

  useEffect(() => {
    if (!open) return;
    setNatural({ width: metaWidth, height: metaHeight });
    const probe = new Image();
    probe.decoding = "async";
    probe.src = fullSrc;
    probe.onload = () => {
      if (probe.naturalWidth > 0) {
        setNatural({ width: probe.naturalWidth, height: probe.naturalHeight });
      }
    };
  }, [open, fullSrc, metaWidth, metaHeight]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[95vh] w-[min(96vw,1400px)] max-w-none scale-100 flex-col gap-2 overflow-hidden border-border/60 bg-surface p-3 sm:p-4 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100">
        <DialogTitle className="sr-only">{image.alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Full resolution image. Scroll to inspect details. Press Escape to close.
        </DialogDescription>
        <p className="font-mono text-[10px] text-muted-foreground">
          {natural.width}×{natural.height}px · scroll to pan
        </p>
        <div className="min-h-0 flex-1 overflow-auto overscroll-contain rounded-lg border border-border/40 bg-surface-2/20">
          <img
            key={fullSrc}
            src={fullSrc}
            alt={image.alt}
            width={natural.width}
            height={natural.height}
            draggable={false}
            decoding="sync"
            fetchPriority="high"
            className="block max-w-none select-none"
            style={{ width: natural.width, height: natural.height }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CaseStudyFigure({
  image,
  loading = "lazy",
  imgClassName = "w-full rounded-2xl",
  wrapperClassName,
}: CaseStudyFigureProps) {
  const [open, setOpen] = useState(false);
  const expandable = image.expandable ?? false;

  const img = (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding="async"
      className={cn(imgClassName, expandable && "transition-opacity group-hover:opacity-95")}
    />
  );

  if (!expandable) {
    return <div className={wrapperClassName}>{img}</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl",
          wrapperClassName,
        )}
        aria-label={`View full size: ${image.alt}`}
      >
        {img}
      </button>
      <CaseStudyFullSizeDialog image={image} open={open} onOpenChange={setOpen} />
    </>
  );
}
