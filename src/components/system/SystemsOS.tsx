'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Orbit, Radar, Layers3, Brain } from 'lucide-react';
import { featuredProjects, systemModes } from '@/data/portfolio';

const modeIcons = {
  builder: Layers3,
  fraud: Radar,
  platform: Orbit,
  agentic: Orbit,
  governance: Layers3,
  'ml-bigdata': Brain,
};

export default function SystemsOS() {
  const [activeMode, setActiveMode] = useState<(typeof systemModes)[number]['id']>('builder');

  const mode = useMemo(
    () => systemModes.find((entry) => entry.id === activeMode) ?? systemModes[0],
    [activeMode],
  );

  const projects = useMemo(
    () => featuredProjects.filter((project) => project.mode === activeMode).slice(0, 3),
    [activeMode],
  );

  const leadProject = projects[0] ?? featuredProjects[0];
  const Icon = modeIcons[activeMode];

  return (
    <section id="modes" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Systems OS</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            One builder, multiple operating modes.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
            This is the part that should feel different. Switch modes and the system surface changes with the kind of
            work being done.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.25fr_0.75fr]">
          <div className="system-panel rounded-[2.4rem] p-4">
            <div className="grid gap-3">
              {systemModes.map((entry) => {
                const EntryIcon = modeIcons[entry.id];
                const active = entry.id === activeMode;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setActiveMode(entry.id)}
                    className={`rounded-[1.6rem] border px-4 py-4 text-left transition-all ${
                      active
                        ? 'border-[var(--color-signal)] bg-[var(--color-signal-soft)] shadow-[0_16px_44px_rgba(125,86,207,0.12)]'
                        : 'border-[var(--color-line)] bg-white/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                          {entry.eyebrow}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-[var(--color-ink)]">{entry.label}</p>
                      </div>
                      <EntryIcon className="h-5 w-5 text-[var(--color-signal)]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="system-panel relative overflow-hidden rounded-[2.8rem] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(158,109,244,0.14),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(98,208,255,0.08),transparent_18%)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="grid gap-5 lg:grid-cols-[0.52fr_0.48fr]">
                  <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/72 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="section-kicker">{mode.eyebrow}</p>
                        <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[var(--color-ink)]">
                          {mode.title}
                        </h3>
                      </div>
                      <Icon className="h-6 w-6 text-[var(--color-signal)]" />
                    </div>

                    <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">{mode.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {mode.signals.map((signal) => (
                        <span
                          key={signal}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/85 px-3 py-2 text-sm text-[var(--color-muted)]"
                        >
                          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                          {signal}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-night)] px-5 py-5 text-[var(--color-surface)]">
                      <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/45">Active case file</p>
                      <p className="mt-3 text-2xl font-semibold">{leadProject.name}</p>
                      <p className="mt-3 text-sm leading-7 text-white/72">{leadProject.heroLine}</p>
                      <Link
                        href={`/projects/${leadProject.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        Open case file
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {projects.map((project, index) => (
                      <div
                        key={project.slug}
                        className={`rounded-[1.9rem] border border-[var(--color-line)] p-5 ${
                          index === 0 ? 'bg-white/82' : 'bg-white/66'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-signal)]">
                              {project.category}
                            </p>
                            <h4 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">{project.cardName}</h4>
                          </div>
                          <span className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-xs text-[var(--color-muted)]">
                            {project.year}
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{project.cardHook}</p>

                        <div className="mt-5 grid gap-2 sm:grid-cols-2">
                          {project.proofPoints.slice(0, 2).map((point) => (
                            <div
                              key={point}
                              className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-signal-soft)] px-4 py-3 text-sm text-[var(--color-ink)]"
                            >
                              {point}
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/85 px-3 py-1.5 text-sm text-[var(--color-muted)]"
                            >
                              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
