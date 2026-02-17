import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { heroSlides } from "@/data/carouselData";

const HeroCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: heroSlides.length });

  return (
    <div
      className="relative h-[500px] w-full overflow-hidden rounded-2xl md:h-[600px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentIndex].image}
            alt={heroSlides[currentIndex].title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {heroSlides[currentIndex].subtitle}
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
              {heroSlides[currentIndex].title}
            </h2>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              {heroSlides[currentIndex].description}
            </p>
            {heroSlides[currentIndex].cta && (
              <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105">
                {heroSlides[currentIndex].cta}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <CarouselDots total={heroSlides.length} current={currentIndex} onDotClick={goTo} variant="light" />
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <CarouselArrow direction="left" onClick={prev} variant="light" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <CarouselArrow direction="right" onClick={next} variant="light" />
      </div>
    </div>
  );
};

export default HeroCarousel;
