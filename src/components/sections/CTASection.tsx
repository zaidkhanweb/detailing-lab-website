import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui-kit/Button";
import { Reveal } from "@/components/ui-kit/Reveal";
import { business } from "@/config/business";

export function CTASection({
  title = "Ready to Give Your Car the Care It Deserves?",
  text = "Tell us about your vehicle and the service you're considering.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-y border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-5 text-body text-muted-foreground sm:text-lg">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={business.phoneHref}>
                <Phone aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
