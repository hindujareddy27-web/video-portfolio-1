import React from "react";
import video1 from "../assets/images/personal_edit_horizontal1.mp4";
import video2 from "../assets/images/personal_edit_horizontal2.mp4";
import video3 from "../assets/images/personal_edit_horizontal3.mp4";
import video4 from "../assets/images/personal_edit_vertical.mp4";
import { VideoItem } from "../data/portfolioData";
import { VideoCard } from "./VideoCard";

interface PersonalProjectsProps {
  onOpenModal: (video: VideoItem) => void;
}

/**
 * Personal Projects Video Section
 * - 4 Personal Videos: 3 Horizontal, 1 Vertical
 * - Top-left card (horizontal): video1
 * - Top-right card (horizontal): video2
 * - Bottom-left large card (horizontal): video3
 * - Bottom-right tall card (vertical): video4
 */
export const PersonalProjects: React.FC<PersonalProjectsProps> = ({ onOpenModal }) => {
  const card1: VideoItem = {
    id: "personal-01",
    src: video1,
    videoSrc: video1,
    orientation: "horizontal",
  };

  const card2: VideoItem = {
    id: "personal-02",
    src: video2,
    videoSrc: video2,
    orientation: "horizontal",
  };

  const card3: VideoItem = {
    id: "personal-03",
    src: video3,
    videoSrc: video3,
    orientation: "horizontal",
  };

  const card4: VideoItem = {
    id: "personal-04",
    src: video4,
    videoSrc: video4,
    orientation: "vertical",
  };

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
          {/* Top-left card (horizontal): video1 */}
          <VideoCard video={card1} onOpenModal={onOpenModal} />
          {/* Top-right card (horizontal): video2 */}
          <VideoCard video={card2} onOpenModal={onOpenModal} />
        </div>

        {/* Row 2: 1 Horizontal Video (16:9) + 1 Vertical Video (9:16) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Bottom-left large card (horizontal): video3 */}
          <div className="md:col-span-8">
            <VideoCard video={card3} onOpenModal={onOpenModal} />
          </div>

          {/* Bottom-right tall card (vertical): video4 */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <VideoCard video={card4} onOpenModal={onOpenModal} />
          </div>
        </div>
      </div>
    </section>
  );
};
