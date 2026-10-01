import React from 'react';
import { ArrowUp } from 'lucide-react';

const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
  >
    {children}
  </a>
);

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-[#D7E2EA] font-kanit pt-16 pb-12 px-5 sm:px-8 md:px-12 border-t border-white/[0.08] select-none">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Tier: Logo, Mission & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#121820] border border-white/10 p-1.5 flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="NCloud Digital" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold uppercase tracking-wider text-xl leading-tight">
                NCloud<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#D7E2EA]/50 uppercase font-light">
                Digital Growth Systems
              </span>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="text-cyan-400" />
          </button>
        </div>

        {/* Middle Tier: Navigation & Value Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/[0.06]">
          <div className="md:col-span-6 flex flex-col gap-3">
            <p className="text-sm text-[#D7E2EA]/70 font-light max-w-md leading-relaxed">
              NCloud Digital is a premier growth agency helping ambitious brands turn digital attention into measurable, compounding revenue through performance Meta ad campaigns, high-performance web development, and cinematic creative direction.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Operating from Colombo, Sri Lanka &bull; Scaling Brands Globally</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-1">
              Navigation
            </span>
            <a href="#about" className="text-sm text-[#D7E2EA]/70 hover:text-white transition-colors">About Agency</a>
            <a href="#services" className="text-sm text-[#D7E2EA]/70 hover:text-white transition-colors">Growth Services</a>
            <a href="#projects" className="text-sm text-[#D7E2EA]/70 hover:text-white transition-colors">Case Studies</a>
            <a href="#metrics" className="text-sm text-[#D7E2EA]/70 hover:text-white transition-colors">Tracked Metrics</a>
            <a href="#founder" className="text-sm text-[#D7E2EA]/70 hover:text-white transition-colors">Founder Leadership</a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 mb-1">
              Connect With Us
            </span>
            <div className="flex items-center gap-2.5">
              {/* WhatsApp */}
              <SocialIcon href="https://wa.me/94770000000" label="WhatsApp">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.09 7.41 8.86 7.66C8.63 7.91 7.99 8.51 7.99 9.74C7.99 10.97 8.89 12.15 9.01 12.31C9.13 12.48 10.77 14.98 13.27 16.07C13.87 16.33 14.33 16.48 14.7 16.6C15.3 16.79 15.84 16.76 16.27 16.7C16.76 16.63 17.76 16.09 17.97 15.5C18.17 14.92 18.17 14.42 18.11 14.32C18.05 14.22 17.89 14.16 17.65 14.04C17.41 13.92 16.23 13.34 16 13.26C15.78 13.17 15.62 13.13 15.46 13.38C15.3 13.62 14.83 14.16 14.69 14.32C14.54 14.48 14.4 14.5 14.16 14.38C13.92 14.26 12.92 13.93 11.73 12.87C10.8 12.04 10.18 11.02 10.04 10.78C9.9 10.54 10.03 10.4 10.15 10.29C10.26 10.18 10.4 10 10.51 9.87C10.63 9.75 10.67 9.65 10.75 9.49C10.83 9.33 10.79 9.18 10.73 9.06C10.67 8.94 10.21 7.81 10.02 7.35C9.83 6.9 9.64 6.96 9.5 6.95C9.37 6.95 9.21 6.95 9.05 6.95"/>
                </svg>
              </SocialIcon>

              {/* Instagram */}
              <SocialIcon href="https://instagram.com/nclouddigital" label="Instagram">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </SocialIcon>

              {/* Meta / Facebook */}
              <SocialIcon href="https://facebook.com/nclouddigital" label="Facebook">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </SocialIcon>

              {/* LinkedIn */}
              <SocialIcon href="https://linkedin.com/company/nclouddigital" label="LinkedIn">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialIcon>
            </div>
            <a
              href="/neural.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors mt-2"
            >
              Explore Neural Studio Hero ↗
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
          <span>&copy; {new Date().getFullYear()} NCloud Digital. All Rights Reserved.</span>
          <span>Engineered for Maximum Conversion &bull; High-Craft 3D Digital Standard</span>
        </div>
      </div>
    </footer>
  );
};
