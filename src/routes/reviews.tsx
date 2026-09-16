import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/config/seo";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/sections/CTASection";
import {
  GoogleReviewsButton,
  RatingBlock,
  ReviewsGrid,
} from "@/components/sections/Reviews";
import { Badge } from "@/components/ui-kit/Badge";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { business } from "@/config/business";

const title = "Detailing Lab Reviews | Car Detailing Karachi";
const description = `See Detailing Lab’s publicly listed Google rating of ${business.rating} from ${business.reviewCount} reviews and visit Google for current customer feedback.`;

export const Route = createFileRoute("/reviews")({
  head: () => pageMeta(title, description, "/reviews"),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Reviews"
          title="Trusted by Karachi Car Owners"
          intro="See Detailing Lab's publicly listed Google rating and review count, with a direct link to current customer reviews on Google."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
          <Reveal className="surface-panel rounded-sm p-7">
            <p className="font-display text-5xl font-extrabold text-accent">
              {business.rating}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Google Rating</p>
          </Reveal>
          <Reveal delay={80} className="surface-panel rounded-sm p-7">
            <p className="font-display text-5xl font-extrabold">
              {business.reviewCount}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Reviews</p>
          </Reveal>
        </div>

        <div className="mt-10">
          <RatingBlock />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-h2">What customers say</h2>
            <Badge tone="placeholder">Customer reviews</Badge>
          </div>
          <div className="mt-12">
            <ReviewsGrid count={6} />
          </div>
          <div className="mt-12">
            <GoogleReviewsButton />
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
