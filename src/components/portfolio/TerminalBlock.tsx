'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { terminalSnapshot } from '@/data/portfolio';

export default function TerminalBlock() {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentCodeLine, setCurrentCodeLine] = useState('');
  const [commandLines, setCommandLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<'code' | 'commands' | 'done'>('code');
  const [showCursor, setShowCursor] = useState(true);
  const codeIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const commandIndexRef = useRef(0);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  // Typing effect for code
  useEffect(() => {
    if (phase !== 'code') return;

    const lines = terminalSnapshot.code;
    const interval = setInterval(() => {
      const lineIdx = codeIndexRef.current;
      const charIdx = charIndexRef.current;

      if (lineIdx >= lines.length) {
        setPhase('commands');
        clearInterval(interval);
        return;
      }

      const line = lines[lineIdx];
      if (charIdx <= line.length) {
        setCurrentCodeLine(line.slice(0, charIdx));
        charIndexRef.current++;
      } else {
        setCodeLines((prev) => [...prev, line]);
        setCurrentCodeLine('');
        codeIndexRef.current++;
        charIndexRef.current = 0;
      }
    }, 28);

    return () => clearInterval(interval);
  }, [phase]);

  // Command lines appear one by one
  useEffect(() => {
    if (phase !== 'commands') return;

    const lines = terminalSnapshot.lines;
    const interval = setInterval(() => {
      const idx = commandIndexRef.current;
      if (idx >= lines.length) {
        setPhase('done');
        clearInterval(interval);
        return;
      }
      setCommandLines((prev) => [...prev, lines[idx]]);
      commandIndexRef.current++;
    }, 400);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="terminal-shell rounded-[2.6rem] p-6 text-white sm:p-7 relative overflow-hidden">
      {/* Scan line overlay */}
      <div className="terminal-scanline" />

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
          {terminalSnapshot.title}
        </p>
        <div className="flex items-center gap-2">
          <span className="console-dot bg-[#ff7d66]" />
          <span className="console-dot bg-[#ffd166]" />
          <span className="console-dot bg-[#7ae582]" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {terminalSnapshot.tabs.map((tab, i) => (
          <motion.span
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.35 }}
            className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/80"
          >
            {tab}
          </motion.span>
        ))}
      </div>

      <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-black/15 p-4 font-mono text-sm text-white/82">
        {codeLines.map((line, index) => (
          <p key={`done-${index}`} className="leading-7">{line}</p>
        ))}
        {phase === 'code' && (
          <p className="leading-7">
            {currentCodeLine}
            <span className={`inline-block w-[0.55em] h-[1.1em] -mb-[0.15em] ml-px ${showCursor ? 'bg-[var(--color-signal)]' : 'bg-transparent'}`} />
          </p>
        )}
        {phase !== 'code' && codeLines.length === 0 && (
          terminalSnapshot.code.map((line, index) => (
            <p key={`static-${index}`} className="leading-7">{line}</p>
          ))
        )}
      </div>

      <div className="mt-5 space-y-2 font-mono text-xs text-white/58 sm:text-sm">
        {commandLines.map((line, index) => (
          <motion.p
            key={`cmd-${index}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={line.startsWith('$') ? 'text-white/58' : 'text-[#7ae582]/70'}
          >
            {line}
          </motion.p>
        ))}
        {phase === 'commands' && (
          <p>
            <span className={`inline-block w-[0.55em] h-[1.1em] -mb-[0.15em] ${showCursor ? 'bg-[var(--color-signal)]' : 'bg-transparent'}`} />
          </p>
        )}
        {phase === 'done' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/35"
          >
            <span className={`inline-block w-[0.55em] h-[1.1em] -mb-[0.15em] ${showCursor ? 'bg-white/40' : 'bg-transparent'}`} />
          </motion.p>
        )}
      </div>
    </div>
  );
}
