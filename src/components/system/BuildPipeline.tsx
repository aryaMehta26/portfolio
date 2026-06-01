'use client';

import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

type PipelineNode = {
  id: string;
  label: string;
  desc: string;
};

const lanes: { title: string; key: 'infra' | 'backend' | 'ai' | 'product'; nodes: PipelineNode[] }[] = [
  {
    title: 'Infrastructure',
    key: 'infra',
    nodes: [
      { id: 'airflow', label: 'Airflow', desc: 'Orchestrates batch ETL processing & workflows.' },
      { id: 'spark', label: 'Spark', desc: 'Tunes data partitioning & processing of 5TB+/day.' },
      { id: 'kafka', label: 'Kafka', desc: 'Ingests real-time telemetry & system event streams.' },
      { id: 'aurora', label: 'Aurora', desc: 'High-performance relational DB storage.' },
      { id: 'k8s', label: 'Kubernetes', desc: 'Schedules pods, autoscaling, and service meshes.' },
      { id: 's3', label: 'AWS S3', desc: 'Stores raw parquet & json streams for batch processing.' },
      { id: 'eks', label: 'AWS EKS', desc: 'Managed Kubernetes for scalable spark & model services.' }
    ]
  },
  {
    title: 'Backend',
    key: 'backend',
    nodes: [
      { id: 'fastapi', label: 'FastAPI', desc: 'Delivers async endpoints with sub-100ms P95 latency.' },
      { id: 'springboot', label: 'Spring Boot', desc: 'Powering enterprise microservices & Java logic.' },
      { id: 'grpc', label: 'gRPC', desc: 'High-speed internal microservice RPC communication.' },
      { id: 'websocket', label: 'WebSocket', desc: 'Handles real-time bi-directional server sync.' },
      { id: 'nginx', label: 'NGINX', desc: 'Load balancing, reverse proxies & entry routing.' },
      { id: 'rest', label: 'REST APIs', desc: 'Designed endpoints with rate-limiting & auto-validation.' }
    ]
  },
  {
    title: 'Applied AI',
    key: 'ai',
    nodes: [
      { id: 'langgraph', label: 'LangGraph', desc: 'Multi-agent autonomous systems using state graphs.' },
      { id: 'rag', label: 'RAG systems', desc: 'Vector search retrieval pipelines to reduce hallucination.' },
      { id: 'pytorch', label: 'PyTorch', desc: 'Deep learning models for forecasting & classification.' },
      { id: 'vectorsearch', label: 'Vector Search', desc: 'High-dimensionality index matching on MongoDB/Atlas.' },
      { id: 'modeldelivery', label: 'Model Delivery', desc: 'Packaging & deploying weights to online APIs.' },
      { id: 'nlp', label: 'NLP / TF-IDF', desc: 'Feature extraction, plot synopsis tokenization.' },
      { id: 'scikitlearn', label: 'Scikit-Learn', desc: 'Random Forest popularity classifiers & regressions.' }
    ]
  },
  {
    title: 'Product',
    key: 'product',
    nodes: [
      { id: 'hackathons', label: 'Hackathons', desc: 'Rapid prototyping under high-pressure windows.' },
      { id: 'agenticux', label: 'Agentic UX', desc: 'Interfaces built for generative AI and agent states.' },
      { id: 'storytelling', label: 'Storytelling', desc: 'Making deep technical concepts readable & compelling.' },
      { id: 'executionspeed', label: 'Execution Speed', desc: 'Optimizing startup, page transitions & DB calls.' },
      { id: 'realtimesystems', label: 'Real-Time Systems', desc: 'Building responsive tools with immediate feedback.' },
      { id: 'streamlit', label: 'Streamlit HUD', desc: 'Interactive dashboards for data quality & execution.' },
      { id: 'powerbi', label: 'Power BI UI', desc: 'Business insights and popularity analytics reports.' }
    ]
  }
];

