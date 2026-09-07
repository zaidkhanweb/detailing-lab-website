import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { faqItems } from "@/config/business";

const title = "FAQ — Car Detailing, Ceramic Coating & PPF | Detailing Lab Karachi";
const description =
  "Answers about Detailing Lab's car detailing, ceramic coating, glass coating, PPF and undercoating services in Gulshan-e-Iqbal, Karachi, including quotes and location.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          intro="Services, quotes, location, enquiries, preparation, gallery, ceramic coating and PPF."
        />
        <div className="mt-12">
          <FAQAccordion items={faqItems} showTopics />
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
