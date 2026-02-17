import { motion, AnimatePresence } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { editorialSlides } from "@/data/carouselData";

const EditorialCarousel = () => {
  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: editorialSlides.length });

  const slide = editorialSlides[currentIndex];

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
          transition={{ duration: 0.5 }}
          className="grid min-h-[400px] md:grid-cols-5"
        >
          <div className="relative min-h-[250px] md:col-span-2">
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {slide.subtitle}
            </p>
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{slide.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{slide.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-3 border-t border-border px-6 py-4">
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselDots total={editorialSlides.length} current={currentIndex} onDotClick={goTo} />
        <CarouselArrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default EditorialCarousel;
