import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { MarqueeSection } from './MarqueeSection';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { ProjectsSection } from './ProjectsSection';
import { MetricsSection } from './MetricsSection';
import { FounderSection } from './FounderSection';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';

export const JackPortfolio: React.FC = () => {
  useEffect(() => {
    document.title = 'NCloud Digital | High-Growth Performance Marketing & Web Systems';
  }, []);

  return (
    <div
      id="ncloud-site"
      style={{ overflowX: 'clip' }}
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit selection:bg-cyan-400/30 selection:text-white"
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <MetricsSection />
      <FounderSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default JackPortfolio;
