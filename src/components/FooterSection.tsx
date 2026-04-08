import snatchLogo from "@/assets/snatch-logo.png";
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border/30">
      {/* Dark Map */}
      <div className="w-full h-[400px] relative">
        <iframe
          title="Locație Snatch Pub"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388567824!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sro!2sro!4v1700000000000"
          className="w-full h-full border-0 grayscale invert opacity-60"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Pink dot marker overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary pink-glow-box z-10" />
      </div>

      {/* Footer Grid */}
      <div className="container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left - Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Str. Covaci 12, București
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Deschis zilnic: 18:00 - 02:00
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +40 721 000 000
              </p>
            </div>
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
