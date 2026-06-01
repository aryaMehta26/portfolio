'use client';

import { useEffect, useMemo, useState } from 'react';
import { FiArrowUpRight, FiSearch } from 'react-icons/fi';
import { archiveFallback } from '@/data/portfolio';

type ArchiveProject = {
  name: string;
  description: string;
  url: string;
  language: string;
  topic: string;
  updatedAt?: string;
  stars?: number;
};

const FILTERS = ['All', 'Applied AI', 'Data Platform', 'Backend / Data', 'ML / Research', 'Product', 'Systems', 'Platform'];

export default function ProjectArchive() {
  const [projects, setProjects] = useState<ArchiveProject[]>(archiveFallback);
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to load archive');
        }
        const data = await response.json();
        setProjects(data.projects);
        setUsedFallback(Boolean(data.fallback));
      } catch {
        setProjects(archiveFallback);
        setUsedFallback(true);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'All' || project.topic === activeFilter;
      const haystack = `${project.name} ${project.description} ${project.language} ${project.topic}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [projects, query, activeFilter]);

  return (
    <section id="archive" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Archive</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              The rest of the GitHub history lives here as searchable evidence.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Featured work tells the story. The archive proves the range.
            </p>
          </div>

          <div className="system-panel flex w-full max-w-md items-center gap-3 rounded-full px-4 py-3">
            <FiSearch className="h-4 w-4 text-[var(--color-muted)]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by repo, topic, or language"
              className="w-full bg-transparent text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? 'border-[var(--color-signal)] bg-[var(--color-signal-soft)] text-[var(--color-ink)]'
                  : 'border-[var(--color-line)] bg-white/60 text-[var(--color-muted)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {usedFallback ? (
          <p className="mb-5 text-sm text-[var(--color-muted)]">
            Showing fallback curated projects because live GitHub sync was unavailable.
          </p>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="system-panel rounded-[1.8rem] p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-signal)]">{project.topic}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">{project.name}</h3>
                </div>
                <FiArrowUpRight className="mt-1 h-4 w-4 text-[var(--color-muted)]" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-[var(--color-muted)]">
                <span>{project.language}</span>
                {project.stars !== undefined ? <span>{project.stars} stars</span> : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
