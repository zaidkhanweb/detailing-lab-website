import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, type FaqItem } from "@/config/business";

export function FAQAccordion({
  items = faqItems,
  showTopics = false,
}: {
  items?: FaqItem[];
  showTopics?: boolean;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`faq-${i}`}
          className="border-b border-border"
        >
          <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline hover:text-accent sm:text-lg">
            <span className="min-w-0">
              {showTopics && (
                <span className="mb-1.5 block font-display text-[0.65rem] font-bold tracking-[0.16em] text-accent uppercase">
                  {item.topic}
                </span>
              )}
              {item.q}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-body text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;
