import React, { useState } from "react";
import { TOOLS_DATA } from "../data/portfolioData";
import { Sliders, Smartphone, Scissors, Activity, Layers, Sparkles } from "lucide-react";

export const Tools: React.FC = () => {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const activeTool = TOOLS_DATA[activeToolIndex];

  const handleTabChange = (idx: number) => {
    if (idx === activeToolIndex) return;
    setFadeState("out");
    setTimeout(() => {
      setActiveToolIndex(idx);
      setFadeState("in");
    }, 120);
  };

  return (
    <section id="tools" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-500">
            <span>[ 05 / SOFTWARE STACK ]</span>
            <span>·</span>
            <span className="text-zinc-300 font-bold uppercase">AUTHENTIC TOOLKIT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            TOOLS I WORK WITH
          </h2>
        </div>

        <p className="font-mono text-xs text-zinc-400 max-w-sm">
          Focused exclusively on mobile-first, high-retention video creation tools.
        </p>
      </div>

      {/* Interactive Tool Studio Display */}
      <div className="border border-zinc-800 bg-[#0c0c10] overflow-hidden">
        {/* Top Tool Selector Tabs */}
        <div className="grid grid-cols-2 border-b border-zinc-800 font-mono text-xs sm:text-sm">
          {TOOLS_DATA.map((tool, idx) => (
            <button
              key={tool.name}
              onClick={() => handleTabChange(idx)}
              className={`py-4 sm:py-5 px-4 sm:px-8 text-left transition-all duration-150 flex items-center justify-between border-r last:border-r-0 border-zinc-800 ${
                activeToolIndex === idx
                  ? "bg-zinc-900 text-white font-bold"
                  : "bg-black/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-zinc-500">0{idx + 1}</span>
                <span className="font-display text-base sm:text-2xl uppercase tracking-wider">{tool.name}</span>
              </div>
              <span className={`w-2 h-2 ${activeToolIndex === idx ? "bg-emerald-400" : "bg-transparent border border-zinc-600"}`} />
            </button>
          ))}
        </div>

        {/* Tool Deep Dive Panel */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Technical breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-1">
                PRIMARY FOCUS & WORKFLOW
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                {activeTool.name}
              </h3>
              <p className="mt-2 text-zinc-300 font-sans text-base sm:text-lg">
                {activeTool.tagline}
              </p>
            </div>

            {/* Checklist of techniques */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <span className="text-zinc-500 uppercase text-[11px] tracking-wider block">
                SPECIALIZED CAPABILITIES:
              </span>
              {activeTool.focus.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 bg-zinc-950 border border-zinc-800/80 text-zinc-200">
                  <span className="text-zinc-500 text-xs">+{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border border-zinc-800 bg-zinc-950/70 font-mono text-xs text-zinc-400">
              <span className="text-zinc-300 font-bold block mb-1">WORKFLOW INTEGRITY:</span>
              <p className="leading-relaxed text-zinc-400">
                {activeTool.workflow}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Simulated Timeline / Audio Deck */}
          <div className="lg:col-span-5 border border-zinc-800 bg-black p-5 font-mono text-xs min-h-[352px] flex flex-col justify-between">
            <div
              className={`flex flex-col justify-between flex-1 space-y-4 transition-opacity duration-200 ${
                fadeState === "out" ? "opacity-0" : "opacity-100"
              }`}
            >
              {activeToolIndex === 0 ? (
                /* TAB 01 - CAPCUT PANEL */
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
                    <span className="flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                      <span>TIMELINE CANVAS</span>
                    </span>
                    <span className="text-emerald-400 text-[11px]">PROJECT: EVENT RECAP</span>
                  </div>

                  {/* CapCut Timeline Tracks: V2, V1, A1 */}
                  <div className="space-y-2 pt-1 min-h-[176px] flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500 flex justify-between">
                        <span>V2 / OVERLAYS</span>
                        <span>TEXT + STICKERS</span>
                      </div>
                      <div className="h-7 bg-zinc-900 border border-zinc-800 flex items-center px-2 gap-1 overflow-hidden mt-0.5">
                        <div className="h-4 bg-zinc-700 w-1/3 flex items-center justify-center text-[9px] text-zinc-200 truncate">TITLE</div>
                        <div className="h-4 bg-zinc-600 w-1/3 flex items-center justify-center text-[9px] text-zinc-200 truncate">LOWER THIRD</div>
                        <div className="h-4 bg-zinc-700 w-1/3 flex items-center justify-center text-[9px] text-zinc-200 truncate">CAPTION</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-zinc-500 flex justify-between">
                        <span>V1 / MAIN FOOTAGE</span>
                        <span>1920x1080 (16:9)</span>
                      </div>
                      <div className="h-7 bg-zinc-900 border border-zinc-800 flex items-center px-2 gap-1 overflow-hidden mt-0.5">
                        <div className="h-4 bg-zinc-700 w-1/4 flex items-center justify-center text-[9px] text-zinc-200 truncate">CLIP 01</div>
                        <div className="h-4 bg-zinc-500 w-1/3 flex items-center justify-center text-[9px] text-black font-bold truncate">KEYFRAME ZOOM</div>
                        <div className="h-4 bg-zinc-800 w-1/6 flex items-center justify-center text-[9px] text-zinc-300 truncate">CUT</div>
                        <div className="h-4 bg-zinc-700 w-1/4 flex items-center justify-center text-[9px] text-zinc-200 truncate">CLIP 02</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-zinc-500 flex justify-between">
                        <span>A1 / AUDIO</span>
                        <span>MUSIC + SFX</span>
                      </div>
                      <div className="h-7 bg-zinc-950 border border-zinc-800 flex items-center px-1.5 gap-0.5 overflow-hidden mt-0.5">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <span
                            key={i}
                            className="w-1 bg-zinc-400"
                            style={{
                              height: `${Math.sin(i * 0.7) * 9 + 12}px`,
                              opacity: i % 4 === 0 ? 1 : 0.4
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Real-time parameters: COLOR GRADE & EXPORT */}
                  <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
                    <div className="bg-zinc-900/50 p-2 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[9px]">COLOR GRADE</span>
                      <span className="text-zinc-200">Filters & Curves</span>
                    </div>
                    <div className="bg-zinc-900/50 p-2 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[9px]">EXPORT</span>
                      <span className="text-zinc-200">1080p · 30 FPS</span>
                    </div>
                  </div>
                </>
              ) : (
                /* TAB 02 - INSTAGRAM EDITS PANEL (Original Panel Preserved) */
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
                    <span className="flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                      <span>TIMELINE CANVAS</span>
                    </span>
                    <span className="text-emerald-400 text-[11px]">ACTIVE RIG</span>
                  </div>

                  {/* Timeline Tracks Simulation */}
                  <div className="space-y-2 pt-1 min-h-[176px] flex flex-col justify-center">
                    <div>
                      <div className="text-[10px] text-zinc-500 flex justify-between">
                        <span>V1 / MAIN REEL</span>
                        <span>1080x1920 (9:16)</span>
                      </div>
                      <div className="h-7 bg-zinc-900 border border-zinc-800 flex items-center px-2 gap-1 overflow-hidden mt-0.5">
                        <div className="h-4 bg-zinc-700 w-1/4 flex items-center justify-center text-[9px] text-zinc-200 truncate">CLIP 01</div>
                        <div className="h-4 bg-zinc-500 w-1/3 flex items-center justify-center text-[9px] text-black font-bold truncate">RAMP VELOCITY</div>
                        <div className="h-4 bg-zinc-700 w-1/4 flex items-center justify-center text-[9px] text-zinc-200 truncate">TRANSITION</div>
                        <div className="h-4 bg-zinc-800 w-1/6 flex items-center justify-center text-[9px] text-zinc-400 truncate">OUTRO</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] text-zinc-500 flex justify-between">
                        <span>A1 / MUSIC TRACK</span>
                        <span>128 BPM TRANSIENTS</span>
                      </div>
                      <div className="h-7 bg-zinc-950 border border-zinc-800 flex items-center px-1.5 gap-0.5 overflow-hidden mt-0.5">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <span
                            key={i}
                            className="w-1 bg-zinc-400"
                            style={{
                              height: `${Math.sin(i * 0.7) * 9 + 12}px`,
                              opacity: i % 4 === 0 ? 1 : 0.4
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Real-time parameters */}
                  <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
                    <div className="bg-zinc-900/50 p-2 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[9px]">SPEED CURVE</span>
                      <span className="text-zinc-200">Custom Bézier</span>
                    </div>
                    <div className="bg-zinc-900/50 p-2 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[9px]">TARGET RETENTION</span>
                      <span className="text-zinc-200">Instant Hook</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
