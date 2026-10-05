import React from "react";
import { EDITING_APPROACH } from "../data/portfolioData";
import { Headphones, Zap, Compass } from "lucide-react";

export const EditingApproach: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Headphones className="w-5 h-5 text-zinc-300" />;
      case 1:
        return <Zap className="w-5 h-5 text-zinc-300" />;
      case 2:
        return <Compass className="w-5 h-5 text-zinc-300" />;
      default:
        return null;
    }
  };

  return (
    <section id="approach" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-500">
            <span>[ 04 / METHODOLOGY ]</span>
            <span>·</span>
            <span className="text-zinc-300 font-bold uppercase">PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            HOW I EDIT
          </h2>
        </div>

        <p className="font-mono text-xs text-zinc-400 max-w-xs">
          Built around rhythm, velocity curves, and viewer retention rather than decorative filler.
        </p>
      </div>

      {/* Three Neo-Brutalist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {EDITING_APPROACH.map((step, idx) => (
          <div
            key={step.number}
            className="border border-zinc-800 bg-[#0c0c10] p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-500 transition-all duration-200 group relative"
          >
            {/* Top row: Number & Icon */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80 font-mono">
                <span className="text-3xl sm:text-4xl font-extrabold text-zinc-600 group-hover:text-zinc-200 transition-colors">
                  {step.number}
                </span>
                <div className="p-2 border border-zinc-800 bg-zinc-900/80 group-hover:border-zinc-600 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                {step.title}
              </h3>

              {/* Exact Quote from brief */}
              <blockquote className="mt-4 text-zinc-200 text-sm sm:text-base leading-relaxed font-sans border-l border-zinc-700 pl-3">
                "{step.quote.replace(/^"|"$/g, '')}"
              </blockquote>
            </div>

            {/* Bottom detail note */}
            <div className="mt-8 pt-4 border-t border-zinc-900 font-mono text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
              {step.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
