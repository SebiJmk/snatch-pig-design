import { useState } from "react";
import snatchLogo from "@/assets/snatch-logo.png";
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";

const FooterSection = () => {
  const [mapHover, setMapHover] = useState(false);

  return (
    <footer id="contact" className="border-t border-border/30">
      {/* Dark Map with hover overlay */}
      <div
        className="w-full h-[500px] relative"
        onMouseEnter={() => setMapHover(true)}
        onMouseLeave={() => setMapHover(false)}
      >
        <iframe
          title="Locație Snatch Pub"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.5!2d26.0823!3d44.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43f80a2c9d%3A0x0!2sStrada+Nicolae+Paulescu+61%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000"
          className="w-full h-full border-0 grayscale invert opacity-60"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Snatch Pink marker dot on address */}
        <div className="absolute top-[45%] left-[48%] w-3 h-3 rounded-full bg-primary pink-glow-box z-10">
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
        </div>
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-background/60 transition-opacity duration-300 ${
            mapHover ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="https://maps.google.com/?q=Strada+Nicolae+Paulescu+61+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile pink-glow-box"
          >
            Vezi Hărți
          </a>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left - Contact + Program */}
          <div className="space-y-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Str. Nicolae Paulescu 61, București
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +40 721 000 000
              </p>
            </div>

            {/* Program - clean layout */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Program
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between gap-8">
                  <span>Luni – Vineri</span>
                  <span className="text-foreground font-medium">18:00 – 02:00</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>Sâmbătă – Duminică</span>
                  <span className="text-foreground font-medium">18:00 – 02:00</span>
                </div>
              </div>
            </div>

            {/* Footer Sună acum pill */}
            <a
              href="tel:+40721000000"
              className="inline-block rounded-full bg-primary px-6 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile"
            >
              Sună acum
            </a>
          </div>

          {/* Center - Social */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Follow the Pig
            </h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground transition-colors duration-200 hover:text-primary tactile"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors duration-200 hover:text-primary tactile"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            {/* Instagram placeholder grid */}
            <div className="grid grid-cols-3 gap-1 mt-4 w-full max-w-[240px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded bg-card border border-border/30" />
              ))}
            </div>
          </div>

          {/* Right - Logo */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={snatchLogo}
              alt="Snatch Pub"
              width={80}
              height={80}
              loading="lazy"
              className="opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Bottom Signature */}
      <div className="border-t border-border/20 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by Bit & Form
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
