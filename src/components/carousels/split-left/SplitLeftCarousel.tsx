import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { splitSlides } from "@/data/carouselData";

const SplitLeftCarousel = () => {
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
      <div className="grid min-h-[400px] md:grid-cols-2">
        {/* Left Text */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {slide.subtitle}
              </p>
              <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{slide.title}</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">{slide.description}</p>
              <button className="w-fit rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Learn More
              </button>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-3">
            <CarouselArrow direction="left" onClick={prev} />
            <CarouselDots total={splitSlides.length} current={currentIndex} onDotClick={goTo} />
            <CarouselArrow direction="right" onClick={next} />
          </div>
        </div>
        {/* Right Image */}
        <div className="relative min-h-[300px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SplitLeftCarousel;
