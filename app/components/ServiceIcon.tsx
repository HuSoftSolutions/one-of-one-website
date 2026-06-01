import type { Service } from "@/app/lib/site";

/**
 * Simple line-art icons for each service, colored via `currentColor`.
 * Swap for real photography later if the client provides job photos.
 */
export function ServiceIcon({
  icon,
  className = "",
  style,
}: {
  icon: Service["icon"];
  className?: string;
  style?: React.CSSProperties;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
    style,
  };

  switch (icon) {
    case "restaurant":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v4M9 3v4M18 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" />
        </svg>
      );
    case "pressure":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 21h7l1-2 2 4 1.5-3H21M14 8h4l2-3M14 8V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3Z" />
        </svg>
      );
    case "car":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5M3 13h18M3 13v4h2m16-4v4h-2M6 17a1.5 1.5 0 1 0 0 .01M18 17a1.5 1.5 0 1 0 0 .01" />
        </svg>
      );
  }
}
