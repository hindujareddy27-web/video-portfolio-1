import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenVideoTester?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVideoTester }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "APPROACH", href: "#approach" },
    { label: "TOOLS", href: "#tools" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08080a]/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* 1.5px Scroll progress line indicator */}
      <div
        className="h-[2px] bg-zinc-200 transition-all duration-75 origin-left"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display font-extrabold tracking-tighter text-lg sm:text-xl text-white hover:text-zinc-300 transition-colors flex items-center gap-2"
        >
          <span>HINDUJA REDDY</span>
          <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" title="Available for projects" />
        </a>

        {/* Zone 2: Navigation Links (clean typography, no pill enclosures) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-4 decoration-zinc-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Quick Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-colors"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0c0c0e] px-4 py-4 space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 bg-zinc-100 text-zinc-950 text-xs font-semibold"
            >
              LET'S MAKE SOMETHING
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
