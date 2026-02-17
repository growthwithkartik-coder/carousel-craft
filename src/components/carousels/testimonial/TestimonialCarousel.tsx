import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { testimonials } from "@/data/carouselData";
import { Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: testimonials.length, autoPlayInterval: 6000 });

  const t = testimonials[currentIndex];

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
      <div className="flex flex-col items-center px-8 py-12 text-center md:px-16 md:py-16">
        <Quote className="mb-6 h-10 w-10 text-primary/20" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
              "{t.quote}"
            </p>
            <img
              src={t.avatar}
              alt={t.name}
              loading="lazy"
              className="mb-4 h-14 w-14 rounded-full object-cover ring-2 ring-border"
            />
            <p className="text-base font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.designation}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-border px-6 py-4">
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselDots total={testimonials.length} current={currentIndex} onDotClick={goTo} />
        <CarouselArrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
