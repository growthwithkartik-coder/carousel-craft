import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { splitSlides } from "@/data/carouselData";

const VerticalCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: splitSlides.length });

  const slide = splitSlides[currentIndex];

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative h-64 md:h-80">
            <img src={slide.image} alt={slide.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="p-8">
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{slide.subtitle}</p>
            <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{slide.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{slide.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-3 border-t border-border px-6 py-4">
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselDots total={splitSlides.length} current={currentIndex} onDotClick={goTo} />
        <CarouselArrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default VerticalCarousel;
