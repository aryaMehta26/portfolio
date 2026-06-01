'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, MoonStar, Sparkles, Trophy } from 'lucide-react';

const skills = [
  {
    category: 'Data engineering',
    items: ['ETL/ELT pipeline design', 'Apache Airflow', 'Apache Kafka', 'PySpark', 'Hadoop', 'Data lake design', 'Data quality'],
  },
  {
    category: 'Cloud + scale',
    items: ['AWS EKS / S3', 'Apache Spark', 'Docker', 'Kubernetes', 'CI/CD automation', 'Performance tuning'],
  },
  {
    category: 'Applied AI',
    items: ['LangGraph', 'LangChain', 'RAG / Vector search', 'PyTorch / TensorFlow', 'scikit-learn', 'NLP & MLOps'],
  },
  {
    category: 'Backend + product',
    items: ['Python / Go', 'Java / Spring Boot', 'FastAPI / REST APIs', 'React / Next.js', 'WebSockets', 'System design'],
  },
];

const achievements = [
  {
    title: 'SJ Hacks winner',
    context: 'Hackathon execution',
    description: 'Built a strong product and technical story under pressure, then shipped it into a winning outcome.',
  },
  {
    title: 'Kaggle top placement',
    context: 'Modeling discipline',
    description: 'Proved strong experimentation instincts through competitive machine learning work and evaluation-driven iteration.',
  },
  {
    title: 'Open source contribution',
    context: 'Engineering maturity',
    description: 'Contributed back to tooling ecosystems instead of only consuming them, which signals deeper technical ownership.',
  },
  {
    title: 'Technical excellence recognition',
    context: 'Academic / event proof',
    description: 'Repeatedly stood out for building practical systems, not only for theory or presentation.',
  },
];

export default function About() {
  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="system-panel relative overflow-hidden rounded-[2.7rem] p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(158,109,244,0.12),transparent_22%),radial-gradient(circle_at_82%_78%,rgba(98,208,255,0.08),transparent_20%)]" />
            <div className="relative">
              <p className="section-kicker">Profile chamber</p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="relative h-64 w-56 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/65 p-2 shadow-[0_30px_90px_rgba(41,26,82,0.12)] sm:h-72 sm:w-64">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />
                  <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/image.png"
                      alt="Arya Mehta"
                      fill
                      sizes="(min-width: 1024px) 256px, 224px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="signal-card flex items-center gap-3">
                  <MoonStar className="h-5 w-5 text-[var(--color-signal)]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">Builder mode</p>
                    <p className="mt-1 text-sm text-[var(--color-ink)]">Night-owl, architecture-first</p>
                  </div>
                </div>
                <div className="signal-card flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[var(--color-signal)]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">Core strength</p>
                    <p className="mt-1 text-sm text-[var(--color-ink)]">Turning complexity into systems</p>
                  </div>
                </div>
                <div className="signal-card flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-[var(--color-signal)]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">Signal</p>
                    <p className="mt-1 text-sm text-[var(--color-ink)]">Backend + data + applied AI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="system-panel rounded-[2.7rem] p-7 sm:p-10"
          >
            <p className="section-kicker">About Arya</p>
            <h1 className="display-face mt-4 text-4xl leading-tight text-[var(--color-ink)] sm:text-6xl">
              I build technical systems that can survive real use, not just real demos.
            </h1>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              <p>
                I&apos;m Arya Mehta, a builder focused on backend engineering, data systems, and applied AI. I care most about work that takes messy inputs, sharp constraints, and real operational pressure, then turns them into something legible and reliable.
              </p>
              <p>
                My strongest zone is where infrastructure, intelligence, and product execution overlap. That includes data platforms, retrieval systems, graph-aware workflows, and full-stack products where architecture quality matters as much as surface polish.
              </p>
              <p>
                I like systems that are observable, scalable, and explainable to other engineers. I also like making them feel intentional, because strong engineering is not only about whether the system runs, but whether people can trust and extend it.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/SDE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="command-chip bg-[var(--color-ink)] text-[var(--color-surface)]"
              >
                View resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/SDE.pdf"
                download="Arya_Mehta_Resume.pdf"
                className="command-chip border border-[var(--color-line)] bg-white/70 text-[var(--color-ink)]"
              >
                Download resume
                <Download className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.56fr_0.44fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="system-panel rounded-[2.5rem] p-7 sm:p-9"
          >
            <p className="section-kicker">Capability lanes</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              The toolbox matters less than how the tools connect.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.category} className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/60 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-signal)]">
                    {skill.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-sm text-[var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="system-panel rounded-[2.5rem] p-7 sm:p-9"
          >
            <p className="section-kicker">Proof markers</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Signal that sits behind the introduction.
            </h2>

            <div className="mt-8 grid gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-signal)]">
                    {achievement.context}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">{achievement.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{achievement.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
