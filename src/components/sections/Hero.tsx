import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroCar from "@/assets/hero-car.jpg";
import { Button } from "@/components/ui-kit/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCar}
          alt="Glossy black car in a professional detailing studio in Karachi"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-70"
        />
        {/* Demo image: licensed stock/generated visual — replace with business photography. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl">
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
            Premium Automotive Protection Studio
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-4 mt-6 text-hero duration-700">
            Your Car Deserves More Than a Wash.
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 mt-7 max-w-xl text-body text-muted-foreground duration-1000 sm:text-lg">
            Professional interior and exterior detailing, ceramic coating, glass
            coating, PPF and undercoating for car owners in Karachi.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col gap-3 duration-1000 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore Services
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
