import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ContactButton } from './Buttons';
import { Magnet } from './Magnet';
import { Marketing3DCore } from './Marketing3DCore';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Video, 
  ShieldCheck, 
  Activity, 
  Calculator,
  ChevronRight,
  BarChart3,
  Flame
} from 'lucide-react';

type CampaignMode = 'meta' | 'web' | 'media' | 'all';
type BudgetKey = '150k' | '500k' | '1.5m' | '3m';

interface BudgetData {
  spendLabel: string;
  revenueEst: string;
  roas: string;
  leadsEst: string;
  cacEst: string;
  waParam: string;
}

const budgetScenarios: Record<BudgetKey, BudgetData> = {
  '150k': {
    spendLabel: 'Rs. 150,000 /mo',
    revenueEst: 'Rs. 720,000+',
    roas: '4.8X',
    leadsEst: '180 – 240',
    cacEst: 'Rs. 625 / Lead',
    waParam: 'Rs. 150K monthly budget',
  },
  '500k': {
    spendLabel: 'Rs. 500,000 /mo',
    revenueEst: 'Rs. 2,400,000+',
    roas: '4.8X',
    leadsEst: '650 – 850',
    cacEst: 'Rs. 580 / Lead',
    waParam: 'Rs. 500K monthly budget',
  },
  '1.5m': {
    spendLabel: 'Rs. 1,500,000 /mo',
    revenueEst: 'Rs. 7,200,000+',
    roas: '4.8X',
    leadsEst: '2,100 – 2,800',
    cacEst: 'Rs. 535 / Lead',
    waParam: 'Rs. 1.5M monthly budget',
  },
  '3m': {
    spendLabel: 'Rs. 3,000,000 /mo',
    revenueEst: 'Rs. 14,400,000+',
    roas: '4.8X',
    leadsEst: '4,500 – 6,000+',
    cacEst: 'Rs. 495 / Lead',
    waParam: 'Rs. 3M enterprise monthly budget',
  },
};

