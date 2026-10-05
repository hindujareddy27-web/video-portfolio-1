import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { VideoItem } from "../data/portfolioData";

export interface VideoCardProps {
  video: VideoItem;
  onOpenModal?: (video: VideoItem) => void;
  className?: string;
  autoplayOnHover?: boolean;
}

/**
 * Reusable HTML5 VideoCard Component
 * - Pure HTML5 <video> implementation (not image-based)
 * - Supports horizontal (16:9 landscape) and vertical (9:16 portrait) orientations
 * - Supports featured (large showcase) or standard grid layouts
 * - Interactive playback, scrub bar, audio toggle, and lightbox expand
 * - Minimal, clean, editorial UI with zero unwanted text or project numbers
 */
export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onOpenModal,
  className = "",
  autoplayOnHover = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const isVertical = video.orientation === "vertical";
  const isFeatured = Boolean(video.featured);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const seekTo = parseFloat(e.target.value);
    setProgress(seekTo);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (seekTo / 100) * videoRef.current.duration;
    }
  };

  const videoSource = video.src || video.videoSrc || "";
  const resolvedSrc = videoSource
    ? videoSource.startsWith("/") || videoSource.startsWith("http")
      ? videoSource
      : `/videos/${videoSource}`
    : undefined;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoplayOnHover && !isPlaying && videoRef.current && resolvedSrc) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (autoplayOnHover && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Determine container aspect ratio based on natural orientation and featured state
  const containerAspectClass = isFeatured
    ? "aspect-video w-full"
    : isVertical
    ? "aspect-[9/16] max-w-[340px] mx-auto w-full"
    : "aspect-video w-full";

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal?.(video)}
      className={`group relative bg-black border border-zinc-800 hover:border-zinc-500 transition-all duration-200 overflow-hidden cursor-pointer ${containerAspectClass} ${className}`}
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={resolvedSrc}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Subtle scanline texture overlay */}
      <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none" />

      {/* Standby screen when video source is not yet active */}
      {!resolvedSrc && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 text-zinc-600 font-mono text-xs select-none pointer-events-none p-4 text-center">
          <div className="w-8 h-8 border border-zinc-800 flex items-center justify-center mb-2">
            <span className="w-1.5 h-1.5 bg-zinc-700 animate-ping" />
          </div>
          <span className="tracking-widest text-[11px] text-zinc-500">
            {isVertical ? "VERTICAL // 9:16" : "HORIZONTAL // 16:9"}
          </span>
        </div>
      )}

      {/* Center Play Button Overlay */}
      <div
        className={`absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity duration-150 ${
          isPlaying && !isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <button
          onClick={togglePlay}
          className={`${
            isFeatured ? "w-16 h-16 sm:w-20 sm:h-20" : "w-12 h-12"
          } bg-zinc-950/80 group-hover:bg-white text-white group-hover:text-zinc-950 border border-zinc-700 group-hover:border-white flex items-center justify-center transition-all duration-150 group-hover:scale-105 shadow-2xl backdrop-blur-sm`}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className={isFeatured ? "w-6 h-6 sm:w-8 sm:h-8" : "w-5 h-5"} />
          ) : (
            <Play className={`${isFeatured ? "w-6 h-6 sm:w-8 sm:h-8" : "w-5 h-5"} fill-current ml-0.5`} />
          )}
        </button>
      </div>

      {/* Top Controls: Lightbox expand button */}
      {onOpenModal && (
        <div className="absolute top-3 right-3 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(video);
            }}
            className="p-1.5 bg-black/70 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 transition-colors"
            title="Expand to Fullscreen Lightbox"
            aria-label="Expand to Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Bottom Minimal Interactive Controls Strip */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between z-20 font-mono text-xs text-zinc-300 transition-opacity duration-200 ${
          isHovered || isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-1 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-white transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-1 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-white transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
        </div>

        {/* Scrub slider */}
        <div className="flex-1 mx-3">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-zinc-800 accent-white cursor-pointer"
          />
        </div>

        {/* Subtle aspect indicator */}
        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider hidden sm:inline">
          {isVertical ? "9:16" : "16:9"}
        </span>
      </div>
    </div>
  );
};
