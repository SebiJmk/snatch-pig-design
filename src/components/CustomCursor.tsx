import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.35);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.35);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-clickable], input, textarea, select, label")) {
        setHovering(true);
      }
    };
    const out = () => setHovering(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseout", out, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full"
      style={{
        width: hovering ? 11 : 7,
        height: hovering ? 11 : 7,
        opacity: visible ? 1 : 0,
        backgroundColor: "white",
        mixBlendMode: "difference",
        transition: "width 0.15s ease-out, height 0.15s ease-out, opacity 0.15s ease-out, box-shadow 0.15s ease-out",
        boxShadow: hovering
          ? "0 0 12px 4px hsla(340, 100%, 81%, 0.5), 0 0 24px 8px hsla(340, 100%, 81%, 0.2)"
          : "none",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
