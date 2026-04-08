import { useState } from "react";

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

const MenuSection = () => {
  const [tab, setTab] = useState<"drinks" | "bites">("drinks");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const items = tab === "drinks" ? drinks : bites;

  return (
    <section id="menu" className="py-24 px-6">
      <div className="container">
        <h2
          className="text-3xl font-bold uppercase tracking-widest text-center text-foreground mb-12 sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Drinks Selection
        </h2>

        {/* Pill Tab Toggle */}
        <div className="flex justify-center gap-3 mb-12">
          {(["drinks", "bites"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-display text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 tactile ${
                tab === t
                  ? "bg-primary text-primary-foreground pink-glow-box"
                  : "border-2 border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {t === "drinks" ? "BĂUTURI" : "MÂNCARE"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in-up"
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
              className="mt-6 w-full rounded-full bg-primary py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground tactile"
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
