'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experienceTimeline } from '@/data/portfolio';
import ScrollReveal, { StaggerContainer, ScrollRevealItem } from '@/components/portfolio/ScrollReveal';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker">Experience log</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Where the systems thinking was sharpened under real constraints.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Not a list of titles. A trace of environments where scale, reliability, and technical ownership were the daily operating conditions.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px lg:block">
            <motion.div
              className="h-full w-full bg-[linear-gradient(180deg,var(--color-signal),var(--color-lilac),transparent)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="grid gap-8">
            {experienceTimeline.map((entry, index) => (
              <ScrollReveal key={entry.id} delay={index * 0.15} direction="left">
                <div className="lg:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[1.1rem] hidden lg:block">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 300 }}
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--color-signal)] bg-[var(--color-surface)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                      </span>
                    </motion.div>
                  </div>

                  <div className="system-panel rounded-[2.4rem] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_40px_140px_rgba(41,26,82,0.14)]">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        {entry.logo && (
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/80 p-1.5">
                            <Image
                              src={entry.logo}
                              alt={entry.company}
                              fill
                              sizes="56px"
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-signal)]">
                            {entry.type}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                            {entry.role}
                          </h3>
                          <p className="mt-1 text-base font-medium text-[var(--color-muted)]">
                            {entry.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:flex-col sm:items-end">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1.5 text-xs text-[var(--color-muted)]">
                          <Briefcase className="h-3 w-3" />
                          {entry.period}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1.5 text-xs text-[var(--color-muted)]">
                          <MapPin className="h-3 w-3" />
                          {entry.location}
                        </span>
                        {entry.highlight && (
                          <span className="rounded-full border border-[var(--color-signal)] bg-[var(--color-signal-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)]">
                            {entry.highlight}
                          </span>
                        )}
                      </div>
                    </div>

                    <StaggerContainer className="mt-6 grid gap-3" stagger={0.06}>
                      {entry.impact.map((item) => (
                        <ScrollRevealItem key={item}>
                          <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/55 px-4 py-3.5 text-sm leading-7 text-[var(--color-muted)]">
                            {item}
                          </div>
                        </ScrollRevealItem>
                      ))}
                    </StaggerContainer>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {entry.stack.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-sm text-[var(--color-muted)]"
                        >
                          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
