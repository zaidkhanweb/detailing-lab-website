import { Star } from "lucide-react";

import { Button } from "@/components/ui-kit/Button";
import { Reveal } from "@/components/ui-kit/Reveal";
import { business } from "@/config/business";

export function RatingBlock() {
  return (
    <div className="surface-panel inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-sm px-6 py-5">
      <div className="flex items-center gap-3">
        <span className="font-display text-3xl font-extrabold">
          {business.rating}
        </span>
        <span className="flex" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-4 fill-accent text-accent" />
          ))}
        </span>
      </div>
      <div className="text-sm text-muted-foreground">
        <p className="text-foreground">Google Rating</p>
        <p>{business.reviewCount} reviews</p>
      </div>
    </div>
  );
}

export function ReviewsGrid({ count: _count = 3 }: { count?: number }) {
  return (
    <Reveal>
      <div className="surface-panel rounded-sm p-7 sm:p-8">
        <p className="text-body text-muted-foreground">
          Read current customer feedback and ratings directly on Google.
        </p>
        <div className="mt-6">
          <GoogleReviewsButton />
        </div>
      </div>
    </Reveal>
  );
}

export function GoogleReviewsButton() {
  return (
    <Button asChild variant="outline" size="lg">
      <a
        href={business.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Google Reviews
      </a>
    </Button>
  );
}
