import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { neonSlides } from "@/data/carouselData";

const NeonCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: neonSlides.length });

  const slide = neonSlides[currentIndex];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[hsl(280,100%,65%)]/30 bg-[hsl(260,20%,8%)]"
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
        <div className="relative min-h-[250px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(260,20%,8%)]" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[hsl(280,100%,65%)]">
                {slide.subtitle}
              </p>
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl" style={{ textShadow: "0 0 20px hsl(280,100%,65%,0.3)" }}>
                {slide.title}
              </h3>
              <p className="leading-relaxed text-white/60">{slide.description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-3">
            <CarouselArrow direction="left" onClick={prev} variant="neon" />
            <CarouselDots total={neonSlides.length} current={currentIndex} onDotClick={goTo} variant="neon" />
            <CarouselArrow direction="right" onClick={next} variant="neon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonCarousel;
