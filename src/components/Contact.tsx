import React, { useState } from "react";
import { EMAIL_PLACEHOLDER, INSTAGRAM_PLACEHOLDER, LINKEDIN_PLACEHOLDER } from "../data/portfolioData";
import { Mail, Instagram, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contacts = [
    {
      label: "EMAIL",
      placeholder: EMAIL_PLACEHOLDER,
      icon: Mail,
      note: "For event recap bookings, reel edits & creative collaborations"
    },
    {
      label: "INSTAGRAM",
      placeholder: INSTAGRAM_PLACEHOLDER,
      icon: Instagram,
      note: "DMs for edits & creative experiments"
    },
    {
      label: "LINKEDIN",
      placeholder: LINKEDIN_PLACEHOLDER,
      icon: Linkedin,
      note: "Professional networking & student background"
    }
  ];

  return (
    <footer id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900 relative">
      {/* Decorative digital crosshairs */}
      <div className="flex items-center justify-between pb-8 border-b border-zinc-800/80 font-mono text-xs text-zinc-500">
        <span>[ 06 / TRANSMISSION ]</span>
        <span className="hidden sm:inline">HYDERABAD / AVAILABLE GLOBALLY</span>
        <span>STATUS: OPEN FOR WORK</span>
      </div>

      <div className="py-12 md:py-16">
        {/* Massive Closing Typography */}
        <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-[0.88] select-none">
          LET'S MAKE
          <br />
          SOMETHING
          <br />
          <span className="text-zinc-500 hover:text-white transition-colors duration-200">
            WORTH WATCHING.
          </span>
        </h2>

        {/* Creator Name Signature */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <p className="font-display font-bold text-2xl sm:text-3xl text-zinc-200 uppercase tracking-tight">
            Hinduja Reddy
          </p>
          <span className="font-mono text-xs text-zinc-400">
            Student & Emerging Video Editor · Event & Social Edits
          </span>
        </div>

        {/* Contact Details & Placeholders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedItem === item.label;

            return (
              <div
                key={item.label}
                className="border border-zinc-800 bg-[#0c0c10] p-6 hover:border-zinc-500 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-zinc-500 font-mono text-xs pb-4 border-b border-zinc-800/80">
                    <span className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(item.placeholder, item.label)}
                      className="hover:text-zinc-200 flex items-center gap-1 text-[11px] transition-colors"
                      title="Copy placeholder"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Clean unboxed placeholder text */}
                  <div className="mt-4 font-mono text-sm sm:text-base font-bold text-zinc-200 group-hover:text-white break-all">
                    {item.placeholder}
                  </div>

                  <p className="mt-2 text-xs text-zinc-400 font-sans">
                    {item.note}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 font-mono text-[11px] text-zinc-500 flex items-center justify-between">
                  <span>TAP TO COPY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiet Footer Bar */}
      <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
        <div>
          © {new Date().getFullYear()} Hinduja Reddy. All edits & rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">TOP ↑</a>
          <span>·</span>
          <span>CAPCUT & INSTAGRAM REELS</span>
        </div>
      </div>
    </footer>
  );
};