const modeData: Record<CampaignMode, {
  badge: string;
  tagline: string;
  stat1: { label: string; value: string };
  stat2: { label: string; value: string };
  stat3: { label: string; value: string };
  accentColor: string;
  glowClass: string;
}> = {
  meta: {
    badge: 'META ADS & CAPI ENGINE',
    tagline: 'High-Intent Algorithmic Audience Scaling & iOS 14+ Server CAPI Bypass',
    stat1: { label: 'AVG BLENDED ROAS', value: '4.8X' },
    stat2: { label: 'CAPI ATTRIBUTION', value: '99.8%' },
    stat3: { label: 'CAC REDUCTION', value: '-38%' },
    accentColor: '#22d3ee',
    glowClass: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  web: {
    badge: 'HIGH-VELOCITY WEB ARCHITECTURE',
    tagline: 'Framer & Headless React Funnels Engineered for Maximum Conversion Rates',
    stat1: { label: 'AVG LOAD SPEED', value: '< 0.8s' },
    stat2: { label: 'CONVERSION UPLIFT', value: '+142%' },
    stat3: { label: 'CORE WEB VITALS', value: '100/100' },
    accentColor: '#10b981',
    glowClass: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  media: {
    badge: '4K CINEMATIC CREATIVES & REELS',
    tagline: 'Hook-Tested Short-Form Video & High-Converting Commercial Production',
    stat1: { label: '3-SEC HOOK RATE', value: '64%' },
    stat2: { label: 'TOTAL VIEWS SCALED', value: '18M+' },
    stat3: { label: 'CLICK-THRU RATE (CTR)', value: '3.4X' },
    accentColor: '#f97316',
    glowClass: 'from-orange-500/20 via-amber-500/10 to-transparent',
  },
  all: {
    badge: 'FULL DIGITAL GROWTH FLYWHEEL',
    tagline: 'Integrated Ad Spend, High-Converting Web Products & Viral Media Systems',
    stat1: { label: 'TOTAL REVENUE SCALED', value: 'Rs. 12M+' },
    stat2: { label: 'CLIENT RETENTION', value: '98%' },
    stat3: { label: 'ACTIVE BRANDS', value: '45+' },
    accentColor: '#a855f7',
    glowClass: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
};

const tickerItems = [
  '✦ Colombo Luxury Fashion: 6.4X ROAS (Rs. 3.2M Revenue in 30 Days)',
  '✦ B2B Software Platform: 420 High-Ticket Inbound Leads at Rs. 410 CPL',
  '✦ D2C Wellness Brand: +215% Conversion Rate via Custom Web Funnel',
  '✦ Retail Chain: Rs. 4.2M Holiday Revenue Scaled with Meta CAPI Engine',
  '✦ Fitness Apparel: 18,000+ Conversions with High-Hook UGC Video Ads',
];

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<CampaignMode>('meta');
  const [selectedBudget, setSelectedBudget] = useState<BudgetKey>('500k');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentModeInfo = modeData[activeMode];
  const currentBudgetInfo = budgetScenarios[selectedBudget];

  return (
    <section className="min-h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C] font-kanit select-none overflow-x-clip pt-3 pb-8 sm:pb-12">
      {/* Background Lighting & Spatial Glow Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] sm:w-[800px] h-[350px] sm:h-[550px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[350px] sm:w-[600px] h-[300px] sm:h-[450px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-500/08 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Floor Pattern with Radial Mask */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 70%, transparent 100%)',
        }}
      />

      {/* Top Floating Glass Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <header className="flex justify-between items-center w-full px-4 sm:px-8 md:px-12 pt-3 md:pt-5">
          {/* Brand Logo & Live Status */}
          <a href="#about" className="flex items-center gap-3 group pointer-events-auto">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#121820] border border-white/15 p-1.5 flex items-center justify-center transition-all group-hover:scale-105 group-hover:border-cyan-400/50 shadow-lg shadow-cyan-950/20">
              <img src="/logo.png" alt="NCloud Digital" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg leading-tight">
                  NCloud<span className="text-cyan-400">.</span>
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Q4 OPEN
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-[#D7E2EA]/50 uppercase font-light">
                Performance Growth Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2 rounded-full bg-[#121820]/70 border border-white/10 backdrop-blur-xl shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs lg:text-sm hover:text-cyan-400 hover:opacity-100 opacity-75 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Audit Funnel + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Magnet padding={80} strength={4}>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 text-xs uppercase tracking-wider font-semibold text-cyan-300 hover:text-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.15)] pointer-events-auto"
              >
                <Sparkles size={13} className="text-cyan-400" />
                <span>Audit My Funnel</span>
                <ArrowUpRight size={13} className="text-cyan-400" />
              </a>
            </Magnet>

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
                Audit My Funnel &amp; Growth Plan
              </a>
              <a
                href="https://wa.me/94760967884"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-center bg-white/5 border border-white/10 text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <span>Chat on WhatsApp (076 096 7884)</span>
              </a>
            </div>
          </div>
        )}
      </FadeIn>

      {/* Live Wins Stream Ticker Pill */}
      <FadeIn delay={0.1} y={-10} className="w-full px-4 mt-3 sm:mt-4 z-30">
        <div className="max-w-4xl mx-auto rounded-full bg-white/[0.03] border border-white/10 px-4 py-1.5 backdrop-blur-md flex items-center gap-3 overflow-hidden shadow-sm">
          <div className="flex items-center gap-1.5 shrink-0 text-cyan-400 font-mono text-[10px] uppercase font-bold tracking-wider">
            <Flame size={12} className="text-orange-400 animate-pulse" />
            <span>LIVE WINS:</span>
          </div>
          <div className="overflow-hidden relative w-full text-xs text-[#D7E2EA]/75 font-mono whitespace-nowrap">
            <motion.div
              className="inline-flex gap-8"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
            >
              {[...tickerItems, ...tickerItems].map((item, idx) => (
                <span key={idx} className="hover:text-cyan-300 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </FadeIn>

      {/* Hero Centerpiece: High-Octane Digital Marketing Architecture */}
      <div className="w-full my-auto pt-6 sm:pt-8 md:pt-10 pb-4 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 relative z-20">
        
        {/* Top Eyebrow Tag */}
        <FadeIn delay={0.15} y={15} className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-[11px] sm:text-xs uppercase tracking-widest text-cyan-300 font-mono mb-3 sm:mb-4 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>AI-Driven Meta Advertising &bull; High-Conversion Web &bull; 4K Media</span>
          </div>
        </FadeIn>

        {/* Massive Editorial Headline */}
        <FadeIn delay={0.2} y={20} className="w-full relative">
          <h1 className="font-black uppercase tracking-tight text-center select-none text-white drop-shadow-2xl">
            {/* Mobile View: 2 Stacked Lines */}
            <span className="block sm:hidden text-[17vw] leading-[0.88] hero-heading text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400">
              NCLOUD
            </span>
            <span className="block sm:hidden text-[17vw] leading-[0.88] hero-heading text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-500">
              DIGITAL
            </span>

            {/* Desktop / Tablet View */}
            <span className="hidden sm:inline-block text-[7.5vw] md:text-[8.2vw] lg:text-[8.6vw] xl:text-[9.2vw] 2xl:text-[130px] leading-none whitespace-nowrap hero-heading px-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-zinc-400">
              NCLOUD DIGITAL
            </span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base font-light tracking-widest uppercase text-cyan-400/90 font-mono">
            ENGINEERING PREDICTABLE 4.8X BLENDED REVENUE SYSTEMS
          </p>
        </FadeIn>

        {/* Interactive Campaign Engine Mode Selector Tabs */}
        <FadeIn delay={0.25} y={20} className="w-full max-w-2xl mt-5 sm:mt-6 z-30">
          <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 shadow-2xl">
            <button
              onClick={() => setActiveMode('meta')}
              className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs sm:text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 ${
                activeMode === 'meta'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-bold'
                  : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Zap size={13} className={activeMode === 'meta' ? 'text-cyan-400' : 'text-zinc-400'} />
              <span>Meta Ads Scaling</span>
            </button>

            <button
              onClick={() => setActiveMode('web')}
              className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs sm:text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 ${
                activeMode === 'web'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.25)] font-bold'
                  : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Activity size={13} className={activeMode === 'web' ? 'text-emerald-400' : 'text-zinc-400'} />
              <span>High-Speed Web UI</span>
            </button>

            <button
              onClick={() => setActiveMode('media')}
              className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs sm:text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 ${
                activeMode === 'media'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-400/40 shadow-[0_0_15px_rgba(249,115,22,0.25)] font-bold'
                  : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Video size={13} className={activeMode === 'media' ? 'text-orange-400' : 'text-zinc-400'} />
              <span>Cinematic 4K Media</span>
            </button>

            <button
              onClick={() => setActiveMode('all')}
              className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs sm:text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 ${
                activeMode === 'all'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.25)] font-bold'
                  : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <BarChart3 size={13} className={activeMode === 'all' ? 'text-purple-400' : 'text-zinc-400'} />
              <span>Full Flywheel</span>
            </button>
          </div>
        </FadeIn>

        {/* 3D Visual Centerpiece Area with Floating Live HUD Telemetry */}
        <div className="w-full max-w-5xl relative mt-4 sm:mt-6 flex flex-col items-center">
          
          {/* Spatial Glow backing the 3D Engine */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-72 sm:h-96 rounded-full blur-[130px] pointer-events-none transition-all duration-700 bg-gradient-to-r ${currentModeInfo.glowClass}`}
          />

          {/* Floating HUD Badge: Left (Desktop) */}
          <div className="hidden lg:block absolute left-4 top-1/3 -translate-y-1/2 z-30 pointer-events-auto">
            <Magnet padding={100} strength={3.5}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-2xl bg-[#121820]/80 border border-white/10 backdrop-blur-xl shadow-2xl text-left max-w-[210px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SYSTEM TELEMETRY
                  </span>
                  <span className="text-[9px] font-mono text-white/40">ONLINE</span>
                </div>
                <div className="text-xl font-bold font-mono text-white">
                  {currentModeInfo.stat1.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wide text-white/60 mb-2">
                  {currentModeInfo.stat1.label}
                </div>
                <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full w-[88%]" />
                </div>
              </motion.div>
            </Magnet>
          </div>

          {/* Floating HUD Badge: Right (Desktop) */}
          <div className="hidden lg:block absolute right-4 top-1/3 -translate-y-1/2 z-30 pointer-events-auto">
            <Magnet padding={100} strength={3.5}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-2xl bg-[#121820]/80 border border-white/10 backdrop-blur-xl shadow-2xl text-left max-w-[210px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    CONVERSION LOCK
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400/70">ACTIVE</span>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-300">
                  {currentModeInfo.stat2.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wide text-white/60 mb-2">
                  {currentModeInfo.stat2.label}
                </div>
                <div className="text-[10px] text-white/50 leading-tight">
                  Zero tracking dropoff via Server CAPI Engine
                </div>
              </motion.div>
            </Magnet>
          </div>

          {/* 3D WebGL Canvas Component */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing">
            <Marketing3DCore
              mode={activeMode}
              className="w-full h-full"
            />
            {/* Interactive hint micro-badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#D7E2EA]/60 pointer-events-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
              <span>3D GROWTH ENGINE &bull; DRAG TO ROTATE &bull; HOVER NODES</span>
            </div>
          </div>

          {/* Active Mode Dynamic Telemetry Bar (Mobile + Tablet + PC) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-3xl mt-2 p-3 sm:p-4 rounded-2xl bg-[#121820]/90 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left z-20"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentModeInfo.accentColor }} />
                  {currentModeInfo.badge}
                </span>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/85 mt-0.5">
                  {currentModeInfo.tagline}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 font-mono">
                <div className="text-center sm:text-right">
                  <div className="text-lg sm:text-xl font-bold text-white leading-none">
                    {currentModeInfo.stat1.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-white/50 mt-1">
                    {currentModeInfo.stat1.label}
                  </div>
                </div>
                <div className="h-7 w-[1px] bg-white/10" />
                <div className="text-center sm:text-right">
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 leading-none">
                    {currentModeInfo.stat2.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-white/50 mt-1">
                    {currentModeInfo.stat2.label}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* User-Retention Magnet #2: Interactive Projected ROAS / Scale Estimator Widget */}
        <FadeIn delay={0.3} y={25} className="w-full max-w-4xl mt-8 sm:mt-10 z-20">
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#141b24]/90 to-[#0e131a]/90 border border-cyan-400/20 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-white/10 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <Calculator size={14} className="text-cyan-400" />
                  <span>Interactive Growth Estimator</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  Project Your Monthly Returns With NCloud Performance Systems
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-[11px] font-mono text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>BENCHMARK: 4.8X BLENDED ROAS</span>
              </div>
            </div>

            {/* Budget Selector Chips */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-xs uppercase font-mono tracking-wider text-white/60 text-center sm:text-left">
                Select Your Planned Monthly Ad Spend:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['150k', '500k', '1.5m', '3m'] as BudgetKey[]).map((key) => {
                  const b = budgetScenarios[key];
                  const isSelected = selectedBudget === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedBudget(key)}
                      className={`py-2.5 px-3 rounded-xl border font-mono text-xs sm:text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center gap-0.5 ${
                        isSelected
                          ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-[0_0_18px_rgba(34,211,238,0.3)] scale-[1.02]'
                          : 'bg-white/[0.03] border-white/10 text-[#D7E2EA]/75 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{b.spendLabel}</span>
                      <span className={`text-[10px] ${isSelected ? 'text-cyan-300' : 'text-white/40'}`}>
                        {key === '3m' ? 'Enterprise Tier' : 'Growth Plan'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Projected Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                  Projected Revenue
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                  {currentBudgetInfo.revenueEst}
                </span>
                <span className="text-[10px] text-cyan-400/80 block mt-0.5">
                  ({currentBudgetInfo.roas} Historical Return)
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                  Est. Qualified Leads / Orders
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-emerald-300">
                  {currentBudgetInfo.leadsEst}
                </span>
                <span className="text-[10px] text-emerald-400/80 block mt-0.5">
                  High-Intent Conversion Focus
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                  Target Acquisition Cost (CAC)
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-white">
                  {currentBudgetInfo.cacEst}
                </span>
                <span className="text-[10px] text-white/40 block mt-0.5">
                  -38% vs. Industry Average
                </span>
              </div>
            </div>

            {/* Direct Action Trigger */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-white/60 font-mono text-center sm:text-left">
                *Projections based on verified 45+ brand campaigns scaled across Sri Lanka &amp; Global markets.
              </span>
              <a
                href={`https://wa.me/94760967884?text=Hi%20Nethum%20and%20NCloud%20team,%20I'm%20interested%20in%20scaling%20my%20business%20with%20a%20budget%20of%20${encodeURIComponent(currentBudgetInfo.spendLabel)}.%20Let's%20discuss%20the%20strategy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#0C0C0C] font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-400/20 whitespace-nowrap"
              >
                <MessageSquare size={14} />
                <span>Claim Strategy on WhatsApp</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar: Value Proposition & Contact Action */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-5 w-full px-5 sm:px-8 md:px-12 pb-3 sm:pb-4 mt-auto z-20">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 max-w-md">
            <p
              style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.15rem)' }}
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            >
              We engineer high-converting digital products, Meta ad engines, and measurable growth systems for ambitious brands.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-cyan-400 font-mono tracking-wider">
              <span>[4.8X AVG ROAS]</span>
              <span>&bull;</span>
              <span>[45+ BRANDS SCALED]</span>
              <span>&bull;</span>
              <span>[RS. 12M+ GENERATED]</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
          <ContactButton href="#contact" className="w-full sm:w-auto text-center">
            Book Strategy Call
          </ContactButton>

          <a
            href="https://wa.me/94760967884"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <MessageSquare size={14} className="text-emerald-400" />
            <span>WhatsApp (076 096 7884)</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
