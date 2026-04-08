import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], [data-clickable], input, textarea, select, label")) {
        setHovering(true);
      }
    };

    const out = () => setHovering(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div
      className="pointer-events-none fixed z-[99999] rounded-full bg-primary transition-transform duration-200 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? 48 : 12,
        height: hovering ? 48 : 12,
        opacity: visible ? (hovering ? 0.4 : 1) : 0,
        transform: `translate(-50%, -50%)`,
        mixBlendMode: hovering ? "difference" : "normal",
      }}
    />
  );
};

export default CustomCursor;
