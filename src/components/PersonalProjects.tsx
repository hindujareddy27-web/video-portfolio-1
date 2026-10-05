import React from "react";
import { personalVideos, VideoItem } from "../data/portfolioData";
import { VideoCard } from "./VideoCard";

interface PersonalProjectsProps {
  onOpenModal: (video: VideoItem) => void;
}

/**
 * Personal Projects Video Section
 * - 4 Personal Videos: 3 Horizontal, 1 Vertical
 * - Renders proper HTML5 VideoCard components
 * - Clean layout: Row 1 has 2 horizontal videos; Row 2 has 1 horizontal + 1 vertical
 * - Zero project names, numbers, or extraneous metadata
 */
export const PersonalProjects: React.FC<PersonalProjectsProps> = ({ onOpenModal }) => {
  const horizontalVideos = personalVideos.filter((v) => v.orientation === "horizontal");
  const verticalVideos = personalVideos.filter((v) => v.orientation === "vertical");

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
          PERSONAL PROJECTS
        </h2>
        <span className="font-mono text-xs text-zinc-400 block mt-2 uppercase tracking-wider">
          CREATIVE EXPERIMENTS
        </span>
      </div>

      {/* 4 Personal Videos: 3 Horizontal + 1 Vertical */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: 2 Horizontal Videos (16:9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {horizontalVideos.slice(0, 2).map((video) => (
            <VideoCard key={video.id} video={video} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* Row 2: 1 Horizontal Video (16:9) + 1 Vertical Video (9:16) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {horizontalVideos[2] && (
            <div className="md:col-span-8">
              <VideoCard video={horizontalVideos[2]} onOpenModal={onOpenModal} />
            </div>
          )}
          {verticalVideos[0] && (
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <VideoCard video={verticalVideos[0]} onOpenModal={onOpenModal} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