const links = [
  // Infra to Backend
  { from: 'airflow', to: 'fastapi' },
  { from: 'spark', to: 'fastapi' },
  { from: 'kafka', to: 'websocket' },
  { from: 'aurora', to: 'springboot' },
  { from: 'k8s', to: 'nginx' },
  { from: 's3', to: 'spark' },
  { from: 'eks', to: 'k8s' },

  // Backend to AI
  { from: 'fastapi', to: 'langgraph' },
  { from: 'fastapi', to: 'rag' },
  { from: 'springboot', to: 'pytorch' },
  { from: 'grpc', to: 'modeldelivery' },
  { from: 'websocket', to: 'modeldelivery' },
  { from: 'nginx', to: 'modeldelivery' },
  { from: 'fastapi', to: 'rest' },

  // AI to Product
  { from: 'langgraph', to: 'agenticux' },
  { from: 'langgraph', to: 'storytelling' },
  { from: 'rag', to: 'realtimesystems' },
  { from: 'pytorch', to: 'executionspeed' },
  { from: 'vectorsearch', to: 'realtimesystems' },
  { from: 'modeldelivery', to: 'executionspeed' },
  { from: 'modeldelivery', to: 'hackathons' },
  { from: 'spark', to: 'nlp' },
  { from: 'nlp', to: 'scikitlearn' },
  { from: 'scikitlearn', to: 'streamlit' },
  { from: 'scikitlearn', to: 'powerbi' },
  { from: 'rest', to: 'agenticux' }
];

const nodeContexts: Record<string, string> = {
  airflow: "Orchestrates complex data flows, scheduling the extraction of telemetry databases into FastAPI ingest points.",
  spark: "Processes massive daily transaction logs, partitioning and optimizing features before serving via APIs.",
  kafka: "Streams low-latency event pulses directly to WebSocket services for real-time collaboration widgets.",
  aurora: "Stores core relational schema, serving Spring Boot microservices with highly indexed read replicas.",
  k8s: "Host environment for scalable Spark executors and NGINX ingress routing layers.",
  s3: "AWS S3 stores raw telemetry datasets and batch outputs before processing with Apache Spark.",
  eks: "AWS Elastic Kubernetes Service hosts containers running Spark executors, REST APIs, and ML models.",
  fastapi: "Serves as the high-throughput gateway connecting ETL outputs (Spark) to LangGraph agents and Vector search.",
  springboot: "Executes enterprise business rules, feeding data structures into PyTorch model layers.",
  grpc: "Facilitates internal RPC calls between serving layers and machine learning model delivery engines.",
  websocket: "Handles real-time user-collaboration channels, sending instant telemetry to active client viewports.",
  nginx: "Routes and load-balances public requests to model delivery services and platform interfaces.",
  rest: "REST APIs serve structured database tables to client interfaces under rate limits.",
  langgraph: "Maintains multi-agent state machines, executing supervisor plans and rendering agent states in UI pages.",
  rag: "Combines strict pre-filters and semantic retrieval to feed zero-hallucination data to real-time systems.",
  pytorch: "Trains and executes forecasting models, delivering metrics that optimize execution speed.",
  vectorsearch: "Queries high-dimensional database indexes, feeding top-k results to real-time client applications.",
  modeldelivery: "Wraps trained neural nets in clean web endpoints for swift prediction delivery.",
  nlp: "Natural Language Processing extracts vocabulary frequencies and plot features from Netflix synopses.",
  scikitlearn: "Scikit-Learn library trains Random Forest classifiers to predict user preferences and popular content.",
  hackathons: "Forces strict timebox engineering, delivering complex functional products like LayoverOS under constraints.",
  agenticux: "Designs responsive Generative UI models, displaying live agent thinking states dynamically.",
  storytelling: "Decodes complex system designs into simple, interactive narratives for both builders and users.",
  executionspeed: "Ensures latency stays minimal under heavy concurrent loads and high data volumes.",
  realtimesystems: "Enables immediate feedback loops, sync states, and responsive data pipelines.",
  streamlit: "Streamlit UI presents interactive dashboard metrics for Spark tasks, data quality rules, and logs.",
  powerbi: "Power BI visualizes content popularity and user demographics via rich dashboards."
};

