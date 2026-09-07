import { cn } from "@/lib/utils";
import logoAsset from "@/assets/detailing-lab-logo.png.asset.json";

export function Logo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={logoAsset.url}
        alt="Detailing Lab"
        width={1672}
        height={941}
        className={cn(
          "w-auto object-contain",
          compact ? "h-8" : "h-10",
        )}
      />
    </span>
  );
}

export default Logo;
