import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "placeholder";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-display text-[0.68rem] font-bold tracking-[0.14em] uppercase",
        tone === "neutral" && "border-border-strong text-metal",
        tone === "accent" && "border-accent/45 bg-accent/10 text-accent",
        tone === "placeholder" &&
          "border-dashed border-metal/50 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
