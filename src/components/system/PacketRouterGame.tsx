'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw, ShieldAlert, Cpu } from 'lucide-react';

interface Packet {
  x: number;
  y: number;
  type: 'db' | 'cache' | 'api';
  progress: number; // 0 to 1
  chosenBranch?: 'left' | 'right';
  chosenTerminal?: number; // 0 = db, 1 = cache, 2 = api
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  life: number;
}

export default function PacketRouterGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [latency, setLatency] = useState(0); // Represents ms latency (0 to 100 max)
  const [gameOver, setGameOver] = useState(false);

  // Router gate directions: true = go left/outer, false = go right/inner
  const [gateCenter, setGateCenter] = useState(true);
  const [gateLeft, setGateLeft] = useState(true);
  const [gateRight, setGateRight] = useState(false);

  // References for the game loop
  const packetsRef = useRef<Packet[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const spawnTimer = useRef<number>(0);
  const scoreRef = useRef(0);
  const latencyRef = useRef(0);
  
  // Gate refs to avoid React state lag in high-speed render loop
  const gateCenterRef = useRef(true);
  const gateLeftRef = useRef(true);
  const gateRightRef = useRef(false);

  // Sync state values with refs
  useEffect(() => {
    gateCenterRef.current = gateCenter;
  }, [gateCenter]);

  useEffect(() => {
    gateLeftRef.current = gateLeft;
  }, [gateLeft]);

  useEffect(() => {
    gateRightRef.current = gateRight;
  }, [gateRight]);

  const startGame = () => {
    setScore(0);
    scoreRef.current = 0;
    setLatency(0);
    latencyRef.current = 0;
    setGameOver(false);
    setIsPlaying(true);
    packetsRef.current = [];
    particlesRef.current = [];
    spawnTimer.current = 0;
  };

  const createExplosion = (x: number, y: number, color: string) => {
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 3;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        alpha: 1,
        life: 30 + Math.random() * 20,
      });
    }
  };

  // Main game loop
  useEffect(() => {
    if (!isPlaying || gameOver) {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = 600;
    const canvasHeight = 400;

    // Node locations
    const topNode = { x: 300, y: 30 };
    const middleSplit = { x: 300, y: 130 };
    const leftNode = { x: 180, y: 220 };
    const rightNode = { x: 420, y: 220 };

    const terminals = [
      { x: 100, y: 340, type: 'db', label: 'DATABASE', color: '#62d0ff' }, // Terminal 0
      { x: 300, y: 340, type: 'cache', label: 'CACHE', color: '#9e6df4' }, // Terminal 1
      { x: 500, y: 340, type: 'api', label: 'API NODE', color: '#56cf8e' }, // Terminal 2
    ];

    const drawTerminals = () => {
      terminals.forEach((term) => {
        ctx.strokeStyle = term.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(term.x - 45, term.y - 20, 90, 45);
        ctx.fillStyle = `${term.color}15`;
        ctx.fillRect(term.x - 45, term.y - 20, 90, 45);

        ctx.fillStyle = term.color;
        ctx.beginPath();
        ctx.arc(term.x - 30, term.y + 2, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 9px sans-serif';
        ctx.fillStyle = '#1d1830';
        ctx.fillText(term.label, term.x - 16, term.y + 5);
        ctx.font = '8px monospace';
        ctx.fillStyle = '#655d7d';
        ctx.fillText(term.type.toUpperCase(), term.x - 16, term.y + 16);
      });
    };

    const drawPipelines = () => {
      ctx.strokeStyle = 'rgba(29, 24, 48, 0.12)';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // 1. Ingest trunk line
      ctx.beginPath();
      ctx.moveTo(topNode.x, topNode.y);
      ctx.lineTo(middleSplit.x, middleSplit.y);
      ctx.stroke();

      // 2. Branch Left
      ctx.beginPath();
      ctx.moveTo(middleSplit.x, middleSplit.y);
      ctx.lineTo(leftNode.x, leftNode.y);
      ctx.stroke();

      // 3. Branch Right
      ctx.beginPath();
      ctx.moveTo(middleSplit.x, middleSplit.y);
      ctx.lineTo(rightNode.x, rightNode.y);
      ctx.stroke();

      // 4. Sub-branches Left
      ctx.beginPath();
      ctx.moveTo(leftNode.x, leftNode.y);
      ctx.lineTo(terminals[0].x, terminals[0].y - 20);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(leftNode.x, leftNode.y);
      ctx.lineTo(terminals[1].x - 20, terminals[1].y - 20);
      ctx.stroke();

      // 5. Sub-branches Right
      ctx.beginPath();
      ctx.moveTo(rightNode.x, rightNode.y);
      ctx.lineTo(terminals[1].x + 20, terminals[1].y - 20);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(rightNode.x, rightNode.y);
      ctx.lineTo(terminals[2].x, terminals[2].y - 20);
      ctx.stroke();

      // Draw Gate Nodes
      // 1. Center Gate (at middleSplit)
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#9e6df4';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(middleSplit.x, middleSplit.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 2. Left Gate (at leftNode)
      ctx.strokeStyle = '#62d0ff';
      ctx.beginPath();
      ctx.arc(leftNode.x, leftNode.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 3. Right Gate (at rightNode)
      ctx.strokeStyle = '#56cf8e';
      ctx.beginPath();
      ctx.arc(rightNode.x, rightNode.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Switch Gate directions text/indicators
      ctx.fillStyle = '#1d1830';
      ctx.font = 'bold 12px sans-serif';
      
      // Center Gate Text
      ctx.fillText(gateCenterRef.current ? '←' : '→', middleSplit.x - 5, middleSplit.y + 4);
      // Left Gate Text
      ctx.fillText(gateLeftRef.current ? '←' : '→', leftNode.x - 5, leftNode.y + 4);
      // Right Gate Text
      ctx.fillText(gateRightRef.current ? '←' : '→', rightNode.x - 5, rightNode.y + 4);
    };
    const updatePackets = () => {
      const packets = packetsRef.current;

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += 0.005; // Playable speed

        if (p.progress >= 1.0) {
          let matched = false;
          if (p.chosenTerminal === 0 && p.type === 'db') matched = true;
          if (p.chosenTerminal === 1 && p.type === 'cache') matched = true;
          if (p.chosenTerminal === 2 && p.type === 'api') matched = true;

          const color = p.type === 'db' ? '#62d0ff' : p.type === 'cache' ? '#9e6df4' : '#56cf8e';

          if (matched) {
            scoreRef.current += 10;
            setScore(scoreRef.current);
            createExplosion(p.x, p.y, color);
          } else {
            latencyRef.current = Math.min(100, latencyRef.current + 10);
            setLatency(latencyRef.current);
            createExplosion(p.x, p.y, '#ef4444');
            if (latencyRef.current >= 100) {
              setGameOver(true);
            }
          }

          packets.splice(i, 1);
          continue;
        }

        // Segment 1: Ingest node to middle split (0 to 0.4 progress)
        if (p.progress < 0.4) {
          const t = p.progress / 0.4;
          p.x = topNode.x + (middleSplit.x - topNode.x) * t;
          p.y = topNode.y + (middleSplit.y - topNode.y) * t;
        } 
        // Segment 2: middle split to leftNode/rightNode (0.4 to 0.7 progress)
        else if (p.progress < 0.7) {
          if (!p.chosenBranch) {
            p.chosenBranch = gateCenterRef.current ? 'left' : 'right';
          }
          const t = (p.progress - 0.4) / 0.3;
          const targetNode = p.chosenBranch === 'left' ? leftNode : rightNode;
          p.x = middleSplit.x + (targetNode.x - middleSplit.x) * t;
          p.y = middleSplit.y + (targetNode.y - middleSplit.y) * t;
        } 
        // Segment 3: leftNode/rightNode to bucket terminal (0.7 to 1.0 progress)
        else {
          if (p.chosenTerminal === undefined) {
            if (p.chosenBranch === 'left') {
              p.chosenTerminal = gateLeftRef.current ? 0 : 1;
            } else {
              p.chosenTerminal = gateRightRef.current ? 1 : 2;
            }
          }
          const t = (p.progress - 0.7) / 0.3;
          const branchStart = p.chosenBranch === 'left' ? leftNode : rightNode;
          
          let finalX = terminals[0].x;
          if (p.chosenTerminal === 0) {
            finalX = terminals[0].x;
          } else if (p.chosenTerminal === 1) {
            finalX = p.chosenBranch === 'left' ? terminals[1].x - 20 : terminals[1].x + 20;
          } else {
            finalX = terminals[2].x;
          }

          p.x = branchStart.x + (finalX - branchStart.x) * t;
          p.y = branchStart.y + ((terminals[0].y - 20) - branchStart.y) * t;
        }

        // Draw individual packet
        const color = p.type === 'db' ? '#62d0ff' : p.type === 'cache' ? '#9e6df4' : '#56cf8e';
        ctx.shadowBlur = 12;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life--;
        pt.alpha = pt.life / 50;

        if (pt.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.alpha;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    };

    const updateGame = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Grid background
      ctx.strokeStyle = 'rgba(29, 24, 48, 0.035)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvasWidth; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasHeight);
        ctx.stroke();
      }
      for (let j = 0; j < canvasHeight; j += 20) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvasWidth, j);
        ctx.stroke();
      }

      drawPipelines();
      drawTerminals();
      updatePackets();
      updateParticles();

      // Ingest packet generator
      spawnTimer.current++;
      const spawnInterval = Math.max(90, 160 - Math.floor(scoreRef.current / 4)); // Gradually speed up spawn rate
      if (spawnTimer.current >= spawnInterval) {
        spawnTimer.current = 0;
        const types: ('db' | 'cache' | 'api')[] = ['db', 'cache', 'api'];
        const randomType = types[Math.floor(Math.random() * types.length)];

        packetsRef.current.push({
          x: topNode.x,
          y: topNode.y,
          type: randomType,
          progress: 0,
        });
      }

      animationFrameId.current = requestAnimationFrame(updateGame);
    };

    updateGame();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPlaying, gameOver]);

  // Click handler to toggle routing gates
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlaying || gameOver) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // 1. Center Gate (at 300, 130)
    const distCenter = Math.hypot(x - 300, y - 130);
    if (distCenter < 18) {
      setGateCenter(!gateCenter);
    }

    // 2. Left Gate (at 180, 220)
    const distLeft = Math.hypot(x - 180, y - 220);
    if (distLeft < 18) {
      setGateLeft(!gateLeft);
    }

    // 3. Right Gate (at 420, 220)
    const distRight = Math.hypot(x - 420, y - 220);
    if (distRight < 18) {
      setGateRight(!gateRight);
    }
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  useEffect(() => {
    if (gameOver) {
      setIsPlaying(false);
    }
  }, [gameOver]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="system-panel rounded-[2rem] border border-[var(--color-line)] bg-white/70 p-6 shadow-xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-[var(--color-signal)]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-signal)]">
                Local Telemetry Sandbox
              </p>
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
              Kernel Packet Router
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              Click on the circle nodes (<span className="font-semibold text-[var(--color-signal)]">Center</span>, <span className="font-semibold text-[#62d0ff]">Left</span>, or <span className="font-semibold text-[#56cf8e]">Right</span>) to toggle their routing direction!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-full border border-[var(--color-line)] bg-white/90 px-4 py-2 text-xs font-bold">
              THROUGHPUT: <span className="font-mono text-[var(--color-signal)] text-sm">{score}</span>
            </div>
            <div className="rounded-full border border-[var(--color-line)] bg-white/90 px-4 py-2 text-xs font-bold">
              HIGH SCORE: <span className="font-mono text-sm">{highScore}</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8ff_100%)] p-2">
          {!isPlaying && !gameOver ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[1.5rem] bg-white/80 p-6 text-center backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-signal)]">
                diagnostics engine
              </p>
              <h4 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">
                Load Balancer Ingest
              </h4>
              <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                A simple packets pipeline test simulation. Change router states dynamically to match database, cache, and service requests.
              </p>
              <button
                onClick={startGame}
                className="mt-6 flex items-center gap-2 rounded-full bg-[var(--color-night)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <Play className="h-4 w-4 fill-[var(--color-surface)]" />
                Initialize Sandbox
              </button>
            </div>
          ) : null}

          {gameOver ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[1.5rem] bg-white/90 p-6 text-center backdrop-blur-sm">
              <ShieldAlert className="h-12 w-12 text-red-500" />
              <h4 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">
                Router Pipeline Overflowed
              </h4>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Latency reached critical limit (100ms) due to packet mismatch errors.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="text-sm text-[var(--color-muted)]">
                  Total Throughput: <strong className="font-mono text-base text-[var(--color-ink)]">{score}</strong>
                </div>
              </div>
              <button
                onClick={startGame}
                className="mt-6 flex items-center gap-2 rounded-full bg-[var(--color-night)] px-6 py-3 text-sm font-semibold text-[var(--color-surface)] shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <RotateCcw className="h-4 w-4" />
                Restart Router
              </button>
            </div>
          ) : null}

          {isPlaying && (
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-white/95 px-4 py-2 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <div className="text-xs font-semibold text-[var(--color-muted)]">
                NETWORK LATENCY:{' '}
                <span className="font-mono font-bold text-red-500">{latency}ms</span>
              </div>
              <div className="h-1.5 w-20 rounded-full bg-[var(--color-line)] overflow-hidden">
                <div
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${latency}%` }}
                />
              </div>
            </div>
          )}

          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            onClick={handleCanvasClick}
            className="block max-w-full rounded-[1.3rem]"
            style={{ cursor: isPlaying ? 'pointer' : 'default' }}
          />
        </div>

        {/* Legend / Info bar */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-xl border border-[var(--color-line)] bg-white/40 px-3 py-2.5">
            <span className="inline-block h-2 w-2 rounded-full bg-[#62d0ff] mr-1.5" />
            <strong className="text-[var(--color-ink)]">Database request</strong>: route Left
          </div>
          <div className="rounded-xl border border-[var(--color-line)] bg-white/40 px-3 py-2.5">
            <span className="inline-block h-2 w-2 rounded-full bg-[#9e6df4] mr-1.5" />
            <strong className="text-[var(--color-ink)]">Cache request</strong>: route Center
          </div>
          <div className="rounded-xl border border-[var(--color-line)] bg-white/40 px-3 py-2.5">
            <span className="inline-block h-2 w-2 rounded-full bg-[#56cf8e] mr-1.5" />
            <strong className="text-[var(--color-ink)]">API request</strong>: route Right
          </div>
        </div>
      </div>
    </section>
  );
}
