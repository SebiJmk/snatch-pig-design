import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import snatchLogo from "@/assets/snatch-logo.png";
import pigGame from "@/assets/pig-game.gif";

const HeroSection = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="font-display text-5xl font-bold uppercase tracking-widest text-foreground sm:text-7xl lg:text-8xl animate-fade-in-up">
          NO GOOD
          <br />
          EXCUSES.
        </h1>

        <p
          className="mt-6 max-w-xl font-body text-lg text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Snatch Pub. Mai mult decât un bar. Ascunzătoarea ta din oraș.
        </p>

        <div className="flex gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#menu"
            className="rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile pink-glow-box"
          >
            Vezi Meniul
          </a>
          <button
            onClick={() => setShowEasterEgg(true)}
            className="rounded-full border-2 border-primary px-6 py-4 font-display text-xs font-bold uppercase tracking-widest text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground tactile"
            data-clickable
          >
            🐷 Secret
          </button>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/90 backdrop-blur-md"
          onClick={() => setShowEasterEgg(false)}
        >
          <div
            className="w-full max-w-2xl mx-4 rounded-2xl bg-card border border-border/40 p-8 animate-fade-in-up text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-widest text-primary mb-2">
              Snatch Piggy Jump
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Nu Avem Scuze, Doar Scoruri Mari.
            </p>
            <img
              src={pigGame}
              alt="Snatch Piggy Jump"
              width={1024}
              height={512}
              className="w-full rounded-xl border border-border/30 mb-6"
            />
            <button
              onClick={() => setShowEasterEgg(false)}
              className="rounded-full bg-primary px-8 py-3 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground tactile"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
