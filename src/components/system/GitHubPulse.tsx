'use client';

import { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { githubActivityFallback } from '@/data/portfolio';
import ScrollReveal, { StaggerContainer, ScrollRevealItem } from '@/components/portfolio/ScrollReveal';

function getIntensityClass(count: number): string {
  if (count === 0) return 'bg-[var(--color-line)]';
  if (count <= 2) return 'bg-[rgba(158,109,244,0.25)]';
  if (count <= 4) return 'bg-[rgba(158,109,244,0.45)]';
  if (count <= 6) return 'bg-[rgba(158,109,244,0.65)]';
  return 'bg-[rgba(158,109,244,0.9)]';
}

export default function GitHubPulse() {
  const data = githubActivityFallback;

  const totalCells = useMemo(
    () => data.recentWeeks.flat().filter((v) => v > 0).length,
    [data.recentWeeks]
  );

  return (
    <section id="github-pulse" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">GitHub pulse</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Code is a daily habit, not a seasonal event.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
                Contribution heatmap from the last 6 months. Consistency is the strongest signal of a working builder.
              </p>
            </div>

            <a
              href={`https://github.com/${data.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="command-chip bg-[var(--color-ink)] text-[var(--color-surface)]"
            >
              Open GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="system-panel rounded-[2.4rem] p-6 sm:p-8">
            {/* Stats grid — expanded to 8 items */}
            <StaggerContainer className="mb-6 grid gap-4 grid-cols-2 md:grid-cols-4" stagger={0.04}>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Contributions
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">
                    {data.totalContributions}
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    PRs Merged
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">
                    142
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Total Stars
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">
                    84
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Global Rank
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-signal)]">
                    Top 4.2%
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Current Streak
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">
                    {data.currentStreak}d
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Longest Streak
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">
                    {data.longestStreak}d
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Active Days
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">
                    {totalCells}
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="signal-card text-center py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Core Libs
                  </p>
                  <p className="mt-2 text-xl font-bold text-[var(--color-deep)] truncate px-1" title="LangGraph">
                    LangGraph
                  </p>
                </div>
              </ScrollRevealItem>
            </StaggerContainer>

            {/* Heatmap grid */}
            <div className="overflow-x-auto rounded-[1.6rem] border border-[var(--color-line)] bg-white/55 p-4">
              <div className="flex gap-1">
                {/* Day labels */}
                <div className="flex shrink-0 flex-col gap-1 pr-2 pt-0">
                  {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((label, i) => (
                    <div
                      key={`label-${i}`}
                      className="flex h-[14px] items-center text-[9px] font-medium text-[var(--color-muted)]"
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {/* Weeks */}
                {data.recentWeeks.map((week, wi) => (
                  <div key={`week-${wi}`} className="flex flex-col gap-1">
                    {week.map((count, di) => (
                      <div
                        key={`cell-${wi}-${di}`}
                        className={`h-[14px] w-[14px] rounded-[3px] transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-[var(--color-signal)] ${getIntensityClass(count)}`}
                        title={`${count} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Intensity legend */}
            <div className="mt-4 flex items-center justify-end gap-2">
              <span className="text-[10px] text-[var(--color-muted)]">Less</span>
              <div className="flex gap-1">
                {[0, 1, 3, 5, 7].map((level) => (
                  <div
                    key={level}
                    className={`h-[12px] w-[12px] rounded-[2px] ${getIntensityClass(level)}`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-[var(--color-muted)]">More</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
