import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SignalField from "@/components/portfolio/SignalField";
import TerminalBlock from "@/components/portfolio/TerminalBlock";
import ScrollReveal, { StaggerContainer, ScrollRevealItem } from "@/components/portfolio/ScrollReveal";
import ContactPaths from "@/components/system/ContactPaths";
import ManifestoRail from "@/components/system/ManifestoRail";
import MediumSignals from "@/components/system/MediumSignals";
import OperatingModel from "@/components/system/OperatingModel";
import SystemsOS from "@/components/system/SystemsOS";
import ExperienceTimeline from "@/components/system/ExperienceTimeline";
import EducationShowcase from "@/components/system/EducationShowcase";
import SkillsConstellation from "@/components/system/SkillsConstellation";
import GitHubPulse from "@/components/system/GitHubPulse";
import TelemetryWidget from "@/components/portfolio/TelemetryWidget";
import BuildPipeline from "@/components/system/BuildPipeline";
import SystemSpecsWidget from "@/components/portfolio/SystemSpecsWidget";
import PacketRouterGame from "@/components/system/PacketRouterGame";
import {
  featuredProjects,
  identity,
  personalSignals,
  signalLinks,
  techGroups,
} from "@/data/portfolio";

const stackSignals = [
  { code: "01", note: "foundation" },
  { code: "02", note: "intelligence" },
  { code: "03", note: "interfaces" },
  { code: "04", note: "data flow" },
  { code: "05", note: "shipping" },
  { code: "06", note: "ml systems & scale" },
];

const getTechIcon = (tech: string): string => {
  const icons: Record<string, string> = {
    Python: "🐍",
    Java: "☕",
    Go: "🐹",
    "C++": "⚙️",
    TypeScript: "🟦",
    SQL: "📊",
    LangGraph: "🕸️",
    LangChain: "⛓️",
    RAG: "🔍",
    "Agentic Workflows": "🤖",
    PyTorch: "🔥",
    TensorFlow: "🔶",
    FastAPI: "⚡",
    "Spring Boot": "🍃",
    "Node.js": "🟢",
    React: "⚛️",
    "Next.js": "▲",
    gRPC: "📡",
    WebSocket: "🔌",
    NGINX: "🛡️",
    PostgreSQL: "🐘",
    "AWS Aurora": "⚡",
    DynamoDB: "💾",
    "MongoDB Atlas": "🍃",
    Redis: "🔴",
    Kafka: "🔀",
    Spark: "✨",
    Airflow: "🌬️",
    AWS: "☁️",
    Docker: "🐳",
    Kubernetes: "☸️",
    "GitHub Actions": "🚀",
    Jenkins: "👷",
    Prometheus: "📈",
    Grafana: "📊",
    Jira: "📋",
    PySpark: "✨",
    Hadoop: "🐘",
    Pandas: "🐼",
    NumPy: "🔢",
    "Scikit-learn": "🤖",
    "Voyage AI": "🔍",
    "MongoDB Vector Search": "🍃",
    MLflow: "📈",
  };
  return icons[tech] || "🔹";
};

