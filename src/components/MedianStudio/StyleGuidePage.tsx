import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const StyleGuidePage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-white text-median-taupe min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="py-12 border-b border-median-taupe/20 mb-16">
          <ScrollReveal variant="badge-drop">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // DESIGN SYSTEM &bull; TOKEN ARCHITECTURE
            </span>
          </ScrollReveal>
          <ScrollReveal variant="split-mask" delay={100}>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
              Editorial Design System
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-focus" delay={180}>
            <p className="text-xs sm:text-sm text-median-taupe/80 max-w-xl font-normal leading-relaxed">
              Tactile luxury design tokens, spatial layout rhythm, and typographic hierarchy calibrated for high-agency digital experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Color Palette */}
        <div className="py-12 border-b border-median-taupe/20 space-y-6">
          <h2 className="font-oswald text-2xl font-bold uppercase text-black font-mono">
            01. Curated Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-full h-24 rounded-2xl bg-median-taupe border border-median-taupe/30 shadow-sm" />
              <div className="text-xs font-mono">
                <span className="font-bold text-black block">Median Taupe</span>
                <span className="text-median-taupe">#9F8170</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="w-full h-24 rounded-2xl bg-black border border-black/30 shadow-sm" />
              <div className="text-xs font-mono">
                <span className="font-bold text-black block">Absolute Black</span>
                <span className="text-median-taupe">#000000</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="w-full h-24 rounded-2xl bg-median-cream border border-median-taupe/20 shadow-sm" />
              <div className="text-xs font-mono">
                <span className="font-bold text-black block">Warm Cream</span>
                <span className="text-median-taupe">#FAF8F5</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="w-full h-24 rounded-2xl bg-white border border-median-taupe/30 shadow-sm" />
              <div className="text-xs font-mono">
                <span className="font-bold text-black block">Pure White</span>
                <span className="text-median-taupe">#FFFFFF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="py-12 border-b border-median-taupe/20 space-y-6">
          <h2 className="font-oswald text-2xl font-bold uppercase text-black font-mono">
            02. Typographic Scale
          </h2>
          <div className="space-y-6">
            <div className="border-b border-median-taupe/15 pb-4">
              <span className="font-oswald text-6xl font-bold uppercase text-black block">
                Display Headline 96px
              </span>
              <span className="text-xs font-mono text-median-taupe">Oswald &bull; Bold &bull; 900 Tracking Tight</span>
            </div>

            <div className="border-b border-median-taupe/15 pb-4">
              <span className="font-oswald text-4xl font-bold uppercase text-black block">
                Section Heading 48px
              </span>
              <span className="text-xs font-mono text-median-taupe">Oswald &bull; Bold &bull; Uppercase</span>
            </div>

            <div className="border-b border-median-taupe/15 pb-4">
              <span className="text-sm font-normal text-median-taupe block max-w-xl leading-relaxed">
                Body paragraph text rendered in Inter Tight, 14px size, 20px line-height, with warm bronze balance and high accessibility contrast ratio exceeding 4.5:1.
              </span>
              <span className="text-xs font-mono text-median-taupe">Inter Tight &bull; Regular &bull; 14px</span>
            </div>
          </div>
        </div>

        {/* Buttons & Interactive Elements */}
        <div className="py-12 space-y-6">
          <h2 className="font-oswald text-2xl font-bold uppercase text-black font-mono">
            03. Interactive Primitives
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-median-taupe text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Primary Button
            </button>
            <button className="px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-median-taupe transition-colors">
              Secondary Button
            </button>
            <button className="px-8 py-3.5 rounded-full border border-median-taupe text-black text-xs font-bold uppercase tracking-widest hover:bg-median-cream transition-colors">
              Outlined Button
            </button>
            <span className="px-4 py-1.5 rounded-full bg-median-cream border border-median-taupe/30 text-xs font-bold font-mono uppercase text-median-taupe">
              Badge Component
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
