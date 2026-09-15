import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { LocationSection } from "@/components/sections/LocationSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import {
  GoogleReviewsButton,
  RatingBlock,
  ReviewsGrid,
} from "@/components/sections/Reviews";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Button } from "@/components/ui-kit/Button";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { faqItems, localBusinessSchema } from "@/config/business";

const title =
  "Car Detailing & Ceramic Coating in Gulshan-e-Iqbal, Karachi | Detailing Lab";
const description =
  "Detailing Lab offers car detailing, ceramic coating, glass coating, PPF and undercoating in Gulshan-e-Iqbal, Karachi. Contact us for your vehicle care needs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Complete Care. From Detail to Protection."
          intro="Interior and exterior car detailing plus coating and protection services, carried out at our studio in Karachi."
        />
        <div className="mt-14">
          <ServiceGrid />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSteps />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Gallery"
          title="See the Difference."
          intro="A look at detailing, coating and protection work. Sample imagery is used in this demo."
        />
        <div className="mt-12">
          <Gallery />
        </div>
        <div className="mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">Open Full Gallery</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHeading
            eyebrow="Reviews"
            title="Trusted by Karachi Car Owners"
            intro="See Detailing Lab's publicly listed Google rating and visit Google to read current customer reviews."
          />
          <div className="mt-10">
            <RatingBlock />
          </div>
          <div className="mt-12">
            <ReviewsGrid />
          </div>
          <div className="mt-12">
            <GoogleReviewsButton />
          </div>
        </div>
      </section>

      <LocationSection />

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHeading eyebrow="FAQ" title="Questions, Answered." />
          <div className="mt-10">
            <FAQAccordion items={faqItems.slice(0, 5)} />
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/faq">See all FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
