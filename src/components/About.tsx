import React from "react";
import { ArrowUpRight } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900 relative">
      {/* Editorial section header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-zinc-500 tracking-widest">[ 01 / PROFILE ]</span>
        <div className="h-[1px] flex-1 bg-zinc-800/80" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column: Oversized heading & meta */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[0.95] uppercase">
            A LITTLE
            <br />
            ABOUT ME
          </h2>

          <div className="p-5 border border-zinc-800 bg-[#0d0d10] space-y-4">
            <div className="font-mono text-xs text-zinc-400 space-y-2">
              <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                <span className="text-zinc-500">CREATOR</span>
                <span className="text-zinc-200">Hinduja Reddy</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                <span className="text-zinc-500">CURRENT FOCUS</span>
                <span className="text-zinc-200">Event & Social Edits</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                <span className="text-zinc-500">PRIMARY TOOLS</span>
                <span className="text-zinc-200">CapCut / Instagram Edits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">FORMAT</span>
                <span className="text-zinc-200">9:16 Vertical & Social First</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Send a brief or event footage</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: Authentic narrative prose */}
        <div className="lg:col-span-7 space-y-6 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
          <p className="text-white font-medium text-xl sm:text-2xl leading-snug">
            "I'm Hinduja, a student and video editor who enjoys figuring out how visuals, music and timing work together."
          </p>

          <p>
            When I'm editing event content, I usually start with the music. I want the edit to stay interesting even after watching it more than once, so I build the pacing, transitions and visual changes around the rhythm and energy of the track.
          </p>

          <p>
            Outside event edits, I like experimenting. My personal work is where I try different styles, visual ideas, animation and editing techniques without being restricted to one format.
          </p>

          {/* Core values block */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800/80 font-mono text-xs text-zinc-400">
            <div className="border border-zinc-800 p-3 bg-zinc-900/40">
              <span className="text-zinc-500 block mb-1">01 / RHYTHM</span>
              <span className="text-zinc-200 font-bold">MUSIC FIRST</span>
            </div>
            <div className="border border-zinc-800 p-3 bg-zinc-900/40">
              <span className="text-zinc-500 block mb-1">02 / VELOCITY</span>
              <span className="text-zinc-200 font-bold">ATTENTION TO PACING</span>
            </div>
            <div className="border border-zinc-800 p-3 bg-zinc-900/40">
              <span className="text-zinc-500 block mb-1">03 / FORMAT</span>
              <span className="text-zinc-200 font-bold">NATIVE 9:16 MOBILE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
