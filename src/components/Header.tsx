import snatchLogo from "@/assets/snatch-logo.png";

const navLinks = [
  { label: "Drinks", href: "#menu" },
  { label: "Bites", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-border/30">
      <div className="container flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 tactile">
          <img src={snatchLogo} alt="Snatch Pub" width={36} height={36} />
          <span className="font-display text-sm font-bold tracking-wider text-foreground">
            SNATCH
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors duration-150 hover:text-primary tactile"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+40123456789"
          className="rounded-full bg-primary px-5 py-2 font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:bg-foreground hover:text-background tactile"
        >
          Sună acum
        </a>
      </div>
    </header>
  );
};

export default Header;
