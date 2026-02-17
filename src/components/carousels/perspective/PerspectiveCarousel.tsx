import { motion } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { cardSlides } from "@/data/carouselData";
import { cn } from "@/lib/utils";

const PerspectiveCarousel = () => {
  const slides = cardSlides.slice(0, 5);
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: slides.length });

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      className="py-4"
      style={{ perspective: "1000px" }}
    >
      <div className="flex items-center justify-center gap-4 overflow-hidden px-4">
        {slides.map((slide, i) => {
          const offset = i - currentIndex;
          const isActive = offset === 0;
          const rotateY = offset * 25;
          const z = isActive ? 0 : -150;

          return (
            <motion.div
              key={slide.id}
              animate={{
                rotateY,
                z,
                scale: isActive ? 1 : 0.85,
                opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.6,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "shrink-0 overflow-hidden rounded-xl border border-border bg-card",
                isActive ? "w-72 shadow-2xl md:w-80" : "hidden w-56 md:block",
              )}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => goTo(i)}
            >
              <div className="h-44 overflow-hidden">
                <img src={slide.image} alt={slide.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground">{slide.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{slide.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselDots total={slides.length} current={currentIndex} onDotClick={goTo} />
        <CarouselArrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default PerspectiveCarousel;
