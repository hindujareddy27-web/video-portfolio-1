import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { EventEdits } from "./components/EventEdits";
import { PersonalProjects } from "./components/PersonalProjects";
import { EditingApproach } from "./components/EditingApproach";
import { Tools } from "./components/Tools";
import { Contact } from "./components/Contact";
import { VideoModal } from "./components/VideoModal";
import { VideoItem } from "./data/portfolioData";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-zinc-100 selection:text-zinc-950">
      {/* Sticky Minimal Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Typographic Hero */}
        <Hero />

        {/* 2. Event Edits Video Section (4 HTML5 Videos: 2 Horizontal, 2 Vertical) */}
        <EventEdits onOpenModal={(video) => setSelectedVideo(video)} />

        {/* 3. Personal Projects Video Section (4 HTML5 Videos: 3 Horizontal, 1 Vertical) */}
        <PersonalProjects onOpenModal={(video) => setSelectedVideo(video)} />

        {/* 4. About Section */}
        <About />

        {/* 5. How I Edit (Editing Approach) */}
        <EditingApproach />

        {/* 6. Software / Tools */}
        <Tools />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Clean Fullscreen Video Lightbox Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
