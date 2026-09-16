import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/config/seo";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { faqItems } from "@/config/business";

const title = "Car Detailing FAQ | Detailing Lab Karachi";
const description = "Answers about Detailing Lab’s car detailing, ceramic coating, PPF, quotes, preparation, location and opening hours in Karachi.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta(title, description, "/faq"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
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
