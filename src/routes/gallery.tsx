import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import { Gallery } from "@/components/sections/Gallery";
import { Badge } from "@/components/ui-kit/Badge";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { beforeAfterPairs } from "@/config/business";

const title = "Car Detailing Gallery — Karachi | Detailing Lab";
const description =
  "Gallery of interior car detailing, exterior detailing, ceramic coating and paint protection film work at Detailing Lab in Gulshan-e-Iqbal, Karachi.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="See the Difference."
          intro="Detailing, coating and protection work presented as an editorial gallery."
        />
        <div className="mt-12">
          <Gallery editorial />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHeading
            eyebrow="Before & After"
            title="Side by Side."
            intro="Comparison cards ready for authentic before-and-after photographs from the studio."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {beforeAfterPairs.map((pair, i) => (
              <Reveal
                as="article"
                key={pair.title}
                delay={i * 80}
                className="surface-panel overflow-hidden rounded-sm"
              >
                <div className="grid grid-cols-2 gap-px bg-border">
                  {[
                    { label: "Before", img: pair.before },
                    { label: "After", img: pair.after },
                  ].map(({ label, img }) => (
                    <figure key={label} className="relative bg-surface">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-4/3 w-full object-cover"
                      />
                      <figcaption className="absolute top-3 left-3 rounded-sm bg-background/85 px-2.5 py-1 font-display text-[0.65rem] font-bold tracking-[0.16em] uppercase">
                        {label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                  <h3 className="font-display text-base font-semibold">
                    {pair.title}
                  </h3>
                  {pair.isPlaceholder && (
                    <Badge tone="placeholder">Sample comparison</Badge>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Sample imagery is used in this demo. Final business photography can be added before launch.
          </p>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
