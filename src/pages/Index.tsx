import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import MarqueeSection from "@/components/MarqueeSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <HeroSection />
        <MenuSection />
        <MarqueeSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
