'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { manifesto, proofStats } from '@/data/portfolio';
import ScrollReveal, { StaggerContainer, ScrollRevealItem } from '@/components/portfolio/ScrollReveal';

function AnimatedStat({ label, value, description }: { label: string; value: string; description: string }) {
  const [displayed, setDisplayed] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showSuffix, setShowSuffix] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView || hasAnimated) return;
    setHasAnimated(true);

    // Parse number and suffix from value like "40%", "1M+", "60%"
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(targetNum * eased);

      setDisplayed(String(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayed(match[1]);
        setShowSuffix(true);
        setGlowing(true);
        setTimeout(() => setGlowing(false), 1500);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, hasAnimated, value]);

  return (
    <div
      ref={ref}
      className={`signal-card p-6 md:p-8 flex flex-col justify-between h-full min-h-[13.5rem] transition-all duration-500 ${glowing ? 'glow-pulse' : ''}`}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-signal)]">
          {label}
        </p>
        <p className="mt-4 text-4xl font-semibold tabular-nums text-[var(--color-ink)]">
          {displayed}
          <span
            className={`inline-block transition-all duration-300 ${
              showSuffix ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
            }`}
          >
            {value.replace(/^[\d.]+/, '')}
          </span>
        </p>
      </div>
      <p className="mt-4 text-[11px] sm:text-xs leading-relaxed text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}

export default function ManifestoRail() {
  return (
    <section className="px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.52fr_0.48fr]">
        <ScrollReveal direction="left">
          <div className="system-panel rounded-[2.4rem] p-7 sm:p-9 h-full flex flex-col justify-center">
            <p className="section-kicker">Identity chamber</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl leading-tight">
              This should feel like opening a technical mind, not scrolling a resume.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {manifesto.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2" stagger={0.1}>
          {proofStats.map((item) => (
            <ScrollRevealItem key={item.label} className="h-full">
              <AnimatedStat label={item.label} value={item.value} description={item.description} />
            </ScrollRevealItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
