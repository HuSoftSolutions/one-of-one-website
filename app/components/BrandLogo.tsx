import Image from "next/image";
import { business } from "@/app/lib/site";

// Real logo art (white on solid black). `square` is the 1OF1 mark; `rectangle`
// is the full lockup with name, phone, and service list. Black background means
// these blend on dark surfaces — on light surfaces wrap them in a black tile.
const SOURCES = {
  square: { src: business.logoSquareSrc, width: 2048, height: 2048 },
  rectangle: { src: business.logoRectSrc, width: 1640, height: 924 },
} as const;

export function BrandLogo({
  variant = "square",
  className = "",
  priority = false,
}: {
  variant?: keyof typeof SOURCES;
  className?: string;
  priority?: boolean;
}) {
  const { src, width, height } = SOURCES[variant];
  return (
    <Image
      src={src}
      alt={business.legalName}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
