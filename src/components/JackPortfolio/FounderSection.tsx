import React from 'react';
import { FadeIn } from './FadeIn';
import { MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
      className="bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-12 font-kanit relative z-20 border-t border-white/[0.07] select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Pill */}
        <div className="flex justify-center mb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            // 05 LEADERSHIP &amp; VISION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Founder Photo with Tactile Frame */}
          <div className="md:col-span-5 flex justify-center">
            <FadeIn delay={0.1} y={30}>
              <div className="relative group">
                {/* Ambient Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-600/20 rounded-[32px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative rounded-[28px] overflow-hidden border border-white/20 bg-[#121820] max-w-[340px] shadow-2xl">
                  <img
                    src="/founder.webp"
                    alt="Dulan - Founder & Growth Architect at NCloud Digital"
                    className="w-full h-auto object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                    <span className="font-bold text-white uppercase tracking-wider">
                      Dulan
                    </span>
                    <span className="text-cyan-400 font-mono text-[11px] bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      Founder &amp; Growth Architect
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Founder Quote & Positioning */}
          <div className="md:col-span-7 flex flex-col items-start">
            <FadeIn delay={0.2} y={30}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono text-cyan-400 mb-6">
                <ShieldCheck size={14} />
                <span>Direct Founder Oversight On Every Account</span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-medium leading-snug tracking-tight mb-8">
                &ldquo;Most agencies force you to choose between beautiful creative design and ruthless performance marketing. At NCloud, we fuse them into a single machine. Every line of code is written to convert, and every ad dollar is tied directly to pipeline.&rdquo;
              </blockquote>

              <p className="text-sm text-[#D7E2EA]/60 font-light leading-relaxed mb-8">
                Having engineered growth funnels and bespoke digital experiences for over 45 high-growth brands across Sri Lanka and globally, our philosophy remains simple: no fluff, no vanity metrics — just world-class engineering, obsessive tracking, and undeniable ROI.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/94770000000?text=Hi%20Dulan,%20I'd%20like%20to%20discuss%20scaling%20my%20business%20with%20NCloud%20Digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#0C0C0C] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                  <span>Request Full Audit</span>
                  <ArrowUpRight size={14} className="text-cyan-400" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
