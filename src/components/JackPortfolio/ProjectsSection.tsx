import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './Buttons';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  metrics: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Apex Global E-Commerce',
    category: 'Meta Ads & Headless Web',
    metrics: '5.8x ROAS • $840K Client Revenue',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'NeuroSync AI Platform',
    category: 'Web App & B2B Lead Funnel',
    metrics: '+340% Pipeline • $1.2M Contract Pipeline',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Luxury Villas',
    category: 'Cinematic Branding & Web Experience',
    metrics: '$1.8M Direct Bookings • Zero OTA Fees',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="min-h-[75vh] md:min-h-[85vh] w-full flex items-start justify-center sticky top-16 md:top-24"
      style={{
        top: `calc(55px + ${index * 22}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[42px] md:rounded-[56px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-4 sm:p-7 md:p-9 flex flex-col gap-4 sm:gap-6 shadow-2xl relative overflow-hidden"
      >
        {/* Top Row: Number, Category & Name, Metrics Badge, Live Project Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              style={{ fontSize: 'clamp(2rem, 5vw, 65px)' }}
              className="font-black text-[#D7E2EA] leading-none select-none tabular-nums"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="uppercase tracking-widest text-[10px] sm:text-xs text-cyan-400 font-semibold font-mono">
                  {project.category}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/90">
                  {project.metrics}
                </span>
              </div>
              <h3 className="uppercase font-bold text-base sm:text-2xl md:text-3xl text-white tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center">
            <LiveProjectButton href={project.liveUrl || '#contact'}>
              Case Study
            </LiveProjectButton>
          </div>
        </div>

        {/* Bottom Row: 2-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 w-full">
          {/* Left Column (40% width / 5 cols) - 2 Stacked Images */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-2.5 sm:gap-4">
            <img
              src={project.col1Img1}
              alt={`${project.name} preview 1`}
              className="w-full h-[120px] sm:h-[180px] md:h-[220px] object-cover rounded-[18px] sm:rounded-[28px] md:rounded-[36px] border border-white/10"
              loading="lazy"
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} preview 2`}
              className="w-full h-[120px] sm:h-[180px] md:h-[220px] object-cover rounded-[18px] sm:rounded-[28px] md:rounded-[36px] border border-white/10"
              loading="lazy"
            />
          </div>

          {/* Right Column (60% width / 7 cols) - 1 Tall Showcase Image */}
          <div className="md:col-span-7">
            <img
              src={project.col2Img}
              alt={`${project.name} featured render`}
              className="w-full h-[180px] sm:h-[260px] md:h-[456px] object-cover rounded-[18px] sm:rounded-[28px] md:rounded-[36px] border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 font-kanit select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Upper Micro-Badge */}
        <div className="flex justify-center mb-4">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            // 03 SELECTED CASE STUDIES
          </span>
        </div>

        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24 select-none"
          >
            PROJECTS
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="flex flex-col gap-12 pb-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