type NodePosition = {
  leftX: number;
  rightX: number;
  y: number;
};

export default function BuildPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodePositions, setNodePositions] = useState<Record<string, NodePosition>>({});
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Measure positions of node edges relative to the parent container
  const updatePositions = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const pos: Record<string, NodePosition> = {};

    const elements = container.querySelectorAll('[data-node-id]');
    elements.forEach((el) => {
      const id = el.getAttribute('data-node-id');
      if (!id) return;

      const rect = el.getBoundingClientRect();
      pos[id] = {
        leftX: rect.left - containerRect.left,
        rightX: rect.right - containerRect.left,
        y: rect.top - containerRect.top + rect.height / 2,
      };
    });

    setNodePositions(pos);
  };

  useLayoutEffect(() => {
    updatePositions();
    // Delay to let layout settle
    const timer = setTimeout(updatePositions, 150);
    window.addEventListener('resize', updatePositions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  // Update layout when details show/collapse since heights might shift
  useEffect(() => {
    updatePositions();
  }, [hoveredNode]);

  // Downstream lookup (DFS)
  const getDownstreamNodes = (nodeId: string): Set<string> => {
    const visited = new Set<string>();
    const queue = [nodeId];
    while (queue.length > 0) {
      const curr = queue.shift()!;
      links.forEach((link) => {
        if (link.from === curr && !visited.has(link.to)) {
          visited.add(link.to);
          queue.push(link.to);
        }
      });
    }
    return visited;
  };

  // Upstream lookup (DFS)
  const getUpstreamNodes = (nodeId: string): Set<string> => {
    const visited = new Set<string>();
    const queue = [nodeId];
    while (queue.length > 0) {
      const curr = queue.shift()!;
      links.forEach((link) => {
        if (link.to === curr && !visited.has(link.from)) {
          visited.add(link.from);
          queue.push(link.from);
        }
      });
    }
    return visited;
  };

  const activeUpstream = hoveredNode ? getUpstreamNodes(hoveredNode) : new Set<string>();
  const activeDownstream = hoveredNode ? getDownstreamNodes(hoveredNode) : new Set<string>();

  const isHighlighted = (nodeId: string) => {
    if (!hoveredNode) return false;
    return nodeId === hoveredNode || activeUpstream.has(nodeId) || activeDownstream.has(nodeId);
  };

  const isLinkHighlighted = (from: string, to: string) => {
    if (!hoveredNode) return false;
    if (from === hoveredNode && activeDownstream.has(to)) return true;
    if (activeUpstream.has(from) && to === hoveredNode) return true;
    if (activeUpstream.has(from) && activeUpstream.has(to) && getDownstreamNodes(from).has(hoveredNode)) return true;
    if (activeDownstream.has(from) && activeDownstream.has(to) && getUpstreamNodes(to).has(hoveredNode)) return true;
    return false;
  };

  return (
    <section id="graph" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Build graph pipeline</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              The work connects across infrastructure, backend, AI, and product execution.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Hover over nodes to explore upstream sources and downstream effects. Observe data flows moving through the architecture.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div ref={containerRef} className="system-panel relative rounded-[2.4rem] p-6 lg:p-10">
            {/* SVG Link Connections */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full z-0" style={{ minHeight: '360px' }}>
              <defs>
                <style>{`
                  @keyframes strokeFlow {
                    to {
                      stroke-dashoffset: -24;
                    }
                  }
                  .stroke-flow-fast {
                    stroke-dasharray: 5, 7;
                    animation: strokeFlow 0.9s linear infinite;
                  }
                  .stroke-flow-slow {
                    stroke-dasharray: 4, 14;
                    animation: strokeFlow 3.5s linear infinite;
                  }
                `}</style>
              </defs>

              {links.map((link, idx) => {
                const fromPos = nodePositions[link.from];
                const toPos = nodePositions[link.to];

                if (!fromPos || !toPos) return null;

                const x1 = fromPos.rightX;
                const y1 = fromPos.y;
                const x2 = toPos.leftX;
                const y2 = toPos.y;

                const dx = Math.abs(x2 - x1) * 0.45;
                const pathD = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
                const active = isLinkHighlighted(link.from, link.to);
                const color = active ? 'rgba(158, 109, 244, 0.85)' : 'rgba(29, 24, 48, 0.08)';
                const thickness = active ? 2.2 : 0.85;

                return (
                  <g key={`${link.from}-${link.to}-${idx}`}>
                    {/* Underlying thick glow for active paths */}
                    {active && (
                      <path
                        d={pathD}
                        fill="none"
                        stroke="rgba(158, 109, 244, 0.16)"
                        strokeWidth={6}
                      />
                    )}
                    {/* Primary connection line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={color}
                      strokeWidth={thickness}
                      className={active ? 'stroke-flow-fast' : 'stroke-flow-slow'}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Pipeline Columns */}
            <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {lanes.map((lane) => (
                <div key={lane.key} className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-signal)] mb-2 px-1">
                    {lane.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {lane.nodes.map((node) => {
                      const active = isHighlighted(node.id);
                      const selected = hoveredNode === node.id;
                      const dimmed = hoveredNode && !active;

                      return (
                        <div
                          key={node.id}
                          data-node-id={node.id}
                          onMouseEnter={() => setHoveredNode(node.id)}
                          onMouseLeave={() => setHoveredNode(null)}
                          className={`rounded-[1.4rem] border p-4 transition-all duration-300 cursor-pointer ${
                            selected
                              ? 'border-[var(--color-signal)] bg-[var(--color-signal-soft)] shadow-[0_8px_24px_rgba(158,109,244,0.12)] scale-[1.03]'
                              : active
                              ? 'border-purple-300/60 bg-[rgba(158,109,244,0.06)] shadow-[0_4px_16px_rgba(158,109,244,0.05)]'
                              : dimmed
                              ? 'border-[var(--color-line)] bg-white/35 opacity-40 scale-[0.98]'
                              : 'border-[var(--color-line)] bg-white/70 hover:border-purple-300/80 hover:bg-white/90'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-[var(--color-ink)]">
                              {node.label}
                            </h4>
                            {selected && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal)] animate-ping" />
                            )}
                          </div>
                          <p className="mt-1 text-[11px] leading-5 text-[var(--color-muted)]">
                            {node.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Context Detail Terminal HUD */}
            <div className="relative z-10 mt-10 rounded-[1.6rem] border border-[var(--color-line)] bg-[#171221] p-4 text-[var(--color-surface)] shadow-lg backdrop-blur-md transition-all duration-300 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 pb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span className="inline-block h-2 w-2 rounded-full bg-purple-400" />
                <span>Pipeline Integration Context</span>
              </div>
              <div className="mt-3 font-mono text-xs leading-6">
                {hoveredNode ? (
                  <div>
                    <span className="text-purple-400 font-bold">{`$ inspect --system-node ${hoveredNode}`}</span>
                    <p className="mt-2 text-white/95">{nodeContexts[hoveredNode] || ''}</p>
                    {activeUpstream.size > 0 && (
                      <p className="mt-2 text-white/50">
                        <span className="text-blue-300 font-semibold">Upstream Feed: </span>
                        {Array.from(activeUpstream)
                          .map((id) => lanes.flatMap((l) => l.nodes).find((n) => n.id === id)?.label)
                          .filter(Boolean)
                          .join(', ')}
                      </p>
                    )}
                    {activeDownstream.size > 0 && (
                      <p className="mt-1 text-white/50">
                        <span className="text-orange-300 font-semibold">Downstream Ingestion: </span>
                        {Array.from(activeDownstream)
                          .map((id) => lanes.flatMap((l) => l.nodes).find((n) => n.id === id)?.label)
                          .filter(Boolean)
                          .join(', ')}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <span className="text-white/40">{`$ hover a node to inspect system integrations...`}</span>
                    <span className="inline-block w-1.5 h-3 bg-white/70 ml-1.5 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
