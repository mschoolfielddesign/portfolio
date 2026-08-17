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
}: PortfolioImageProps) => (
  <div className={cn("aspect-video overflow-hidden bg-surface-2/50", className)}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      sizes={sizes}
      className={cn("h-full w-full object-cover object-top", imageClassName)}
    />
  </div>
);

export default PortfolioImage;
