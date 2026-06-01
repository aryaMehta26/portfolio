'use client';

import { useEffect } from 'react';

/**
 * Tracks mouse position on .system-panel and .signal-card elements
 * to power the CSS spotlight hover effect via custom properties.
 */
export default function SpotlightTracker() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.system-panel, .signal-card') as HTMLElement | null;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}
