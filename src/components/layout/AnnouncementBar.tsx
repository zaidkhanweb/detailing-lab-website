import { MessageCircle } from "lucide-react";

import { business } from "@/config/business";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-surface-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1.5 px-4 py-2.5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:px-6">
        <p className="text-[0.78rem] tracking-wide text-muted-foreground sm:text-[0.82rem]">
          {business.announcement}
        </p>
        <a
          href={business.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-display text-[0.75rem] font-bold tracking-[0.14em] text-accent uppercase underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          <MessageCircle className="size-3.5" aria-hidden="true" />
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

export default AnnouncementBar;
