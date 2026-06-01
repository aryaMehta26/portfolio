'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Trophy } from 'lucide-react';
import { educationData } from '@/data/portfolio';
import ScrollReveal, { StaggerContainer, ScrollRevealItem } from '@/components/portfolio/ScrollReveal';

export default function EducationShowcase() {
  return (
    <section id="education" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker">Education signal</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              The academic bedrock underneath the systems work.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Degrees are context, not credentials. These programs shaped how I think about data, systems, and applied intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {educationData.map((entry, index) => (
            <ScrollReveal key={entry.id} delay={index * 0.12} direction="up">
              <div className={`system-panel rounded-[2.6rem] p-6 sm:p-8 h-full transition-all duration-500 hover:shadow-[0_40px_140px_rgba(41,26,82,0.14)] ${
                index === 0 ? 'relative overflow-hidden' : ''
              }`}>
                {/* Subtle gradient accent for primary education */}
                {index === 0 && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(158,109,244,0.1),transparent_20%),radial-gradient(circle_at_86%_85%,rgba(98,208,255,0.06),transparent_18%)]" />
                )}

                <div className="relative">
                  <div className="flex items-start gap-4">
                    {entry.logo && (
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(41,26,82,0.08)]">
                        <Image
                          src={entry.logo}
                          alt={entry.institution}
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-signal)]">
                        {entry.degree}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                        {entry.field}
                      </h3>
                      <p className="mt-1 text-base text-[var(--color-muted)]">
                        {entry.institution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1.5 text-xs text-[var(--color-muted)]">
                      <GraduationCap className="h-3 w-3" />
                      {entry.period}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1.5 text-xs text-[var(--color-muted)]">
                      <MapPin className="h-3 w-3" />
                      {entry.location}
                    </span>
                    {entry.gpa && (
                      <span className="rounded-full border border-[var(--color-signal)] bg-[var(--color-signal-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)]">
                        GPA: {entry.gpa}
                      </span>
                    )}
                  </div>

                  {/* Coursework */}
                  <div className="mt-6 rounded-[1.8rem] border border-[var(--color-line)] bg-white/55 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      Relevant coursework
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.coursework.map((course, ci) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + ci * 0.04, duration: 0.3 }}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors duration-300 hover:border-[var(--color-signal)] hover:bg-[var(--color-signal-soft)] ${
                            ci % 3 === 0
                              ? 'border-[var(--color-signal)] bg-[var(--color-signal-soft)] text-[var(--color-ink)]'
                              : 'border-[var(--color-line)] bg-white/80 text-[var(--color-muted)]'
                          }`}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <StaggerContainer className="mt-5 grid gap-2.5" stagger={0.06}>
                    {entry.highlights.map((highlight) => (
                      <ScrollRevealItem key={highlight}>
                        <div className="flex items-start gap-3 rounded-[1.3rem] border border-[var(--color-line)] bg-white/60 px-4 py-3">
                          <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-signal)]" />
                          <p className="text-sm leading-6 text-[var(--color-muted)]">{highlight}</p>
                        </div>
                      </ScrollRevealItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
