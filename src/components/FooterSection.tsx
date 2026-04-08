import { useState } from "react";
import snatchLogo from "@/assets/snatch-logo.png";
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";

const FooterSection = () => {
  const [mapHover, setMapHover] = useState(false);

  return (
    <footer id="contact" className="border-t border-border/30">
      {/* Full-width Dark Map */}
      <div
        className="w-full h-[500px] relative"
        onMouseEnter={() => setMapHover(true)}
        onMouseLeave={() => setMapHover(false)}
      >
        <iframe
          title="Locație Snatch Pub"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.2!2d26.0685!3d44.4315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffa8e0f3c2c1%3A0x0!2sStrada+Nicolae+Paulescu+61%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000"
          className="w-full h-full border-0 grayscale invert opacity-50"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Precise pink marker — NOT centered, positioned for Cotroceni area */}
        <div
          className="absolute w-3 h-3 rounded-full bg-primary z-10"
          style={{
            top: "46%",
            left: "50.5%",
            boxShadow: "0 0 10px hsl(340 100% 81% / 0.6), 0 0 20px hsl(340 100% 81% / 0.2)",
          }}
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
            mapHover ? "bg-background/60" : "bg-transparent pointer-events-none"
          }`}
        >
          <a
            href="https://maps.google.com/?q=Strada+Nicolae+Paulescu+61+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-foreground hover:text-background tactile ${
              mapHover ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
            style={{ boxShadow: "0 0 40px hsl(340 100% 81% / 0.2)" }}
          >
            Vezi Hărți
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container px-6 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Left — Contact & Program */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Str. Nicolae Paulescu 61, București
                </p>
                <a
                  href="tel:+40123456789"
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-primary tactile"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +40 123 456 789
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Program
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-6">
                  <span className="text-muted-foreground whitespace-nowrap">Luni – Vineri</span>
                  <span className="text-foreground font-medium whitespace-nowrap">18:00 – 02:00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span className="text-muted-foreground whitespace-nowrap">Sâmbătă – Duminică</span>
                  <span className="text-foreground font-medium whitespace-nowrap">18:00 – 02:00</span>
                </div>
              </div>
            </div>

            <a
              href="tel:+40123456789"
              className="inline-block rounded-full bg-primary px-6 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile"
            >
              Sună acum
            </a>
          </div>

          {/* Center — Social */}
          <div className="flex flex-col items-center space-y-5">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground">
              Follow the Pig
            </h3>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground transition-colors duration-200 hover:text-primary tactile" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors duration-200 hover:text-primary tactile" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            {/* Instagram grid placeholders */}
            <div className="grid grid-cols-3 gap-1.5 w-full max-w-[220px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-sm bg-card border border-border/20" />
              ))}
            </div>
          </div>

          {/* Right — Logo */}
          <div className="flex items-start justify-center md:justify-end">
            <img
              src={snatchLogo}
              alt="Snatch Pub"
              width={80}
              height={80}
              loading="lazy"
              className="opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20 py-6 px-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Bit & Form
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2026 Snatch Pub Bucharest
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
