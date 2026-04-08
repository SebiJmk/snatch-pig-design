import { useState } from "react";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  const [mapHover, setMapHover] = useState(false);

  return (
    <footer id="contact" className="border-t border-border/50">
      {/* Full-width Dark Map */}
      <div
        className="w-full h-[500px] relative"
        onMouseEnter={() => setMapHover(true)}
        onMouseLeave={() => setMapHover(false)}
      >
        <iframe
          title="Locație Replace Bucharest"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0895!3d44.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4a5d0e7c1d%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000"
          className="w-full h-full border-0 grayscale opacity-70"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Precise marker — Zona Cișmigiu */}
        <div
          className="absolute w-3 h-3 rounded-full z-10"
          style={{
            top: "46%",
            left: "50.5%",
            backgroundColor: "hsl(340, 100%, 81%)",
            boxShadow: "0 0 10px hsl(340 100% 81% / 0.6), 0 0 20px hsl(340 100% 81% / 0.2)",
          }}
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
            mapHover ? "bg-foreground/50" : "bg-transparent pointer-events-none"
          }`}
        >
          <a
            href="https://maps.google.com/?q=Bulevardul+Regina+Elisabeta+59+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-foreground hover:text-background tactile ${
              mapHover ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            Vezi Hărți
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — Contact & Program */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                Adresă
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Bulevardul Regina Elisabeta 59, București (Zona Cișmigiu)
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
                <div className="flex justify-between gap-6 max-w-xs">
                  <span className="text-muted-foreground whitespace-nowrap">Luni – Vineri</span>
                  <span className="text-foreground font-medium whitespace-nowrap">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between gap-6 max-w-xs">
                  <span className="text-muted-foreground whitespace-nowrap">Sâmbătă – Duminică</span>
                  <span className="text-foreground font-medium whitespace-nowrap">09:00 – 16:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Social */}
          <div className="flex flex-col items-center md:items-end space-y-5">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-foreground">
              Urmărește-ne
            </h3>
            <p className="text-sm text-muted-foreground">@replacecotroceni</p>
            <div className="flex gap-6">
              <a
                href="https://facebook.com/replacecotroceni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-200 hover:text-primary tactile"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/replacecotroceni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-200 hover:text-primary tactile"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <a
              href="tel:+40123456789"
              className="rounded-full bg-primary px-6 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile mt-4"
            >
              Sună acum
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Signature Row */}
      <div className="border-t border-border/30 py-6 px-6">
        <div className="container grid grid-cols-3 items-center">
          <div className="text-left">
            <span className="font-display text-xs font-bold tracking-wider text-foreground lowercase">replace</span>
            <span className="text-[10px] font-body text-muted-foreground tracking-wide uppercase ml-1.5">The Brunch Club</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Replace Bucharest
          </p>
          <p className="text-sm text-muted-foreground text-right">
            Made with ❤️ by Bit & Form
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
