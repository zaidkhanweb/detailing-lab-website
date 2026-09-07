import { Compass, MapPin, Sparkles, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { Reveal } from "@/components/ui-kit/Reveal";
import { pillars } from "@/config/business";

const icons = [Sparkles, Wrench, Compass, MapPin] as const;

export function WhyChooseUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        eyebrow="Why Detailing Lab"
        title="Attention to Every Detail."
        intro="A focused approach to detailing and vehicle protection in Gulshan-e-Iqbal, Karachi."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => {
          const Icon = icons[i % icons.length] ?? Sparkles;
          return (
            <Reveal key={pillar.title} delay={i * 70} className="bg-surface p-7">
              <Icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-6 font-display text-lg font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;
