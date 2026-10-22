import React from 'react';

export const RotatingRibbons: React.FC = () => {
  return (
    <div className="relative w-full py-12 overflow-hidden bg-median-taupe text-white select-none">
      {/* Top Tilted Marquee (Left to Right) */}
      <div className="w-[120%] -ml-[10%] -rotate-2 bg-black py-4 border-y border-white/20 shadow-xl overflow-hidden flex">
        <div className="flex shrink-0 animate-marquee-left items-center space-x-12 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase">
                PERFORMANCE MARKETING
              </span>
              <span className="text-median-taupe text-xl">✦</span>
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase">
                WEB ENGINEERING
              </span>
              <span className="text-median-taupe text-xl">✦</span>
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase">
                4.8X BLENDED ROAS
              </span>
              <span className="text-median-taupe text-xl">✦</span>
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase">
                SUB-1.2S LOAD SPEED
              </span>
              <span className="text-median-taupe text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Counter-Tilted Marquee (Right to Left) */}
      <div className="w-[120%] -ml-[10%] rotate-2 bg-median-taupe-dark py-4 border-y border-white/20 shadow-xl -mt-4 overflow-hidden flex">
        <div className="flex shrink-0 animate-marquee-right items-center space-x-12 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase text-white/90">
                NCLOUD DIGITAL
              </span>
              <span className="text-white/40 text-xl">★</span>
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase text-white/90">
                SRI LANKA &bull; DUBAI &bull; LONDON
              </span>
              <span className="text-white/40 text-xl">★</span>
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase text-white/90">
                STRATEGY BEFORE DESIGN
              </span>
              <span className="text-white/40 text-xl">★</span>
              <span className="font-oswald text-2xl sm:text-3xl font-bold tracking-widest uppercase text-white/90">
                SERVER-SIDE CAPI PIXEL
              </span>
              <span className="text-white/40 text-xl">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
