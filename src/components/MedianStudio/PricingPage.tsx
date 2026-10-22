import React, { useState } from 'react';
import { PRICING_PLANS } from './siteData';
import { useCart } from './CartContext';
import { ScrollReveal } from './ScrollReveal';

interface PricingPageProps {
  navigate: (route: string) => void;
  onOpenCheckout: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const { addItem } = useCart();

  return (
    <div className="pt-28 pb-24 bg-white text-median-taupe min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="py-12 border-b border-median-taupe/20 mb-16 text-center max-w-3xl mx-auto">
          <ScrollReveal variant="badge-drop">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // TRANSPARENT INVESTMENT &bull; GUARANTEED DELIVERABLES
            </span>
          </ScrollReveal>
          <ScrollReveal variant="split-mask" delay={100}>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
              Growth Architecture Packages
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-focus" delay={180}>
            <p className="text-xs sm:text-sm text-median-taupe/80 font-normal leading-relaxed mb-8">
              No hidden fees, no opaque hourly billing. Choose an execution sprint or retain our studio for continuous performance scaling.
            </p>
          </ScrollReveal>

          {/* Billing Toggle */}
          <ScrollReveal variant="counter-pop" delay={240}>
            <div className="inline-flex items-center p-1.5 rounded-full border border-median-taupe/30 bg-median-cream">
              <button
                onClick={() => setBillingCycle('monthly')}
                data-cursor="pointer"
                className={`px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-black text-white shadow-md'
                    : 'text-median-taupe hover:text-black'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                data-cursor="pointer"
                className={`px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                  billingCycle === 'annual'
                    ? 'bg-black text-white shadow-md'
                    : 'text-median-taupe hover:text-black'
                }`}
              >
                <span>Annual Sprint</span>
                <span className="px-2 py-0.5 rounded-full bg-median-taupe text-[10px] text-white font-bold">
                  SAVE 20%
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_PLANS.map((plan, idx) => {
            const isAnnual = billingCycle === 'annual';
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <ScrollReveal
                key={plan.id}
                variant={idx === 1 ? 'card-lift' : idx === 0 ? 'card-flip-left' : 'card-flip-right'}
                delay={idx * 120}
                className="h-full"
              >
                <div
                  className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full relative ${
                    plan.popular
                      ? 'border-black bg-median-cream shadow-xl'
                      : 'border-median-taupe/20 bg-white hover:border-median-taupe'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-black text-white text-[10px] font-bold font-mono uppercase tracking-widest shadow-md">
                        MOST POPULAR CHOICE
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-median-taupe/70 block mb-1">
                      Tier 0{idx + 1}
                    </span>
                    <h3 className="font-oswald text-3xl font-bold uppercase text-black mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-median-taupe/80 leading-relaxed mb-6">
                      {plan.tagline}
                    </p>

                    <div className="py-6 border-y border-median-taupe/15 mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-oswald text-5xl font-bold text-black font-mono">
                          ${price}
                        </span>
                        <span className="text-xs font-mono uppercase text-median-taupe">
                          / month {isAnnual && '(billed annually)'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-bold font-mono uppercase text-black block mb-2">
                        Included Deliverables:
                      </span>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-median-taupe/90">
                          <span className="text-black font-bold">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => addItem(plan, billingCycle)}
                    data-cursor="pointer"
                    className={`w-full py-4 rounded-full text-xs font-bold font-oswald uppercase tracking-widest transition-all ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-median-taupe shadow-md'
                        : 'bg-median-taupe text-white hover:bg-black'
                    }`}
                  >
                    Select &bull; Reserve Sprint
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom Scope Callout */}
        <div className="p-8 md:p-12 rounded-3xl bg-median-cream border border-median-taupe/20 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-median-taupe">
            // ENTERPRISE &amp; BESPOKE ARCHITECTURE
          </span>
          <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-black">
            Need a custom digital system or custom ad budget scope?
          </h3>
          <p className="text-xs sm:text-sm text-median-taupe/80 max-w-xl mx-auto leading-relaxed">
            We architect tailored solutions for multi-location retail chains, global luxury hospitality brands, and high-growth enterprise software.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/94760967884"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-median-taupe transition-colors"
            >
              <span>Schedule Direct Strategy Call</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
