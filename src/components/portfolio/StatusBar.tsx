'use client';

import { useEffect, useRef, useState } from 'react';

type StatusBarProps = {
  sections?: Array<{ id: string; label: string }>;
};

const defaultSections = [
  { id: 'hero', label: 'hero' },
  { id: 'modes', label: 'systems_os' },
  { id: 'writing', label: 'medium_signals' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'stack', label: 'stack_atlas' },
  { id: 'skills-constellation', label: 'skills_map' },
  { id: 'case-files', label: 'case_files' },
  { id: 'graph', label: 'build_graph' },
  { id: 'github-pulse', label: 'github_pulse' },
  { id: 'contact', label: 'contact' },
];

export default function StatusBar({ sections = defaultSections }: StatusBarProps) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Delay visibility to avoid flash on load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollPercent(percent);

      // Find active section
      let found = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            found = section.label;
          }
        }
      }
      setActiveSection(found);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [sections]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-white/40 bg-[rgba(245,239,227,0.72)] px-5 py-2.5 shadow-[0_16px_48px_rgba(41,26,82,0.1)] backdrop-blur-xl">
        {/* Pulse dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-50" />
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]" />
        </span>

        <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[var(--color-muted)]">
          kernel_space.os
        </span>
        <span className="text-[var(--color-line)]">—</span>
        <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[var(--color-ink)]">
          {activeSection}
        </span>
        <span className="text-[var(--color-line)]">—</span>
        <span className="font-mono text-[0.68rem] tabular-nums tracking-[0.12em] text-[var(--color-muted)]">
          {scrollPercent}%
        </span>
      </div>
    </div>
  );
}
