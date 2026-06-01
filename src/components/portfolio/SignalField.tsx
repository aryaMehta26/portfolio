'use client';

import { useEffect, useRef, useCallback } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  phase: number;
};

export default function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  const PARTICLE_COUNT = 55;
  const CONNECTION_DIST = 160;
  const MOUSE_RADIUS = 200;

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        baseAlpha: Math.random() * 0.4 + 0.15,
        phase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let isVisible = true;

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      if (particlesRef.current.length === 0) {
        initParticles(rect.width, rect.height);
      }
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    const animate = () => {
      if (!isVisible || !ctx || !canvas) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 0.008;
      const t = timeRef.current;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const w = rect.width;
      const h = rect.height;
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, w, h);

      // Update particles
      for (const p of particles) {
        // Organic drift
        p.x += p.vx + Math.sin(t + p.phase) * 0.15;
        p.y += p.vy + Math.cos(t * 0.7 + p.phase) * 0.15;

        // Boundary wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Mouse repulsion / attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }

        // Damping
        p.vx *= 0.995;
        p.vy *= 0.995;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18;

            // Glow brighter near mouse
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt(
              (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
            );
            const mouseBoost = mouseDist < MOUSE_RADIUS
              ? (1 - mouseDist / MOUSE_RADIUS) * 0.25
              : 0;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(158, 109, 244, ${alpha + mouseBoost})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const pulse = Math.sin(t * 2 + p.phase) * 0.15 + 0.85;
        const alpha = p.baseAlpha * pulse;

        // Mouse proximity glow
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseGlow = dist < MOUSE_RADIUS
          ? (1 - dist / MOUSE_RADIUS) * 0.6
          : 0;

        // Outer glow
        if (mouseGlow > 0.1) {
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 8
          );
          gradient.addColorStop(0, `rgba(158, 109, 244, ${mouseGlow * 0.3})`);
          gradient.addColorStop(1, 'rgba(158, 109, 244, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + mouseGlow * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 180, 255, ${alpha + mouseGlow * 0.4})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibility);

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [initParticles]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gradient underlays — keeping existing vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(158,109,244,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(125,86,207,0.14),transparent_30%)]" />

      {/* Subtle grid lines */}
      <div className="absolute inset-x-0 top-[18%] h-px bg-[linear-gradient(90deg,transparent,rgba(158,109,244,0.12),transparent)]" />
      <div className="absolute inset-x-0 bottom-[22%] h-px bg-[linear-gradient(90deg,transparent,rgba(158,109,244,0.1),transparent)]" />
      <div className="absolute left-[14%] top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(158,109,244,0.1),transparent)]" />
      <div className="absolute right-[12%] top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(158,109,244,0.07),transparent)]" />

      {/* Live particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 h-full w-full"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
