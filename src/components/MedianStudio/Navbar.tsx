import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { ScrollReveal } from './ScrollReveal';

interface NavbarProps {
  currentRoute: string;
  navigate: (route: string) => void;
  onOpenMenu: () => void;
  onSwitchView?: (view: 'ncloud' | 'jack' | 'halo' | 'median') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, navigate, onOpenMenu, onSwitchView }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Elegant subtle ambient sound synthesizer
    let audioCtx: AudioContext | null = null;
    let oscillator: OscillatorNode | null = null;
    let gainNode: GainNode | null = null;

    if (isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(174, audioCtx.currentTime); // Solfeggio frequency (foundation)
        gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
      } catch {
        // Fallback for autoplay policy
      }
    }

    return () => {
      if (oscillator) {
        try { oscillator.stop(); } catch {}
      }
      if (audioCtx) {
        try { audioCtx.close(); } catch {}
      }
    };
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  const navLinks = [
    { label: 'Work', route: '/work' },
    { label: 'About', route: '/about' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-median-taupe/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-black group text-left"
            data-cursor="pointer"
          >
            <div className="w-8 h-8 rounded-full border border-median-taupe flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:rotate-180">
              <span className="w-2.5 h-2.5 bg-median-taupe rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-oswald text-xl tracking-wider font-bold uppercase leading-none">
                NCLOUD <span className="text-median-taupe font-normal">STUDIO</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-median-taupe uppercase mt-0.5">
                HAUTE GROWTH &bull; 2026
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-median-taupe">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => navigate(link.route)}
                  data-cursor="pointer"
                  className={`transition-colors relative py-1 ${
                    isActive ? 'text-black font-bold' : 'hover:text-black'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-median-taupe animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Quick Agency Switcher, Sound, Cart, Hamburger */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Back to Classic Agency button */}
          {onSwitchView && (
            <button
              onClick={() => onSwitchView('ncloud')}
              data-cursor="pointer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-median-taupe/30 hover:border-black text-[11px] font-mono uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-200"
              title="Return to Classic Dark Agency View"
            >
              <span>Classic View</span>
              <span className="text-xs">&rarr;</span>
            </button>
          )}

          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleSound}
            data-cursor="pointer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-median-taupe/40 text-xs text-median-taupe hover:text-black hover:border-black transition-all"
            title="Toggle Ambient Audio"
          >
            <div className="flex items-end gap-[2px] h-3">
              <span className={`w-[2px] bg-median-taupe rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`} />
              <span className={`w-[2px] bg-median-taupe rounded-full transition-all duration-300 ${isPlaying ? 'h-2 animate-pulse [animation-delay:150ms]' : 'h-1.5'}`} />
              <span className={`w-[2px] bg-median-taupe rounded-full transition-all duration-300 ${isPlaying ? 'h-3.5 animate-pulse [animation-delay:300ms]' : 'h-1'}`} />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase hidden md:inline">
              {isPlaying ? 'AUDIO ON' : 'AUDIO OFF'}
            </span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            data-cursor="cart"
            className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-median-taupe text-white hover:bg-black transition-colors"
          >
            <span className="text-xs font-bold tracking-wider uppercase">BAG</span>
            <span className="w-5 h-5 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
              {totalCount}
            </span>
          </button>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={onOpenMenu}
            data-cursor="pointer"
            className="w-10 h-10 rounded-full border border-median-taupe flex flex-col items-center justify-center gap-1.5 hover:bg-median-taupe hover:border-median-taupe text-black hover:text-white transition-all group"
            aria-label="Open Fullscreen Menu"
          >
            <span className="w-4 h-[1.5px] bg-current transition-transform group-hover:scale-x-110" />
            <span className="w-4 h-[1.5px] bg-current transition-transform group-hover:scale-x-110" />
          </button>
        </div>
      </div>
    </header>
  );
};
