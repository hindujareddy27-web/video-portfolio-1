import React from "react";
import { eventVideos, VideoItem } from "../data/portfolioData";
import { VideoCard } from "./VideoCard";

interface EventEditsProps {
  onOpenModal: (video: VideoItem) => void;
}

/**
 * Event Edits Video Section
 * - 4 Event Videos: 2 Horizontal, 2 Vertical
 * - The first video (featured: true) is rendered in large widescreen layout
 * - Remaining 3 videos rendered below in responsive editorial grid
 * - No labels, numbers, metadata, or "FEATURED PROJECT" text
 */
export const EventEdits: React.FC<EventEditsProps> = ({ onOpenModal }) => {
  const mainVideo = eventVideos.find((v) => v.featured) || eventVideos[0];
  const gridVideos = eventVideos.filter((v) => v.id !== mainVideo.id);

  return (
    <section id="work" className="pt-20 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.9]">
          EVENT
          <br />
          EDITS
        </h2>
        <span className="font-mono text-xs text-zinc-400 block mt-2 uppercase tracking-wider">
          CLUB & SOCIAL CONTENT
        </span>
      </div>

      {/* Main / First Large Event Video */}
      {mainVideo && (
        <div className="mb-8">
          <VideoCard
            video={mainVideo}
            onOpenModal={onOpenModal}
            className="w-full shadow-2xl"
          />
        </div>
      )}

      {/* Remaining Event Videos: 1 Horizontal, 2 Vertical */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {gridVideos.map((video) => {
          const isHorizontal = video.orientation === "horizontal";
          return (
            <div
              key={video.id}
              className={isHorizontal ? "md:col-span-6" : "md:col-span-3"}
            >
              <VideoCard video={video} onOpenModal={onOpenModal} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
