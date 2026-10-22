import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { STUDIO_OFFICES } from './siteData';

interface FooterProps {
  navigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-white text-median-taupe border-t border-median-taupe/20 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-median-taupe/15">
          {/* Visit Us Column (8 cols) */}
          <div className="md:col-span-7 lg:col-span-8">
            <ScrollReveal variant="badge-drop" delay={0}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-median-taupe text-xs font-bold tracking-widest uppercase mb-8">
                Global Studio Hubs
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STUDIO_OFFICES.map((office, idx) => {
                const variants = ['card-flip-left', 'card-lift', 'card-flip-right'] as const;
                return (
                  <ScrollReveal key={office.city} variant={variants[idx % variants.length]} delay={100 * (idx + 1)}>
                    <div className="space-y-2">
                      <span className="font-oswald text-lg font-semibold text-black uppercase block border-b border-median-taupe/40 pb-1 w-fit">
                        {office.city}
                      </span>
                      <p className="text-xs text-median-taupe/80 leading-relaxed font-normal">
                        {office.address}
                        <br />
                        {office.region}
                      </p>
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="text-[11px] font-mono text-black font-semibold hover:text-median-taupe block pt-1"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Stay in Touch Column (4 cols) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-start">
            <ScrollReveal variant="badge-drop" delay={150}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-median-taupe text-xs font-bold tracking-widest uppercase mb-8 w-fit">
                Initiate Project
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal variant="horizontal-slide-right" delay={250}>
                <div>
                  <a
                    href="tel:+94760967884"
                    className="font-oswald text-2xl font-semibold text-black hover:text-median-taupe transition-colors block border-b border-median-taupe/40 pb-1 w-fit"
                  >
                    +94 76 096 7884
                  </a>
                  <span className="text-[10px] font-mono text-median-taupe block mt-0.5">
                    Direct Hotline &bull; Colombo HQ
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="horizontal-slide-right" delay={340}>
                <div>
                  <a
                    href="mailto:info@nclouddigital.com"
                    className="font-oswald text-2xl font-semibold text-black hover:text-median-taupe transition-colors block border-b border-median-taupe/40 pb-1 w-fit"
                  >
                    info@nclouddigital.com
                  </a>
                  <span className="text-[10px] font-mono text-median-taupe block mt-0.5">
                    Official Inquiries &bull; 24h Response
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="blur-focus" delay={420}>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-median-taupe">
                  <a href="https://wa.me/94760967884" target="_blank" rel="noreferrer" className="hover:text-black">
                    WhatsApp
                  </a>
                  <span>•</span>
                  <a href="https://instagram.com/nclouddigital" target="_blank" rel="noreferrer" className="hover:text-black">
                    Instagram
                  </a>
                  <span>•</span>
                  <a href="https://facebook.com/nclouddigital" target="_blank" rel="noreferrer" className="hover:text-black">
                    Facebook
                  </a>
                  <span>•</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black">
                    LinkedIn
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <ScrollReveal variant="fade-up" delay={200} duration={650}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-median-taupe/70 gap-4">
            <p>
              &copy; {new Date().getFullYear()} NCloud Digital. Haute Growth Architecture &bull; Colombo &bull; Operating Globally.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  navigate('/work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-cursor="pointer"
                className="hover:text-black underline decoration-median-taupe transition-colors"
              >
                Case Studies
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  navigate('/pricing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-cursor="pointer"
                className="hover:text-black underline decoration-median-taupe transition-colors"
              >
                Growth Packages
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-cursor="pointer"
                className="hover:text-black underline decoration-median-taupe transition-colors"
              >
                About Studio
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  navigate('/style-guide');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-cursor="pointer"
                className="hover:text-black underline decoration-median-taupe transition-colors"
              >
                Design System
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
