"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  // Scroll Progress indicator logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check if device has a fine pointer cursor (e.g. mouse/trackpad, not mobile touch)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
    };

    mediaQuery.addEventListener("change", handlePointerChange);

    const updateMousePos = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePos);

    // Dynamic hover event delegation for links, buttons, cards
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") ||
        target.classList.contains("group") ||
        target.closest(".group")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!hasFinePointer) {
    // Render only the top progress indicator on non-desktop devices
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-[0%] z-[99] shadow-md shadow-purple-500/10"
        style={{ scaleX }}
      />
    );
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-[0%] z-[99] shadow-md shadow-purple-500/10"
        style={{ scaleX }}
      />

      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500/60 pointer-events-none z-[98] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.7 : 1,
          backgroundColor: isHovering ? "rgba(168, 85, 247, 0.25)" : "rgba(168, 85, 247, 0)"
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 400,
          mass: 0.2
        }}
      />

      {/* Core Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-500 pointer-events-none z-[98] mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0.7 : 1,
          backgroundColor: isHovering ? "#ffffff" : "#3b82f6"
        }}
        transition={{
          type: "spring",
          damping: 45,
          stiffness: 800,
          mass: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;
