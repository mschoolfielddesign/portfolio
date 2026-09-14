import { cn } from "@/lib/utils";

interface PortfolioImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  /** 16:9 crop for homepage case study cards only. */
  thumbnail?: boolean;
}

const PortfolioImage = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  loading = "lazy",
  sizes = "(min-width: 896px) 800px, calc(100vw - 5rem)",
  thumbnail = false,
}: PortfolioImageProps) => (
  <div
    className={cn("overflow-hidden bg-surface-2/50", thumbnail && "aspect-video", className)}
  >
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      sizes={sizes}
      className={cn(
        thumbnail
          ? "h-full w-full object-cover object-top"
          : "h-auto w-full max-w-full object-contain object-center",
        imageClassName,
      )}
    />
  </div>
);

export default PortfolioImage;
