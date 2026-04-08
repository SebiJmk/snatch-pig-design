import { useState, useRef, useEffect } from "react";

import pornstarImg from "@/assets/menu/pornstar-martini.jpg";
import signatureImg from "@/assets/menu/signature-shot.jpg";
import guinnessImg from "@/assets/menu/guinness.jpg";
import oldFashionedImg from "@/assets/menu/old-fashioned.jpg";
import chickenImg from "@/assets/menu/chicken-strips.jpg";
import truffleImg from "@/assets/menu/truffle-fries.jpg";
import nachosImg from "@/assets/menu/nachos.jpg";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const drinks: MenuItem[] = [
  { name: "Pornstar Martini", description: "Vanilla vodka, passionfruit, prosecco shot", price: "38 RON", image: pornstarImg },
  { name: "Snatch Signature Shot", description: "Secret recipe. Pink, sweet, lethal.", price: "22 RON", image: signatureImg },
  { name: "Guinness Draft", description: "Draught stout, 0.5L, perfectly poured", price: "28 RON", image: guinnessImg },
  { name: "Old Fashioned", description: "Bourbon, Angostura, orange peel, sugar", price: "42 RON", image: oldFashionedImg },
];

const bites: MenuItem[] = [
  { name: "Crispy Chicken Strips", description: "Pui crocant, sos sriracha mayo", price: "32 RON", image: chickenImg },
  { name: "Truffle Fries", description: "Cartofi prăjiți, ulei de trufe, parmezan", price: "28 RON", image: truffleImg },
  { name: "Spicy Nachos", description: "Nachos, cheddar, jalapeños, guacamole", price: "35 RON", image: nachosImg },
];

const tabs = [
  { key: "drinks" as const, label: "Cocktails & Shots" },
  { key: "bites" as const, label: "Bar Bites" },
];

const MenuSection = () => {
  const [tab, setTab] = useState<"drinks" | "bites">("drinks");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = tab === "drinks" ? drinks : bites;

  useEffect(() => {
    const idx = tabs.findIndex((t) => t.key === tab);
    const el = tabRefs.current[idx];
    if (el) {
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [tab]);

  return (
    <section id="menu" className="py-24 px-6">
      <div className="container">
        <h2
          className="text-3xl font-bold uppercase tracking-widest text-center text-foreground mb-14 sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Drinks & Bites
        </h2>

        {/* Segmented Control */}
        <div className="flex justify-center mb-14">
          <div className="relative inline-flex rounded-full bg-card/60 backdrop-blur-xl border border-border/40 p-1.5">
            {/* Sliding pill */}
            <div
              className="absolute top-1.5 h-[calc(100%-12px)] rounded-full bg-primary pink-glow-box"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                transition: "left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
            {tabs.map((t, i) => (
              <button
                key={t.key}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => setTab(t.key)}
                className={`relative z-10 font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-7 sm:px-9 py-3 rounded-full transition-colors duration-0 tactile ${
                  tab === t.key
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-xl bg-card text-left transition-all duration-300 hover:pink-glow-box tactile"
              data-clickable
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-2 font-display text-sm font-bold text-primary">{item.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl bg-card p-6 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full aspect-video object-cover rounded-xl mb-6"
            />
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
              {selected.name}
            </h3>
            <p className="mt-2 text-muted-foreground">{selected.description}</p>
            <p className="mt-4 font-display text-xl font-bold text-primary">{selected.price}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full rounded-full bg-primary py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-0 hover:bg-foreground hover:text-background tactile"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;
