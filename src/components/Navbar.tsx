'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { identity } from '@/data/portfolio';

const navLinks = [
  { href: '#writing', label: 'Writing' },
  { href: '#stack', label: 'Stack' },
  { href: '#modes', label: 'Modes' },
  { href: '#case-files', label: 'Case Files' },
  { href: '#graph', label: 'Graph' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const hrefFor = (href: string) => (pathname === '/' ? href : `/${href}`);

  useEffect(() => {
    setHasMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
            isScrolled
              ? 'border-white/60 bg-[rgba(245,239,227,0.78)] shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl'
              : 'border-[rgba(20,33,61,0.08)] bg-[rgba(245,239,227,0.52)] backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex items-center gap-3 text-[var(--color-ink)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/70 text-sm font-semibold">
              AM
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">{identity.brand}</p>
              <p className="text-xs text-[var(--color-muted)]">{identity.subline}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                className="text-sm font-medium text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="command-chip bg-[var(--color-ink)] text-[var(--color-surface)]"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className={`fixed inset-x-4 top-[5.5rem] z-40 rounded-[2rem] border border-white/60 bg-[rgba(245,239,227,0.92)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={hrefFor(link.href)}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[var(--color-line)] bg-white/55 px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/SDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="command-chip justify-center bg-[var(--color-ink)] text-[var(--color-surface)]"
          >
            Open Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </>
  );
}
