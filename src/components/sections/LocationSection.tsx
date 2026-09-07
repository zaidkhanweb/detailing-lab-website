import { Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui-kit/Button";
import { Badge } from "@/components/ui-kit/Badge";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { business } from "@/config/business";

export function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading eyebrow="Location" title="Visit Detailing Lab" />
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold">Address</h3>
              <p className="mt-2 text-body text-muted-foreground">
                {business.address.full}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold">
                Opening hours
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {business.hours.map((h) => (
                  <li key={h.days}>
                    <span className="text-foreground">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold">Phone</h3>
              <a
                href={business.phoneHref}
                className="mt-2 inline-block text-body text-muted-foreground transition-colors hover:text-accent"
              >
                {business.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        <div className="surface-panel overflow-hidden rounded-sm">
          {business.googleMapsEmbedUrl ? (
            <iframe
              title="Map showing the location of Detailing Lab in Gulshan-e-Iqbal, Karachi"
              src={business.googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full border-0"
            />
          ) : (
            <div className="lab-grid flex h-full min-h-80 flex-col items-center justify-center gap-4 p-8 text-center">
              <Badge tone="placeholder">Map embed placeholder</Badge>
              <p className="max-w-sm text-sm text-muted-foreground">
                Add the business's own Google Maps embed URL in the site
                configuration to activate the map here. Until then, use Get
                Directions.
              </p>
              <Button asChild variant="surface" size="sm">
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
