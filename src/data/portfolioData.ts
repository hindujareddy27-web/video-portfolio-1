import eventVideo1 from "../assets/images/event_01_horizontal.mp4";
import video1 from "../assets/images/personal_edit_horizontal1.mp4";
import video2 from "../assets/images/personal_edit_horizontal2.mp4";
import video3 from "../assets/images/personal_edit_horizontal3.mp4";
import video4 from "../assets/images/personal_edit_vertical.mp4";

/**
 * Portfolio Data Configuration for Hinduja Reddy — Video Editor
 * 
 * MEDIA ARCHITECTURE:
 * - Proper HTML5 VIDEO-based architecture.
 * - 'src' properties point to the exact actual video files.
 * - Natural aspect ratios supported via orientation: "horizontal" | "vertical".
 */

export interface VideoItem {
  id: string;
  src: string;
  videoSrc?: string;
  orientation: "horizontal" | "vertical";
  featured?: boolean;
}

// ==============================================================
// 1. EVENT EDITS — 4 VIDEOS
// 2 horizontal, 2 vertical
// eventVideo1 is the first/large event video (featured: true)
// ==============================================================
export const eventVideos: VideoItem[] = [
  {
    id: "event-01",
    src: eventVideo1,
    videoSrc: eventVideo1,
    orientation: "horizontal",
    featured: true,
  },
  {
    id: "event-02",
    src: "/videos/event_02_horizontal.mp4",
    videoSrc: "/videos/event_02_horizontal.mp4",
    orientation: "horizontal",
    featured: false,
  },
  {
    id: "event-03",
    src: "/videos/event_03_vertical.mp4",
    videoSrc: "/videos/event_03_vertical.mp4",
    orientation: "vertical",
    featured: false,
  },
  {
    id: "event-04",
    src: "/videos/event_04_vertical.mp4",
    videoSrc: "/videos/event_04_vertical.mp4",
    orientation: "vertical",
    featured: false,
  },
];

// ==============================================================
// 2. PERSONAL PROJECTS — 4 VIDEOS
// 3 horizontal, 1 vertical
// ==============================================================
export const personalVideos: VideoItem[] = [
  {
    id: "personal-01",
    src: video1,
    videoSrc: video1,
    orientation: "horizontal",
  },
  {
    id: "personal-02",
    src: video2,
    videoSrc: video2,
    orientation: "horizontal",
  },
  {
    id: "personal-03",
    src: video3,
    videoSrc: video3,
    orientation: "horizontal",
  },
  {
    id: "personal-04",
    src: video4,
    videoSrc: video4,
    orientation: "vertical",
  },
];

// ==============================================================
// 3. EDITING APPROACH (HOW I EDIT)
// ==============================================================
export interface ApproachStep {
  number: string;
  title: string;
  quote: string;
  detail: string;
}

export const EDITING_APPROACH: ApproachStep[] = [
  {
    number: "01",
    title: "MUSIC FIRST",
    quote: "Music is usually where I start. I look for a track that can carry the edit without becoming tiring to watch.",
    detail: "Every cut, flash, and transition anchors to downbeats, build-ups, and audio textures so the video flows naturally."
  },
  {
    number: "02",
    title: "KEEP THE ENERGY MOVING",
    quote: "I use pacing, transitions and visual changes to keep attention moving through the edit.",
    detail: "Balancing micro-accelerations with brief pauses prevents visual fatigue while sustaining viewer retention."
  },
  {
    number: "03",
    title: "EXPERIMENT",
    quote: "My personal work is where I test different styles, animation, framing and visual ideas.",
    detail: "Testing unorthodox aspect ratios, glitch frames, and pacing combinations outside the boundaries of standard formats."
  }
];

// ==============================================================
// 4. SOFTWARE / TOOLS (Strictly CapCut and Instagram Edits)
// ==============================================================
export interface ToolItem {
  name: string;
  tagline: string;
  focus: string[];
  workflow: string;
  accent: string;
}

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "CAPCUT",
    tagline: "Primary timeline editing & speed curve manipulation",
    focus: [
      "Custom speed ramps & velocity curves",
      "Beat-match markers & rhythmic cut sync",
      "Keyframe positioning & zoom transitions",
      "Color tuning & moody grain overlays"
    ],
    workflow: "Rapid timeline assembly, sound effect placement, dynamic text placement, and 9:16 vertical export.",
    accent: "zinc-100"
  },
  {
    name: "INSTAGRAM EDITS",
    tagline: "Native social pacing, trending audio & in-app visual techniques",
    focus: [
      "Audio sync with trending sounds & BPM",
      "Native alignment & retention hooks",
      "Split-second rhythm cuts for feed engagement",
      "Mobile screen framing & safe-zone composition"
    ],
    workflow: "Optimized specifically for mobile viewer retention, feed aesthetics, and instant visual impact.",
    accent: "zinc-300"
  }
];

// ==============================================================
// 5. CONTACT DETAILS
// ==============================================================
export const EMAIL_ADDRESS = "hindujareddy27@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/hinduja-reddy-b923b7306";
export const LINKEDIN_DISPLAY = "linkedin.com/in/hinduja-reddy-b923b7306";
