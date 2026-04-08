import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import snatchLogo from "@/assets/snatch-logo.png";
import pigGame from "@/assets/pig-game.gif";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Interactive Logo */}
        <div
          className="mb-8 transition-transform duration-500 ease-out"
          style={{ transform: hovered ? "scale(0.6)" : "scale(1)" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-clickable
        >
          <img
            src={hovered ? pigGame : snatchLogo}
            alt="Snatch Pub"
            width={hovered ? 320 : 100}
            height={hovered ? 160 : 100}
            className="rounded-xl transition-all duration-300"
          />
        </div>

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

        <a
          href="#menu"
          className="mt-10 rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile animate-fade-in-up pink-glow-box"
          style={{ animationDelay: "0.4s" }}
        >
          Vezi Meniul
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
