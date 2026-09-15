import { createFileRoute } from "@tanstack/react-router";

import galleryStudio from "@/assets/gallery-studio.jpg";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui-kit/Badge";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { business, pillars } from "@/config/business";

const title = "About Detailing Lab — Car Detailing in Gulshan-e-Iqbal, Karachi";
const description =
  "Detailing Lab provides automotive detailing and protection services in Gulshan-e-Iqbal, Karachi, focused on detailing, protection, care and clear guidance.";

/** Demo profile sections — final business details can be supplied before launch. */
const placeholderSections = [
  {
    heading: "Our story",
    prompt:
      "The studio's background and story can be added here for the final website.",
  },
  {
    heading: "The team",
    prompt: "Team names and roles can be added here for the final website.",
  },
  {
    heading: "Products and brands used",
    prompt:
      "Products and brands used by the studio can be featured here when supplied.",
  },
  {
    heading: "Experience and milestones",
    prompt:
      "Experience, milestones or credentials can be added here when supplied.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="More Than Cleaning. It's Care for Your Car."
          intro={`${business.businessName} provides automotive detailing and protection services in Gulshan-e-Iqbal, Karachi.`}
        />
      </section>

      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6">
        <img
          src={galleryStudio}
          alt="Professional car detailing workshop environment"
          width={1400}
          height={1000}
          loading="lazy"
          decoding="async"
          className="aspect-16/9 w-full rounded-sm border border-border object-cover"
        />
      </Reveal>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {[
            {
              h: "Detailing",
              p: "Interior and exterior detailing carried out area by area rather than as a quick clean.",
            },
            {
              h: "Protection",
              p: "Ceramic coating, glass coating, paint protection film and undercoating services.",
            },
            {
              h: "Care",
              p: "Vehicles are handled carefully throughout the work, inside and out.",
            },
            {
              h: "Customer guidance",
              p: "We explain what a service involves so you can decide what's right for your car.",
            },
          ].map((item, i) => (
            <Reveal key={item.h} delay={i * 70} className="bg-surface p-8">
              <h2 className="text-h3">{item.h}</h2>
              <p className="mt-3 text-body text-muted-foreground">{item.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHeading
            eyebrow="Our approach"
            title="Attention to Every Detail."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 70}>
                <div className="border-t border-border-strong pt-6">
                  <h3 className="font-display text-lg font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Business profile"
          title="More About the Studio."
          intro="This demo keeps business-specific background information separate so the final website can use details supplied directly by the studio."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {placeholderSections.map((section, i) => (
            <Reveal
              key={section.heading}
              delay={i * 70}
              className="surface-panel rounded-sm border-dashed p-7"
            >
              <Badge tone="placeholder">Details to be added</Badge>
              <h3 className="mt-5 text-h3">{section.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {section.prompt}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
