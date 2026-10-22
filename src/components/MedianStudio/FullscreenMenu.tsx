import React, { useEffect } from 'react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeRoute: string;
  navigate: (route: string) => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  activeRoute,
  navigate,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/', number: '01' },
    { label: 'About', path: '/about', number: '02' },
    { label: 'Work', path: '/work', number: '03' },
    { label: 'Pricing', path: '/pricing', number: '04' },
    { label: 'Blog', path: '/blog', number: '05' },
    { label: 'Contact', path: '/contact', number: '06' },
    { label: 'Style Guide', path: '/style-guide', number: '07' },
  ];

  const handleLinkClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[888] bg-white text-median-taupe flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-8'
      }`}
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-16 overflow-hidden opacity-10">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-median-taupe" />
        ))}
      </div>

      {/* Top Header inside modal */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 py-6 md:py-8 flex items-center justify-between border-b border-median-taupe/15">
        <button
          onClick={() => handleLinkClick('/')}
          className="focus:outline-none"
          data-cursor="pointer"
        >
          <img src="/assets/logo.png" alt="Median" className="h-6 object-contain" />
        </button>

        <button
          onClick={onClose}
          aria-label="Close Navigation"
          data-cursor="pointer"
          className="w-10 h-10 rounded-lg border border-median-taupe/40 hover:border-median-taupe flex items-center justify-center transition-colors group"
        >
          <span className="text-xl font-bold font-oswald text-median-taupe group-hover:rotate-90 transition-transform duration-300">
            ✕
          </span>
        </button>
      </div>

      {/* Center Nav Items & Info Split */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-y-auto">
        {/* Main Nav Links (Left 8 cols) */}
        <nav className="lg:col-span-8 flex flex-col gap-2 md:gap-4">
          {navLinks.map((link, idx) => {
            const isActive = activeRoute === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                data-cursor="pointer"
                className="group flex items-center gap-4 text-left py-1 transition-all duration-300 w-fit focus:outline-none"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {/* Number Badge */}
                <span className="w-8 h-8 rounded-full border border-median-taupe flex items-center justify-center text-xs font-semibold text-median-taupe group-hover:bg-median-taupe group-hover:text-white transition-colors duration-300">
                  {link.number}
                </span>

                {/* Big Typographic Heading */}
                <div className="relative overflow-hidden">
                  <span
                    className={`font-oswald text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight uppercase transition-all duration-300 inline-block ${
                      isActive
                        ? 'text-black'
                        : 'text-median-taupe group-hover:text-black group-hover:translate-x-3'
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Subtle Underline */}
                  <div
                    className={`h-[2px] bg-median-taupe transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Studio Info (Right 4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-median-taupe/20 pt-8 lg:pt-0 lg:pl-12 gap-8">
          <div>
            <div className="text-xs font-bold tracking-widest text-median-taupe/60 mb-3">
              HEADQUARTERS
            </div>
            <div className="text-sm font-semibold leading-relaxed text-black">
              123 Broadway Street, Suite 16
              <br />
              New York, NY 10006
            </div>
            <div className="mt-4 text-xs font-bold tracking-widest text-median-taupe/60 mb-2">
              STUDIOS
            </div>
            <div className="text-xs space-y-1">
              <div>San Francisco • 789 Market Street</div>
              <div>Paris • 12 Rue de la Paix</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest text-median-taupe/60 mb-3">
              DIRECT INQUIRIES
            </div>
            <a
              href="mailto:info@median.io"
              className="text-base font-semibold text-black hover:text-median-taupe underline decoration-median-taupe block mb-1"
            >
              info@median.io
            </a>
            <div className="text-sm font-medium">+1 333 20 98 40</div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest text-median-taupe/60 mb-3">
              CONNECT
            </div>
            <div className="flex gap-4 text-xs font-semibold">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer inside modal */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 py-4 border-t border-median-taupe/15 flex flex-col sm:flex-row justify-between text-xs text-median-taupe/70 gap-2">
        <div>© 2026 MEDIAN DIGITAL STUDIO. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-4">
          <button onClick={() => handleLinkClick('/style-guide')} className="hover:underline">
            Style Guide
          </button>
          <span>•</span>
          <button onClick={() => handleLinkClick('/pricing')} className="hover:underline">
            Commercial Licenses
          </button>
        </div>
      </div>
    </div>
  );
};
