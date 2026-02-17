import { useState, useCallback, useEffect, useRef } from "react";

interface UseCarouselLogicOptions {
  totalSlides: number;
  autoPlayInterval?: number;
  loop?: boolean;
}

export function useCarouselLogic({
  totalSlides,
  autoPlayInterval = 5000,
  loop = true,
}: UseCarouselLogicOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) =>
      loop ? (prev + 1) % totalSlides : Math.min(prev + 1, totalSlides - 1)
    );
  }, [totalSlides, loop]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) =>
      loop
        ? (prev - 1 + totalSlides) % totalSlides
        : Math.max(prev - 1, 0)
    );
  }, [totalSlides, loop]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused || autoPlayInterval <= 0) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, autoPlayInterval, next]);

  const onMouseEnter = useCallback(() => setIsPaused(true), []);
  const onMouseLeave = useCallback(() => setIsPaused(false), []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        dx < 0 ? next() : prev();
      }
    },
    [next, prev]
  );

  return {
    currentIndex,
    next,
    prev,
    goTo,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onTouchStart,
    onTouchEnd,
    isPaused,
  };
}
