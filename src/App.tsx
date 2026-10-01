import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JackPortfolio from './components/JackPortfolio/JackPortfolio';
import HaloLanding from './components/HaloLanding/HaloLanding';
import { 
  Zap, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, 
  Clock, Sparkles, MonitorSmartphone, Megaphone, Video, Share2, 
  Target, BarChart3, Phone, Mail, MapPin, User, MessageSquare, 
  Menu, X, ChevronDown, ChevronUp, ExternalLink, Lock, Award, 
  TrendingUp, Send, Check, Layers, Compass, Rocket
} from 'lucide-react';
import { GrowthCore3D } from './components/GrowthCore3D';

// --- Brand SVGs for Social & Partners ---
const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.09 7.41 8.86 7.66C8.63 7.91 7.99 8.51 7.99 9.74C7.99 10.97 8.89 12.15 9.01 12.31C9.13 12.48 10.77 14.98 13.27 16.07C13.87 16.33 14.33 16.48 14.7 16.6C15.3 16.79 15.84 16.76 16.27 16.7C16.76 16.63 17.76 16.09 17.97 15.5C18.17 14.92 18.17 14.42 18.11 14.32C18.05 14.22 17.89 14.16 17.65 14.04C17.41 13.92 16.23 13.34 16 13.26C15.78 13.17 15.62 13.13 15.46 13.38C15.3 13.62 14.83 14.16 14.69 14.32C14.54 14.48 14.4 14.5 14.16 14.38C13.92 14.26 12.92 13.93 11.73 12.87C10.8 12.04 10.18 11.02 10.04 10.78C9.9 10.54 10.03 10.4 10.15 10.29C10.26 10.18 10.4 10 10.51 9.87C10.63 9.75 10.67 9.65 10.75 9.49C10.83 9.33 10.79 9.18 10.73 9.06C10.67 8.94 10.21 7.81 10.02 7.35C9.83 6.9 9.64 6.96 9.5 6.95C9.37 6.95 9.21 6.95 9.05 6.95"/>
  </svg>
);

const MetaIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.89 14.5c-1.44 0-2.48-.82-3.89-2.61-1.41 1.79-2.45 2.61-3.89 2.61-2.09 0-3.61-1.63-3.61-4.05 0-2.88 2.07-5.45 4.79-5.45 1.54 0 2.45.71 3.51 2.05 1.06-1.34 1.97-2.05 3.51-2.05 2.72 0 4.79 2.57 4.79 5.45 0 2.42-1.52 4.05-3.61 4.05zm-.1-1.9c1.23 0 2.01-.98 2.01-2.35 0-1.78-1.28-3.55-2.8-3.55-1.12 0-1.89.82-2.73 2.14 1.25 1.95 2.37 3.76 3.52 3.76zm-7.58 0c1.15 0 2.27-1.81 3.52-3.76-.84-1.32-1.61-2.14-2.73-2.14-1.52 0-2.8 1.77-2.8 3.55 0 1.37.78 2.35 2.01 2.35z"/>
  </svg>
);

// --- Smooth Cinematic Scroll Reveal Primitive ---
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  viewportMargin?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 26,
  x = 0,
  className = '',
  viewportMargin = '-40px',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Decisive Awwwards/Hobro easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Navbar Component ---
