'use client';

export default function SystemSpecsWidget() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#282a36] shadow-2xl font-mono text-[11px] leading-5 text-[#f8f8f2]">
      {/* macOS Terminal Title Bar */}
      <div className="flex items-center justify-between bg-[#191a21] px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5555]" />
          <span className="h-3 w-3 rounded-full bg-[#f1fa8c]" />
          <span className="h-3 w-3 rounded-full bg-[#50fa7b]" />
        </div>
        <span className="text-[10px] text-[#6272a4] font-semibold">zsh — aryamehta@kernelspace</span>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-4">
        <div>
          <span className="text-[#50fa7b]">aryamehta@kernelspace</span> <span className="text-[#ff79c6]">~</span> <span className="text-[#6272a4]">$</span> neofetch --builder-setup
        </div>
        <div className="mt-2 grid grid-cols-[80px_1fr] gap-x-2">
          <span className="text-[#8be9fd] font-bold">OS:</span>
          <span>macOS Sequoia 15.4</span>

          <span className="text-[#8be9fd] font-bold">Host:</span>
          <span>MacBook Air 13&quot; (Apple Silicon M4)</span>

          <span className="text-[#8be9fd] font-bold">Shell:</span>
          <span>zsh 5.9</span>

          <span className="text-[#8be9fd] font-bold">IDE:</span>
          <span className="text-[#ff79c6]">Antigravity IDE <span className="text-[#6272a4]">(v4.6-Thinking)</span></span>

          <span className="text-[#8be9fd] font-bold">Theme:</span>
          <span className="text-[#bd93f9]">Dracula Dark</span>

          <span className="text-[#8be9fd] font-bold">Cursor:</span>
          <span className="text-[#50fa7b]">Active Glow Tracker (glowing: true)</span>
        </div>

        <div className="mt-4">
          <span className="text-[#50fa7b]">aryamehta@kernelspace</span> <span className="text-[#ff79c6]">~</span> <span className="text-[#6272a4]">$</span> cat preferences.json
        </div>
        <div className="mt-1 text-[#6272a4]">
          {"{"}
          <div className="pl-4">
            <span className="text-[#ff79c6]">&quot;mode&quot;</span>: <span className="text-[#f1fa8c]">&quot;system-architect&quot;</span>,
          </div>
          <div className="pl-4">
            <span className="text-[#ff79c6]">&quot;specialization&quot;</span>: <span className="text-[#f1fa8c]">&quot;high-throughput-data&quot;</span>,
          </div>
          <div className="pl-4">
            <span className="text-[#ff79c6]">&quot;compilation&quot;</span>: <span className="text-[#f1fa8c]">&quot;antigravity-accelerated&quot;</span>
          </div>
          {"}"}
        </div>
      </div>
    </div>
  );
}
