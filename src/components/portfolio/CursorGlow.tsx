'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };

      // Check if hovering interactive element
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, .command-chip, .signal-card, .system-panel, .casefile-entry'
      );
      setIsHovering(!!interactive);
    };

    const loop = () => {
      const glow = glowRef.current;
      if (!glow) {
        requestAnimationFrame(loop);
        return;
      }

      // Spring interpolation
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      glow.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMove);
    const frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-screen"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`rounded-full transition-all duration-300 ease-out ${
          isHovering
            ? 'h-16 w-16 bg-[radial-gradient(circle,rgba(158,109,244,0.2)_0%,transparent_70%)]'
            : 'h-10 w-10 bg-[radial-gradient(circle,rgba(158,109,244,0.15)_0%,transparent_70%)]'
        }`}
      />
    </div>
  );
}
