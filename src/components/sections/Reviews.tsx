import { Quote, Star } from "lucide-react";

import { Badge } from "@/components/ui-kit/Badge";
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

export function ReviewCard({ index }: { index: number }) {
  return (
    <Reveal as="article" delay={index * 70} className="h-full">
      <div className="surface-panel flex h-full flex-col rounded-sm border-dashed p-7">
        <Quote className="size-6 text-accent/70" aria-hidden="true" />
        <p className="mt-5 flex-1 text-body text-muted-foreground">
          Customer review highlights can be added here when approved for the website.
        </p>
        <div className="mt-6 border-t border-border pt-5">
          <Badge tone="placeholder">Review space</Badge>
        </div>
      </div>
    </Reveal>
  );
}

export function ReviewsGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ReviewCard key={i} index={i} />
      ))}
    </div>
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
