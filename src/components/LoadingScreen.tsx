import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"circles" | "glitch" | "explode" | "done">("circles");

  useEffect(() => {
    const t = setTimeout(() => setPhase("glitch"), 800);
    return () => clearTimeout(t);
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
    }, 22);
    return () => clearInterval(interval);
  }, [phase, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground transition-opacity duration-300 ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Geometric concentric circles */}
      <div className="relative mb-10">
        {[80, 56, 32].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-primary/40"
            style={{
              width: size,
              height: size,
              top: `calc(50% - ${size / 2}px)`,
              left: `calc(50% - ${size / 2}px)`,
              animation: `circle-scale 0.6s ease-out ${i * 0.15}s forwards`,
              opacity: 0,
            }}
          />
        ))}
        <div
          className={`relative z-10 font-display text-3xl font-bold tracking-widest transition-all duration-300 ${
            phase === "explode" ? "scale-[2] opacity-0 blur-lg" : ""
          }`}
          style={{
            color: "hsl(224, 76%, 48%)",
            animation: phase === "glitch" ? "glitch 0.15s ease-in-out infinite" : undefined,
          }}
        >
          replace
        </div>
      </div>

      <div
        className={`font-display text-4xl sm:text-5xl font-bold tracking-widest transition-all duration-300 ${
          phase === "explode" ? "opacity-0 scale-150" : ""
        }`}
        style={{ color: "hsl(224, 76%, 48%)" }}
      >
        {count.toString().padStart(3, "0")}%
      </div>
    </div>
  );
};

export default LoadingScreen;
