import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui-kit/Button";
import { Logo } from "@/components/Logo";
import { business, navLinks } from "@/config/business";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:py-4"
      >
        <Link
          to="/"
          className="flex min-w-0 items-center rounded-sm"
          aria-label="Detailing Lab home"
          onClick={() => setOpen(false)}
        >
          <Logo className="hidden sm:flex" />
          <Logo compact className="sm:hidden" />
        </Link>

        <div className="flex items-center gap-1.5 lg:gap-6">
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ "data-active": "true" }}
                  className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Get a Quote</Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 shrink-0 place-items-center rounded-sm border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
          {navLinks.map((link, i) => (
            <li key={link.to} className="border-b border-border last:border-0">
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ "data-active": "true" }}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 25}ms` }}
                className="block py-4 font-display text-lg font-semibold text-foreground transition-colors data-[active=true]:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-7xl px-4 pt-2 pb-6 sm:px-6">
          <Button asChild size="lg" className="w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </Button>
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex h-12 items-center justify-center rounded-sm border border-border-strong font-display text-sm font-bold tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