const Navbar: React.FC<{ onOpenClientHub: () => void }> = ({ onOpenClientHub }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Advantage', href: '#why-us' },
    { name: 'Workflow', href: '#process' },
    { name: 'Results', href: '#metrics' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#08090B]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-orange-500/20 border border-cyan-400/30 p-1.5 flex items-center justify-center transition-transform group-hover:scale-105 shadow-glow-cyan">
            <img src="/logo.png" alt="NCloud Digital Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              NCloud <span className="text-gradient-cyan">Digital</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
              Growth Architecture
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121820]/70 border border-white/[0.07] px-4 py-1.5 rounded-full backdrop-blur-md shadow-glass">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold px-3.5 py-2 text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04] rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            onClick={onOpenClientHub}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400/50 bg-[#121820]/80 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Client Hub</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#08090B] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-glow-cyan cursor-pointer"
          >
            <span>Get Proposal</span>
            <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 rounded-lg focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-b border-white/[0.08] bg-[#08090B]/98 backdrop-blur-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-semibold text-slate-300 hover:text-cyan-400 border-b border-white/[0.04]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenClientHub();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 font-semibold text-sm"
                >
                  <ShieldCheck size={16} /> Client Hub Portal
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 rounded-xl bg-cyan-400 text-[#08090B] font-bold text-sm"
                >
                  Book Free Strategy Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Elevated Hero Section with Fully-Viewed 3D Growth Engine ---
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-28 px-5 sm:px-8 md:px-12 overflow-hidden min-h-[92vh] flex items-center">
      {/* Background Lighting & Atmospheric Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[550px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-orange-600/10 blur-[190px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Dominant Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <ScrollReveal delay={0.05} y={18}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-badge text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6 sm:mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              NCloud Digital &bull; Sri Lanka &amp; Global Growth Systems
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={24}>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-tight text-white leading-[1.04] mb-6">
              We Build <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Digital Growth Systems</span> <br />
              for Ambitious Brands
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
              NCloud combines data-driven Meta ad campaigns, bespoke modern web engineering, and cinematic creative production to turn digital attention into predictable, compounding revenue.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35} y={20}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 sm:mb-12">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#08090B] font-extrabold text-base transition-all duration-300 shadow-glow-cyan hover:shadow-[0_0_45px_rgba(125,231,255,0.5)] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                href="#services"
                className="px-8 py-4 rounded-full glass-surface hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={18} className="text-cyan-400" />
                <span>Explore Solutions</span>
              </motion.a>
            </div>
          </ScrollReveal>

          {/* 4 Supporting Proof Items */}
          <ScrollReveal delay={0.45} y={16} className="w-full">
            <div className="grid grid-cols-2 gap-3.5 pt-6 border-t border-white/[0.08] w-full max-w-2xl text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>4.8X Blended Account ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Rs. 12M+ Client Revenue Tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Sub-1.2s High-Speed Web UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Private Client Hub &amp; Live Sprints</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Signature 3D Growth Engine (100% Viewed & Unclipped) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <ScrollReveal delay={0.2} duration={0.9} y={30} className="w-full">
            <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] mx-auto">
              {/* Ambient Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-orange-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Three.js Interactive Growth Core Canvas */}
              <GrowthCore3D className="w-full h-full" />

              {/* Floating Spatial Service Badges - Protected Safe Bounds */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="hidden sm:flex absolute top-3 left-3 sm:top-5 sm:left-4 glass-surface p-3 sm:p-3.5 rounded-2xl items-center gap-3 shadow-glass border border-cyan-400/30 animate-float pointer-events-auto cursor-default select-none"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <MonitorSmartphone size={18} />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Web Architecture</div>
                  <div className="text-xs font-bold text-white">&lt; 1.2s Fast Conversion UI</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, x: -2 }}
                className="hidden sm:flex absolute top-1/2 right-1 sm:right-3 -translate-y-1/2 glass-surface p-3 sm:p-3.5 rounded-2xl items-center gap-3 shadow-glass border border-orange-400/30 animate-float [animation-delay:2s] pointer-events-auto cursor-default select-none"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-400/10 flex items-center justify-center text-orange-400 shrink-0">
                  <MetaIcon size={18} />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Meta Ad Engine</div>
                  <div className="text-xs font-bold text-white">4.8X Blended ROAS</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="hidden sm:flex absolute bottom-3 left-4 sm:bottom-5 sm:left-6 glass-surface p-3 sm:p-3.5 rounded-2xl items-center gap-3 shadow-glass border border-white/10 animate-float [animation-delay:4s] pointer-events-auto cursor-default select-none"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Video size={18} />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Cinematic Media</div>
                  <div className="text-xs font-bold text-white">4K Reels &amp; Motion Assets</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// --- Trusted Clients Brand Wall Section ---
const TrustedClientsSection: React.FC = () => {
  return (
    <section id="trusted-clients" className="py-14 border-y border-white/[0.06] bg-[#090D12]/80 backdrop-blur-md relative overflow-hidden select-none">
      <ScrollReveal delay={0.05} y={15}>
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400/80 font-mono">
            // PROVEN BY HYPER-GROWTH BRANDS ACROSS SRI LANKA &amp; GLOBALLY
          </span>
        </div>
      </ScrollReveal>

      <div className="relative flex overflow-hidden group">
        <div className="flex space-x-8 sm:space-x-12 animate-marquee shrink-0 items-center py-2">
          {[1, 2, 3, 4].map((set) => (
            <React.Fragment key={set}>
              <div className="flex items-center gap-3 glass-surface px-6 py-3.5 rounded-2xl border border-white/[0.07] hover:border-cyan-400/40 transition-all duration-300">
                <img src="/client-logo-1.webp" alt="Beauty Basket" className="h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-bold tracking-tight text-slate-300">Beauty Basket</span>
              </div>
              <div className="flex items-center gap-3 glass-surface px-6 py-3.5 rounded-2xl border border-white/[0.07] hover:border-cyan-400/40 transition-all duration-300">
                <img src="/client-logo-2.webp" alt="Holistica Herbal" className="h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-bold tracking-tight text-slate-300">Holistica Herbal</span>
              </div>
              <div className="flex items-center gap-3 glass-surface px-6 py-3.5 rounded-2xl border border-white/[0.07] hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center font-bold text-cyan-400 text-xs">NL</div>
                <span className="text-sm font-bold tracking-tight text-slate-300">Nexus Labs</span>
              </div>
              <div className="flex items-center gap-3 glass-surface px-6 py-3.5 rounded-2xl border border-white/[0.07] hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-orange-400/10 flex items-center justify-center font-bold text-orange-400 text-xs">CR</div>
                <span className="text-sm font-bold tracking-tight text-slate-300">Ceylon Retail</span>
              </div>
              <div className="flex items-center gap-2 glass-surface px-5 py-3.5 rounded-2xl border border-cyan-400/20 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Meta Business Partner</span>
              </div>
              <div className="flex items-center gap-2 glass-surface px-5 py-3.5 rounded-2xl border border-emerald-400/20 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Shopify Plus Ecosystem</span>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Edge gradient masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08090B] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08090B] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

// --- Interactive Editorial Services Section ---
const ServicesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState(1);

  const services = [
    {
      id: 1,
      num: '01',
      title: 'Meta Ads & Lead Generation',
      subtitle: 'Precision Paid Acquisition Systems',
      description:
        'Launch targeted Meta advertising campaigns designed to attract high-intent buyers, generate verified leads, and optimize return on ad spend with custom Conversion API (CAPI) pixel architecture.',
      icon: <MetaIcon size={28} className="text-cyan-400" />,
      metric: '4.8X Avg Account ROAS',
      capabilities: [
        'Custom Facebook & Instagram Ad Funnels',
        'High-Intent Lead Generation Systems',
        'Conversion API (CAPI) & Server-Side Pixel Tracking',
        'Multivariate Creative & Copywriting A/B Testing',
      ],
      tags: ['Paid Acquisition', 'CAPI Integration', 'ROAS Scaling', 'Audience Retargeting'],
    },
    {
      id: 2,
      num: '02',
      title: 'Website Development',
      subtitle: 'High-Converting Web & E-Commerce Engineering',
      description:
        'Build lightning-fast, modern, and trustworthy web platforms that turn casual visitors into paying customers. Engineered with modern architectures (React, Next.js, Vite, Three.js, Shopify, Laravel) for maximum conversion velocity.',
      icon: <MonitorSmartphone size={28} className="text-cyan-400" />,
      metric: '99+ Lighthouse Performance',
      capabilities: [
        'Custom React & Next.js Headless Builds',
        'Shopify E-Commerce & WordPress Custom Stacks',
        'Conversion-Optimized UX & Mobile Architecture',
        'Sub-1.2s Load Speeds & SEO Foundation',
      ],
      tags: ['React / Next.js', 'E-Commerce', 'Three.js 3D', 'CRO Architecture'],
    },
    {
      id: 3,
      num: '03',
      title: 'Social Media Management',
      subtitle: 'Brand Authority & Organic Inquiries',
      description:
        'Maintain a commanding digital presence with strategic content calendars, persuasive copywriting, viral short-form reels, and active community management that transforms followers into loyal brand advocates.',
      icon: <Share2 size={28} className="text-cyan-400" />,
      metric: '450% Engagement Lift',
      capabilities: [
        'Monthly Strategic Content Roadmaps',
        'Direct-Response Copywriting & Educational Carousels',
        'Organic Inbound Lead Capture Workflows',
        'Targeted Community Engagement & Brand Loyalty',
      ],
      tags: ['Brand Authority', 'Community Building', 'Content Calendars', 'Organic Inbound'],
    },
    {
      id: 4,
      num: '04',
      title: 'Content Creation',
      subtitle: 'Scroll-Stopping Ad Creatives & Reels',
      description:
        'Produce cinematic video production, high-retention TikToks, Instagram Reels, 3D product motion graphics, and commercial assets specifically engineered to arrest user attention and trigger commercial action.',
      icon: <Video size={28} className="text-cyan-400" />,
      metric: '10M+ Video Views Delivered',
      capabilities: [
        'Scroll-Stopping Direct-Response Ad Creatives',
        'High-Retention Viral Reels & TikTok Production',
        '3D Motion Graphics & Product Visualization',
        'Commercial Brand Design & Conversion Visual Stacks',
      ],
      tags: ['Cinematic Video', '3D Motion Graphics', 'Short-Form Reels', 'Ad Creatives'],
    },
  ];

  const activeService = services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="services" className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 relative bg-[#08090B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal delay={0.05} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
                // 02 WHAT WE DELIVER
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Full-Spectrum Growth <br className="hidden sm:block" />
                <span className="text-gradient-cyan">Engineered for Revenue</span>
              </h2>
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-md font-normal leading-relaxed">
              Eliminate fragmented freelancers. We combine performance marketing and web engineering under one accountable roof.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Split Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Service Disciplines List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {services.map((item, index) => {
              const isSelected = item.id === selectedId;
              return (
                <ScrollReveal key={item.id} delay={0.08 * index} y={16}>
                  <motion.button
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 450, damping: 28 }}
                    onClick={() => setSelectedId(item.id)}
                    onMouseEnter={() => setSelectedId(item.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#121820] to-[#18212B] border-cyan-400/50 shadow-glow-cyan'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xl font-bold transition-colors duration-300 ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {item.num}
                      </span>
                      <div className="flex flex-col">
                        <span className={`font-heading text-lg sm:text-xl font-bold transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {item.title}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-cyan-400 text-[#08090B] translate-x-1' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                      <ArrowRight size={16} />
                    </div>
                  </motion.button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Service Experience Panel */}
          <div className="lg:col-span-7 glass-surface p-8 sm:p-12 rounded-3xl border border-cyan-400/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon, Metric Badge & Number */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#08090B] border border-cyan-400/40 flex items-center justify-center shadow-inner">
                      {activeService.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-cyan-400/15 text-cyan-300 text-xs font-mono font-bold border border-cyan-400/30">
                        {activeService.metric}
                      </span>
                      <span className="font-mono text-3xl font-black text-cyan-400/40">
                        {activeService.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Detailed Explanation */}
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-2 relative z-10">
                    {activeService.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-6 relative z-10">
                    {activeService.subtitle}
                  </p>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                    {activeService.description}
                  </p>

                  {/* Deliverable Capabilities List */}
                  <div className="space-y-3.5 mb-8 relative z-10">
                    {activeService.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                        <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {activeService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                  <motion.a
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#08090B] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-cyan cursor-pointer"
                  >
                    <span>Request {activeService.title} Strategy</span>
                    <ArrowRight size={16} />
                  </motion.a>

                  <span className="text-xs font-mono text-slate-500 uppercase hidden sm:inline-block">
                    // Sprints Managed in Client Hub
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NCloud Advantage Section (Interactive Storytelling) ---
const WhyUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: 'Strategy Before Design',
      summary: 'Audience & competitor research before deploying code or ad budgets.',
      details: 'We study your exact buyer psychology, competitor ad creatives, and high-converting competitor funnels before a single asset or dollar is deployed. No guesswork, pure mathematical positioning.',
      icon: <Target className="text-cyan-400" size={24} />,
    },
    {
      title: 'Clear Communication & Weekly Sprints',
      summary: 'Direct WhatsApp updates and transparent sprint milestones.',
      details: 'Say goodbye to bloated ticketing systems and silent account managers. You get direct WhatsApp access with Founder Nethum and dedicated weekly sprint reviews.',
      icon: <MessageSquare className="text-cyan-400" size={24} />,
    },
    {
      title: 'Conversion-Focused Architecture',
      summary: 'Every design decision is strictly engineered to generate sales.',
      details: 'Pretty design that does not convert is expensive art. Every headline, button placement, image angle, and page load millisecond is tuned for direct ROI.',
      icon: <TrendingUp className="text-cyan-400" size={24} />,
    },
    {
      title: 'Precision Performance Advertising',
      summary: 'Continuous creative refreshes and aggressive budget scaling.',
      details: 'Laser-targeted Meta advertising engineered with continuous creative refreshes, Conversion API (CAPI) pixel audits, multivariate testing, and aggressive budget scaling.',
      icon: <BarChart3 className="text-cyan-400" size={24} />,
    },
    {
      title: 'Local Creative Edge & Global Standards',
      summary: 'Cultural consumer psychology paired with international engineering.',
      details: 'Deep cultural understanding of Sri Lankan & international consumer psychology to craft copy and video hooks that convert, built on Silicon Valley-grade tech stacks.',
      icon: <Award className="text-cyan-400" size={24} />,
    },
    {
      title: 'Secure Client Portal & Live ROI Tracking',
      summary: '24/7 private portal access to inspect active sprints and reports.',
      details: 'Log in to your private client hub 24/7 to inspect active project sprints, campaign ROAS reports, assets, and invoices with complete enterprise transparency.',
      icon: <Lock className="text-cyan-400" size={24} />,
    },
  ];

  return (
    <section id="why-us" className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#0A0E15] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal delay={0.05} y={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-xs font-bold uppercase tracking-wider text-cyan-400 mb-6 font-mono">
                // THE NCLOUD ADVANTAGE
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Built on Strategy. <br />
                <span className="text-gradient-cyan">Proven by Performance.</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                We focus on direct business metrics: qualified leads, customer inquiries, online bookings, and direct sales. No vanity metrics, just real performance.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#08090B] font-bold text-sm transition-all shadow-glow-cyan cursor-pointer"
                >
                  <span>Claim Free Growth Audit</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Pillars List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {pillars.map((pillar, i) => {
              const isOpen = activeTab === i;
              return (
                <ScrollReveal key={i} delay={0.07 * i} y={18}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActiveTab(isOpen ? -1 : i)}
                    className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#121820] to-[#18212B] border-cyan-400/40 shadow-glass'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#08090B] border border-white/[0.08] flex items-center justify-center shadow-inner shrink-0">
                          {pillar.icon}
                        </div>
                        <h3 className={`font-heading text-lg sm:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                          {pillar.title}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-cyan-400 text-[#08090B]' : 'bg-white/5 text-slate-400'}`}>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-white/[0.08] text-slate-300 text-sm leading-relaxed">
                            <p className="mb-3">{pillar.details}</p>
                            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                              <CheckCircle2 size={14} />
                              <span>Included across all growth tiers</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Growth Strategy Workflow (Horizontal Connected Journey) ---
const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Audit & Diagnostic',
      desc: 'In-depth audit of your current digital assets, competitor funnels, audience pain points, and commercial bottlenecks.',
      deliverables: 'Funnel Audit, Ad Account Diagnostic, Tech Stack Review',
    },
    {
      num: '02',
      title: 'Strategy',
      subtitle: 'Architecture & Positioning',
      desc: 'Formulating high-conversion funnel architecture, asset deliverable maps, messaging angles, and tracking taxonomy.',
      deliverables: 'Growth Blueprint, Ad Creative Angles, Wireframe UX',
    },
    {
      num: '03',
      title: 'Creation',
      subtitle: 'Engineering & Creative',
      desc: 'Designing high-performance landing pages, custom code implementations, and writing direct-response ad copy.',
      deliverables: 'High-Converting Web Build, 4K Ad Creatives, Copy System',
    },
    {
      num: '04',
      title: 'Launch',
      subtitle: 'Tracking & Deployment',
      desc: 'Deploying campaigns with verified pixel tracking, conversion events, audience segmentation, and live QA checks.',
      deliverables: 'CAPI Verified, Ad Budget Deployed, Live Health Check',
    },
    {
      num: '05',
      title: 'Growth',
      subtitle: 'Multivariate Scale',
      desc: 'Iterative multivariate testing, bid optimization, scaling winning variations, and aggressive ROAS maximization.',
      deliverables: 'ROAS Scaling, Weekly Sprints, Account Expansion',
    },
  ];

  return (
    <section id="process" className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 relative overflow-hidden bg-[#08090B]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={0.05} y={24}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
              // WORKFLOW JOURNEY
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Our Five-Stage <span className="text-gradient-cyan">Growth Pipeline</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              A transparent, engineered framework built to turn visitors into buyers and drive predictable pipeline velocity.
            </p>
          </div>
        </ScrollReveal>

        {/* Connected Horizontal Journey on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Luminous Connecting Timeline Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-500 opacity-30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={0.1 * i} y={24}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="glass-surface p-7 rounded-3xl border border-white/[0.07] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-glass h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-mono font-black text-base flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:text-[#08090B] transition-all duration-300 shadow-md">
                      {step.num}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3">
                      {step.subtitle}
                    </span>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 leading-snug">
                    <span className="text-slate-500 uppercase block mb-1">Key Deliverables:</span>
                    <span>{step.deliverables}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Performance Metrics Section ---
const MetricsSection: React.FC = () => {
  const stats = [
    { value: 'Rs. 12M+', label: 'Ad Revenue Scaled', sub: 'Verified across Meta CAPI & Shopify analytics' },
    { value: '100+', label: 'High-Impact Builds', sub: 'Custom web apps, landing pages & ad funnels' },
    { value: '4.8X', label: 'Average ROAS', sub: 'Blended return across active client ad accounts' },
    { value: '98%', label: 'Client Retention', sub: 'Partners scaling long-term past initial sprints' },
  ];

  return (
    <section id="metrics" className="py-24 sm:py-32 bg-gradient-to-r from-[#0C121A] via-[#0E1624] to-[#0C121A] border-y border-white/[0.08] relative select-none">
      {/* Subtle Back Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-48 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal delay={0.05} y={20}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400/90 font-mono">
              // 04 MEASURABLE OUTCOMES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Numbers That Speak for Themselves
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Oversized Display Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.08 * i} y={18}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="text-center px-4 pt-6 sm:pt-0 group cursor-default"
              >
                <div className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-normal max-w-xs mx-auto">
                  {stat.sub}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Founder & Leadership Section (Editorial Profile) ---
const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal delay={0.05} y={20}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
              // LEADERSHIP
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Meet Our <span className="text-gradient-cyan">Founder</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Direct executive oversight on every client strategy and technical build.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Profile Layout */}
        <ScrollReveal delay={0.2} duration={0.8} y={30}>
          <div className="glass-surface p-8 sm:p-14 rounded-3xl border border-white/[0.08] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Founder Portrait with Ambient Rim */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-2xl overflow-hidden border border-white/15 group shadow-glass">
                  <img
                    src="/founder.webp"
                    alt="Nethum Vidyalankara - Founder & CEO of NCloud Digital"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-85 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-400 font-bold text-xs font-mono">
                      Founder &amp; CEO
                    </div>
                    <span className="text-xs text-slate-300 font-medium font-mono">NCloud Digital</span>
                  </div>
                </div>
              </div>

              {/* Founder Bio & Details */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
                  Executive Leadership
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  Nethum Vidyalankara
                </h3>
                <p className="text-sm font-semibold text-slate-400 mb-6 font-mono">
                  Founder &amp; Chief Growth Strategist
                </p>

                <blockquote className="border-l-2 border-cyan-400 pl-5 mb-8 italic text-slate-200 text-base sm:text-lg leading-relaxed">
                  &ldquo;Marketing should never be guesswork—it must always map directly to measurable return on investment. At NCloud Digital, we bridge high-end technical web engineering with aggressive, conversion-focused advertising so ambitious businesses can scale predictably.&rdquo;
                </blockquote>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Nethum established NCloud Digital with a clear mission: eliminate the gap between pretty agency designs and hard revenue outcomes. With hands-on leadership over Meta Ads campaigns, pixel telemetry, and modern web applications, every account benefits from direct founder scrutiny.
                </p>

                {/* Founder Stats */}
                <div className="grid grid-cols-3 gap-4 w-full py-5 border-y border-white/[0.08] mb-8">
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-black text-cyan-400">Rs. 12M+</div>
                    <div className="text-[11px] uppercase font-bold text-slate-400 mt-1">Ad Spend Managed</div>
                  </div>
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-black text-white">1,000+</div>
                    <div className="text-[11px] uppercase font-bold text-slate-400 mt-1">Leads Generated</div>
                  </div>
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-black text-white">50+</div>
                    <div className="text-[11px] uppercase font-bold text-slate-400 mt-1">Brands Served</div>
                  </div>
                </div>

                {/* Founder Contact & WhatsApp */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="https://wa.me/94760967884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Chat with Nethum</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="tel:+94760967884"
                    className="px-6 py-3.5 rounded-full glass-surface hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone size={16} className="text-cyan-400" />
                    <span>076 096 7884</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="mailto:info@nclouddigital.com"
                    className="px-6 py-3.5 rounded-full glass-surface hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail size={16} className="text-cyan-400" />
                    <span>info@nclouddigital.com</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// --- Refined Architectural FAQ Section ---
const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      num: '01',
      q: 'How long does a website take to design and launch?',
      a: 'Generally, a high-converting landing page or business platform can be engineered and launched within 2 to 3 weeks. Complex multi-page platforms and custom e-commerce stores take between 4 to 6 weeks, complete with SEO architecture, sub-1.2s speed audits, and conversion tracking.',
    },
    {
      num: '02',
      q: 'What is your Meta Ads management framework?',
      a: 'Our framework is engineered for ROI: we begin with server-side Conversion API (CAPI) pixel tracking audits, construct custom target-audience demographics, produce multivariate ad creatives, launch A/B copy tests, and scale budgets strictly on winning high-ROAS campaign nodes.',
    },
    {
      num: '03',
      q: 'Do you produce cinematic video content in-house?',
      a: 'Yes, content creation is a cornerstone discipline. We script, produce, and edit short-form video assets (Instagram Reels, TikTok clips, YouTube Shorts) and 3D motion graphics designed for maximum scroll-stopping retention and conversion.',
    },
    {
      num: '04',
      q: 'What industries does NCloud specialize in?',
      a: 'We partner with ambitious founders across E-Commerce, Retail, Real Estate, Professional B2B Services, Tech Startups, Hospitality, and Professional Consulting Agencies in Sri Lanka and internationally.',
    },
    {
      num: '05',
      q: 'How are project pricing and agreements structured?',
      a: 'We offer fixed-scope milestone options for Web Engineering and transparent monthly management retainers for Meta Ads and Content Systems. Every proposal includes guaranteed deliverables and weekly sprint accountability.',
    },
  ];

  return (
    <section id="faq" className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto relative bg-[#08090B]">
      <ScrollReveal delay={0.05} y={20}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
            // CLARIFICATIONS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="text-slate-400 text-base">
            Find fast answers to common questions about partnering with NCloud Digital.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={0.07 * i} y={16}>
            <div
              className={`glass-surface rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIdx === i ? 'border-cyan-400/50 bg-[#121820]/90 shadow-glass' : 'border-white/[0.06] hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-cyan-400 font-bold">{faq.num}</span>
                  <span className={`font-heading text-base sm:text-lg font-bold transition-colors duration-200 ${openIdx === i ? 'text-white' : 'text-slate-300'}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${openIdx === i ? 'bg-cyan-400 text-[#08090B]' : 'bg-[#08090B] text-slate-400'}`}>
                  {openIdx === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.06] pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

// --- Final Signature CTA Banner ---
const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 px-5 sm:px-8 md:px-12 bg-[#08090B]">
      <ScrollReveal delay={0.05} y={30}>
        <div className="max-w-7xl mx-auto glass-surface rounded-[2.5rem] p-10 sm:p-16 border border-cyan-400/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-4 block">
              // READY TO SCALE YOUR BRAND?
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Ready To Grow <span className="text-gradient-cyan">Your Business?</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-10">
              Let&apos;s engineer a high-converting digital system tailored to your market. Claim your complimentary marketing audit and custom growth proposal today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#08090B] font-extrabold text-base transition-all shadow-glow-cyan cursor-pointer"
              >
                Get Free Growth Proposal
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                href="https://wa.me/94760967884"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-surface hover:bg-white/[0.08] border border-white/10 text-white font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon size={18} className="text-[#25D366]" />
                <span>Chat With Strategist</span>
              </motion.a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

// --- Comprehensive Consultation Form & Contact Section ---
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: 'Full Growth System (Ads + Web)',
    budget: '$1,000 - $3,000 / mo',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Hotlines */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal delay={0.05} y={20}>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-xs font-bold uppercase tracking-wider text-cyan-400 mb-6 font-mono">
                  // CONTACT DETAILS
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Let&apos;s Discuss <br />
                  <span className="text-gradient-cyan">Your Project.</span>
                </h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
                  Have questions or need an estimate? Reach out directly through our hotlines or submit the proposal request form.
                </p>

                <div className="space-y-4 mb-10">
                  <motion.a
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="tel:+94760967884"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-surface border border-white/[0.06] hover:border-cyan-400/40 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono">Direct Hotline</div>
                      <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">076 096 7884</div>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="mailto:info@nclouddigital.com"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-surface border border-white/[0.06] hover:border-cyan-400/40 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono">Official Inquiries</div>
                      <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">info@nclouddigital.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    href="https://wa.me/94760967884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-surface border border-white/[0.06] hover:border-[#25D366]/40 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                      <WhatsAppIcon size={22} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono">Instant WhatsApp</div>
                      <div className="text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">Chat With Strategist</div>
                    </div>
                  </motion.a>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-400/5 border border-cyan-400/15 flex items-center gap-3">
                  <ShieldCheck size={20} className="text-cyan-400 shrink-0" />
                  <span className="text-xs text-cyan-300/80 font-light leading-relaxed">
                    Strict Confidentiality Guaranteed &bull; Fast NDA Signatures Upon Request
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15} y={25}>
              <div className="glass-surface p-8 sm:p-12 rounded-3xl border border-white/[0.08] shadow-2xl relative">
                {formSubmitted ? (
                  <div className="py-16 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                      Proposal Request Received!
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you for reaching out. Founder Nethum and our growth engineering team will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Nethum Vidyalankara"
                          className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Brand Co."
                          className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="076 096 7884"
                          className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nethum@brand.com"
                          className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white bg-[#0D1117]"
                        >
                          <option>Full Growth System (Ads + Web)</option>
                          <option>Meta Ads & Lead Generation</option>
                          <option>Website & E-Commerce Engineering</option>
                          <option>Social Media Management</option>
                          <option>Cinematic Content & 3D Media</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Monthly Marketing Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white bg-[#0D1117]"
                        >
                          <option>$1,000 - $3,000 / mo</option>
                          <option>$3,000 - $8,000 / mo</option>
                          <option>$8,000 - $20,000 / mo</option>
                          <option>$20,000+ / mo (Enterprise Scale)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Growth Goals &amp; Current Bottlenecks
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your current ROAS, target leads, or required website scope..."
                        className="w-full glass-input px-4 py-3 rounded-xl text-base sm:text-sm text-white resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 450, damping: 25 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#08090B] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-glow-cyan flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Analyzing Strategy Brief...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Request Custom Growth Strategy</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Agency Footer ---
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 bg-[#040507] border-t border-white/[0.08] text-slate-400 text-sm select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-orange-500/20 border border-cyan-400/30 p-1.5 flex items-center justify-center shadow-glow-cyan">
              <img src="/logo.png" alt="NCloud Digital" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold tracking-tight text-white flex items-center gap-1">
                NCloud <span className="text-gradient-cyan">Digital</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono">
                Performance Marketing &bull; Web Engineering
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-all cursor-pointer font-mono"
          >
            <span>Back to Top</span>
            <ArrowUpRight size={14} className="text-cyan-400" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/[0.06]">
          <div className="md:col-span-6 flex flex-col gap-3">
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              NCloud Digital is a performance digital marketing agency and web engineering studio founded by Nethum Vidyalankara, dedicated to scaling high-growth brands in Sri Lanka and worldwide.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Colombo, Sri Lanka &bull; Operating Globally</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 mb-1">
              Navigation
            </span>
            <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Growth Solutions</a>
            <a href="#why-us" className="text-slate-400 hover:text-cyan-400 transition-colors">NCloud Advantage</a>
            <a href="#process" className="text-slate-400 hover:text-cyan-400 transition-colors">Workflow Journey</a>
            <a href="#metrics" className="text-slate-400 hover:text-cyan-400 transition-colors">Tracked Outcomes</a>
            <a href="#founder" className="text-slate-400 hover:text-cyan-400 transition-colors">Executive Leadership</a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 mb-1">
              Connect With Us
            </span>
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/94760967884"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/nclouddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all"
                aria-label="Instagram"
              >
                <Share2 size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com/nclouddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all"
                aria-label="Facebook"
              >
                <MetaIcon size={18} />
              </motion.a>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-2">
              Hotline: 076 096 7884
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} NCloud Digital. All Rights Reserved.</span>
          <span>Engineered for Maximum Commercial Conversion</span>
        </div>
      </div>
    </footer>
  );
};

// --- Client Hub Modal ---
const ClientHubModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md glass-surface p-8 rounded-3xl border border-cyan-400/40 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Lock size={20} />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white">Client Hub Portal</h3>
            <p className="text-xs text-slate-400">Secure Sprint &amp; Live ROAS Telemetry</p>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Demo Client Hub Portal. Please contact your NCloud account manager for live enterprise credentials.'); }} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Client Workspace ID
            </label>
            <input
              type="text"
              required
              placeholder="e.g. NC-BEAUTY-2026"
              className="w-full glass-input px-4 py-3 rounded-xl text-sm text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Access Token
            </label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              className="w-full glass-input px-4 py-3 rounded-xl text-sm text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#08090B] font-bold text-sm transition-colors mt-2 cursor-pointer"
          >
            Authenticate &amp; Enter Portal
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500 font-mono">
          Need portal credentials? Contact your NCloud account manager.
        </div>
      </motion.div>
    </div>
  );
};

// --- Floating Sticky WhatsApp Button ---
const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 450, damping: 22 }}
      href="https://wa.me/94760967884"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-colors duration-300 group cursor-pointer"
      aria-label="Chat with NCloud Digital on WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400 text-[9px] font-bold text-[#08090B] items-center justify-center">1</span>
      </span>
    </motion.a>
  );
};

// --- Main Application Component ---
export default function App() {
  const [activeView, setActiveView] = useState<'jack' | 'ncloud' | 'halo'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'halo' || window.location.hash.startsWith('#halo')) return 'halo';
      if (params.get('view') === 'jack' || window.location.hash.startsWith('#jack')) return 'jack';
      if (params.get('view') === 'ncloud' || window.location.hash.startsWith('#ncloud')) return 'ncloud';
    }
    return 'ncloud'; // Set Elevated Classic Agency as default
  });
  const [clientHubOpen, setClientHubOpen] = useState(false);

  useEffect(() => {
    if (activeView === 'jack') {
      document.title = 'NCloud Digital | 3D Experience & Growth Systems';
    } else if (activeView === 'halo') {
      document.title = 'Halo / USD Halo — The Automated Digital Dollar';
    } else {
      document.title = 'NCloud Digital | Premium Digital Marketing & Web Development Agency';
    }
  }, [activeView]);

  return (
    <>
      {/* Portfolio / Project Switcher Floating Badge */}
      <aside
        aria-label="Portfolio Switcher"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 p-1.5 bg-[#121820]/95 backdrop-blur-md border border-white/10 rounded-full shadow-2xl text-xs font-sans select-none"
      >
        <button
          onClick={() => setActiveView('ncloud')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 font-semibold cursor-pointer ${
            activeView === 'ncloud'
              ? 'bg-cyan-500 text-black shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Classic Agency
        </button>
        <button
          onClick={() => setActiveView('jack')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium cursor-pointer ${
            activeView === 'jack'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          NCloud 3D
        </button>
        <button
          onClick={() => setActiveView('halo')}
          className={`px-3.5 py-1.5 rounded-full transition-all duration-200 font-semibold cursor-pointer ${
            activeView === 'halo'
              ? 'bg-white text-black shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Halo (NCloud Fintech)
        </button>
      </aside>

      {activeView === 'halo' ? (
        <HaloLanding />
      ) : activeView === 'jack' ? (
        <JackPortfolio />
      ) : (
        <div className="bg-[#08090B] min-h-screen text-[#F5F7FA] font-sans antialiased overflow-x-hidden selection:bg-cyan-400/30 selection:text-cyan-300">
          <Navbar onOpenClientHub={() => setClientHubOpen(true)} />
          
          <main>
            <HeroSection />
            <TrustedClientsSection />
            <ServicesSection />
            <WhyUsSection />
            <ProcessSection />
            <MetricsSection />
            <FounderSection />
            <FAQSection />
            <CtaBanner />
            <ContactSection />
          </main>

          <Footer />
          <FloatingWhatsApp />
          <ClientHubModal isOpen={clientHubOpen} onClose={() => setClientHubOpen(false)} />
        </div>
      )}
    </>
  );
}
