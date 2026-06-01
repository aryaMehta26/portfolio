'use client';

import { useEffect, useRef, useState } from 'react';

export default function TelemetryWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [metrics, setMetrics] = useState({
    uptime: '99.987%',
    latency: '14ms',
    ingestRate: '1.24 GB/s',
  });

  // Animate metrics values slightly to feel "alive"
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => {
        // Uptime ticks up in decimals
        const currentUptimeNum = parseFloat(prev.uptime.replace('%', ''));
        const nextUptime = (currentUptimeNum + 0.00001).toFixed(5) + '%';

        // Latency fluctuates between 12 and 16ms
        const latencyVal = Math.floor(Math.random() * 5) + 12;
        const nextLatency = `${latencyVal}ms`;

        // Ingest rate fluctuates between 1.18 and 1.32 GB/s
        const ingestVal = (1.18 + Math.random() * 0.14).toFixed(2);
        const nextIngestRate = `${ingestVal} GB/s`;

        return {
          uptime: nextUptime,
          latency: nextLatency,
          ingestRate: nextIngestRate,
        };
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Canvas wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      // Draw grid lines behind wave
      ctx.strokeStyle = 'rgba(29, 24, 48, 0.04)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw primary wave (lilac glow)
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(158, 109, 244, 0.5)';
      
      // Creating gradient
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'rgba(158, 109, 244, 0.15)');
      grad.addColorStop(0.5, 'rgba(158, 109, 244, 0.7)');
      grad.addColorStop(1, 'rgba(158, 109, 244, 0.15)');
      ctx.strokeStyle = grad;

      ctx.moveTo(0, h / 2);
      for (let x = 0; x < w; x++) {
        const angle = (x / w) * Math.PI * 3 + phase;
        // Dampen at edges
        const damp = Math.sin((x / w) * Math.PI);
        const y = h / 2 + Math.sin(angle) * (h * 0.35) * damp;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary wave (blue glow, slightly out of phase)
      ctx.beginPath();
      ctx.lineWidth = 1.0;
      const grad2 = ctx.createLinearGradient(0, 0, w, 0);
      grad2.addColorStop(0, 'rgba(98, 208, 255, 0.05)');
      grad2.addColorStop(0.5, 'rgba(98, 208, 255, 0.4)');
      grad2.addColorStop(1, 'rgba(98, 208, 255, 0.05)');
      ctx.strokeStyle = grad2;

      ctx.moveTo(0, h / 2);
      for (let x = 0; x < w; x++) {
        const angle = (x / w) * Math.PI * 2.5 - phase * 0.8;
        const damp = Math.sin((x / w) * Math.PI);
        const y = h / 2 + Math.cos(angle) * (h * 0.25) * damp;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += 0.02;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="mt-8 rounded-[1.8rem] border border-[var(--color-line)] bg-white/40 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            sys_telemetry // port_8080
          </span>
        </div>
        <div className="rounded-md bg-[rgba(158,109,244,0.08)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--color-deep)]">
          signal_active
        </div>
      </div>

      <div className="my-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-[var(--color-line)] bg-white/30 p-2">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">Uptime</p>
          <p className="mt-0.5 text-xs font-bold font-mono text-[var(--color-ink)]">{metrics.uptime}</p>
        </div>
        <div className="rounded-xl border border-[var(--color-line)] bg-white/30 p-2">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">Latency</p>
          <p className="mt-0.5 text-xs font-bold font-mono text-[var(--color-ink)]">{metrics.latency}</p>
        </div>
        <div className="rounded-xl border border-[var(--color-line)] bg-white/30 p-2">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">Ingest Rate</p>
          <p className="mt-0.5 text-xs font-bold font-mono text-[var(--color-ink)]">{metrics.ingestRate}</p>
        </div>
      </div>

      <div className="relative h-10 overflow-hidden rounded-xl border border-[var(--color-line)] bg-[rgba(29,24,48,0.02)]">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="pointer-events-none absolute bottom-1 left-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]/50">
          live_feed_v0.9
        </div>
      </div>
    </div>
  );
}
