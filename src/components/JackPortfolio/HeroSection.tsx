import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Adspace3DHorizon } from './Adspace3DHorizon';
import { 
  Menu, 
  X, 
  Plus, 
  Minus, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCardCollapsed, setIsCardCollapsed] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // Form states for the signature lime Get Started card
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp direct integration
    const message = `Hi NCloud Digital! I'd like to get a free marketing plan.%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A*Company:* ${encodeURIComponent(formData.company || 'Not provided')}%0A*Budget:* ${encodeURIComponent(formData.budget || 'Not specified')}`;
    setTimeout(() => {
      window.open(`https://wa.me/94760967884?text=${message}`, '_blank');
    }, 700);
  };

  const navItems = [
    { name: 'WORK', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'METRICS', href: '#metrics' },
    { name: 'FOUNDER', href: '#founder' },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-between relative bg-[#040804] text-white font-sans select-none overflow-x-clip">
      
      {/* ------------------------------------------------------------------ */}
      {/* 3D WebGL Layer: Perspective Celestial Grid, Curved Horizon & Orbit */}
      {/* ------------------------------------------------------------------ */}
      <Adspace3DHorizon />

      {/* Atmospheric Radial Gradients for Deep Contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-emerald-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[350px] bg-lime-400/12 blur-[150px] rounded-full pointer-events-none" />

      {/* ------------------------------------------------------------------ */}
      {/* Top Navbar: Clean agency layout matching reference                 */}
      {/* ------------------------------------------------------------------ */}
      <FadeIn delay={0} y={-15} className="w-full z-40 relative">
        <header className="flex justify-between items-center w-full px-5 sm:px-8 md:px-12 pt-5 sm:pt-7">
          
          {/* Left: Boxed Logo Mark [ ADSPACE* ] style -> [ NCLOUD* ] */}
          <a 
            href="#ncloud-site" 
            className="border border-white/30 hover:border-white/70 px-3.5 py-1.5 rounded-sm transition-all duration-200 group bg-black/20 backdrop-blur-sm pointer-events-auto"
          >
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-white group-hover:text-[#CCFF00] transition-colors">
              NCLOUD<span className="text-[#CCFF00]">*</span>
            </span>
          </a>

          {/* Center: Minimalist Agency Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                className="text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold flex items-center gap-1 transition-colors py-2"
              >
                <span>SERVICES</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </a>

              {/* Services Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 py-2 rounded-xl bg-[#081008]/95 border border-white/10 backdrop-blur-xl shadow-2xl z-50 flex flex-col">
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-[#CCFF00] hover:bg-white/5 transition-colors">
                    META ADS SCALING
                  </a>
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-[#CCFF00] hover:bg-white/5 transition-colors">
                    HIGH-SPEED WEB UI
                  </a>
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-[#CCFF00] hover:bg-white/5 transition-colors">
                    CINEMATIC 4K MEDIA
                  </a>
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-[#CCFF00] hover:bg-white/5 transition-colors">
                    CRO &amp; FUNNELS
                  </a>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Right Mobile Toggle Button (Visible on mobile screens) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#CCFF00] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-6 mx-4 mt-3 rounded-2xl bg-[#081008]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3 z-50 animate-in fade-in duration-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-[#CCFF00] py-1.5"
            >
              Services
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-[#CCFF00] py-1.5"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#CCFF00] py-1.5"
            >
              Contact Agency
            </a>
          </div>
        )}
      </FadeIn>

      {/* ------------------------------------------------------------------ */}
      {/* SIGNATURE ELECTRIC LIME FLOATING CARD ("Get Started")               */}
      {/* Matches the top-right neon lime floating card in the reference     */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-4 sm:top-5 right-4 sm:right-6 lg:right-10 z-40 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className={`bg-[#CCFF00] text-[#0A0E06] rounded-2xl sm:rounded-3xl shadow-[0_15px_50px_rgba(204,255,0,0.25)] border border-[#d8ff33] transition-all duration-300 ${
            isCardCollapsed 
              ? 'w-[200px] sm:w-[220px] p-4 cursor-pointer' 
              : 'w-[280px] sm:w-[320px] p-5 sm:p-6'
          }`}
        >
          {/* Card Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none text-[#0A0E06]">
                Get<br />Started
              </h2>
              {!isCardCollapsed && (
                <p className="text-xs text-[#0A0E06]/80 mt-1 font-medium">
                  Get your free marketing plan.
                </p>
              )}
            </div>

            {/* Toggle Button (+ / -) */}
            <button
              type="button"
              onClick={() => setIsCardCollapsed(!isCardCollapsed)}
              className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-[#0A0E06] transition-colors"
              title={isCardCollapsed ? 'Expand Form' : 'Collapse Form'}
            >
              {isCardCollapsed ? <Plus size={16} /> : <Minus size={16} />}
            </button>
          </div>

          {/* Form Content */}
          <AnimatePresence>
            {!isCardCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4"
              >
                {formSubmitted ? (
                  <div className="py-6 flex flex-col items-center text-center gap-2">
                    <CheckCircle2 size={36} className="text-[#0A0E06]" />
                    <span className="font-bold text-sm text-[#0A0E06]">Request Received!</span>
                    <span className="text-xs text-[#0A0E06]/80">Connecting to our WhatsApp strategy line...</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.08] hover:bg-black/[0.12] focus:bg-black/[0.14] text-xs text-[#0A0E06] placeholder-[#0A0E06]/55 border border-black/10 focus:border-black/30 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.08] hover:bg-black/[0.12] focus:bg-black/[0.14] text-xs text-[#0A0E06] placeholder-[#0A0E06]/55 border border-black/10 focus:border-black/30 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.08] hover:bg-black/[0.12] focus:bg-black/[0.14] text-xs text-[#0A0E06] placeholder-[#0A0E06]/55 border border-black/10 focus:border-black/30 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/[0.08] hover:bg-black/[0.12] focus:bg-black/[0.14] text-xs text-[#0A0E06] border border-black/10 focus:border-black/30 outline-none transition-all font-medium"
                      >
                        <option value="" disabled className="text-black/50">Marketing Budget</option>
                        <option value="Rs. 150,000 - 500,000 /mo">Rs. 150,000 – 500,000 /mo</option>
                        <option value="Rs. 500,000 - 1,500,000 /mo">Rs. 500,000 – 1,500,000 /mo</option>
                        <option value="Rs. 1,500,000+ /mo">Rs. 1,500,000+ /mo (Enterprise)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mt-1 w-full py-2.5 px-4 rounded-full border-2 border-[#0A0E06] text-[#0A0E06] font-bold text-xs uppercase tracking-wider hover:bg-[#0A0E06] hover:text-[#CCFF00] transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                    >
                      <span>SUBMIT</span>
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Center Hero Editorial Title & Visual Composition                   */}
      {/* Reach / New (with 3D Orbital Ellipse) / Horizons                   */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full my-auto pt-16 sm:pt-20 md:pt-24 pb-8 flex flex-col items-center justify-center text-center px-4 relative z-20">
        
        {/* Editorial Heading Stack */}
        <FadeIn delay={0.15} y={25} className="flex flex-col items-center select-none relative">
          
          {/* Word 1: Reach */}
          <h1 className="text-white text-[17vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-bold tracking-tight leading-[0.92] drop-shadow-xl">
            Reach
          </h1>

          {/* Word 2: New (with 3D Orbital Ellipse Ring wrapping around it) */}
          <div className="relative inline-flex items-center justify-center my-0 sm:-my-1">
            
            {/* SVG Overlay Highlight for the Signature Tilted 3D Orbital Ellipse */}
            <div className="absolute inset-0 -inset-x-8 sm:-inset-x-12 -inset-y-4 pointer-events-none flex items-center justify-center">
              <svg 
                viewBox="0 0 340 140" 
                className="w-[125%] h-[155%] overflow-visible animate-pulse duration-1000"
                style={{
                  transform: 'rotate(-19deg) translateY(-2px)',
                }}
              >
                {/* Back half of the orbital ring (passes behind text) */}
                <ellipse 
                  cx="170" 
                  cy="70" 
                  rx="155" 
                  ry="52" 
                  fill="none" 
                  stroke="#CCFF00" 
                  strokeWidth="2.2" 
                  strokeOpacity="0.85"
                  className="filter drop-shadow-[0_0_12px_rgba(204,255,0,0.6)]"
                />
                {/* Secondary delicate outer ring */}
                <ellipse 
                  cx="170" 
                  cy="70" 
                  rx="162" 
                  ry="55" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="0.8" 
                  strokeOpacity="0.4"
                />
              </svg>
            </div>

            {/* Glowing 4-Point Star Sparkles Floating Near the Ring */}
            <div className="absolute -top-3 sm:-top-4 -right-6 sm:-right-10 flex items-end gap-1 pointer-events-none text-[#CCFF00] drop-shadow-[0_0_10px_rgba(204,255,0,0.8)] animate-pulse">
              <span className="text-xl sm:text-2xl font-serif">✦</span>
              <span className="text-xs sm:text-sm text-white/90 font-serif">✦</span>
            </div>

            {/* The Italic Luxury Word "New" */}
            <span 
              className="text-white font-serif italic text-[20vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10vw] font-normal leading-[0.88] z-10 px-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
              style={{
                fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif',
                letterSpacing: '-0.02em',
              }}
            >
              New
            </span>
          </div>

          {/* Word 3: Horizons */}
          <h2 className="text-white text-[17vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-bold tracking-tight leading-[0.92] drop-shadow-xl mt-0 sm:-mt-1">
            Horizons
          </h2>
        </FadeIn>

        {/* Central Pill Button: "Get Started" with Neon Glow Rim */}
        <FadeIn delay={0.3} y={20} className="mt-7 sm:mt-9 z-30">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#080D06] border border-[#76FF66]/60 text-white hover:text-[#CCFF00] hover:border-[#CCFF00] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_24px_rgba(118,255,102,0.35)] hover:shadow-[0_0_36px_rgba(204,255,0,0.55)] cursor-pointer transform hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
          </a>
        </FadeIn>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Lower Curved Horizon Section & Editorial Agency Statement           */}
      {/* Matches the curved planet boundary and editorial text in screenshot */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full relative z-20 mt-auto pb-10 sm:pb-14 pt-12 sm:pt-16 px-5 sm:px-8">
        
        {/* Soft Aurora Glow rising from the curved horizon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-24 bg-gradient-to-t from-emerald-500/20 via-lime-400/10 to-transparent blur-2xl pointer-events-none" />

        <FadeIn delay={0.4} y={30} className="max-w-4xl mx-auto text-center relative z-20">
          {/* Distinctive Editorial Typographic Statement */}
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] leading-relaxed sm:leading-snug text-white/95 max-w-3xl mx-auto font-light drop-shadow-md">
            <span className="font-extrabold tracking-wider uppercase font-sans text-white">NCLOUD</span>{' '}
            <span 
              className="italic font-normal text-white/80"
              style={{ fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif' }}
            >
              is a full-service
            </span>{' '}
            <span className="font-extrabold uppercase tracking-wide font-sans text-white">STRATEGY, DESIGN</span>{' '}
            <span 
              className="italic font-normal text-white/80"
              style={{ fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif' }}
            >
              and
            </span>{' '}
            <span className="font-extrabold uppercase tracking-wide font-sans text-white">DIGITAL MARKETING AGENCY</span>{' '}
            <span 
              className="italic font-normal text-white/80"
              style={{ fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif' }}
            >
              that helps
            </span>{' '}
            <span className="font-extrabold uppercase tracking-wide font-sans text-white">EMERGING</span>{' '}
            <span 
              className="italic font-normal text-white/80"
              style={{ fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif' }}
            >
              and
            </span>{' '}
            <span className="font-extrabold uppercase tracking-wide font-sans text-white">ESTABLISHED BRANDS</span>{' '}
            <span className="font-extrabold uppercase tracking-wide font-sans text-white">GROW</span>{' '}
            <span 
              className="italic font-normal text-[#CCFF00]"
              style={{ fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif' }}
            >
              FASTER.
            </span>
          </p>

          {/* Performance Benchmark Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#CCFF00]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              4.8X BLENDED ROAS
            </span>
            <span className="text-white/20">&bull;</span>
            <span>RS. 12M+ GENERATED</span>
            <span className="text-white/20">&bull;</span>
            <span>45+ BRANDS SCALED</span>
            <span className="text-white/20">&bull;</span>
            <span>98% CLIENT RETENTION</span>
          </div>
        </FadeIn>
      </div>

    </section>
  );
};
