import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './Buttons';
import { Zap, Target, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 bg-[#0C0C0C] font-kanit overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Corner Elements - Responsive for mobile */}
      {/* Top-Left: Moon icon */}
      <div className="hidden sm:block absolute top-[5%] left-[2%] sm:left-[3%] md:left-[5%] z-0 pointer-events-none opacity-85">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Orb Asset"
            className="w-[110px] sm:w-[150px] md:w-[200px] h-auto object-contain select-none filter drop-shadow-[0_10px_30px_rgba(125,231,255,0.2)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Geometric Object */}
      <div className="hidden sm:block absolute bottom-[10%] left-[3%] sm:left-[6%] md:left-[9%] z-0 pointer-events-none opacity-80">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Growth Object"
            className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain select-none filter drop-shadow-[0_10px_30px_rgba(255,122,61,0.2)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego / Modular System icon */}
      <div className="hidden sm:block absolute top-[5%] right-[2%] sm:right-[3%] md:right-[5%] z-0 pointer-events-none opacity-85">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Modular System 3D"
            className="w-[110px] sm:w-[150px] md:w-[200px] h-auto object-contain select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="hidden sm:block absolute bottom-[10%] right-[3%] sm:right-[6%] md:right-[9%] z-0 pointer-events-none opacity-80">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Core Abstract"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Section Pill */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-cyan-400 font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            About NCloud Digital
          </div>
        </FadeIn>

        {/* Massive Editorial Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2
            style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-12 md:mb-14 select-none"
          >
            WHO WE ARE
          </h2>
        </FadeIn>

        {/* Scroll-Driven Animated Character-by-Character Paragraph */}
        <FadeIn delay={0.2} y={20} className="w-full flex justify-center mb-10 sm:mb-14">
          <AnimatedText
            text="We are NCloud Digital -- an elite digital growth agency that bridges high-ROI Meta ad strategies, bespoke modern web engineering, and scroll-stopping creative production. We don't just generate clicks; we build end-to-end digital growth systems that scale revenue, command market authority, and turn ambitious brands into category leaders."
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.4rem)' } as React.CSSProperties}
            className="text-[#D7E2EA] font-normal text-center leading-relaxed max-w-[620px] px-4 select-none"
          />
        </FadeIn>

        {/* 3 Core Pillars */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-3xl mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Target size={18} className="text-cyan-400 mb-2" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                Precision Meta Ads
              </h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light leading-relaxed">
                Hyper-targeted customer acquisition funnels built for maximum ROAS.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Zap size={18} className="text-amber-400 mb-2" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                Web Engineering
              </h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light leading-relaxed">
                Lightning-fast, conversion-focused websites and modern web platforms.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <TrendingUp size={18} className="text-pink-400 mb-2" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                Predictable Revenue
              </h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light leading-relaxed">
                Structured growth systems engineered to scale brands past 7 figures.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Action Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton href="#contact">
            Start Your Growth System
          </ContactButton>
        </FadeIn>
      </div>
    </section>
  );
};
