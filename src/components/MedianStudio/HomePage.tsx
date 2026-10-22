import React, { useState } from 'react';
import { PROJECTS, CLIENT_LOGOS, TEAM_MEMBERS, BLOG_POSTS, Project, BlogPost } from './siteData';
import { RotatingRibbons } from './RotatingRibbons';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArticleReaderModal } from './ArticleReaderModal';
import { ScrollReveal, CountingNumber, RevealVariant } from './ScrollReveal';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [, setActiveTeamId] = useState<string>(TEAM_MEMBERS[0].id);

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-white text-median-taupe">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-12 max-w-7xl mx-auto overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-median-taupe" />
        ))}
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20">
        <ScrollReveal variant="blur-focus" duration={950} className="relative max-w-5xl w-full mx-auto">
          {/* Outer framing box with corner geometric markers */}
          <div className="relative py-12 md:py-20 px-6 sm:px-12 border border-median-taupe/20 rounded-2xl bg-white/50 backdrop-blur-[2px]">
            {/* 4 Corner Geometric Square Accents */}
            <span className="absolute -top-2.5 -left-2.5 w-5 h-5 border-2 border-median-taupe bg-white shadow-sm" />
            <span className="absolute -top-2.5 -right-2.5 w-5 h-5 border-2 border-median-taupe bg-white shadow-sm" />
            <span className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-2 border-median-taupe bg-white shadow-sm" />
            <span className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-2 border-median-taupe bg-white shadow-sm" />

            {/* Subtitle tag with smooth spring drop */}
            <ScrollReveal variant="badge-drop" delay={80} duration={800}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-median-taupe/40 text-xs font-semibold tracking-widest uppercase mb-8 text-median-taupe">
                <span className="w-2 h-2 rounded-full bg-median-taupe animate-pulse" />
                NCloud Digital &bull; Haute Growth Architecture
              </div>
            </ScrollReveal>

            {/* Massive Typographic Headline with Split-Mask Line Revelations */}
            <h1 className="font-oswald text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tight text-black leading-[0.9] select-none">
              <ScrollReveal variant="split-mask" delay={160} duration={850}>
                <span className="block hover:text-median-taupe transition-colors duration-300">Transforming</span>
              </ScrollReveal>
              <ScrollReveal variant="split-mask" delay={280} duration={850}>
                <span className="block hover:text-median-taupe transition-colors duration-300">Brands Into</span>
              </ScrollReveal>
              <ScrollReveal variant="split-mask" delay={400} duration={850}>
                <span className="block hover:text-median-taupe transition-colors duration-300">Market Leaders</span>
              </ScrollReveal>
            </h1>

            {/* Action Button with spring scale */}
            <ScrollReveal variant="counter-pop" delay={520} duration={850}>
              <div className="mt-12 flex justify-center">
                <button
                  onClick={scrollToServices}
                  data-cursor="pointer"
                  className="group flex items-center gap-4 px-8 py-4 rounded-full bg-median-taupe hover:bg-black text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <span>Explore Capabilities</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold group-hover:translate-y-1 transition-transform">
                    ↓
                  </span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Mouse Scroll Indicator */}
        <ScrollReveal variant="fade-up" delay={620} duration={800}>
          <div
            onClick={scrollToServices}
            data-cursor="pointer"
            className="mt-12 flex flex-col items-center gap-2 cursor-pointer group opacity-75 hover:opacity-100 transition-opacity"
          >
            <div className="w-5 h-8 rounded-full border-2 border-median-taupe flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-median-taupe animate-bounce" />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-median-taupe">
              Scroll
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= SECTION 1: SERVICES ================= */}
      <section id="services-section" className="py-24 md:py-32 border-t border-median-taupe/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header with Distinct Eyebrow, Split-Mask Title, and Opposing Slide Intro */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <ScrollReveal variant="badge-drop" duration={750}>
                <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2">
                  Capabilities &amp; Growth Practices
                </span>
              </ScrollReveal>
              <ScrollReveal variant="split-mask" delay={100} duration={850}>
                <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
                  High-Impact Digital Systems
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="horizontal-slide-right" delay={180} duration={850}>
              <p className="text-xs sm:text-sm text-median-taupe/80 max-w-md font-normal leading-relaxed">
                We combine performance marketing, bespoke web engineering, and cinematic creative production under one accountable studio.
              </p>
            </ScrollReveal>
          </div>

          {/* 3 Service Columns - Outer 3D Cards + Inner Staggered Data Loading */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Meta Ads & Acquisition',
                variant: 'card-flip-left' as RevealVariant,
                icon: '/assets/ico-1.png',
                description: 'Precision performance advertising designed to capture verified leads, scale ad spend profitably, and eliminate wasted budget.',
                bullets: ['Conversion API (CAPI) Architecture', 'Custom Retargeting Funnels', 'High-ROAS Account Scaling', 'Multivariate Creative A/B Testing'],
              },
              {
                num: '02',
                title: 'Web & Headless Engineering',
                variant: 'card-lift' as RevealVariant,
                icon: '/assets/ico-2.png',
                description: 'Lightning-fast digital platforms engineered with modern frameworks (React, Next.js, Three.js) for sub-1.2s speed and maximum conversion.',
                bullets: ['Headless React & Shopify Builds', 'Core Web Vitals 99+ Optimization', 'Hardware-Accelerated 3D Motion', 'Conversion-First UX & Checkout'],
              },
              {
                num: '03',
                title: 'Cinematic Content & Reels',
                variant: 'card-flip-right' as RevealVariant,
                icon: '/assets/ico-3.png',
                description: 'High-retention video production, scroll-stopping TikToks and Instagram Reels, and 3D product motion graphics engineered to convert.',
                bullets: ['Direct-Response Video Ads', 'Short-Form Viral Reels Production', '3D Motion Graphics & Visuals', 'Strategic Content Roadmaps'],
              },
            ].map((srv, idx) => {
              const baseDelay = idx * 140;
              return (
                <ScrollReveal
                  key={srv.num}
                  variant={srv.variant}
                  delay={baseDelay}
                  duration={950}
                  className="h-full"
                >
                  <div className="group p-8 md:p-10 rounded-2xl border border-median-taupe/20 bg-white hover:border-median-taupe hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <ScrollReveal variant="counter-pop" delay={baseDelay + 120} duration={800}>
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-median-taupe/15">
                          <span className="w-10 h-10 rounded-full border border-median-taupe text-xs font-bold flex items-center justify-center text-black group-hover:bg-median-taupe group-hover:text-white transition-colors">
                            {srv.num}
                          </span>
                          <img
                            src={srv.icon}
                            alt={srv.title}
                            className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </ScrollReveal>

                      <ScrollReveal variant="skew-up" delay={baseDelay + 200} duration={800}>
                        <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-black mb-3">
                          {srv.title}
                        </h3>
                      </ScrollReveal>

                      <ScrollReveal variant="blur-focus" delay={baseDelay + 280} duration={850}>
                        <p className="text-xs sm:text-sm text-median-taupe/80 font-normal leading-relaxed mb-6">
                          {srv.description}
                        </p>
                      </ScrollReveal>
                    </div>

                    <ul className="space-y-2 border-t border-median-taupe/15 pt-6 text-xs text-black font-semibold uppercase">
                      {srv.bullets.map((b, bIdx) => (
                        <ScrollReveal
                          key={bIdx}
                          variant="horizontal-slide-left"
                          delay={baseDelay + 340 + bIdx * 70}
                          duration={750}
                        >
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-median-taupe" />
                            <span>{b}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURED WORK ================= */}
      <section className="py-24 md:py-32 bg-median-taupe/5 border-t border-median-taupe/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <ScrollReveal variant="badge-drop" duration={750}>
                <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2">
                  Tracked Commercial Outcomes
                </span>
              </ScrollReveal>
              <ScrollReveal variant="split-mask" delay={100} duration={850}>
                <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
                  Featured Case Studies
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="horizontal-slide-right" delay={180} duration={800}>
              <button
                onClick={() => {
                  navigate('/work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-median-taupe underline decoration-median-taupe"
              >
                <span>Explore All Case Studies</span>
                <span>&rarr;</span>
              </button>
            </ScrollReveal>
          </div>

          {/* 6 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => {
              const projectVariants: RevealVariant[] = [
                'curtain-expand',
                'card-lift',
                'zoom-rotate',
                'horizontal-slide-left',
                'counter-pop',
                'horizontal-slide-right',
              ];
              const cardVariant = projectVariants[idx % projectVariants.length];
              const colDelay = (idx % 3) * 130;

              return (
                <ScrollReveal
                  key={proj.id}
                  variant={cardVariant}
                  delay={colDelay}
                  duration={950}
                  className="h-full"
                >
                  <div
                    onClick={() => setSelectedProject(proj)}
                    data-cursor="work"
                    className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-median-taupe/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 h-full"
                  >
                    {/* Image Wrap */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-median-taupe/10">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <ScrollReveal variant="badge-drop" delay={colDelay + 180} duration={750}>
                          <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold uppercase text-median-taupe shadow-sm font-mono">
                            {proj.tag}
                          </span>
                        </ScrollReveal>
                        {proj.metrics && (
                          <ScrollReveal variant="badge-drop" delay={colDelay + 240} duration={750}>
                            <span className="inline-block px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm text-[10px] font-bold uppercase text-white shadow-sm font-mono">
                              {proj.metrics.split('•')[0]}
                            </span>
                          </ScrollReveal>
                        )}
                      </div>
                    </div>

                    {/* Info Card Data */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <ScrollReveal variant="fade-left" delay={colDelay + 220} duration={750}>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-median-taupe/70 block mb-1 font-mono">
                            {proj.category}
                          </span>
                        </ScrollReveal>
                        <ScrollReveal variant="skew-up" delay={colDelay + 280} duration={800}>
                          <h3 className="font-oswald text-2xl font-bold uppercase text-black group-hover:text-median-taupe transition-colors">
                            {proj.title}
                          </h3>
                        </ScrollReveal>
                      </div>

                      <ScrollReveal variant="blur-focus" delay={colDelay + 340} duration={800}>
                        <div className="pt-6 border-t border-median-taupe/15 flex items-center justify-between text-xs font-semibold text-median-taupe">
                          <span className="font-mono">{proj.client}</span>
                          <span className="font-mono text-black font-bold">{proj.year}</span>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CLIENTS & PARTNERS ================= */}
      <section className="py-20 border-t border-median-taupe/20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <ScrollReveal variant="split-mask" duration={800}>
              <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/80 block font-mono">
                // PROVEN BY LEADING SRI LANKAN &amp; GLOBAL BRANDS
              </span>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <ScrollReveal
                key={client.name}
                variant="zoom-rotate"
                delay={idx * 80}
                duration={750}
              >
                <div className="p-6 rounded-xl border border-median-taupe/20 hover:border-median-taupe transition-all duration-300 flex items-center justify-center h-24 bg-median-cream/40 group">
                  <span className="font-oswald text-lg font-bold uppercase text-black/70 group-hover:text-black transition-colors">
                    {client.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: ROTATING RIBBONS ================= */}
      <ScrollReveal variant="curtain-expand" duration={950}>
        <RotatingRibbons />
      </ScrollReveal>

      {/* ================= SECTION 5: PHILOSOPHY & ABOUT ================= */}
      <section className="py-24 md:py-32 border-t border-median-taupe/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <ScrollReveal variant="curtain-expand" duration={950} className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-median-taupe/20 bg-median-taupe/10 shadow-xl">
                <img
                  src="/ncloud-director.jpg"
                  alt="NCloud Digital Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-median-taupe/30">
                  <ScrollReveal variant="badge-drop" delay={150}>
                    <p className="text-xs font-semibold text-black uppercase font-mono">
                      NCLOUD DIGITAL STUDIO &bull; COLOMBO HQ &bull; OPERATING GLOBALLY
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal variant="card-flip-right" delay={120} duration={950} className="lg:col-span-6 space-y-6">
              <div>
                <ScrollReveal variant="badge-drop" delay={180}>
                  <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
                    The NCloud Philosophy
                  </span>
                </ScrollReveal>
                <ScrollReveal variant="skew-up" delay={240}>
                  <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black leading-tight">
                    Performance meets artistry
                  </h2>
                </ScrollReveal>
              </div>

              <ScrollReveal variant="blur-focus" delay={320}>
                <p className="text-xs sm:text-sm text-median-taupe/90 font-normal leading-relaxed">
                  We reject the false dichotomy that forces ambitious brands to choose between breathtaking visual craft and ruthless commercial performance. At NCloud Digital, every line of code is written to convert, and every ad dollar is tied directly to pipeline.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="blur-focus" delay={400}>
                <p className="text-xs sm:text-sm text-median-taupe/90 font-normal leading-relaxed">
                  Having engineered bespoke web platforms and scaled Meta ad accounts for over 45 high-growth businesses across Sri Lanka and worldwide, we focus exclusively on metrics that move balance sheets: qualified leads, high blended ROAS, and sub-1.2s load speeds.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="horizontal-slide-left" delay={480}>
                <div className="p-6 rounded-2xl border-l-4 border-median-taupe bg-median-cream">
                  <p className="font-oswald text-lg sm:text-xl font-medium text-black uppercase italic">
                    &ldquo;Pretty design that does not convert is just expensive art. Real digital craftsmanship delivers unmistakable elegance and compounding commercial revenue.&rdquo;
                  </p>
                  <span className="text-xs font-mono text-median-taupe uppercase mt-2 block font-semibold">
                    — Dulan, Founder &amp; Growth Architect
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={540}>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      navigate('/about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    data-cursor="pointer"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-median-taupe transition-colors shadow-md"
                  >
                    <span>Read Studio Manifesto</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: TEAM ================= */}
      <section className="py-24 md:py-32 bg-median-cream border-t border-median-taupe/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <ScrollReveal variant="badge-drop" duration={750}>
                <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
                  Executive Leadership
                </span>
              </ScrollReveal>
              <ScrollReveal variant="split-mask" delay={100} duration={850}>
                <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
                  The Creative &amp; Technical Mindset
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="horizontal-slide-right" delay={180} duration={800}>
              <span className="text-xs text-median-taupe/80 font-mono uppercase">
                Direct Founder Oversight on Every Sprint
              </span>
            </ScrollReveal>
          </div>

          {/* 3 Team Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => {
              const teamVariants: RevealVariant[] = ['card-flip-left', 'card-lift', 'card-flip-right'];
              const memberVariant = teamVariants[idx % teamVariants.length];
              const baseDelay = idx * 140;

              return (
                <ScrollReveal
                  key={member.id}
                  variant={memberVariant}
                  delay={baseDelay}
                  duration={950}
                  className="h-full"
                >
                  <div
                    onMouseEnter={() => setActiveTeamId(member.id)}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-median-taupe/20 hover:border-median-taupe transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    <div>
                      {/* Portrait */}
                      <ScrollReveal variant="curtain-expand" delay={baseDelay + 100} duration={800}>
                        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-median-taupe/10 mb-6">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </ScrollReveal>

                      {/* Role Badge */}
                      <ScrollReveal variant="badge-drop" delay={baseDelay + 180} duration={750}>
                        <span className="inline-block px-3 py-1 rounded-full bg-median-cream text-median-taupe text-[10px] font-bold font-mono uppercase tracking-wider mb-2 border border-median-taupe/30">
                          {member.role}
                        </span>
                      </ScrollReveal>

                      {/* Name */}
                      <ScrollReveal variant="skew-up" delay={baseDelay + 240} duration={800}>
                        <h3 className="font-oswald text-2xl font-bold uppercase text-black mb-3">
                          {member.name}
                        </h3>
                      </ScrollReveal>

                      {/* Bio */}
                      <ScrollReveal variant="blur-focus" delay={baseDelay + 300} duration={800}>
                        <p className="text-xs text-median-taupe/80 leading-relaxed font-normal">
                          {member.bio}
                        </p>
                      </ScrollReveal>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: AWARDS & METRICS ================= */}
      <section className="py-24 md:py-32 border-t border-median-taupe/20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-16">
            <ScrollReveal variant="badge-drop" duration={750}>
              <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
                Verified Benchmark Performance
              </span>
            </ScrollReveal>
            <ScrollReveal variant="split-mask" delay={100} duration={850}>
              <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
                Proven Track Record
              </h2>
            </ScrollReveal>
          </div>

          {/* Metric Counter Rows */}
          <div className="divide-y divide-median-taupe/20 border-y border-median-taupe/20">
            {[
              {
                num: '01',
                year: '2024–2026',
                title: 'Blended Account ROAS Across Meta Advertising',
                metricVal: 5,
                metricPrefix: '',
                metricSuffix: '.0X',
                org: 'Meta Business Partner Standards',
                variant: 'horizontal-slide-left' as RevealVariant,
              },
              {
                num: '02',
                year: '2025–2026',
                title: 'Average Google Lighthouse Web Speed & SEO Score',
                metricVal: 99,
                metricPrefix: '',
                metricSuffix: '+',
                org: 'Core Web Vitals Engineering',
                variant: 'card-lift' as RevealVariant,
              },
              {
                num: '03',
                year: '2024–2026',
                title: 'Verified Client Pipeline & Revenue Tracked',
                metricVal: 12,
                metricPrefix: 'Rs. ',
                metricSuffix: 'M+',
                org: 'Real-Time Telemetry & CAPI Audits',
                variant: 'horizontal-slide-right' as RevealVariant,
              },
              {
                num: '04',
                year: '2023–2026',
                title: 'Ambitious Brands Scaled in Sri Lanka & Internationally',
                metricVal: 45,
                metricPrefix: '',
                metricSuffix: '+',
                org: 'Global Growth Architecture',
                variant: 'zoom-rotate' as RevealVariant,
              },
            ].map((award, idx) => (
              <ScrollReveal
                key={award.num}
                variant={award.variant}
                delay={idx * 110}
                duration={900}
              >
                <div className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-median-cream/50 px-4 -mx-4 rounded-xl transition-colors duration-200">
                  <div className="flex items-baseline gap-6">
                    <ScrollReveal variant="counter-pop" delay={idx * 110 + 60}>
                      <span className="font-mono text-xs font-bold text-median-taupe">
                        {award.num}
                      </span>
                    </ScrollReveal>
                    <ScrollReveal variant="skew-up" delay={idx * 110 + 120}>
                      <div>
                        <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-black group-hover:text-median-taupe transition-colors">
                          {award.title}
                        </h3>
                        <span className="text-xs text-median-taupe/70 font-mono">
                          {award.org}
                        </span>
                      </div>
                    </ScrollReveal>
                  </div>

                  <div className="flex items-center gap-8 self-end md:self-auto">
                    <ScrollReveal variant="counter-pop" delay={idx * 110 + 180}>
                      <span className="font-oswald text-3xl sm:text-4xl font-bold text-black font-mono">
                        <CountingNumber
                          value={award.metricVal}
                          prefix={award.metricPrefix}
                          suffix={award.metricSuffix}
                        />
                      </span>
                    </ScrollReveal>
                    <ScrollReveal variant="blur-focus" delay={idx * 110 + 240}>
                      <span className="text-xs font-bold font-mono uppercase px-3 py-1 rounded-full bg-median-cream border border-median-taupe/30 text-median-taupe">
                        {award.year}
                      </span>
                    </ScrollReveal>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: JOURNAL / BLOG ================= */}
      <section className="py-24 md:py-32 bg-median-taupe/5 border-t border-median-taupe/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <ScrollReveal variant="badge-drop" duration={750}>
                <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
                  Knowledge &amp; Field Notes
                </span>
              </ScrollReveal>
              <ScrollReveal variant="split-mask" delay={100} duration={850}>
                <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
                  Latest Insights
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="horizontal-slide-right" delay={180} duration={800}>
              <button
                onClick={() => {
                  navigate('/blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-median-taupe underline decoration-median-taupe"
              >
                <span>Read All Insights</span>
                <span>&rarr;</span>
              </button>
            </ScrollReveal>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <ScrollReveal
                key={post.id}
                variant={idx === 0 ? 'horizontal-slide-right' : 'horizontal-slide-left'}
                delay={idx * 150}
                duration={950}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedPost(post)}
                  data-cursor="work"
                  className="group cursor-pointer rounded-2xl bg-white border border-median-taupe/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-median-taupe/10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold font-mono uppercase text-median-taupe shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-median-taupe/70 mb-2">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-oswald text-2xl font-bold uppercase text-black group-hover:text-median-taupe transition-colors mb-3">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal mb-6">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-median-taupe/15 flex items-center justify-between text-xs font-bold text-black uppercase font-mono">
                      <span>Read Strategy Breakdown</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
      />

      <ArticleReaderModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};
