'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpenText, GitBranch, Radar, Sparkles } from 'lucide-react';
import type { FeaturedProject } from '@/data/portfolio';

type ProjectDetailViewProps = {
  project: FeaturedProject;
};

const riseIn = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const repoLabel = project.repoLabel ?? 'Open repository';

  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.div {...riseIn}>
          <Link
            href="/#case-files"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to project cards
          </Link>
        </motion.div>

        <motion.div
          {...riseIn}
          className="mt-6 system-panel relative overflow-hidden rounded-[2.9rem] p-7 sm:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(158,109,244,0.12),transparent_22%),radial-gradient(circle_at_86%_22%,rgba(98,208,255,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="relative">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="section-kicker">{project.category}</p>
                  <span className="rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {project.year}
                  </span>
                  <span className="rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {project.status}
                  </span>
                </div>

                <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                  {project.heroLine}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="command-chip bg-[var(--color-ink)] text-[var(--color-surface)]"
                  >
                    {repoLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="command-chip border border-[var(--color-line)] bg-white/75 text-[var(--color-ink)]"
                  >
                    View demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              <div className="signal-card md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Project claim
                </p>
                <p className="mt-4 text-lg font-semibold leading-8 text-[var(--color-ink)]">
                  {project.cardHook}
                </p>
              </div>
              <div className="signal-card">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Role
                </p>
                <p className="mt-4 text-base font-semibold text-[var(--color-ink)]">{project.role}</p>
              </div>
              <div className="signal-card">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Focus signals
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.accents.map((accent) => (
                    <span
                      key={accent}
                      className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-sm text-[var(--color-muted)]"
                    >
                      {accent}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {project.proofPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  className="rounded-[1.7rem] border border-[var(--color-line)] bg-white/70 px-5 py-5"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-signal)]">
                    Proof signal {index + 1}
                  </p>
                  <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-ink)]">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <motion.div {...riseIn} className="grid gap-6">
            <div className="system-panel rounded-[2.3rem] p-6">
              <div className="flex items-center gap-3">
                <Radar className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="section-kicker">Challenge</p>
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{project.challenge}</p>
            </div>

            <div className="system-panel rounded-[2.3rem] p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="section-kicker">Solution</p>
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{project.solution}</p>
            </div>

            <div className="system-panel rounded-[2.3rem] p-6">
              <div className="flex items-center gap-3">
                <BookOpenText className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="section-kicker">Build notes</p>
              </div>
              <div className="mt-5 grid gap-3">
                {project.buildNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--color-muted)]"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="system-panel rounded-[2.3rem] p-6">
              <p className="section-kicker">Tools + stack</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{project.stackHeadline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-2 text-sm text-[var(--color-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div {...riseIn} className="grid gap-4 md:grid-cols-3">
              {project.impactStats.map((stat) => (
                <div key={stat.label} className="signal-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div {...riseIn} className="system-panel rounded-[2.3rem] p-6">
              <div className="flex items-center gap-3">
                <GitBranch className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="section-kicker">Architecture flow</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {project.architecture.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.06, duration: 0.35 }}
                    className="rounded-[1.7rem] border border-[var(--color-line)] bg-white/70 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-base font-semibold text-[var(--color-ink)]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...riseIn} className="grid gap-6 md:grid-cols-2">
              {project.detailSections.map((detail) => (
                <div key={detail.title} className="system-panel rounded-[2rem] p-6">
                  <p className="section-kicker">{detail.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{detail.body}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...riseIn} className="system-panel rounded-[2.3rem] p-6">
              <p className="section-kicker">Decision signals</p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {project.decisionSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-signal-soft)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...riseIn} className="system-panel rounded-[2.3rem] p-6">
              <p className="section-kicker">Outcomes</p>
              <div className="mt-5 grid gap-3">
                {project.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--color-muted)]"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
