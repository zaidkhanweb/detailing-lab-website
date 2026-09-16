import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/config/seo";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactForm } from "@/components/sections/ContactForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { Button } from "@/components/ui-kit/Button";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { business } from "@/config/business";

const title = "Contact Detailing Lab | Car Detailing Karachi";
const description = "Contact Detailing Lab in Gulshan-e-Iqbal, Karachi for car detailing, ceramic coating, PPF and vehicle-care enquiries or to request a quote.";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta(title, description, "/contact"),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Request a Quote"
          intro="Share your vehicle details and the service you're considering, and our team will get back to you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div className="space-y-8">
            <Reveal className="surface-panel rounded-sm p-7">
              <h2 className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
                Direct contact
              </h2>
              <ul className="mt-6 space-y-5 text-body">
                <li className="flex gap-3">
                  <Phone className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={business.phoneHref}
                    className="min-w-0 transition-colors hover:text-accent"
                  >
                    {business.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0 text-muted-foreground">
                    {business.address.full}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <ul className="min-w-0 space-y-1 text-sm text-muted-foreground">
                    {business.hours.map((h) => (
                      <li key={h.days}>
                        <span className="text-foreground">{h.days}:</span>{" "}
                        {h.time}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild>
                  <a
                    href={business.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={business.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant="ghost">
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border">
        <LocationSection />
      </div>
    </SiteLayout>
  );
}
