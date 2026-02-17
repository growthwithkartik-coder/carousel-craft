import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { glassSlides } from "@/data/carouselData";

const GlassmorphismCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: glassSlides.length });

  const slide = glassSlides[currentIndex];

  return (
    <div
      className="relative h-[450px] overflow-hidden rounded-2xl md:h-[500px]"
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
        <motion.img
          key={currentIndex}
          src={slide.image}
          alt={slide.title}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-lg rounded-2xl border border-white/20 bg-white/10 p-8 text-center text-white backdrop-blur-xl md:p-10"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/70">
              {slide.subtitle}
            </p>
            <h3 className="mb-3 text-2xl font-bold md:text-3xl">{slide.title}</h3>
            <p className="text-white/80">{slide.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <CarouselDots total={glassSlides.length} current={currentIndex} onDotClick={goTo} variant="light" />
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

export default GlassmorphismCarousel;
