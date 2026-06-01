'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { operatingModes } from '@/data/portfolio';

export default function OperatingModel() {
  const [activeId, setActiveId] = useState(operatingModes[0].id);
  const active = operatingModes.find((mode) => mode.id === activeId) ?? operatingModes[0];

  return (
    <section id="modes" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Operating model</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Skills are not the interface. Decision patterns are.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
            Instead of showing a generic toolbox list, this section shows how I approach technical work from inputs to deployment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="system-panel rounded-[2.2rem] p-4">
            <div className="grid gap-3">
              {operatingModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveId(mode.id)}
                  className={`rounded-[1.6rem] border px-4 py-4 text-left transition-all duration-300 ${
                    active.id === mode.id
                      ? 'border-[var(--color-signal)] bg-[var(--color-signal-soft)]'
                      : 'border-[var(--color-line)] bg-white/50 hover:bg-white/70'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">{mode.label}</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--color-ink)]">{mode.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="system-panel rounded-[2.2rem] p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <p className="section-kicker">{active.label}</p>
                <h3 className="mt-4 max-w-3xl text-3xl font-semibold text-[var(--color-ink)]">{active.title}</h3>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">{active.description}</p>

                <div className="mt-8 grid gap-4 md:grid-cols-[0.52fr_0.48fr]">
                  <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/55 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">Tools in this mode</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {active.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1 text-sm text-[var(--color-muted)]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-[rgba(20,33,61,0.05)] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">Proof of use</p>
                    <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{active.proof}</p>
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
