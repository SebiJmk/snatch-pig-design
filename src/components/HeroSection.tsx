import heroBg from "@/assets/hero-brunch.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" width={1344} height={768} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 animate-fade-in-up"
        >
          The Brunch Club
        </p>

        <h1 className="font-display text-5xl font-bold lowercase tracking-widest text-foreground sm:text-7xl lg:text-8xl animate-fade-in-up">
          replace
        </h1>

        <p
          className="mt-6 max-w-md font-body text-base text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Unde micul dejun devine o experiență. Bucharest's finest brunch destination.
        </p>

        <a
          href="#menu"
          className="mt-10 rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile animate-fade-in-up blue-glow-box"
          style={{ animationDelay: "0.4s" }}
        >
          Vezi Meniul
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
