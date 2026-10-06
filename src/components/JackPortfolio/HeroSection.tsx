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
  Sparkles,
  BarChart2,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCardCollapsed, setIsCardCollapsed] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // Form states for the floating 3D glassmorphic card
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
    <section className="min-h-screen w-full flex flex-col justify-between relative bg-[#02060D] text-white font-sans select-none overflow-x-clip">
      
      {/* ------------------------------------------------------------------ */}
      {/* 3D WebGL Layer: Anti-Gravity Spheres, Crystals, Grid & Horizon     */}
      {/* ------------------------------------------------------------------ */}
      <Adspace3DHorizon />

      {/* Volumetric Midnight Navy & Cyan Nebula Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] sm:w-[650px] h-[450px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[350px] bg-cyan-400/10 blur-[160px] rounded-full pointer-events-none" />

      {/* ------------------------------------------------------------------ */}
      {/* Top Navbar: Sleek, Flat Navigation with Electric Cyan Glow         */}
      {/* ------------------------------------------------------------------ */}
      <FadeIn delay={0} y={-15} className="w-full z-40 relative">
        <header className="flex justify-between items-center w-full px-5 sm:px-8 md:px-14 pt-5 sm:pt-7">
          
          {/* Left: Boxed Logo Mark [ ADSPACE* ] / [ NCLOUD* ] */}
          <a 
            href="#ncloud-site" 
            className="border border-white/25 hover:border-cyan-400/80 px-3.5 py-1.5 rounded-sm transition-all duration-300 group bg-[#040D1A]/50 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] pointer-events-auto"
          >
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-white group-hover:text-cyan-300 transition-colors">
              NCLOUD<span className="text-cyan-400">*</span>
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
                className="text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold flex items-center gap-1 transition-colors py-2 group"
              >
                <span>SERVICES</span>
                <ChevronDown size={12} className={`text-cyan-400 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </a>

              {/* Services Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 py-2.5 rounded-2xl bg-[#040D1A]/95 border border-cyan-400/25 backdrop-blur-2xl shadow-[0_15px_40px_rgba(2,6,13,0.9),0_0_25px_rgba(34,211,238,0.15)] z-50 flex flex-col">
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-cyan-300 hover:bg-white/5 transition-colors">
                    META ADS SCALING
                  </a>
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-cyan-300 hover:bg-white/5 transition-colors">
                    HIGH-SPEED WEB UI
                  </a>
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-cyan-300 hover:bg-white/5 transition-colors">
                    CINEMATIC 4K MEDIA
                  </a>
                  <a href="#services" className="px-4 py-2 text-xs font-mono text-white/80 hover:text-cyan-300 hover:bg-white/5 transition-colors">
                    CRO &amp; FUNNELS
                  </a>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-cyan-300 uppercase tracking-widest text-xs font-semibold transition-colors"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="text-white/80 hover:text-cyan-300 uppercase tracking-widest text-xs font-semibold transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Right Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-6 mx-4 mt-3 rounded-2xl bg-[#040D1A]/95 backdrop-blur-2xl border border-cyan-400/25 shadow-2xl flex flex-col gap-3 z-50 animate-in fade-in duration-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-cyan-300 py-1.5"
            >
              Services
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-cyan-300 py-1.5"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-cyan-300 py-1.5"
            >
              Contact Agency
            </a>
          </div>
        )}
      </FadeIn>

      {/* ------------------------------------------------------------------ */}
      {/* SIGNATURE FLOATING 3D GLASSMORPHIC CARD ("Get Started")            */}
      {/* Tilted in weightless perspective with electric cyan glowing borders */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-5 sm:top-7 right-4 sm:right-6 lg:right-12 z-40 pointer-events-auto">
        <motion.div
          animate={{
            y: [-4, 6, -4],
            rotateY: [-8, -6, -8],
            rotateX: [3, 5, 3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1200,
          }}
          className="relative"
        >
          {/* Floating Auxiliary Data Widget: Left Mini Telemetry Pane */}
          <motion.div
            animate={{ y: [3, -5, 3] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute -left-14 top-14 p-2.5 rounded-xl bg-[#040E1E]/80 border border-cyan-400/35 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,13,0.7),0_0_15px_rgba(34,211,238,0.2)] flex-col gap-1.5 pointer-events-none"
          >
            <div className="w-5 h-1 rounded-full bg-cyan-400" />
            <div className="w-7 h-1 rounded-full bg-cyan-400/50" />
            <div className="w-4 h-1 rounded-full bg-cyan-400/30" />
          </motion.div>

          {/* Floating Auxiliary Data Widget: Bottom-Right Tag */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute -right-6 -bottom-4 px-3 py-1.5 rounded-lg bg-[#040E1E]/85 border border-cyan-400/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,13,0.7),0_0_20px_rgba(34,211,238,0.25)] items-center gap-1.5 text-[10px] font-mono text-cyan-300 pointer-events-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>4.8X ROAS</span>
          </motion.div>

          {/* Main Weightless Glassmorphic Pane */}
          <div
            className={`rounded-2xl sm:rounded-3xl border border-cyan-400/40 bg-[#061427]/75 backdrop-blur-2xl transition-all duration-300 shadow-[0_20px_60px_rgba(2,6,13,0.85),0_0_35px_rgba(34,211,238,0.22),inset_0_0_20px_rgba(56,189,248,0.14)] ${
              isCardCollapsed 
                ? 'w-[200px] sm:w-[220px] p-4 cursor-pointer' 
                : 'w-[280px] sm:w-[320px] p-5 sm:p-6'
            }`}
          >
            {/* Card Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none text-white drop-shadow-sm">
                  Get<br />Started
                </h2>
                {!isCardCollapsed && (
                  <p className="text-xs text-cyan-200/70 mt-1 font-medium">
                    Get your free marketing plan.
                  </p>
                )}
              </div>

              {/* Toggle Button (+ / -) */}
              <button
                type="button"
                onClick={() => setIsCardCollapsed(!isCardCollapsed)}
                className="w-7 h-7 rounded-full bg-cyan-400/10 hover:bg-cyan-400/25 border border-cyan-400/30 flex items-center justify-center text-cyan-300 transition-colors"
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
                      <CheckCircle2 size={36} className="text-cyan-400 animate-pulse" />
                      <span className="font-bold text-sm text-white">Strategy Blueprint Ready!</span>
                      <span className="text-xs text-cyan-200/70">Connecting directly to WhatsApp...</span>
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914]/80 text-xs text-white placeholder:text-cyan-200/40 border border-cyan-400/20 focus:border-cyan-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.7)] outline-none transition-all font-medium"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914]/80 text-xs text-white placeholder:text-cyan-200/40 border border-cyan-400/20 focus:border-cyan-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.7)] outline-none transition-all font-medium"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914]/80 text-xs text-white placeholder:text-cyan-200/40 border border-cyan-400/20 focus:border-cyan-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.7)] outline-none transition-all font-medium"
                        />
                      </div>

                      <div>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#030914]/80 text-xs text-white border border-cyan-400/20 focus:border-cyan-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.7)] outline-none transition-all font-medium"
                        >
                          <option value="" disabled className="bg-[#040D1A] text-white/50">Marketing Budget</option>
                          <option value="Rs. 150,000 - 500,000 /mo" className="bg-[#040D1A] text-white">Rs. 150,000 – 500,000 /mo</option>
                          <option value="Rs. 500,000 - 1,500,000 /mo" className="bg-[#040D1A] text-white">Rs. 500,000 – 1,500,000 /mo</option>
                          <option value="Rs. 1,500,000+ /mo" className="bg-[#040D1A] text-white">Rs. 1,500,000+ /mo (Enterprise)</option>
                        </select>
                      </div>

                      {/* Glowing Electric Cyan Submit Button */}
                      <button
                        type="submit"
                        className="mt-1 w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-cyan-400 via-[#00F0FF] to-cyan-300 hover:from-cyan-300 hover:to-white text-[#02060D] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_25px_rgba(34,211,238,0.75)] hover:shadow-[0_0_35px_rgba(34,211,238,1)] active:scale-95 cursor-pointer"
                      >
                        <span>SUBMIT</span>
                        <ArrowRight size={14} className="stroke-[2.5]" />
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Center 3D Zero-Gravity Typography: "Reach New Horizons"             */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full my-auto pt-16 sm:pt-20 md:pt-24 pb-8 flex flex-col items-center justify-center text-center px-4 relative z-20">
        
        {/* Floating 3D Zero-G Letter Container */}
        <motion.div
          animate={{
            y: [-3, 4, -3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center select-none relative"
        >
          {/* Word 1: Reach (Glowing 3D Letter with Neon Cyan Stroke) */}
          <h1 
            className="text-[17vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-bold tracking-tight leading-[0.92]"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(125, 211, 252, 0.95)',
              filter: 'drop-shadow(0 0 28px rgba(34, 211, 238, 0.65)) drop-shadow(0 0 50px rgba(14, 165, 233, 0.35))',
            }}
          >
            Reach
          </h1>

          {/* Word 2: New (Cursive Luxury Script with Icy Neon Edge & 3D Ring) */}
          <div className="relative inline-flex items-center justify-center my-0 sm:-my-1">
            
            {/* SVG Overlay Highlight for the 3D Tilted Orbital Ellipse */}
            <div className="absolute inset-0 -inset-x-8 sm:-inset-x-12 -inset-y-4 pointer-events-none flex items-center justify-center">
              <svg 
                viewBox="0 0 340 140" 
                className="w-[125%] h-[155%] overflow-visible animate-pulse duration-1000"
                style={{
                  transform: 'rotate(-18.5deg) translateY(-2px)',
                }}
              >
                {/* Back half of the orbital ring */}
                <ellipse 
                  cx="170" 
                  cy="70" 
                  rx="155" 
                  ry="52" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth="2.2" 
                  strokeOpacity="0.85"
                  className="filter drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                />
                {/* Secondary outer icy white ring */}
                <ellipse 
                  cx="170" 
                  cy="70" 
                  rx="162" 
                  ry="55" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="0.8" 
                  strokeOpacity="0.5"
                />
              </svg>
            </div>

            {/* Glowing 4-Point Star Sparkles (✦) Floating Near the Ring */}
            <div className="absolute -top-3 sm:-top-4 -right-6 sm:-right-10 flex items-end gap-1 pointer-events-none text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse">
              <span className="text-xl sm:text-2xl font-serif">✦</span>
              <span className="text-xs sm:text-sm text-white font-serif">✦</span>
            </div>

            {/* The Italic Luxury Word "New" with Chrome / Icy Neon Sheen */}
            <span 
              className="font-serif italic text-[20vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10vw] font-normal leading-[0.88] z-10 px-4 drop-shadow-[0_4px_35px_rgba(0,0,0,0.95)]"
              style={{
                fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(180deg, #FFFFFF 20%, #E0F2FE 55%, #7DD3FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.45))',
              }}
            >
              New
            </span>
          </div>

          {/* Word 3: Horizons (Matching Glowing 3D Neon Stroke) */}
          <h2 
            className="text-[17vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-bold tracking-tight leading-[0.92] mt-0 sm:-mt-1"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(125, 211, 252, 0.95)',
              filter: 'drop-shadow(0 0 28px rgba(34, 211, 238, 0.65)) drop-shadow(0 0 50px rgba(14, 165, 233, 0.35))',
            }}
          >
            Horizons
          </h2>
        </motion.div>

        {/* Hovering 3D Pill-Shaped Button "Get Started" with Cyan/Green Glow Rim */}
        <FadeIn delay={0.3} y={20} className="mt-8 sm:mt-10 z-30">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 sm:px-10 py-3 rounded-full bg-[#040E1E]/90 border border-cyan-400/60 text-white hover:text-cyan-300 hover:border-cyan-300 font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_28px_rgba(34,211,238,0.4),0_10px_25px_rgba(2,6,13,0.8)] hover:shadow-[0_0_42px_rgba(34,211,238,0.75)] cursor-pointer transform hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
          </a>
        </FadeIn>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Lower Curved Horizon Section & Editorial Agency Copy               */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full relative z-20 mt-auto pb-10 sm:pb-14 pt-12 sm:pt-16 px-5 sm:px-8">
        
        {/* Soft Electric Cyan Glow rising from the curved horizon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-24 bg-gradient-to-t from-cyan-500/18 via-sky-500/10 to-transparent blur-2xl pointer-events-none" />

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
              className="italic font-normal text-cyan-400"
              style={{ fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif' }}
            >
              FASTER.
            </span>
          </p>

          {/* Performance Benchmark Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-cyan-300/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
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
