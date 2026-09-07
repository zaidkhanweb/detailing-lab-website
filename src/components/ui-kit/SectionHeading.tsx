import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui-kit/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-3">
          {align === "center" && <span className="h-px w-8 bg-accent/50" aria-hidden="true" />}
          {eyebrow}
          <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        </p>
      )}
      <As className={As === "h1" ? "text-h1" : "text-h2"}>{title}</As>
      {intro && (
        <p className="mt-5 text-body text-muted-foreground sm:text-lg">{intro}</p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