const getTechIconUrl = (tech: string): string | null => {
  const paths: Record<string, string> = {
    Python: "python/python-original.svg",
    Java: "java/java-original.svg",
    Go: "go/go-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    TypeScript: "typescript/typescript-original.svg",
    SQL: "postgresql/postgresql-original.svg",
    FastAPI: "fastapi/fastapi-original.svg",
    "Spring Boot": "spring/spring-original.svg",
    "Node.js": "nodejs/nodejs-original.svg",
    React: "react/react-original.svg",
    "Next.js": "nextjs/nextjs-original.svg",
    NGINX: "nginx/nginx-original.svg",
    PostgreSQL: "postgresql/postgresql-original.svg",
    Redis: "redis/redis-original.svg",
    Spark: "apachespark/apachespark-original.svg",
    AWS: "amazonwebservices/amazonwebservices-original.svg",
    Docker: "docker/docker-original.svg",
    Kubernetes: "kubernetes/kubernetes-plain.svg",
    Jenkins: "jenkins/jenkins-original.svg",
    Prometheus: "prometheus/prometheus-original.svg",
    Grafana: "grafana/grafana-original.svg",
    Jira: "jira/jira-original.svg",
    PySpark: "apachespark/apachespark-original.svg",
    Hadoop: "hadoop/hadoop-original.svg",
    Pandas: "pandas/pandas-original.svg",
    NumPy: "numpy/numpy-original.svg",
    "Scikit-learn": "scikitlearn/scikitlearn-original.svg",
  };
  return paths[tech] ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${paths[tech]}` : null;
};

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════
          HERO SECTION — fixed spacing
          ═══════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden px-4 pb-6 pt-28 sm:px-6 sm:pt-32">
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-orb ambient-orb-c" />
        <div className="hero-noise absolute inset-0 opacity-70" />
        <SignalField />

        <div className="relative mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-[0.58fr_0.42fr]">
          <ScrollReveal direction="left" duration={0.7} className="h-full">
            <div className="system-panel h-full rounded-[2.8rem] p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="section-kicker">{identity.eyebrow}</p>
                <h1 className="display-face mt-5 max-w-3xl text-4xl leading-[0.94] text-[var(--color-ink)] sm:text-5xl lg:text-[5.2rem]">
                  {identity.headlineA}
                  <span className="text-[var(--color-signal)]"> {identity.headlineB}</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  {identity.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#case-files" className="command-chip bg-[var(--color-ink)] text-[var(--color-surface)]">
                    Open case files
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="/about" className="command-chip border border-[var(--color-line)] bg-white/70 text-[var(--color-ink)]">
                    Explore profile
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {identity.status.map((item) => (
                    <div key={item} className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/55 px-4 py-3">
                      <p className="text-sm leading-6 text-[var(--color-muted)]">{item}</p>
                    </div>
                  ))}
                </div>
                <SystemSpecsWidget />
              </div>

              <TelemetryWidget />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.7} delay={0.15}>
            <div className="grid gap-5">
              {/* Animated terminal */}
              <TerminalBlock />

              <div className="grid gap-4 sm:grid-cols-2">
                {personalSignals.map((item) => (
                  <div key={item.title} className="signal-card">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-signal)]">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {item.body}
                    </p>
                  </div>
                ))}
                <div className="signal-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-signal)]">
                    External signals
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {signalLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                      >
                        <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
          EXISTING SECTIONS — with scroll reveals
          ═══════════════════════════════════ */}
      <SystemsOS />
      <ManifestoRail />
      <MediumSignals />

      {/* ═══════════════════════════════════
          NEW SECTIONS
          ═══════════════════════════════════ */}
      <ExperienceTimeline />
      <EducationShowcase />

      {/* ═══════════════════════════════════
          STACK ATLAS — with scroll reveals
          ═══════════════════════════════════ */}
      <section id="stack" className="px-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 xl:grid-cols-[0.36fr_0.64fr]">
            <ScrollReveal direction="left">
              <div className="system-panel rounded-[2.6rem] p-7 sm:p-9 h-full">
                <p className="section-kicker">Stack atlas</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-6xl">
                  Not a stack list.
                  <span className="block text-[var(--color-signal)]">A systems fingerprint.</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                  Most portfolios dump tools into badges. This section maps how the technical language of the work bends toward architecture, scale, intelligence, and shipping.
                </p>

                <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1" stagger={0.08}>
                  <ScrollRevealItem>
                    <div className="signal-card flex items-center justify-between gap-4">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        surface area
                      </span>
                      <span className="text-sm font-semibold uppercase text-[var(--color-ink)]">wide</span>
                    </div>
                  </ScrollRevealItem>
                  <ScrollRevealItem>
                    <div className="signal-card flex items-center justify-between gap-4">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        center of gravity
                      </span>
                      <span className="text-sm font-semibold uppercase text-[var(--color-ink)]">systems</span>
                    </div>
                  </ScrollRevealItem>
                  <ScrollRevealItem>
                    <div className="signal-card flex items-center justify-between gap-4">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        shipping mode
                      </span>
                      <span className="text-sm font-semibold uppercase text-[var(--color-ink)]">production-minded</span>
                    </div>
                  </ScrollRevealItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" stagger={0.07}>
              {techGroups.map((group, index) => (
                <ScrollRevealItem key={group.title}>
                  <div
                    className="system-panel rounded-[2.2rem] p-5 h-full"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-signal)]">
                          lane {stackSignals[index]?.code}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">{group.title}</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/70 text-xs font-semibold tracking-[0.22em] text-[var(--color-ink)]">
                        <span>{stackSignals[index]?.code}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      {stackSignals[index]?.note}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {group.items.map((item) => {
                        const isCore = ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Spark", "AWS", "Docker", "React", "Next.js"].includes(item);
                        const iconUrl = getTechIconUrl(item);
                        return (
                          <span
                            key={item}
                            className={`rounded-full border px-3 py-2 text-sm flex items-center gap-1.5 transition-all duration-300 hover:scale-[1.05] ${
                              isCore
                                ? "border-[var(--color-signal)] bg-[var(--color-signal-soft)] text-[var(--color-ink)] font-semibold shadow-[0_2px_8px_rgba(158,109,244,0.1)]"
                                : "border-[var(--color-line)] bg-white/80 text-[var(--color-muted)] hover:bg-white/90"
                            }`}
                          >
                            {iconUrl ? (
                              <img src={iconUrl} alt="" className="h-4.5 w-4.5 object-contain" />
                            ) : (
                              <span className="text-base">{getTechIcon(item)}</span>
                            )}
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SKILLS CONSTELLATION — NEW
          ═══════════════════════════════════ */}
      <SkillsConstellation />

      <OperatingModel />

      {/* ═══════════════════════════════════
          CASE FILES — with scroll reveals
          ═══════════════════════════════════ */}
      <section id="case-files" className="px-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <p className="section-kicker">Case files</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Flagship systems presented with a sharper point of view.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
                Each card now opens with a stronger claim. Inside, the project pages carry the architecture, tooling, impact, and delivery story.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.08}>
            {featuredProjects.map((project) => (
              <ScrollRevealItem key={project.slug}>
                <article
                  className="system-panel flex h-[37rem] flex-col rounded-[1.8rem] p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-signal)]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 h-[4.25rem] overflow-hidden text-[1.65rem] font-semibold leading-[1.02] text-[var(--color-ink)] line-clamp-2">
                        {project.cardName}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1 text-xs text-[var(--color-muted)] flex-shrink-0">
                      Project
                    </span>
                  </div>

                  <p className="mt-3 min-h-[3.25rem] text-[0.95rem] leading-7 text-[var(--color-muted)] line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <p className="mt-3 min-h-[3.5rem] rounded-[1.3rem] border border-[rgba(158,109,244,0.18)] bg-[linear-gradient(135deg,rgba(158,109,244,0.16),rgba(255,255,255,0.6))] px-4 py-3 text-sm font-semibold leading-6 text-[var(--color-ink)] line-clamp-2">
                    {project.cardHook}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.accents.slice(0, 2).map((accent) => (
                      <span
                        key={accent}
                        className="rounded-full border border-[var(--color-line)] bg-white/75 px-3 py-1 text-sm text-[var(--color-muted)]"
                      >
                        {accent}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 min-h-[8.5rem] rounded-[1.3rem] border border-[var(--color-line)] bg-white/55 p-3.5 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        Stack + delivery
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)] line-clamp-2">
                        {project.stackHeadline}
                      </p>
                    </div>
                    <div className="mt-2.5 overflow-hidden">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs text-[var(--color-muted)]"
                          >
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {project.proofPoints.slice(0, 1).map((point) => (
                      <div
                        key={point}
                        className="min-h-[2.5rem] rounded-[1rem] border border-[var(--color-line)] bg-white/75 px-4 py-2.5 text-xs text-[var(--color-ink)] font-semibold line-clamp-2"
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="casefile-entry group block overflow-hidden rounded-[1.4rem] border border-[rgba(255,255,255,0.08)] bg-[var(--color-night)] text-[var(--color-surface)]"
                    >
                      <div className="flex items-center justify-between gap-4 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-white/45">
                        <span>enter dossier</span>
                        <span>/{project.slug}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/8 px-4 py-2.5">
                        <span className="text-sm font-semibold">Traverse case file</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </article>
              </ScrollRevealItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════
          BUILD GRAPH — upgraded to interactive pipeline
          ═══════════════════════════════════ */}
      <BuildPipeline />

      {/* ═══════════════════════════════════
          GITHUB PULSE — NEW
          ═══════════════════════════════════ */}
      <GitHubPulse />

      {/* ═══════════════════════════════════
          INTERACTIVE GAME — LOCAL ONLY
          ═══════════════════════════════════ */}
      <PacketRouterGame />

      <ContactPaths />
    </>
  );
}
