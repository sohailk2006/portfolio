"use client";

import { useEffect, useRef } from "react";

const CanvasParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, radius: 140 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseSize = Math.random() * 1.5 + 1.2;
        this.size = this.baseSize;
      }

      update() {
        if (!canvas) return;

        // Boundary collision
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;

        // Interactive mouse gravity effect
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Pull gently towards mouse
          this.x += Math.cos(angle) * force * 0.6;
          this.y += Math.sin(angle) * force * 0.6;
          this.size = this.baseSize * (1 + force * 0.8);
        } else {
          this.size = this.baseSize;
        }
      }

      draw(context: CanvasRenderingContext2D, isDark: boolean) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = isDark 
          ? "rgba(99, 102, 241, 0.45)" // Indigo glow in dark mode
          : "rgba(79, 70, 229, 0.2)"; // Deep blue in light mode
        context.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 11000), 120);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Setup initial dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      if (!canvas || !ctx) return;

      // Detect dark mode status from DOM class list
      const isDark = document.documentElement.classList.contains("dark");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render links between particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx, isDark);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 105) {
            const alpha = (105 - dist) / 105 * (isDark ? 0.16 : 0.08);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark 
              ? `rgba(139, 92, 246, ${alpha})` // Purple links in dark
              : `rgba(99, 102, 241, ${alpha})`; // Indigo links in light
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block bg-transparent"
    />
  );
};

export default CanvasParticles;
