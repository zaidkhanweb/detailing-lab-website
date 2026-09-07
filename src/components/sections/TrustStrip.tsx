import { MapPin, ShieldCheck, Star, Users } from "lucide-react";

import { Reveal } from "@/components/ui-kit/Reveal";
import { business } from "@/config/business";

export function TrustStrip() {
  const items = [
    { Icon: Star, label: `${business.rating}★ Google Rating` },
    { Icon: Users, label: `${business.reviewCount} Reviews` },
    { Icon: ShieldCheck, label: "Professional Detailing Services" },
    { Icon: MapPin, label: "Gulshan-e-Iqbal, Karachi" },
  ];

  return (
    <section aria-label="Business highlights" className="border-y border-border bg-surface">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {items.map(({ Icon, label }, i) => (
          <Reveal as="li" key={label} delay={i * 70} className="sm:border-b sm:border-border lg:border-b-0">
            <div className="flex min-w-0 items-center gap-3 px-5 py-6 lg:px-8">
              <Icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="font-display text-sm font-semibold tracking-wide text-foreground">
                {label}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export default TrustStrip;
