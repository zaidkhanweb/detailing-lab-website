import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui-kit/Reveal";
import { business, services, type Service } from "@/config/business";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Reveal as="article" delay={index * 60} className="group h-full">
      <div className="surface-panel flex h-full flex-col overflow-hidden rounded-sm transition-colors duration-300 group-hover:border-accent/50">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={service.image}
            alt={service.alt}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-h3">{service.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.short}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/services"
              hash={service.slug}
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
            >
              Learn More
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-[0.14em] text-accent uppercase transition-colors hover:text-foreground"
            >
              Ask About Service
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </div>
  );
}

export default ServiceGrid;
