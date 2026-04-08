const PigRunSection = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-border/30 bg-background py-12">
      <p className="text-center font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Neoprit. Snatch Piggy Run.
      </p>

      <div className="relative h-32 sm:h-40 w-full overflow-hidden">
        {/* Ground line */}
        <div className="absolute bottom-6 left-0 right-0 h-px bg-primary/30" />

        {/* Scrolling scene */}
        <div className="animate-pig-run flex items-end absolute bottom-6 left-0 whitespace-nowrap">
          {[0, 1, 2].map((set) => (
            <div key={set} className="flex items-end gap-40 sm:gap-56 px-20 sm:px-28 shrink-0">
              {/* Pig */}
              <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-14 sm:h-14 animate-pig-jump shrink-0 mb-0" fill="none" stroke="hsl(340 100% 81%)" strokeWidth="2">
                <circle cx="24" cy="20" r="14" />
                <circle cx="19" cy="17" r="1.5" fill="hsl(340 100% 81%)" />
                <circle cx="29" cy="17" r="1.5" fill="hsl(340 100% 81%)" />
                <ellipse cx="24" cy="23" rx="5" ry="3.5" />
                <circle cx="22" cy="23" r="1" fill="hsl(340 100% 81%)" />
                <circle cx="26" cy="23" r="1" fill="hsl(340 100% 81%)" />
                <path d="M14 10 Q12 4 16 6" />
                <path d="M34 10 Q36 4 32 6" />
                <line x1="16" y1="34" x2="16" y2="40" />
                <line x1="22" y1="34" x2="22" y2="40" />
                <line x1="26" y1="34" x2="26" y2="40" />
                <line x1="32" y1="34" x2="32" y2="40" />
              </svg>

              {/* Obstacle: Cactus */}
              <svg viewBox="0 0 24 40" className="w-5 h-8 sm:w-6 sm:h-10 shrink-0 mb-0" fill="none" stroke="hsl(340 100% 81%)" strokeWidth="1.5">
                <line x1="12" y1="0" x2="12" y2="40" />
                <path d="M12 12 H6 V20 H12" />
                <path d="M12 8 H18 V18 H12" />
              </svg>

              {/* Pig again */}
              <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-14 sm:h-14 animate-pig-jump shrink-0 mb-0" style={{ animationDelay: "0.3s" }} fill="none" stroke="hsl(340 100% 81%)" strokeWidth="2">
                <circle cx="24" cy="20" r="14" />
                <circle cx="19" cy="17" r="1.5" fill="hsl(340 100% 81%)" />
                <circle cx="29" cy="17" r="1.5" fill="hsl(340 100% 81%)" />
                <ellipse cx="24" cy="23" rx="5" ry="3.5" />
                <circle cx="22" cy="23" r="1" fill="hsl(340 100% 81%)" />
                <circle cx="26" cy="23" r="1" fill="hsl(340 100% 81%)" />
                <path d="M14 10 Q12 4 16 6" />
                <path d="M34 10 Q36 4 32 6" />
                <line x1="16" y1="34" x2="16" y2="40" />
                <line x1="22" y1="34" x2="22" y2="40" />
                <line x1="26" y1="34" x2="26" y2="40" />
                <line x1="32" y1="34" x2="32" y2="40" />
              </svg>

              {/* Obstacle: Whiskey bottle */}
              <svg viewBox="0 0 16 40" className="w-4 h-8 sm:w-5 sm:h-10 shrink-0 mb-0" fill="none" stroke="hsl(340 100% 81%)" strokeWidth="1.5">
                <rect x="3" y="12" width="10" height="28" rx="2" />
                <rect x="5" y="6" width="6" height="6" />
                <rect x="6" y="0" width="4" height="6" />
              </svg>

              {/* Obstacle: Barrel */}
              <svg viewBox="0 0 32 28" className="w-7 h-6 sm:w-8 sm:h-7 shrink-0 mb-0" fill="none" stroke="hsl(340 100% 81%)" strokeWidth="1.5">
                <ellipse cx="16" cy="4" rx="14" ry="4" />
                <ellipse cx="16" cy="24" rx="14" ry="4" />
                <line x1="2" y1="4" x2="2" y2="24" />
                <line x1="30" y1="4" x2="30" y2="24" />
                <line x1="16" y1="0" x2="16" y2="28" strokeDasharray="2 3" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PigRunSection;
