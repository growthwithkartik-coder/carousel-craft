import { useRef } from "react";
import HeroCarousel from "@/components/carousels/hero/HeroCarousel";
import SplitLeftCarousel from "@/components/carousels/split-left/SplitLeftCarousel";
import SplitRightCarousel from "@/components/carousels/split-right/SplitRightCarousel";
import CardCarousel from "@/components/carousels/card/CardCarousel";
import EditorialCarousel from "@/components/carousels/editorial/EditorialCarousel";
import GlassmorphismCarousel from "@/components/carousels/glassmorphism/GlassmorphismCarousel";
import CenterFocusCarousel from "@/components/carousels/center-focus/CenterFocusCarousel";
import VerticalCarousel from "@/components/carousels/vertical/VerticalCarousel";
import PerspectiveCarousel from "@/components/carousels/perspective/PerspectiveCarousel";
import LuxuryCarousel from "@/components/carousels/luxury/LuxuryCarousel";
import NeonCarousel from "@/components/carousels/neon/NeonCarousel";
import TestimonialCarousel from "@/components/carousels/testimonial/TestimonialCarousel";

const sections = [
  { id: "hero", label: "Hero", title: "Full Width Hero Carousel", desc: "Full-bleed background images with centered text overlay, headline, subtitle, and CTA button.", Component: HeroCarousel },
  { id: "split-left", label: "Split Left", title: "Split Layout — Left Text / Right Image", desc: "50/50 desktop layout with heading, paragraph, and button on the left; sliding images on the right.", Component: SplitLeftCarousel },
  { id: "split-right", label: "Split Right", title: "Split Layout — Right Text / Left Image", desc: "Mirror layout with smooth fade transitions for visual variety.", Component: SplitRightCarousel },
  { id: "card", label: "Card", title: "Card Style Carousel", desc: "Multi-card view with soft shadows, rounded corners, and hover scale effects.", Component: CardCarousel },
  { id: "editorial", label: "Editorial", title: "Image Left / Text Right Per Slide", desc: "Horizontal layout per slide — 40% image, 60% text. Clean editorial feel.", Component: EditorialCarousel },
  { id: "glass", label: "Glass", title: "Glassmorphism Carousel", desc: "Full background image with frosted-glass text container overlay.", Component: GlassmorphismCarousel },
  { id: "center", label: "Center Focus", title: "Center Focus Carousel", desc: "Active slide is larger and prominent with adjacent slides scaled down.", Component: CenterFocusCarousel },
  { id: "vertical", label: "Vertical", title: "Vertical Carousel", desc: "Slides transition vertically. Image on top, text beneath.", Component: VerticalCarousel },
  { id: "perspective", label: "3D", title: "3D Perspective Carousel", desc: "Side slides with CSS 3D rotation. Center slide front-facing.", Component: PerspectiveCarousel },
  { id: "luxury", label: "Luxury", title: "Luxury Minimal Carousel", desc: "Elegant serif typography, generous whitespace, refined text blocks.", Component: LuxuryCarousel },
  { id: "neon", label: "Neon", title: "Dark Mode Neon Carousel", desc: "Dark background with glowing neon-colored borders and text accents.", Component: NeonCarousel },
  { id: "testimonial", label: "Testimonial", title: "Testimonial Style Carousel", desc: "Avatar, large quote, reviewer name and designation.", Component: TestimonialCarousel },
];

const Index = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-3 scrollbar-none">
          <span className="mr-4 shrink-0 text-sm font-semibold text-foreground">🎠 Carousels</span>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Premium Carousel Showcase
        </h1>
        <p className="text-lg text-muted-foreground">
          12 beautifully crafted, fully responsive carousel variations — ready for production.
        </p>
      </header>

      {/* Sections */}
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-24 md:px-6">
        {sections.map(({ id, title, desc, Component }, i) => (
          <section
            key={id}
            ref={(el) => { sectionRefs.current[id] = el; }}
            className="scroll-mt-20"
          >
            <div className="mb-6">
              <span className="mb-1 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / 12
              </span>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
              <p className="mt-1 text-muted-foreground">{desc}</p>
            </div>
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
};

export default Index;
