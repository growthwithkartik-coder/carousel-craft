import { motion } from "framer-motion";
import { useCarouselLogic } from "@/hooks/useCarouselLogic";
import { CarouselDots, CarouselArrow } from "../shared/CarouselControls";
import { cardSlides } from "@/data/carouselData";
import { useIsMobile } from "@/hooks/use-mobile";

const CardCarousel = () => {
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 1 : 3;
  const totalPages = Math.ceil(cardSlides.length / visibleCount);

  const { currentIndex, next, prev, goTo, onMouseEnter, onMouseLeave, onKeyDown, onTouchStart, onTouchEnd } =
    useCarouselLogic({ totalSlides: totalPages });

  const startIdx = currentIndex * visibleCount;
  const visibleSlides = cardSlides.slice(startIdx, startIdx + visibleCount);

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
    >
      <div className="grid gap-6 md:grid-cols-3">
        {visibleSlides.map((slide, i) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {slide.subtitle}
              </p>
              <h4 className="mb-2 text-lg font-semibold text-foreground">{slide.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{slide.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselDots total={totalPages} current={currentIndex} onDotClick={goTo} />
        <CarouselArrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default CardCarousel;
