import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Star } from "lucide-react";

import { Logo } from "@/components/Logo";
import { business, navLinks } from "@/config/business";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Car detailing and vehicle protection services in Gulshan-e-Iqbal,
            Karachi.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-metal">
            <Star className="size-4 text-accent" aria-hidden="true" />
            {business.rating} rating · {business.reviewCount} reviews
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
            Pages
          </h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{business.address.short}</span>
            </li>
            <li>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
          </ul>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={business.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                Google Reviews
              </a>
            </li>
            <li>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
            Hours
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {business.hours.map((h) => (
              <li key={h.days} className="flex flex-col">
                <span className="text-foreground">{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
            Social
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {business.socialLinks.map((s) =>
              s.url ? (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center rounded-sm border border-border-strong px-3 text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ) : (
                <li key={s.label}>
                  <span className="inline-flex h-9 items-center rounded-sm border border-dashed border-border-strong px-3 text-xs text-muted-foreground">
                    {s.label} — to be added
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 pb-24 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:pb-6">
          <p>
            © {new Date().getFullYear()} {business.businessName}. All rights
            reserved.
          </p>
          <p>
            Website concept — demo images and placeholder content to be replaced
            with business-supplied material.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
