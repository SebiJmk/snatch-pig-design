import vibe1 from "@/assets/vibe/vibe-1.jpg";
import vibe2 from "@/assets/vibe/vibe-2.jpg";
import vibe3 from "@/assets/vibe/vibe-3.jpg";
import vibe4 from "@/assets/vibe/vibe-4.jpg";
import vibe5 from "@/assets/vibe/vibe-5.jpg";
import vibe6 from "@/assets/vibe/vibe-6.jpg";

const images = [vibe1, vibe2, vibe3, vibe4, vibe5, vibe6];

const VibeSection = () => {
  return (
    <section id="vibe" className="py-24 px-6 bg-card/30">
      <div className="container">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-center text-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          The Vibe
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-14 tracking-wide">
          @snatchpub
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-[4px] tactile ${
                i === 0 || i === 5 ? "row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`Snatch Pub vibe ${i + 1}`}
                loading="lazy"
                width={640}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeSection;
