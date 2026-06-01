'use client';

import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { blogFallback } from '@/data/portfolio';

type Article = {
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
  takeaway?: string;
};

export default function MediumSignals() {
  const [articles, setArticles] = useState<Article[]>(blogFallback);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch('/api/medium');
        if (!response.ok) {
          throw new Error('Failed to fetch Medium');
        }
        const data = await response.json();
        if (Array.isArray(data.articles) && data.articles.length > 0) {
          setArticles(data.articles.slice(0, 6));
          setUsedFallback(false);
          return;
        }
        setUsedFallback(true);
      } catch {
        setUsedFallback(true);
      }
    };

    loadArticles();
  }, []);

  return (
    <section id="writing" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Medium signals</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Code is one layer. Writing is where the thinking becomes visible.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              This section shows the public thought process behind the systems work, so visitors see more than repos and buzzwords.
            </p>
          </div>

          <a
            href="https://medium.com/@aryaMehta26"
            target="_blank"
            rel="noopener noreferrer"
            className="command-chip bg-[var(--color-ink)] text-[var(--color-surface)]"
          >
            Open Medium
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {usedFallback ? (
          <p className="mb-5 text-sm text-[var(--color-muted)]">Showing portfolio writing placeholders because the Medium feed was unavailable.</p>
        ) : null}

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={`${article.link}-${index}`}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-[2rem] border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                index === 1
                  ? 'terminal-shell text-white border-white/10 hover:border-purple-500/30'
                  : 'system-panel text-[var(--color-ink)] hover:border-purple-300/40'
              }`}
            >
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${index === 1 ? 'text-white/50' : 'text-[var(--color-signal)]'}`}>
                  {article.date}
                </p>
                <h3 className={`mt-4 text-xl sm:text-2xl font-semibold leading-tight group-hover:text-[var(--color-signal)] transition-colors ${index === 1 ? 'text-white group-hover:text-purple-300' : 'text-[var(--color-ink)]'}`}>
                  {article.title}
                </h3>
                <p className={`mt-4 text-sm leading-6 ${index === 1 ? 'text-white/70' : 'text-[var(--color-muted)]'}`}>
                  {article.description}
                </p>
              </div>

              <div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        index === 1
                          ? 'bg-white/8 text-white/80'
                          : 'bg-[var(--color-signal-soft)] text-[var(--color-ink)]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {article.takeaway && (
                  <div className={`mt-6 rounded-2xl border p-4 text-[11px] font-mono leading-relaxed transition-all duration-300 ${
                    index === 1
                      ? 'border-white/8 bg-white/5 text-white/85 group-hover:border-purple-500/25 group-hover:bg-purple-900/10'
                      : 'border-[var(--color-line)] bg-white/60 text-[var(--color-ink)] group-hover:border-purple-300/30 group-hover:bg-[rgba(158,109,244,0.02)]'
                  }`}>
                    <span className={`font-bold block uppercase tracking-wider mb-1 ${index === 1 ? 'text-purple-300' : 'text-[var(--color-deep)]'}`}>
                      {"// Core Takeaway:"}
                    </span>
                    {article.takeaway}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
