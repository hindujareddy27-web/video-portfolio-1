import React, { useEffect, useState } from "react";
import { ArrowDown, Film, Scissors, Sparkles, Sliders } from "lucide-react";

interface HeroProps {
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [activeFrame, setActiveFrame] = useState(0);

  // Live video editor timecode & frame counter effect (~24 fps)
  useEffect(() => {
    let frame = 0;
    let sec = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
      }
      setActiveFrame(frame);
      const s = String(sec % 60).padStart(2, "0");
      const f = String(frame).padStart(2, "0");
      setTimecode(`00:00:${s}:${f}`);
    }, 41.6);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background digital grid accents & crosshairs */}
      <div className="absolute inset-0 pixel-grid opacity-40 pointer-events-none" />
      <div className="absolute top-28 right-8 font-mono text-zinc-700 text-xs hidden sm:block select-none">
        [ 9:16 VERTICAL CANVASES / CAPCUT / REELS ]
      </div>
      <div className="absolute top-36 left-4 font-mono text-zinc-700 text-xs hidden sm:block select-none">
        + 1080x1920
      </div>

      {/* Top micro status bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-zinc-800/80 pb-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs tracking-wider">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            AVAILABLE FOR CREATIVE PROJECTS
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300 font-medium">
            STUDENT VIDEO EDITOR
          </span>
        </div>

        {/* Live editing timecode badge & Video Editing Portfolio identifier */}
        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
          <span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/90 text-zinc-300 font-semibold text-[11px] hidden sm:inline">
            VIDEO EDITING PORTFOLIO
          </span>
          <span className="text-zinc-600">[REC]</span>
          <span className="text-zinc-200 tabular-nums font-bold tracking-wider">{timecode}</span>
          <span className="text-zinc-500 hidden md:inline">24 FPS</span>
        </div>
      </div>

      {/* Main typographic center */}
      <div className="relative z-10 my-auto py-10 md:py-14">
        {/* Creative Visual Element: Video Timeline Filmstrip & Keyframe Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="text-zinc-500">[ + ]</span>
            <span className="text-white font-bold tracking-widest uppercase">
              VIDEO EDITING PORTFOLIO
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 hidden sm:inline text-[11px]">
              MUSIC · MOVEMENT · RETENTION CUTS
            </span>
          </div>

          {/* Visual Mini Filmstrip / Frame Counter */}
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 bg-zinc-950 px-2.5 py-1 border border-zinc-800/80">
            <Film className="w-3 h-3 text-zinc-400" />
            <span className="hidden sm:inline">FRAME</span>
            <span className="text-zinc-200 font-bold tabular-nums">#{String(activeFrame).padStart(2, "0")}/24</span>
            <span className="text-zinc-700">|</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-none transition-colors duration-75 ${
                    i === Math.floor((activeFrame / 24) * 8)
                      ? "bg-emerald-400"
                      : "bg-zinc-800"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Giant Main Heading */}
        <h1 className="font-display font-extrabold tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] text-white uppercase select-none">
          HINDUJA
          <br />
          <span className="text-zinc-400 hover:text-white transition-colors duration-200">
            REDDY
          </span>
        </h1>

        {/* Role, Supporting Copy, and Creative Timeline Visual Element */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-zinc-800/80 pt-6">
          <div className="lg:col-span-7">
            <h2 className="font-mono font-bold text-lg sm:text-2xl tracking-tight text-white uppercase">
              VIDEO EDITOR
              <br />
              <span className="text-zinc-400">+ CREATIVE EXPERIMENTER</span>
            </h2>

            {/* Short supporting line - conversational, non-corporate */}
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-sans">
              "I like turning music, movement and visuals into edits that keep you watching."
            </p>
          </div>

          {/* Creative Visual Element: Speed-Ramp Velocity Curve & Audio Transients Console */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-4 font-mono text-xs">
            {/* Speed-Ramp Velocity Curve Visualizer */}
            <div className="border border-zinc-800 bg-[#0d0d11] p-3 w-full sm:w-auto min-w-[210px] space-y-2">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800/80 pb-1.5">
                <span className="flex items-center gap-1.5 text-zinc-300 font-bold">
                  <Scissors className="w-3 h-3 text-zinc-400" />
                  VELOCITY RAMP
                </span>
                <span className="text-emerald-400 tabular-nums">0.2x → 4.5x</span>
              </div>

              {/* Bézier velocity curve SVG */}
              <div className="relative h-9 w-full bg-black/60 border border-zinc-800/80 flex items-center px-2 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 160 36" fill="none" preserveAspectRatio="none">
                  {/* Subtle grid lines */}
                  <line x1="0" y1="18" x2="160" y2="18" stroke="#27272a" strokeDasharray="2 2" strokeWidth="0.8" />
                  {/* Speed ramp curve */}
                  <path
                    d="M 0,26 C 30,26 45,6 70,6 C 95,6 110,30 135,30 L 160,20"
                    stroke="#e4e4e7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Keyframe diamonds */}
                  <circle cx="0" cy="26" r="2.5" fill="#10b981" />
                  <circle cx="70" cy="6" r="2.5" fill="#ffffff" />
                  <circle cx="135" cy="30" r="2.5" fill="#ffffff" />
                  <circle cx="160" cy="20" r="2.5" fill="#10b981" />
                </svg>

                {/* Keyframe diamond indicators */}
                <div className="absolute bottom-1 right-2 text-[8px] text-zinc-500 font-mono">
                  KEYFRAMED ◆
                </div>
              </div>

              <div className="flex justify-between text-[9px] text-zinc-500">
                <span>BEAT DROP</span>
                <span className="text-zinc-400 font-semibold">CAPCUT SPEED CURVE</span>
              </div>
            </div>

            {/* Audio frequency transient equalizer bars */}
            <div className="border border-zinc-800 bg-[#0d0d11] p-3 w-full sm:w-auto min-w-[120px] space-y-2">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-300 font-bold">TRANSIENTS</span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              </div>

              <div className="flex items-end justify-between h-9 px-1 bg-black/60 border border-zinc-800/80">
                <span className="w-1 bg-zinc-300 animate-[pulse_1.1s_ease-in-out_infinite] h-5" />
                <span className="w-1 bg-zinc-100 animate-[pulse_0.7s_ease-in-out_infinite] h-8" />
                <span className="w-1 bg-zinc-400 animate-[pulse_1.4s_ease-in-out_infinite] h-3" />
                <span className="w-1 bg-zinc-200 animate-[pulse_0.9s_ease-in-out_infinite] h-7" />
                <span className="w-1 bg-zinc-400 animate-[pulse_1.3s_ease-in-out_infinite] h-4" />
                <span className="w-1 bg-zinc-100 animate-[pulse_0.8s_ease-in-out_infinite] h-8" />
                <span className="w-1 bg-zinc-300 animate-[pulse_1.2s_ease-in-out_infinite] h-5" />
              </div>

              <div className="text-[9px] text-zinc-500 text-center">
                128 BPM AUDIO SYNC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with scroll indicator and category taxonomy */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="text-zinc-300 font-semibold">VIDEO EDITING PORTFOLIO</span>
          <span>·</span>
          <span>EVENT EDITS</span>
          <span>·</span>
          <span>SOCIAL REELS</span>
          <span>·</span>
          <span>CREATIVE EXPERIMENTS</span>
        </div>

        <a
          href="#work"
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group shrink-0"
        >
          <span className="tracking-wider">SCROLL TO WATCH</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
