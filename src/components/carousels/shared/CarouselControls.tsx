import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
  variant?: "default" | "light" | "neon";
}

export const CarouselDots = ({ total, current, onDotClick, className, variant = "default" }: DotsProps) => (
  <div className={cn("flex items-center justify-center gap-2", className)}>
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={cn(
          "rounded-full transition-all duration-300",
          variant === "light" && [
            "h-2 w-2",
            i === current ? "w-6 bg-white" : "bg-white/50 hover:bg-white/70",
          ],
          variant === "neon" && [
            "h-2 w-2",
            i === current
              ? "w-6 bg-[hsl(280,100%,65%)] shadow-[0_0_8px_hsl(280,100%,65%)]"
              : "bg-white/30 hover:bg-white/50",
          ],
          variant === "default" && [
            "h-2 w-2",
            i === current
              ? "w-6 bg-primary"
              : "bg-primary/25 hover:bg-primary/40",
          ]
        )}
      />
    ))}
  </div>
);

interface ArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  variant?: "default" | "light" | "neon";
}

export const CarouselArrow = ({ direction, onClick, className, variant = "default" }: ArrowProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
        variant === "light" && "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
        variant === "neon" && "border border-[hsl(280,100%,65%)]/50 bg-white/5 text-[hsl(280,100%,65%)] hover:bg-[hsl(280,100%,65%)]/10 hover:shadow-[0_0_12px_hsl(280,100%,65%,0.3)]",
        variant === "default" && "border border-border bg-background/80 text-foreground backdrop-blur-sm hover:bg-accent",
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};
