import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Meta Advertising & Lead Engines',
    description:
      'High-converting Facebook & Instagram ad campaigns, custom Meta Pixel & Conversion API (CAPI) setups, precision audience targeting, and aggressive ROAS scaling that turns ad spend into predictable pipeline.',
    tags: ['Meta Ads', 'Lead Generation', 'Conversion API', 'ROAS Scaling', 'Audience Retargeting'],
  },
  {
    number: '02',
    name: 'Web Development & Web Apps',
    description:
      'Bespoke, lightning-fast digital storefronts, corporate platforms, and web applications engineered with modern stacks (React, Vite, Three.js, Tailwind, Laravel). Optimized for frictionless conversion and search ranking.',
    tags: ['Next.js / React', 'E-Commerce / Shopify', 'Custom Web Apps', 'Three.js 3D', 'CRO Architecture'],
  },
  {
    number: '03',
    name: 'Content Creation & 3D Media',
    description:
      'Cinematic video production, 3D product motion graphics, social-first short-form video reels, and high-impact visual assets designed to stop the scroll and elevate brand perception.',
    tags: ['Cinematic Video', '3D Motion Graphics', 'Instagram Reels & TikTok', 'Brand Visuals', 'Creative Testing'],
  },
  {
    number: '04',
    name: 'Social Media & Brand Authority',
    description:
      'Omnichannel social strategy, monthly content calendar execution, copywriting, community engagement, and brand positioning that builds lasting industry authority and loyal audiences.',
    tags: ['Instagram Growth', 'LinkedIn Authority', 'Content Systems', 'Community Building', 'Brand Aesthetics'],
  },
  {
    number: '05',
    name: 'Growth Consulting & Systems',
    description:
      'Full funnel audits, conversion rate optimization (CRO), heatmapping, analytics integration, and bespoke growth advisory for ambitious founders looking to scale past 7 figures.',
    tags: ['Funnel Architecture', 'CRO & Heatmaps', 'Attribution Tracking', 'Founder Advisory', 'Retention Systems'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 font-kanit relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Upper Micro-Badge */}
        <div className="flex justify-center mb-4">
          <span className="text-xs uppercase tracking-widest text-black/50 font-mono">
            // 02 WHAT WE DELIVER
          </span>
        </div>

        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-24 select-none"
          >
            SERVICES
          </h2>
        </FadeIn>

        {/* 5 Service Rows */}
        <div className="border-t border-[rgba(12,12,12,0.15)] flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08} y={30}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-10 py-10 sm:py-12 border-b border-[rgba(12,12,12,0.15)] group transition-all duration-300">
                {/* Huge Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 8vw, 110px)' }}
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none tabular-nums md:w-[160px]"
                >
                  {item.number}
                </div>

                {/* Name + Description + Tags */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2.2rem)' }}
                    className="font-bold uppercase tracking-wide text-[#0C0C0C] group-hover:text-black transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/70"
                  >
                    {item.description}
                  </p>

                  {/* Pills / Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-[#0C0C0C]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
