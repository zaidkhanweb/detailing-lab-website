import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui-kit/Badge";
import { Reveal } from "@/components/ui-kit/Reveal";
import { galleryImages, type GalleryCategory } from "@/config/business";
import { cn } from "@/lib/utils";

const filters: Array<"All" | GalleryCategory> = [
  "All",
  "Exterior",
  "Interior",
  "Coating",
  "PPF",
  "Before & After",
];

export function Gallery({ editorial = false }: { editorial?: boolean }) {
  const [active, setActive] = React.useState<(typeof filters)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const items = React.useMemo(
    () =>
      active === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active),
    [active],
  );

  const close = React.useCallback(() => setLightboxIndex(null), []);
  const step = React.useCallback(
    (dir: number) =>
      setLightboxIndex((i) =>
        i === null ? i : (i + dir + items.length) % items.length,
      ),
    [items.length],
  );

  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, step]);

  const current = lightboxIndex === null ? null : items[lightboxIndex];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setActive(f);
              setLightboxIndex(null);
            }}
            aria-pressed={active === f}
            className={cn(
              "h-10 rounded-sm border px-4 font-display text-xs font-bold tracking-[0.12em] uppercase transition-colors",
              active === f
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border-strong text-muted-foreground hover:border-accent hover:text-accent",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="surface-panel mt-8 flex flex-col items-center gap-3 rounded-sm px-6 py-16 text-center">
          <ImageOff className="size-6 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            No images in this category yet.
          </p>
        </div>
      ) : (
        <ul
          className={cn(
            "mt-8 grid gap-4 sm:grid-cols-2",
            editorial ? "lg:grid-cols-3 lg:auto-rows-[220px]" : "lg:grid-cols-3",
          )}
        >
          {items.map((img, i) => (
            <Reveal
              as="li"
              key={`${img.src}-${i}`}
              delay={(i % 3) * 60}
              className={cn(
                "group",
                editorial && img.span === "wide" && "sm:col-span-2 lg:row-span-2",
                editorial && img.span === "tall" && "lg:row-span-2",
                editorial && !img.span && "lg:row-span-1",
              )}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative block h-full w-full overflow-hidden rounded-sm border border-border transition-colors hover:border-accent/60"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                    editorial ? "h-full min-h-52" : "aspect-4/3",
                  )}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 p-4 text-left">
                  <span className="font-display text-sm font-semibold text-foreground">
                    {img.caption}
                  </span>
                  <span className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-accent uppercase">
                    {img.category}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      )}

      <p className="mt-6 text-xs text-muted-foreground">
        Demo imagery. All gallery images are placeholders to be replaced with
        photographs supplied or licensed by Detailing Lab.
      </p>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="mx-auto max-h-[78vh] w-auto rounded-sm border border-border object-contain"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-center gap-3">
                <p className="font-display text-sm font-semibold">
                  {current.caption}
                </p>
                {current.isPlaceholder && (
                  <Badge tone="placeholder">Demo image — replace</Badge>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="grid size-11 place-items-center rounded-sm border border-border-strong hover:border-accent hover:text-accent"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="grid size-11 place-items-center rounded-sm border border-border-strong hover:border-accent hover:text-accent"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute -top-2 right-0 grid size-11 -translate-y-full place-items-center rounded-sm border border-border-strong bg-surface hover:border-accent hover:text-accent"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
