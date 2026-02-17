import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { luxurySlides } from "@/data/carouselData";

const LuxuryCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: luxurySlides.length, autoPlayInterval: 6000 });

  const slide = luxurySlides[currentIndex];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-72 md:h-96">
            <img src={slide.image} alt={slide.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="px-10 py-10 text-center md:px-20 md:py-14">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {slide.subtitle}
            </p>
            <h3 className="mb-5 font-serif text-3xl font-light italic text-foreground md:text-4xl">
              {slide.title}
            </h3>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
              {slide.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-3 border-t border-border px-6 py-4">
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselDots total={luxurySlides.length} current={currentIndex} onDotClick={goTo} />
        <CarouselArrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default LuxuryCarousel;
