import { useState, useEffect } from "react";
import snatchLogo from "@/assets/snatch-logo.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"logo" | "glitch" | "done">("logo");

  useEffect(() => {
    // Phase 1: Logo fades in (handled by CSS)
    const glitchTimer = setTimeout(() => setPhase("glitch"), 600);
    return () => clearTimeout(glitchTimer);
  }, []);

  useEffect(() => {
    if (phase !== "glitch") return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase("done");
            setTimeout(onComplete, 300);
          }, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
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
        className={`mb-8 transition-opacity duration-500 ${
          phase === "logo" ? "opacity-0" : "opacity-100"
        } ${phase === "glitch" ? "animate-flicker" : ""}`}
        style={phase === "glitch" ? { animation: "glitch 0.15s ease-in-out infinite, flicker 0.8s linear infinite" } : undefined}
      />
      <div className="font-display text-2xl font-bold tracking-widest text-primary">
        {count.toString().padStart(3, "0")}%
      </div>
    </div>
  );
};

export default LoadingScreen;
