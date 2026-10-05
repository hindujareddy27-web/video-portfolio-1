import React, { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { VideoItem } from "../data/portfolioData";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

/**
 * Fullscreen Cinema Video Modal
 * - Pure HTML5 <video> player using video.videoSrc directly
 * - Naturally respects orientation ("vertical" 9:16 vs "horizontal" 16:9)
 * - Complete video playback controls: play/pause, scrub, volume, fullscreen
 * - No image fallbacks or text clutter
 */
export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState("00:00:00:00");

  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setProgress((cur / dur) * 100);

      const m = Math.floor(cur / 60);
      const s = Math.floor(cur % 60);
      const f = Math.floor((cur % 1) * 24);
      setCurrentTimeFormatted(`00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    setProgress(seekTo);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (seekTo / 100) * videoRef.current.duration;
    }
  };

  const isVertical = video.orientation === "vertical";
  const videoSource = video.src || video.videoSrc || "";
  const resolvedSrc = videoSource
    ? videoSource.startsWith("/") || videoSource.startsWith("http")
      ? videoSource
      : `/videos/${videoSource}`
    : undefined;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-150"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Cinema Modal Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center">
        {/* Top Close Button Bar */}
        <div className="w-full flex justify-end pb-3">
          <button
            onClick={onClose}
            className="p-2 bg-zinc-900/90 hover:bg-white text-zinc-400 hover:text-black border border-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame with Natural Aspect Ratio */}
        <div
          className={`relative w-full bg-black border border-zinc-800 overflow-hidden flex items-center justify-center ${
            isVertical ? "max-w-[380px] aspect-[9/16] max-h-[85vh]" : "max-w-4xl aspect-video max-h-[85vh]"
          }`}
        >
          <video
            ref={videoRef}
            src={resolvedSrc}
            autoPlay
            playsInline
            muted={isMuted}
            loop
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-contain"
          />

          {/* Minimal Bottom Control Bar */}
          <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between font-mono text-xs text-zinc-300">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-1.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-white transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-1.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-[11px] tabular-nums text-zinc-400 hidden sm:inline">
                {currentTimeFormatted}
              </span>
            </div>

            <div className="flex-1 mx-4 max-w-sm">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-zinc-800 accent-white cursor-pointer"
              />
            </div>

            <button
              onClick={() => {
                if (videoRef.current) {
                  if (document.fullscreenElement) {
                    document.exitFullscreen().catch(() => {});
                  } else {
                    videoRef.current.requestFullscreen().catch(() => {});
                  }
                }
              }}
              className="p-1.5 hover:text-white text-zinc-400 transition-colors"
              title="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
