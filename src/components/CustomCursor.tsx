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

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div
      className="pointer-events-none fixed z-[99999] rounded-full transition-all duration-150 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? 10 : 7,
        height: hovering ? 10 : 7,
        opacity: visible ? 1 : 0,
        transform: `translate(-50%, -50%)`,
        backgroundColor: "white",
        mixBlendMode: "difference",
        boxShadow: hovering
          ? "0 0 12px 4px hsla(340, 100%, 81%, 0.5), 0 0 24px 8px hsla(340, 100%, 81%, 0.2)"
          : "none",
      }}
    />
  );
};

export default CustomCursor;
