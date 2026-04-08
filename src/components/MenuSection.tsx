import { useState } from "react";

import eggsBenedictImg from "@/assets/menu/eggs-benedict.jpg";
import avocadoSmashImg from "@/assets/menu/avocado-smash.jpg";
import replaceBurgerImg from "@/assets/menu/replace-burger.jpg";
import pancakesImg from "@/assets/menu/pancakes.jpg";
import acaiBowlImg from "@/assets/menu/acai-bowl.jpg";
import cheesecakeImg from "@/assets/menu/cheesecake.jpg";

import flatWhiteImg from "@/assets/menu/flat-white.jpg";
import v60Img from "@/assets/menu/v60-coffee.jpg";
import espressoImg from "@/assets/menu/espresso.jpg";
import mimosaImg from "@/assets/menu/mimosa.jpg";
import bloodyMaryImg from "@/assets/menu/bloody-mary.jpg";
import lemonadeImg from "@/assets/menu/lemonade.jpg";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const food: MenuItem[] = [
  { name: "Ouă Benedict cu Somon", description: "Ouă poșate, somon afumat, sos hollandaise, pâine prăjită", price: "42 RON", image: eggsBenedictImg },
  { name: "Avocado Smash Toast", description: "Avocado zdrobit pe pâine cu semințe, ou poșat, chili flakes", price: "38 RON", image: avocadoSmashImg },
  { name: "Replace Burger", description: "Burger premium cu cheddar, ceapă caramelizată, rucola, sos special", price: "55 RON", image: replaceBurgerImg },
  { name: "Pancakes cu Fructe", description: "Pancakes pufoase, sirop de arțar, fructe de pădure, frișcă", price: "36 RON", image: pancakesImg },
  { name: "Açaí Bowl", description: "Bol de açaí, granola, banane, cocos, semințe de chia", price: "40 RON", image: acaiBowlImg },
  { name: "New York Classic Cheesecake", description: "Cheesecake clasic cu compot de fructe de pădure", price: "32 RON", image: cheesecakeImg },
];

const drinks: MenuItem[] = [
  { name: "Flat White", description: "Specialty coffee, lapte texturat perfect, dublu espresso", price: "18 RON", image: flatWhiteImg },
  { name: "V60 Filter Coffee", description: "Cafea de specialitate, filtrare lentă, aromă complexă", price: "22 RON", image: v60Img },
  { name: "Espresso", description: "Dublu espresso, boabe single origin, cremă perfectă", price: "14 RON", image: espressoImg },
  { name: "Mimosa", description: "Prosecco și suc de portocale proaspăt stors", price: "28 RON", image: mimosaImg },
  { name: "Bloody Mary", description: "Vodka, suc de roșii, țelină, condimente speciale", price: "32 RON", image: bloodyMaryImg },
  { name: "Limonadă Homemade", description: "Limonadă proaspătă cu mentă și ghiață", price: "16 RON", image: lemonadeImg },
];

const MenuSection = () => {
  const [tab, setTab] = useState<"food" | "drinks">("food");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const items = tab === "food" ? food : drinks;

  return (
    <section id="menu" className="py-24 px-6">
      <div className="container">
        <h2
          className="text-3xl font-bold uppercase tracking-widest text-center text-foreground mb-14 sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {tab === "food" ? "Meniul Nostru" : "Liquid Energy"}
        </h2>

        {/* Pill Tab Toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex gap-2 rounded-full bg-secondary/80 backdrop-blur-xl border border-border/50 p-1.5">
            {(["food", "drinks"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-7 sm:px-9 py-3 rounded-full transition-all duration-300 tactile ${
                  tab === t
                    ? "bg-primary text-primary-foreground blue-glow-box"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "food" ? "Mâncare" : "Băuturi"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-xl bg-secondary text-left transition-all duration-300 hover:blue-glow-box tactile"
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
                <h3 className="font-display text-[10px] font-bold uppercase tracking-wider text-foreground">
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
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl bg-background p-6 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full aspect-video object-cover rounded-xl mb-6"
            />
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
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
