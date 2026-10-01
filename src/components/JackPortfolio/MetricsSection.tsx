import React from 'react';
import { FadeIn } from './FadeIn';
import { TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';

interface MetricItem {
  number: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}

const METRICS: MetricItem[] = [
  {
    number: '45+',
    label: 'Brands Scaled',
    sub: 'From ambitious startups to global category leaders',
    icon: <Users className="text-cyan-400" size={24} />,
  },
  {
    number: '$2.4M+',
    label: 'Client Revenue Generated',
    sub: 'Tracked directly through Meta CAPI & analytics',
    icon: <TrendingUp className="text-amber-400" size={24} />,
  },
  {
    number: '4.8X',
    label: 'Average ROAS',
    sub: 'Blended return across all active Meta ad accounts',
    icon: <Target className="text-pink-400" size={24} />,
  },
  {
    number: '98%',
    label: 'Retention Rate',
    sub: 'Clients partnering with us long-term for scale',
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
  },
];

export const MetricsSection: React.FC = () => {
  return (
    <section
      id="metrics"
      className="bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-12 font-kanit relative z-20 border-t border-white/[0.07] select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-3">
            // 04 MEASURABLE PERFORMANCE
          </span>
          <FadeIn delay={0} y={30}>
            <h2
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
            >
              PROVEN METRICS
            </h2>
          </FadeIn>
          <p className="text-sm sm:text-base text-[#D7E2EA]/60 max-w-xl font-light">
            We don&apos;t rely on vanity metrics or hollow promises. Every campaign, web deployment, and funnel is engineered for verifiable revenue growth.
          </p>
        </div>

        {/* 4 Metric Cards Grid - 2x2 on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {METRICS.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.1} y={30}>
              <div className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group hover:bg-white/[0.04]">
                <div className="mb-4 sm:mb-6 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 w-fit">
                  {metric.icon}
                </div>
                <div>
                  <div
                    style={{ fontSize: 'clamp(2rem, 5vw, 64px)' }}
                    className="font-black text-white leading-none mb-1.5 sm:mb-2 tracking-tight group-hover:text-cyan-300 transition-colors"
                  >
                    {metric.number}
                  </div>
                  <h3 className="text-xs sm:text-base md:text-lg font-bold uppercase tracking-wider text-[#D7E2EA] mb-0.5 sm:mb-1">
                    {metric.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#D7E2EA]/50 font-light leading-relaxed hidden sm:block">
                    {metric.sub}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Client Logos Row */}
        <div className="mt-20 pt-12 border-t border-white/[0.06] flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-8">
            TRUSTED BY AMBITIOUS BRANDS ACROSS SRI LANKA &amp; GLOBALLY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-70 hover:opacity-90 transition-opacity">
            <img src="/client-logo-1.webp" alt="Client 1" className="h-9 sm:h-11 w-auto object-contain grayscale invert hover:grayscale-0 transition-all" />
            <img src="/client-logo-2.webp" alt="Client 2" className="h-9 sm:h-11 w-auto object-contain grayscale invert hover:grayscale-0 transition-all" />
            <div className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Meta Business Partner
            </div>
            <div className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Shopify Plus Ecosystem
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
