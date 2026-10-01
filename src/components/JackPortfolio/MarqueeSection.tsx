import React, { useRef, useState, useEffect } from 'react';

interface MarqueeCardData {
  src: string;
  tag: string;
  category: string;
}

const ROW_1_DATA: MarqueeCardData[] = [
  {
    src: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    tag: '5.8x ROAS • $840K Scale',
    category: 'Meta Ads & E-Com',
  },
  {
    src: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    tag: 'React / Next.js Architecture',
    category: 'Web App Engine',
  },
  {
    src: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    tag: '+340% Pipeline Velocity',
    category: 'B2B Lead Engine',
  },
  {
    src: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    tag: 'AI Integration & SaaS',
    category: 'Custom Digital Product',
  },
  {
    src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    tag: '3D Interactive Experience',
    category: 'WebGL & Three.js',
  },
  {
    src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    tag: 'Analytics & CRO Tracking',
    category: 'Growth Architecture',
  },
  {
    src: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    tag: 'Omnichannel Brand System',
    category: 'Social Media Authority',
  },
];

const ROW_2_DATA: MarqueeCardData[] = [
  {
    src: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    tag: '$1.4M Direct Bookings',
    category: 'Luxury Hospitality Funnel',
  },
  {
    src: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    tag: 'High-Converting Landing Page',
    category: 'Conversion Optimization',
  },
  {
    src: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    tag: 'Cinematic Reel Production',
    category: 'Creative Video Strategy',
  },
  {
    src: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
    tag: 'Design System & UI/UX',
    category: 'Figma to Code',
  },
  {
    src: 'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    tag: 'Automated Retention Funnel',
    category: 'Email & WhatsApp CRM',
  },
  {
    src: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    tag: 'Enterprise Scalability',
    category: 'Full-Stack Engineering',
  },
  {
    src: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    tag: '4.9x Blended Ad ROAS',
    category: 'Performance Marketing',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.28;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple each dataset for infinite seamless illusion
  const row1 = [...ROW_1_DATA, ...ROW_1_DATA, ...ROW_1_DATA];
  const row2 = [...ROW_2_DATA, ...ROW_2_DATA, ...ROW_2_DATA];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden w-full relative select-none"
    >
      {/* Subtle Section Label */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
          // 01 ARCHITECTURE &amp; CAMPAIGN SHOWCASE
        </span>
        <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono">
          LIVE WORK PREVIEWS &bull; PROVEN RESULTS
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 - moves RIGHT on scroll */}
        <div
          style={{
            transform: `translateX(${offset - 300}px)`,
            willChange: 'transform',
          }}
          className="flex gap-4 w-max"
        >
          {row1.map((card, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 group border border-white/10 shadow-lg"
            >
              <img
                src={card.src}
                alt={card.tag}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between text-xs z-10 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-white font-medium border border-white/10 text-[10px] sm:text-xs">
                  {card.category}
                </span>
                <span className="text-cyan-400 font-mono text-[9px] sm:text-[11px] bg-cyan-950/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded border border-cyan-500/20">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - moves LEFT on scroll */}
        <div
          style={{
            transform: `translateX(${-(offset - 300)}px)`,
            willChange: 'transform',
          }}
          className="flex gap-4 w-max"
        >
          {row2.map((card, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 group border border-white/10 shadow-lg"
            >
              <img
                src={card.src}
                alt={card.tag}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between text-xs z-10 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-white font-medium border border-white/10 text-[10px] sm:text-xs">
                  {card.category}
                </span>
                <span className="text-orange-400 font-mono text-[9px] sm:text-[11px] bg-orange-950/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded border border-orange-500/20">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
