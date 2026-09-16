import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta } from "@/config/seo";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui-kit/Button";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { business, services } from "@/config/business";
import { cn } from "@/lib/utils";

const title = "Car Detailing Services in Karachi | Detailing Lab";
const description = "Explore interior and exterior detailing, ceramic and glass coating, PPF and undercoating services at Detailing Lab in Gulshan-e-Iqbal, Karachi.";

export const Route = createFileRoute("/services")({
  head: () => pageMeta(title, description, "/services"),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Detailing and Protection Services"
          intro="Each service below is carried out at our studio on Rashid Minhas Road Service Lane, Gulshan-e-Iqbal, Karachi. Ask our team what a service involves for your specific vehicle."
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        {services.map((service, i) => (
          <Reveal
            as="section"
            key={service.slug}
            className="scroll-mt-28 border-t border-border py-14 lg:py-20"
          >
            <div
              id={service.slug}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
              )}
            >
              <div className={cn("overflow-hidden rounded-sm border border-border", i % 2 === 1 && "lg:order-2")}>
                <img
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="eyebrow">
                  {String(i + 1).padStart(2, "0")} / Service
                </p>
                <h2 className="mt-4 text-h2">{service.name}</h2>
                <p className="mt-5 text-body text-muted-foreground sm:text-lg">
                  {service.description}
                </p>
                <p className="mt-4 text-sm text-metal">{service.generallyFor}</p>
                {business.pricing.enabled ? null : (
                  <p className="mt-6 text-xs text-muted-foreground">
                    Pricing is shared on enquiry.
                  </p>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <a
                      href={business.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal className="surface-panel rounded-sm p-8 text-center lg:p-14">
          <h2 className="text-h2">Not sure which service you need?</h2>
          <p className="mt-4 text-body text-muted-foreground sm:text-lg">
            Talk to our team. Tell us about your vehicle and we'll walk you
            through the options.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={business.phoneHref}>Call {business.phone}</a>
            </Button>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
