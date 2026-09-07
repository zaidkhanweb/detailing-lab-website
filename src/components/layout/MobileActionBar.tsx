import { MapPin, MessageCircle, Phone } from "lucide-react";

import { business } from "@/config/business";

export function MobileActionBar() {
  const items = [
    { label: "Call", href: business.phoneHref, Icon: Phone, external: false },
    {
      label: "WhatsApp",
      href: business.whatsappUrl,
      Icon: MessageCircle,
      external: true,
    },
    {
      label: "Directions",
      href: business.googleMapsUrl,
      Icon: MapPin,
      external: true,
    },
  ];

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
    >
      <ul className="grid grid-cols-3">
        {items.map(({ label, href, Icon, external }) => (
          <li key={label} className="border-r border-border last:border-r-0">
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-14 flex-col items-center justify-center gap-1 text-[0.7rem] font-semibold tracking-wide text-muted-foreground transition-colors active:text-accent"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileActionBar;
