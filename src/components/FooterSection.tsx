import { useState } from "react";
import { Instagram, Facebook, MapPin, Clock } from "lucide-react";

const FooterSection = () => {
  const [mapHover, setMapHover] = useState(false);

  return (
    <footer id="contact" className="border-t border-border/30">
      {/* Contact Info Blocks */}
      <div className="container px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 max-w-2xl mx-auto">
          <div className="space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Adresă
            </h3>
            <p className="text-sm text-muted-foreground pl-6">
              Bulevardul Regina Elisabeta 59, București
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Program
            </h3>
            <div className="text-sm text-muted-foreground pl-6 space-y-1">
              <p>Luni – Vineri: 18:00 – 02:00</p>
              <p>Sâmbătă – Duminică: 18:00 – 02:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Dark Map */}
      <div
        className="w-full h-[450px] relative"
        onMouseEnter={() => setMapHover(true)}
        onMouseLeave={() => setMapHover(false)}
      >
        <iframe
          title="Locație Snatch Pub"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0897!3d44.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39816c0e28!2sBulevardul+Regina+Elisabeta+59%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000"
          className="w-full h-full border-0 grayscale invert opacity-50"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Fixed pink marker */}
        <div
          className="absolute w-3 h-3 rounded-full bg-primary z-10"
          style={{
            top: "46%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px hsl(340 100% 81% / 0.6), 0 0 20px hsl(340 100% 81% / 0.2)",
          }}
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            mapHover ? "bg-background/60" : "bg-transparent pointer-events-none"
          }`}
        >
          <a
            href="https://maps.google.com/?q=Bulevardul+Regina+Elisabeta+59+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-0 hover:bg-foreground hover:text-background tactile ${
              mapHover ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            Vezi Hărți
          </a>
        </div>
      </div>

      {/* Social */}
      <div className="flex flex-col items-center py-12 gap-5">
        <p className="font-body text-sm text-muted-foreground tracking-wide">@snatchpub</p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground transition-colors duration-0 hover:text-primary tactile" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground transition-colors duration-0 hover:text-primary tactile" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom Signature Row */}
      <div className="border-t border-border/20 py-6 px-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-[10px] sm:text-xs text-muted-foreground/50 tracking-wider uppercase">
            Snatch Pub
          </p>
          <p className="text-xs text-muted-foreground/40">
            © 2026 Snatch Pub
          </p>
          <p className="text-xs text-muted-foreground/50">
            Made with ❤️ by Bit & Form
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
