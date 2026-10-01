import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './Buttons';
import { ArrowUpRight, Menu, X, MessageSquare, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C] font-kanit select-none overflow-x-clip pt-3 pb-8 sm:pb-10">
      {/* Background Lighting & Spatial Gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] sm:w-[600px] h-[300px] sm:h-[450px] bg-cyan-500/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[450px] bg-purple-600/12 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <header className="flex justify-between items-center w-full px-5 sm:px-8 md:px-12 pt-3 md:pt-6">
          {/* Brand Logo & Name */}
          <a href="#about" className="flex items-center gap-3 group pointer-events-auto">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#121820] border border-white/15 p-1.5 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
              <img src="/logo.png" alt="NCloud Digital" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg leading-tight">
                NCloud<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#D7E2EA]/50 uppercase font-light">
                Digital Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-base hover:text-cyan-400 hover:opacity-100 opacity-80 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Desktop Proposal button + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider font-semibold text-[#D7E2EA] hover:text-white transition-all pointer-events-auto"
            >
              <span>Get Proposal</span>
              <ArrowUpRight size={14} className="text-cyan-400" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-5 py-6 mt-3 mx-4 rounded-3xl bg-[#121820]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-center bg-cyan-400 text-[#0C0C0C] font-bold text-xs uppercase tracking-widest transition-transform active:scale-95 shadow-md"
              >
                Get Custom Proposal
              </a>
              <a
                href="https://wa.me/94770000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-center bg-white/5 border border-white/10 text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </FadeIn>

      {/* Massive Editorial Hero Heading - 100% Responsive & Legible */}
      <div className="w-full my-auto py-10 sm:py-14 md:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 relative z-10">
        {/* Soft Center Lighting Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-3xl h-36 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none" />

        <FadeIn delay={0.15} y={35} className="w-full flex flex-col items-center">
          {/* Upper Micro-Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs uppercase tracking-widest text-cyan-400 font-mono mb-4 sm:mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Premium Digital Agency &bull; Global Performance
          </div>

          {/* Heading: Stacked on Mobile, Clean Single Line on Tablet/PC */}
          <h1 className="font-black uppercase tracking-tight text-center select-none text-white drop-shadow-md">
            {/* Mobile View: 2 Stacked Lines for Maximum Impact */}
            <span className="block sm:hidden text-[17vw] leading-[0.88] hero-heading">
              NCLOUD
            </span>
            <span className="block sm:hidden text-[17vw] leading-[0.88] hero-heading">
              DIGITAL
            </span>

            {/* Tablet & Desktop View: Flawlessly Sized Single Line */}
            <span className="hidden sm:inline-block text-[8.2vw] md:text-[8.5vw] lg:text-[8.8vw] xl:text-[9.2vw] 2xl:text-[135px] leading-none whitespace-nowrap hero-heading px-2">
              NCLOUD DIGITAL
            </span>
          </h1>

          {/* Refined Service Tags Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 max-w-2xl px-2">
            <span className="px-3 py-1.5 sm:px-3.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/90 backdrop-blur-sm">
              Meta Ads Scaling
            </span>
            <span className="px-3 py-1.5 sm:px-3.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/90 backdrop-blur-sm">
              Web Development
            </span>
            <span className="px-3 py-1.5 sm:px-3.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/90 backdrop-blur-sm">
              Cinematic Media
            </span>
            <span className="px-3 py-1.5 sm:px-3.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-cyan-300 backdrop-blur-sm font-semibold">
              Growth Systems
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar: Value Proposition & Contact Action */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-5 w-full px-5 sm:px-8 md:px-12 pb-3 sm:pb-4 mt-auto z-20">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 max-w-md">
            <p
              style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            >
              We engineer high-converting digital products, Meta ad engines, and measurable growth systems for ambitious brands.
            </p>
            <div className="flex items-center gap-3 text-[11px] text-cyan-400 font-mono tracking-wider">
              <span>[4.8X AVG ROAS]</span>
              <span>[45+ BRANDS SCALED]</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="w-full sm:w-auto flex justify-center sm:justify-end">
          <ContactButton href="#contact" className="w-full sm:w-auto text-center">
            Book Strategy Call
          </ContactButton>
        </FadeIn>
      </div>
    </section>
  );
};
