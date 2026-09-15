import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { Reveal } from "@/components/ui-kit/Reveal";
import { processSteps } from "@/config/business";

export function ProcessSteps() {
  return (
    <section className="border-y border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Process"
          title="From Inspection to Finish."
          intro="A simple look at how a detailing enquiry can move from the first conversation to the finished vehicle."
        />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <div className="border-t border-border-strong pt-6">
                <span
                  aria-hidden="true"
                  className="font-display text-4xl font-extrabold text-accent/35"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessSteps;
