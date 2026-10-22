import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (route: string) => void;
  currentRoute: string;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  navigate,
  currentRoute,
}) => {
  if (!isOpen) return null;

  const links = [
    { label: 'Home Studio', route: '/', num: '01' },
    { label: 'Selected Works', route: '/work', num: '02' },
    { label: 'Studio Philosophy', route: '/about', num: '03' },
    { label: 'Growth Packages', route: '/pricing', num: '04' },
    { label: 'Knowledge & Blog', route: '/blog', num: '05' },
    { label: 'Start Consultation', route: '/contact', num: '06' },
  ];

  const handleLinkClick = (route: string) => {
    navigate(route);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between p-8 sm:p-12 md:p-16 animate-fade-in select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/15 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-median-taupe flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-median-taupe rounded-full" />
          </div>
          <span className="font-oswald text-xl font-bold tracking-wider uppercase text-white">
            NCLOUD <span className="text-median-taupe font-normal">STUDIO</span>
          </span>
        </div>

        <button
          onClick={onClose}
          data-cursor="pointer"
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          aria-label="Close Navigation"
        >
          ✕
        </button>
      </div>

      {/* Main Nav Links Stack */}
      <div className="my-auto py-8">
        <div className="max-w-4xl mx-auto flex flex-col space-y-4 sm:space-y-6">
          {links.map((link, idx) => {
            const isActive = currentRoute === link.route;
            return (
              <ScrollReveal key={link.route} variant="skew-up" delay={idx * 60}>
                <button
                  onClick={() => handleLinkClick(link.route)}
                  data-cursor="pointer"
                  className="group flex items-baseline gap-4 sm:gap-8 text-left transition-transform hover:translate-x-3 duration-300"
                >
                  <span className="font-mono text-xs sm:text-sm text-median-taupe font-bold">
                    {link.num}
                  </span>
                  <span
                    className={`font-oswald text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight transition-colors ${
                      isActive ? 'text-median-taupe' : 'text-white group-hover:text-median-taupe'
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Footer Info Row */}
      <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-white/60 gap-4">
        <div>
          <span>COLOMBO HQ: +94 76 096 7884 &bull; INFO@NCLOUDDIGITAL.COM</span>
        </div>
        <div className="flex items-center gap-4 text-white">
          <a href="https://wa.me/94760967884" target="_blank" rel="noreferrer" className="hover:text-median-taupe">WhatsApp</a>
          <span>&bull;</span>
          <a href="https://instagram.com/nclouddigital" target="_blank" rel="noreferrer" className="hover:text-median-taupe">Instagram</a>
          <span>&bull;</span>
          <a href="https://facebook.com/nclouddigital" target="_blank" rel="noreferrer" className="hover:text-median-taupe">Facebook</a>
        </div>
      </div>
    </div>
  );
};
