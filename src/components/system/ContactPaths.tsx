import { contactPaths } from '@/data/portfolio';

export default function ContactPaths() {
  return (
    <section id="contact" className="px-4 pb-20 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="system-panel rounded-[2.5rem] p-7 sm:p-10">
          <div className="max-w-3xl">
            <p className="section-kicker">Contact vectors</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Different visitors need different entry points.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              So this section does not pretend every conversation starts the same way.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contactPaths.map((path, index) => (
              <a
                key={path.title}
                href={path.href}
                target={path.href.startsWith('http') ? '_blank' : undefined}
                rel={path.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`rounded-[2rem] border p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  index === 1
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-surface)]'
                    : 'border-[var(--color-line)] bg-white/60 text-[var(--color-ink)]'
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${index === 1 ? 'text-white/55' : 'text-[var(--color-muted)]'}`}>
                  {path.title}
                </p>
                <p className={`mt-5 text-base leading-7 ${index === 1 ? 'text-white/82' : 'text-[var(--color-muted)]'}`}>{path.description}</p>
                <p className="mt-8 text-sm font-semibold">{path.action}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
