import type { ReactNode } from "react";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Navbar } from "@/components/layout/Navbar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-16 lg:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default SiteLayout;
