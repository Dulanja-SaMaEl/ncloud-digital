import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Phone, Mail, MessageSquare, 
  Lock, MonitorSmartphone, Video, Share2, Target, BarChart3, Award, 
  TrendingUp, Menu, X, ChevronDown, ChevronUp, Send, Sparkles
} from 'lucide-react';

// --- Brand SVGs ---
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

// --- Custom Interlocking Halo / NCloud Logo Mark ---
export const LogoIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-label="NCloud Halo Logo">
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

// --- Hero Partner Ecosystem Brands (22s seamless marquee) ---
const heroBrands = [
  { name: 'Meta Business Partner', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
  { name: 'Shopify Plus', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { name: 'Google Ads', style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
  { name: 'TikTok Ads', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { name: 'Next.js 14', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
  { name: 'Conversion API (CAPI)', style: { fontFamily: 'Impact, "Arial Narrow", sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
  { name: 'Three.js 3D', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
];

// --- Backed By / Proven By Client Marquee (30s seamless marquee) ---
const clientBrands = [
  { name: 'Beauty Basket', style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '15px' } },
  { name: 'Holistica Herbal', style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '15px' } },
  { name: 'Nexus Labs', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '17px' } },
  { name: 'Ceylon Retail', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '16px' } },
  { name: 'Meta Business Partner', style: { fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '14px' } },
  { name: 'Shopify Plus Ecosystem', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { name: 'Server-Side CAPI', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' } },
  { name: 'Stripe Payments', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' } },
];

// --- Core NCloud Solutions Data ---
const services = [
  {
    id: 1,
    num: '01',
    title: 'Meta Ads & Lead Generation',
    tag: 'Paid Acquisition Engine',
    desc: 'Launch targeted Facebook & Instagram campaigns designed to capture verified leads, scale sales, and maximize ROAS with server-side CAPI pixel telemetry.',
    metric: '4.8X Blended ROAS',
    capabilities: [
      'Conversion API (CAPI) Server-Side Pixel Setup',
      'High-Intent Buyer & Retargeting Funnels',
      'Multivariate Creative & Copywriting A/B Testing',
      'Aggressive Budget Scaling on Winning Nodes',
    ],
  },
  {
    id: 2,
    num: '02',
    title: 'Website Development',
    tag: 'Modern Web & E-Commerce',
    desc: 'Build lightning-fast, modern, and trustworthy web applications that convert traffic into revenue. Engineered with modern stacks (React, Next.js, Vite, Three.js, Shopify, Laravel).',
    metric: '< 1.2s High-Speed Web UI',
    capabilities: [
      'Custom React & Next.js Headless Platforms',
      'Shopify E-Commerce & Custom Cart Architecture',
      'Conversion-Optimized Mobile UX Layouts',
      '99+ Google Lighthouse Speed & SEO Standards',
    ],
  },
  {
    id: 3,
    num: '03',
    title: 'Social Media Management',
    tag: 'Brand Authority & Organic Pipeline',
    desc: 'Command digital presence with strategic monthly content roadmaps, direct-response copywriting, viral short-form reels, and active community engagement.',
    metric: '450% Engagement Lift',
    capabilities: [
      'Monthly Strategic Content Calendars',
      'Direct-Response Copywriting & Carousels',
      'Organic Inbound Inquiry Workflows',
      'Active Community Management & Advocacy',
    ],
  },
  {
    id: 4,
    num: '04',
    title: 'Content Creation',
    tag: 'Cinematic Visual Production',
    desc: 'Produce scroll-stopping 4K video assets, high-retention TikToks, Instagram Reels, and 3D product motion graphics engineered to arrest attention and convert.',
    metric: '10M+ Video Views Delivered',
    capabilities: [
      'Direct-Response Ad Creative Production',
      'High-Retention Viral Reels & Short-Form Video',
      '3D Product Motion Graphics & Animation',
      'Commercial Photography & Brand Visual Stacks',
    ],
  },
];

export const HaloLanding: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [clientHubOpen, setClientHubOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: 'Full Growth System (Ads + Web)',
    budget: '$1,000 - $3,000 / mo',
    message: '',
  });

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Advantage', href: '#advantage' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Results', href: '#results' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div
      className="halo-ncloud-container flex flex-col bg-[#F5F5F5] min-h-screen text-black select-none selection:bg-black selection:text-white"
      style={{
        fontFamily: "'TT Norms Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Scoped Keyframe Marquee Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes backers-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .backers-track {
          display: flex;
          width: max-content;
          animation: backers-marquee 30s linear infinite;
        }
        .marquee-track:hover,
        .backers-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =========================================================================
          SECTION 1: NAVBAR + HERO WRAPPED IN FULL-VIEWPORT H-SCREEN
      ========================================================================= */}
      <div className="h-screen flex flex-col overflow-hidden relative w-full bg-[#F5F5F5]">
        {/* Navbar (Absolute, Transparent Over Hero) */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5 w-full">
          <div className="max-w-[88rem] mx-auto flex items-center justify-between">
            {/* Left Brand */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <LogoIcon className="w-7 h-7 text-black transition-transform duration-200 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-2xl font-medium tracking-tight text-black leading-none">NCloud</span>
                <span className="text-[10px] tracking-widest text-black/50 uppercase font-mono mt-0.5">Digital Systems</span>
              </div>
            </a>

            {/* Center Navigation Links (Hidden Below md) */}
            <div className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm lg:text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setClientHubOpen(true)}
                className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-black/15 bg-white/70 hover:bg-white text-black transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <ShieldCheck size={15} className="text-black" />
                <span>Client Hub</span>
              </button>

              <a
                href="#contact"
                className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
              >
                Book Strategy Call
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black hover:text-gray-700 rounded-lg focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 mx-2 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-xl flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-medium text-black border-b border-black/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setClientHubOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-black/10 bg-black/5 text-black font-medium text-sm"
                >
                  <ShieldCheck size={16} /> Client Hub Portal
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-black text-white font-medium text-sm"
                >
                  Book Free Strategy Call
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section Container */}
        <div id="hero" className="flex-1 px-6 pt-20 pb-6 flex items-end w-full">
          <div
            className="relative w-full max-w-[88rem] mx-auto rounded-2xl overflow-hidden shadow-sm"
            style={{ height: 'calc(100vh - 96px)' }}
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover absolute inset-0 w-full h-full"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-24 md:pt-36">
              {/* Micro-badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/10 backdrop-blur-md text-xs uppercase tracking-wider text-black font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                NCloud Digital &bull; Sri Lanka &amp; Global Systems
              </div>

              {/* Heading */}
              <h1
                className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
                style={{ letterSpacing: '-0.04em' }}
              >
                Your Growth<br />Works
              </h1>

              {/* Paragraph */}
              <p
                className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed font-normal"
                style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
              >
                An automated, high-conversion growth system combining precision Meta Ads, bespoke modern web engineering, and cinematic creative production to scale ambitious brands.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  <span>Get Proposal</span>
                  <span className="bg-white rounded-full p-2 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </span>
                </a>

                <a
                  href="https://wa.me/94760967884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-black text-sm md:text-base font-medium px-6 py-3 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Hero Partner Ecosystem Marquee (22s Loop) */}
              <div className="mt-auto md:mt-24 w-full max-w-md overflow-hidden relative">
                <div className="marquee-track flex items-center py-2">
                  {[...heroBrands, ...heroBrands].map((brand, idx) => (
                    <div
                      key={idx}
                      className="mx-7 shrink-0 text-black/60 whitespace-nowrap select-none"
                      style={brand.style}
                    >
                      {brand.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: INFO SECTION ("Meet NCloud Digital.")
      ========================================================================= */}
      <section id="solutions" className="bg-[#F5F5F5] px-6 py-24 w-full">
        <div className="max-w-[88rem] mx-auto">
          {/* Row 1: 2-col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            {/* Left */}
            <div>
              <h2
                className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
                style={{ letterSpacing: '-0.03em' }}
              >
                Meet NCloud Digital.
              </h2>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
              >
                <span>Claim Free Audit</span>
                <span className="bg-white rounded-full p-2 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 text-black" />
                </span>
              </a>
            </div>

            {/* Right Statement */}
            <div>
              <p className="text-black/70 text-2xl md:text-3xl leading-relaxed font-normal">
                NCloud Digital is a growth engineering studio that turns digital attention into predictable, compounding revenue for ambitious brands across Sri Lanka and globally.
              </p>
            </div>
          </div>

          {/* Row 2: 4-col Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {/* Card 1 (spans 2 cols on lg) with background image */}
            <div
              className="sm:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden shadow-sm"
              style={{
                backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="p-7 min-h-80 flex flex-col justify-between h-full bg-white/10 backdrop-blur-[2px]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-black/60 font-semibold block mb-2">
                    // 01 CAMPAIGN TELEMETRY
                  </span>
                  <h3
                    className="text-black text-2xl font-medium leading-snug"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Campaigns that bloom
                  </h3>
                </div>
                <div>
                  <p className="text-black/70 text-base max-w-sm leading-relaxed mb-4">
                    Gain steady compounding returns as your ad budgets are routed into precision Meta funnels and custom CAPI pixel telemetry.
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-mono font-medium">
                      4.8X Blended ROAS
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-mono font-medium">
                      Rs. 12M+ Tracked
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Solid #2B2644 */}
            <div
              className="rounded-2xl p-7 min-h-80 flex flex-col justify-between shadow-sm"
              style={{ backgroundColor: '#2B2644' }}
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 font-semibold block mb-2">
                  // 02 WEB ARCHITECTURE
                </span>
                <h3
                  className="text-white text-2xl font-medium leading-snug whitespace-pre-line"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Always converting,{'\n'}always fast.
                </h3>
              </div>
              <div>
                <p className="text-white/60 text-base leading-relaxed mb-3">
                  Sub-1.2s high-speed web architecture with high-converting mobile UX — built on modern React, Next.js, and Shopify.
                </p>
                <span className="text-white/80 text-xs font-mono">99+ Lighthouse Velocity</span>
              </div>
            </div>

            {/* Card 3: Solid #2B2644 */}
            <div
              className="rounded-2xl p-7 min-h-80 flex flex-col justify-between shadow-sm"
              style={{ backgroundColor: '#2B2644' }}
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 font-semibold block mb-2">
                  // 03 TRANSPARENCY
                </span>
                <h3
                  className="text-white text-2xl font-medium leading-snug whitespace-pre-line"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Fully{'\n'}accountable
                </h3>
              </div>
              <div>
                <p className="text-white/60 text-base leading-relaxed mb-3">
                  Direct WhatsApp access with Founder Nethum, dedicated weekly sprints, and 24/7 private client hub telemetry.
                </p>
                <span className="text-white/80 text-xs font-mono">076 096 7884 Direct</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROVEN BY CLIENTS & PARTNERS (MARQUEE ROW)
      ========================================================================= */}
      <section className="bg-[#F5F5F5] px-6 py-16 border-t border-black/5 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Left Column (1/4) */}
          <div className="md:col-span-1">
            <p className="text-black/70 text-base leading-relaxed whitespace-pre-line font-medium">
              Proven by hyper-growth brands{'\n'}across Sri Lanka and worldwide.
            </p>
          </div>

          {/* Right Column (3/4) Infinite Marquee (30s Loop) */}
          <div className="md:col-span-3 overflow-hidden relative">
            <div className="backers-track flex items-center py-2">
              {[...clientBrands, ...clientBrands].map((client, idx) => (
                <div
                  key={idx}
                  className="mx-10 shrink-0 text-black/60 whitespace-nowrap select-none"
                  style={client.style}
                >
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE SOLUTIONS / USE CASES SECTION
      ========================================================================= */}
      <section className="bg-[#F5F5F5] px-6 py-24 border-t border-black/5 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Services Selector & Overview */}
          <div className="md:col-span-5 md:pr-6">
            <div className="text-black/60 text-sm mb-2 font-medium">
              NCloud in Practice
            </div>
            <h2
              className="text-5xl md:text-6xl font-medium leading-none mb-6 text-black"
              style={{ letterSpacing: '-0.04em' }}
            >
              Core solutions
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm mb-8">
              NCloud powers a complete spectrum of growth systems for founders, companies, and commercial leaders wanting verified ROI.
            </p>

            {/* 4 Interactive Service Tabs */}
            <div className="flex flex-col gap-2.5">
              {services.map((s) => {
                const isSelected = s.id === activeServiceId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveServiceId(s.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white/60 border-black/10 text-black hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>
                        {s.num}
                      </span>
                      <span className="font-medium text-base">{s.title}</span>
                    </div>
                    <ArrowRight size={16} className={isSelected ? 'text-white' : 'text-gray-400'} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 Cols): Video Container with Dynamic Overlay */}
          <div className="md:col-span-7 relative rounded-3xl overflow-hidden min-h-[600px] md:min-h-[700px] shadow-sm">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover absolute inset-0 w-full h-full"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
            />

            {/* Dynamic Overlay Content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full bg-white/20 backdrop-blur-[3px]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-black text-xs font-mono font-medium mb-4 shadow-xs">
                  <span>{activeService.tag}</span>
                  <span>&bull;</span>
                  <span>{activeService.metric}</span>
                </div>

                <h3
                  className="text-4xl md:text-5xl font-medium leading-tight mb-5 text-black"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {activeService.title}
                </h3>

                <p className="text-black/80 text-base max-w-md mb-8 leading-relaxed font-normal">
                  {activeService.desc}
                </p>

                {/* Deliverable Capabilities List */}
                <div className="space-y-2.5 mb-8">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-black font-medium">
                      <CheckCircle2 size={16} className="text-black shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-black font-medium text-base hover:text-black/80 transition-colors cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </span>
                  <span>Request {activeService.title}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE NCLOUD ADVANTAGE (WHY US)
      ========================================================================= */}
      <section id="advantage" className="bg-[#F5F5F5] px-6 py-24 border-t border-black/5 w-full">
        <div className="max-w-[88rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-black/60 font-mono mb-2 block font-medium">
                // THE NCLOUD ADVANTAGE
              </span>
              <h2
                className="text-4xl md:text-5xl font-medium tracking-tight text-black"
                style={{ letterSpacing: '-0.03em' }}
              >
                Built on Strategy. Proven by Performance.
              </h2>
            </div>
            <p className="text-black/60 text-base max-w-md leading-relaxed">
              We focus on direct business metrics: qualified leads, customer inquiries, online orders, and verified sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target size={22} className="text-black" />,
                title: 'Strategy Before Design',
                desc: 'Audience & competitor research before deploying code or ad budgets. Pure mathematical positioning over guesswork.',
              },
              {
                icon: <MessageSquare size={22} className="text-black" />,
                title: 'Weekly Sprints & WhatsApp Access',
                desc: 'Say goodbye to silent account managers. You get direct WhatsApp access with Founder Nethum and transparent weekly reviews.',
              },
              {
                icon: <TrendingUp size={22} className="text-black" />,
                title: 'Conversion-Focused Architecture',
                desc: 'Every headline, button placement, image angle, and page load millisecond is tuned for direct commercial return on investment.',
              },
              {
                icon: <BarChart3 size={22} className="text-black" />,
                title: 'Precision Performance Advertising',
                desc: 'Laser-targeted Meta advertising engineered with continuous creative refreshes, CAPI pixel audits, and aggressive budget scaling.',
              },
              {
                icon: <Award size={22} className="text-black" />,
                title: 'Local Edge & Global Standards',
                desc: 'Deep cultural understanding of Sri Lankan & international consumer psychology paired with Silicon Valley-grade tech stacks.',
              },
              {
                icon: <Lock size={22} className="text-black" />,
                title: 'Secure Client Hub Telemetry',
                desc: 'Log in to your private client hub 24/7 to inspect active project sprints, campaign ROAS reports, assets, and invoices.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white/70 border border-black/10 hover:border-black/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {card.title}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-black/5 flex items-center gap-1.5 text-xs font-mono text-black/60">
                  <CheckCircle2 size={13} />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WORKFLOW / FIVE-STAGE GROWTH PIPELINE
      ========================================================================= */}
      <section id="workflow" className="bg-[#F5F5F5] px-6 py-24 border-t border-black/5 w-full">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-black/60 font-mono mb-2 block font-medium">
              // FIVE-STAGE GROWTH PIPELINE
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Engineered Pipeline Velocity
            </h2>
            <p className="text-black/60 text-base leading-relaxed">
              A transparent, accountable framework turning visitors into buyers and scaling revenue month over month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Discovery', sub: 'Audit & Diagnostic', desc: 'In-depth audit of current assets, competitor funnels, audience pain points, and commercial bottlenecks.' },
              { num: '02', title: 'Strategy', sub: 'Architecture & Positioning', desc: 'Formulating high-conversion funnel architecture, deliverable roadmaps, and tracking taxonomy.' },
              { num: '03', title: 'Creation', sub: 'Engineering & Creative', desc: 'Designing fast landing pages, custom code implementations, and writing direct-response ad copy.' },
              { num: '04', title: 'Launch', sub: 'Tracking & Deployment', desc: 'Deploying campaigns with verified pixel tracking, conversion events, and live QA health checks.' },
              { num: '05', title: 'Growth', sub: 'Multivariate Scale', desc: 'Iterative multivariate testing, bid optimization, scaling winning variations, and maximizing ROAS.' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/70 border border-black/10 hover:border-black/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-black text-white font-mono text-xs font-bold flex items-center justify-center mb-5">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-medium text-black mb-1" style={{ letterSpacing: '-0.02em' }}>
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono text-black/50 uppercase tracking-wider block mb-3">
                    {step.sub}
                  </span>
                  <p className="text-black/70 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MEASURABLE OUTCOMES / METRICS
      ========================================================================= */}
      <section id="results" className="bg-[#2B2644] text-white px-6 py-24 w-full">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-white/50 font-mono mb-2 block">
              // MEASURABLE OUTCOMES
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium tracking-tight text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Numbers That Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { val: 'Rs. 12M+', lbl: 'Ad Spend Managed', sub: 'Verified across Meta CAPI & Shopify' },
              { val: '100+', lbl: 'High-Impact Builds', sub: 'Custom web apps, landing pages & funnels' },
              { val: '4.8X', lbl: 'Average ROAS', sub: 'Blended return across active client ad accounts' },
              { val: '98%', lbl: 'Client Retention', sub: 'Partners scaling long-term past initial sprints' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4 pt-6 md:pt-0">
                <div
                  className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-2"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {stat.val}
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-white/90 mb-1">
                  {stat.lbl}
                </div>
                <div className="text-xs text-white/50 max-w-xs mx-auto">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FOUNDER & LEADERSHIP SPOTLIGHT
      ========================================================================= */}
      <section id="founder" className="bg-[#F5F5F5] px-6 py-24 border-t border-black/5 w-full">
        <div className="max-w-[88rem] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-black/60 font-mono mb-2 block font-medium">
              // EXECUTIVE LEADERSHIP
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium tracking-tight text-black"
              style={{ letterSpacing: '-0.03em' }}
            >
              Meet Our Founder
            </h2>
            <p className="text-black/60 text-base mt-2">
              Direct executive oversight on every client strategy and technical build.
            </p>
          </div>

          <div className="p-8 md:p-14 rounded-3xl bg-white/80 border border-black/10 shadow-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Founder Photo */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-[320px] rounded-2xl overflow-hidden shadow-sm border border-black/10">
                  <img
                    src="/founder.webp"
                    alt="Nethum Vidyalankara - Founder & CEO of NCloud Digital"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-black">Nethum Vidyalankara</span>
                    <span className="text-black/60">Founder &amp; CEO</span>
                  </div>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="md:col-span-7 flex flex-col items-start">
                <span className="text-xs font-mono font-bold text-black/60 uppercase tracking-widest mb-1">
                  Founder &amp; Chief Growth Strategist
                </span>
                <h3
                  className="text-3xl font-medium text-black mb-4"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Nethum Vidyalankara
                </h3>

                <blockquote className="border-l-2 border-black pl-5 mb-6 italic text-black/80 text-base md:text-lg leading-relaxed">
                  &ldquo;Marketing should never be guesswork—it must always map directly to measurable return on investment. At NCloud Digital, we bridge high-end technical web engineering with aggressive, conversion-focused advertising so ambitious businesses can scale predictably.&rdquo;
                </blockquote>

                <p className="text-black/70 text-sm leading-relaxed mb-6">
                  Nethum established NCloud Digital with a clear mission: eliminate the gap between pretty agency designs and hard revenue outcomes. With hands-on leadership over Meta Ads campaigns, pixel telemetry, and modern web applications, every account benefits from direct founder scrutiny.
                </p>

                {/* Direct Founder Channels */}
                <div className="flex flex-wrap items-center gap-3 w-full pt-4 border-t border-black/10">
                  <a
                    href="https://wa.me/94760967884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Chat with Nethum</span>
                  </a>

                  <a
                    href="tel:+94760967884"
                    className="px-5 py-2.5 rounded-full border border-black/15 bg-white hover:bg-black/5 text-black text-xs font-medium transition-colors flex items-center gap-2"
                  >
                    <Phone size={14} />
                    <span>076 096 7884</span>
                  </a>

                  <a
                    href="mailto:info@nclouddigital.com"
                    className="px-5 py-2.5 rounded-full border border-black/15 bg-white hover:bg-black/5 text-black text-xs font-medium transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} />
                    <span>info@nclouddigital.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ========================================================================= */}
      <section id="faq" className="bg-[#F5F5F5] px-6 py-24 border-t border-black/5 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-black/60 font-mono mb-2 block font-medium">
              // CLARIFICATIONS
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-black/60 text-base">
              Find fast answers about partnering with NCloud Digital.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How long does a website take to design and launch?',
                a: 'High-converting landing pages or marketing sites are engineered and launched in 2 to 3 weeks. Complex multi-page platforms and custom e-commerce stores take between 4 to 6 weeks, complete with SEO architecture, sub-1.2s speed audits, and conversion tracking.',
              },
              {
                q: 'What is your Meta Ads management framework?',
                a: 'Our framework is engineered for direct ROI: we begin with server-side Conversion API (CAPI) pixel tracking audits, construct custom audience demographics, produce multivariate ad creatives, launch A/B copy tests, and scale budgets strictly on winning high-ROAS campaign nodes.',
              },
              {
                q: 'Do you produce cinematic video content in-house?',
                a: 'Yes, content creation is a core discipline. We script, produce, and edit short-form video assets (Instagram Reels, TikTok clips, YouTube Shorts) and 3D motion graphics designed for maximum scroll-stopping retention and conversion.',
              },
              {
                q: 'What industries does NCloud specialize in?',
                a: 'We partner with ambitious founders across E-Commerce, Retail, Real Estate, Professional B2B Services, Tech Startups, Hospitality, and Professional Consulting Agencies in Sri Lanka and internationally.',
              },
              {
                q: 'How are project pricing and agreements structured?',
                a: 'We offer fixed-scope milestone options for Web Engineering and transparent monthly management retainers for Meta Ads and Content Systems. Every proposal includes guaranteed deliverables and weekly sprint accountability.',
              },
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-black/10 bg-white/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-medium text-black pr-4" style={{ letterSpacing: '-0.02em' }}>
                      {faq.q}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-black text-white' : 'bg-black/5 text-black'}`}>
                      {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-black/70 text-sm sm:text-base leading-relaxed border-t border-black/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PROPOSAL CONSULTATION & CONTACT FORM
      ========================================================================= */}
      <section id="contact" className="bg-[#F5F5F5] px-6 py-24 border-t border-black/5 w-full">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Column (5 Cols) */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-black/60 font-mono mb-2 block font-medium">
                  // CONTACT DETAILS
                </span>
                <h2
                  className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight mb-6"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Let&apos;s Discuss Your Project.
                </h2>
                <p className="text-black/70 text-base leading-relaxed mb-8">
                  Have questions or need an estimate? Reach out directly through our hotlines or submit the proposal request form.
                </p>

                <div className="space-y-3 mb-8">
                  <a
                    href="tel:+94760967884"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-black/10 hover:border-black/30 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-black/50">Direct Hotline</div>
                      <div className="text-base font-medium text-black">076 096 7884</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@nclouddigital.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-black/10 hover:border-black/30 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-black/50">Official Inquiries</div>
                      <div className="text-base font-medium text-black">info@nclouddigital.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/94760967884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-black/10 hover:border-[#25D366]/50 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-black/50">Instant WhatsApp</div>
                      <div className="text-base font-medium text-black">Chat With Strategist</div>
                    </div>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-black/5 border border-black/10 flex items-center gap-3">
                  <ShieldCheck size={18} className="text-black shrink-0" />
                  <span className="text-xs text-black/70">
                    Strict Confidentiality &bull; Non-Disclosure Agreements (NDA) Provided
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Proposal Form */}
            <div className="md:col-span-7">
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-black/10 shadow-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-medium text-black mb-2" style={{ letterSpacing: '-0.02em' }}>
                      Proposal Request Received!
                    </h3>
                    <p className="text-black/70 text-sm max-w-sm mb-6 leading-relaxed">
                      Thank you for contacting NCloud Digital. Founder Nethum and our growth engineering team will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-medium uppercase tracking-wider"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Nethum Vidyalankara"
                          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Brand Co."
                          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="076 096 7884"
                          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nethum@brand.com"
                          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black"
                        >
                          <option>Full Growth System (Ads + Web)</option>
                          <option>Meta Ads & Lead Generation</option>
                          <option>Website & E-Commerce Engineering</option>
                          <option>Social Media Management</option>
                          <option>Cinematic Content & 3D Media</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                          Monthly Marketing Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black"
                        >
                          <option>$1,000 - $3,000 / mo</option>
                          <option>$3,000 - $8,000 / mo</option>
                          <option>$8,000 - $20,000 / mo</option>
                          <option>$20,000+ / mo (Enterprise Scale)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                        Growth Goals &amp; Bottlenecks
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current ROAS, lead targets, or website requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#F9F9F9] text-sm text-black focus:outline-none focus:border-black resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-black text-white font-medium text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      {submitting ? (
                        <span>Analyzing Brief...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Request Custom Growth Strategy</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FOOTER
      ========================================================================= */}
      <footer className="bg-[#F5F5F5] border-t border-black/10 px-6 py-12 w-full text-black/60 text-sm">
        <div className="max-w-[88rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <LogoIcon className="w-6 h-6 text-black" />
            <span className="font-medium text-black">NCloud Digital</span>
            <span className="text-black/30">&bull;</span>
            <span className="text-xs text-black/60 font-mono">Colombo, Sri Lanka &bull; Operating Globally</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-black/70">
            <a href="tel:+94760967884" className="hover:text-black">076 096 7884</a>
            <a href="mailto:info@nclouddigital.com" className="hover:text-black">info@nclouddigital.com</a>
            <a href="https://wa.me/94760967884" target="_blank" rel="noopener noreferrer" className="hover:text-black">WhatsApp</a>
          </div>

          <div className="text-xs text-black/40">
            &copy; {new Date().getFullYear()} NCloud Digital. All rights reserved.
          </div>
        </div>
      </footer>

      {/* =========================================================================
          CLIENT HUB MODAL
      ========================================================================= */}
      {clientHubOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white p-8 rounded-3xl border border-black/10 shadow-2xl">
            <button
              onClick={() => setClientHubOpen(false)}
              className="absolute top-5 right-5 text-black/50 hover:text-black p-2 rounded-full hover:bg-black/5"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Client Hub Portal</h3>
                <p className="text-xs text-black/60 font-mono">Secure Sprint &amp; Live ROAS Telemetry</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Demo Client Hub Portal. Contact your NCloud account manager for live enterprise credentials.'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                  Client Workspace ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. NC-BEAUTY-2026"
                  className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm text-black font-mono focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1.5 font-medium">
                  Access Token
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm text-black focus:outline-none focus:border-black"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors mt-2 cursor-pointer"
              >
                Authenticate &amp; Enter Portal
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-black/50 font-mono">
              Need portal credentials? Contact your NCloud account manager.
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky WhatsApp Button */}
      <a
        href="https://wa.me/94760967884"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 group cursor-pointer"
        aria-label="Chat with NCloud Digital on WhatsApp"
      >
        <WhatsAppIcon size={28} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">1</span>
        </span>
      </a>
    </div>
  );
};

export default HaloLanding;
