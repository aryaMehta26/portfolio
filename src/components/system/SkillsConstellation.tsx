'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
  skillNodes,
  skillEdges,
  skillCategoryColors,
  skillCategoryLabels,
  type SkillNode,
} from '@/data/portfolio';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

type NodePosition = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  node: SkillNode;
};

export default function SkillsConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<NodePosition[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const hoveredRef = useRef<string | null>(null);
  const animRef = useRef<number>(0);
  const [activeCategory, setActiveCategory] = useState<SkillNode['category'] | 'all'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const categories = useMemo(
    () => ['all', ...Object.keys(skillCategoryLabels)] as const,
    []
  );

  const packetsRef = useRef<{ fromId: string; toId: string; progress: number; speed: number; size: number }[]>([]);
  const rotationRef = useRef<number>(0);

  const initNodes = useCallback((w: number, h: number) => {
    const categoryPositions: Record<string, { cx: number; cy: number }> = {
      backend: { cx: w * 0.2, cy: h * 0.35 },
      ai: { cx: w * 0.5, cy: h * 0.25 },
      data: { cx: w * 0.8, cy: h * 0.35 },
      cloud: { cx: w * 0.35, cy: h * 0.7 },
      product: { cx: w * 0.65, cy: h * 0.7 },
    };

    nodesRef.current = skillNodes.map((node, i) => {
      const cat = categoryPositions[node.category] || { cx: w / 2, cy: h / 2 };
      const angle = (i / skillNodes.length) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 40 + Math.random() * 60;
      const targetX = cat.cx + Math.cos(angle) * radius;
      const targetY = cat.cy + Math.sin(angle) * radius;

      return {
        x: w / 2 + (Math.random() - 0.5) * w,
        y: h / 2 + (Math.random() - 0.5) * h,
        vx: 0,
        vy: 0,
        targetX,
        targetY,
        node,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodesRef.current.length === 0) {
        initNodes(w, h);
      }
    };

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      // Check hover
      let found: NodePosition | null = null;
      for (const np of nodesRef.current) {
        const dx = mouseRef.current.x - np.x;
        const dy = mouseRef.current.y - np.y;
        if (Math.sqrt(dx * dx + dy * dy) < 22) {
          found = np;
          break;
        }
      }

      if (found) {
        hoveredRef.current = found.node.id;
        setHoveredSkill(found.node);
        setTooltipPos({ x: found.x, y: found.y - 30 });
        canvas.style.cursor = 'pointer';
      } else {
        hoveredRef.current = null;
        setHoveredSkill(null);
        canvas.style.cursor = 'default';
      }
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      hoveredRef.current = null;
      setHoveredSkill(null);
    };

    const animate = () => {
      if (!ctx) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const hovered = hoveredRef.current;
      const filter = activeCategory;

      rotationRef.current += 0.015;

      // Soft mouse glow trail
      if (mouse.x > -500 && mouse.y > -500) {
        const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 110);
        mouseGlow.addColorStop(0, 'rgba(158, 109, 244, 0.08)');
        mouseGlow.addColorStop(0.5, 'rgba(158, 109, 244, 0.03)');
        mouseGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 110, 0, Math.PI * 2);
        ctx.fill();
      }

      // Spawn data flow packets
      if (packetsRef.current.length < 18 && Math.random() < 0.08 && skillEdges.length > 0) {
        const edge = skillEdges[Math.floor(Math.random() * skillEdges.length)];
        // Check if both nodes are visible
        const fromNode = nodes.find(n => n.node.id === edge.from);
        const toNode = nodes.find(n => n.node.id === edge.to);
        if (fromNode && toNode && (filter === 'all' || fromNode.node.category === filter || toNode.node.category === filter)) {
          packetsRef.current.push({
            fromId: edge.from,
            toId: edge.to,
            progress: 0,
            speed: 0.006 + Math.random() * 0.012,
            size: 1.5 + Math.random() * 1.5
          });
        }
      }

      // Update and draw packets
      packetsRef.current = packetsRef.current.filter((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) return false;

        const from = nodes.find(n => n.node.id === packet.fromId);
        const to = nodes.find(n => n.node.id === packet.toId);
        if (!from || !to) return false;

        // Position interpolation
        const px = from.x + (to.x - from.x) * packet.progress;
        const py = from.y + (to.y - from.y) * packet.progress;

        // Colors based on from node category
        const col = skillCategoryColors[from.node.category] || 'rgba(158, 109, 244, 0.9)';
        ctx.shadowColor = col;
        ctx.shadowBlur = 4;
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(px, py, packet.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
        return true;
      });

      // Physics update
      for (const np of nodes) {
        // Dynamic target clustering center based on active category filter
        let tx = np.targetX;
        let ty = np.targetY;

        if (filter !== 'all') {
          const categoryPositions: Record<string, { cx: number; cy: number }> = {
            backend: { cx: w * 0.2, cy: h * 0.35 },
            ai: { cx: w * 0.5, cy: h * 0.25 },
            data: { cx: w * 0.8, cy: h * 0.35 },
            cloud: { cx: w * 0.35, cy: h * 0.7 },
            product: { cx: w * 0.65, cy: h * 0.7 },
          };
          const targetCenter = categoryPositions[filter] || { cx: w / 2, cy: h / 2 };

          if (np.node.category === filter) {
            // Pull filtered category closer together near their center
            tx = targetCenter.cx + (np.targetX - targetCenter.cx) * 0.6;
            ty = targetCenter.cy + (np.targetY - targetCenter.cy) * 0.6;
          } else {
            // Push others slightly away to reduce clutter
            const dx = np.targetX - targetCenter.cx;
            const dy = np.targetY - targetCenter.cy;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            tx = targetCenter.cx + (dx / dist) * (dist + 70);
            ty = targetCenter.cy + (dy / dist) * (dist + 70);
          }
        }

        // Spring toward target
        const dx = tx - np.x;
        const dy = ty - np.y;
        np.vx += dx * 0.009;
        np.vy += dy * 0.009;

        // Mouse attraction
        const mx = mouse.x - np.x;
        const my = mouse.y - np.y;
        const mDist = Math.sqrt(mx * mx + my * my);
        if (mDist < 140 && mDist > 0) {
          const force = (140 - mDist) / 140;
          np.vx += (mx / mDist) * force * 0.45;
          np.vy += (my / mDist) * force * 0.45;
        }

        // Node repulsion
        for (const other of nodes) {
          if (other === np) continue;
          const rx = np.x - other.x;
          const ry = np.y - other.y;
          const rDist = Math.sqrt(rx * rx + ry * ry);
          if (rDist < 55 && rDist > 0) {
            const repel = (55 - rDist) / 55;
            np.vx += (rx / rDist) * repel * 0.65;
            np.vy += (ry / rDist) * repel * 0.65;
          }
        }

        np.vx *= 0.90;
        np.vy *= 0.90;
        np.x += np.vx;
        np.y += np.vy;
      }

      // Draw edges
      for (const edge of skillEdges) {
        const from = nodes.find((n) => n.node.id === edge.from);
        const to = nodes.find((n) => n.node.id === edge.to);
        if (!from || !to) continue;

        const isFiltered =
          filter !== 'all' &&
          from.node.category !== filter &&
          to.node.category !== filter;

        const isHighlighted =
          hovered && (from.node.id === hovered || to.node.id === hovered);

        const alpha = isFiltered ? 0.02 : isHighlighted ? 0.65 : 0.12;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);

        if (isHighlighted) {
          // Glow effect on hovered edges
          const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
          const c1 = skillCategoryColors[from.node.category];
          const c2 = skillCategoryColors[to.node.category];
          grad.addColorStop(0, c1.replace(/[\d.]+\)$/, '0.7)'));
          grad.addColorStop(1, c2.replace(/[\d.]+\)$/, '0.7)'));
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.0;
        } else {
          ctx.strokeStyle = `rgba(158, 109, 244, ${alpha})`;
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      }

      // Draw nodes
      for (const np of nodes) {
        const isFiltered = filter !== 'all' && np.node.category !== filter;
        const isHovered = np.node.id === hovered;
        const isConnected =
          hovered &&
          skillEdges.some(
            (e) =>
              (e.from === hovered && e.to === np.node.id) ||
              (e.to === hovered && e.from === np.node.id)
          );

        const alpha = isFiltered ? 0.10 : isHovered ? 1.0 : isConnected ? 0.90 : 0.65;
        const baseRadius =
          np.node.proficiency === 'expert' ? 14 : np.node.proficiency === 'advanced' ? 11 : 8;
        
        // Add subtle scale pulse to connected nodes
        const pulse = isConnected ? Math.sin(Date.now() / 200) * 1.5 : 0;
        const drawRadius = isHovered ? baseRadius + 4 : baseRadius + pulse;
        const color = skillCategoryColors[np.node.category];

        // Glow behind node
        if ((isHovered || isConnected) && !isFiltered) {
          const glow = ctx.createRadialGradient(np.x, np.y, 0, np.x, np.y, drawRadius * 3.5);
          glow.addColorStop(0, color.replace(/[\d.]+\)$/, `${alpha * 0.45})`));
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(np.x, np.y, drawRadius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Draw rotating dashed ring around hovered node
        if (isHovered && !isFiltered) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(np.x, np.y, drawRadius + 7, 0, Math.PI * 2);
          ctx.strokeStyle = color.replace(/[\d.]+\)$/, '0.85)');
          ctx.lineWidth = 1.0;
          ctx.setLineDash([4, 4]);
          ctx.translate(np.x, np.y);
          ctx.rotate(rotationRef.current);
          ctx.translate(-np.x, -np.y);
          ctx.stroke();
          ctx.restore();
        }

        // Circle
        ctx.beginPath();
        ctx.arc(np.x, np.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fill();

        // Border
        ctx.beginPath();
        ctx.arc(np.x, np.y, drawRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.7})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Label
        if (!isFiltered) {
          ctx.font = `${isHovered ? '600' : '500'} ${isHovered ? '13' : '11'}px "Avenir Next", "Segoe UI", sans-serif`;
          ctx.fillStyle = `rgba(29, 24, 48, ${isHovered ? 1 : 0.75})`;
          ctx.textAlign = 'center';
          ctx.fillText(np.node.label, np.x, np.y + drawRadius + 16);
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [activeCategory, initNodes]);

  return (
    <section id="skills-constellation" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">Skills constellation</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Skills are not isolated. They form a system.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
                Hover to explore connections. Node size reflects depth. Edges show how tools relate in real projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat as typeof activeCategory)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'border-[var(--color-signal)] bg-[var(--color-signal-soft)] text-[var(--color-ink)]'
                      : 'border-[var(--color-line)] bg-white/60 text-[var(--color-muted)] hover:bg-white/80'
                  }`}
                >
                  {cat === 'all' ? 'All' : skillCategoryLabels[cat as SkillNode['category']]}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={containerRef}
            className="system-panel relative rounded-[2.4rem] overflow-hidden"
            style={{ height: '32rem' }}
          >
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Tooltip */}
            {hoveredSkill && (
              <div
                className="pointer-events-none absolute z-10 rounded-2xl border border-[var(--color-line)] bg-white/90 px-4 py-2.5 shadow-[0_12px_40px_rgba(41,26,82,0.12)] backdrop-blur-md transition-all duration-150"
                style={{
                  left: `${tooltipPos.x}px`,
                  top: `${tooltipPos.y}px`,
                  transform: 'translate(-50%, -100%)',
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-signal)]">
                  {skillCategoryLabels[hoveredSkill.category]}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
                  {hoveredSkill.label}
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-muted)] capitalize">
                  {hoveredSkill.proficiency}
                </p>
              </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 right-4 flex flex-wrap gap-3">
              {Object.entries(skillCategoryLabels).map(([key, label]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: skillCategoryColors[key as SkillNode['category']] }}
                  />
                  <span className="text-[0.65rem] font-medium text-[var(--color-muted)]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
