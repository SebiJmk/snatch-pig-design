import { useState, useEffect } from "react";
import snatchLogo from "@/assets/snatch-logo.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"logo" | "glitch" | "explode" | "done">("logo");

  useEffect(() => {
    const glitchTimer = setTimeout(() => setPhase("glitch"), 600);
    return () => clearTimeout(glitchTimer);
  }, []);

  useEffect(() => {
    if (phase !== "glitch") return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("explode");
          setTimeout(() => {
            setPhase("done");
            setTimeout(onComplete, 300);
          }, 500);
          return 100;
        }
        return prev + 3;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [phase, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={snatchLogo}
        alt="Snatch Pub"
        width={120}
        height={120}
        className={`mb-8 transition-all duration-300 ${
          phase === "logo" ? "opacity-0 scale-90" : "opacity-100"
        } ${phase === "explode" ? "scale-[3] opacity-0 blur-xl" : ""}`}
        style={
          phase === "glitch"
            ? { animation: "glitch 0.15s ease-in-out infinite, flicker 0.8s linear infinite" }
            : undefined
        }
      />
      <div
        className={`font-display text-4xl sm:text-5xl font-bold tracking-widest text-primary transition-all duration-300 ${
          phase === "explode" ? "opacity-0 scale-150" : ""
        }`}
      >
        {count.toString().padStart(3, "0")}%
      </div>
    </div>
  );
};

export default LoadingScreen;
