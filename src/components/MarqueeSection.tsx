const MarqueeSection = () => {
  const text = "SNATCH PUB // DRINKS // MUSIC // GOOD TIMES // ";
  const repeated = text.repeat(6);

  return (
    <section id="vibe" className="overflow-hidden border-y border-border/30 py-10">
      <div className="animate-marquee whitespace-nowrap">
        <span
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-transparent"
          style={{ WebkitTextStroke: "2px hsl(340, 100%, 81%)" }}
        >
          {repeated}
        </span>
      </div>
    </section>
  );
};

export default MarqueeSection;
