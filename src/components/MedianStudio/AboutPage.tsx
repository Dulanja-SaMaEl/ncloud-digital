import React from 'react';
import { TEAM_MEMBERS, FAQS, STUDIO_OFFICES } from './siteData';
import { ScrollReveal } from './ScrollReveal';

interface AboutPageProps {
  navigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="pt-28 pb-24 bg-white text-median-taupe min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="py-12 border-b border-median-taupe/20 mb-16">
          <ScrollReveal variant="badge-drop">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // ABOUT NCLOUD DIGITAL STUDIO
            </span>
          </ScrollReveal>
          <ScrollReveal variant="split-mask" delay={100}>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-6">
              Engineering Digital Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-focus" delay={180}>
            <p className="text-sm sm:text-base text-median-taupe/90 max-w-2xl font-normal leading-relaxed">
              Founded by Nethum Vidyalankara (Dulan), NCloud Digital is a performance digital marketing agency and modern web engineering studio operating out of Colombo, Sri Lanka, with global hubs in Dubai and London.
            </p>
          </ScrollReveal>
        </div>

        {/* Studio Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <ScrollReveal variant="curtain-expand" duration={950} className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-median-taupe/20 bg-median-taupe/10 shadow-xl">
              <img
                src="/ncloud-director.jpg"
                alt="NCloud Digital Studio Headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="card-flip-right" delay={140} duration={950} className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-median-taupe/70 block font-mono">
              The Architecture Behind The Results
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-black leading-tight">
              We build systems that turn digital attention into predictable commercial revenue.
            </h2>
            <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal">
              Traditional agencies operate in silos: designers don’t understand conversion metrics, and media buyers don’t understand software architecture. We fused both disciplines. Every design token is calibrated for psychological persuasion, every website is engineered for sub-1.2s speed, and every ad dollar is tied directly to pipeline through server-side Conversion API tracking.
            </p>
            <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal">
              Whether you are an ambitious e-commerce brand scaling to eight figures, or a luxury hospitality group bypassing OTA commissions, our studio provides direct founder stewardship from preliminary audit to global rollout.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/94760967884"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-median-taupe hover:bg-black text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
              >
                <span>Direct WhatsApp Consultation</span>
                <span>&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Global Studio Hubs */}
        <div className="py-16 border-t border-median-taupe/20 mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // PHYSICAL PRESENCE &bull; GLOBAL DELIVERY
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-black">
              Studio Operating Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STUDIO_OFFICES.map((office, idx) => (
              <ScrollReveal key={office.city} variant="card-lift" delay={idx * 120}>
                <div className="p-8 rounded-2xl bg-median-cream border border-median-taupe/20 space-y-3">
                  <span className="font-oswald text-2xl font-bold uppercase text-black block border-b border-median-taupe/30 pb-2">
                    {office.city}
                  </span>
                  <p className="text-xs text-median-taupe/80 leading-relaxed">
                    {office.address}
                    <br />
                    {office.region}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-mono font-bold text-black hover:text-median-taupe block pt-2"
                  >
                    {office.phone}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="py-16 border-t border-median-taupe/20 mb-24">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // THE LEADERSHIP
            </span>
            <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase text-black">
              Meet The Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((m, idx) => (
              <ScrollReveal key={m.id} variant="card-flip-left" delay={idx * 130}>
                <div className="p-8 rounded-2xl border border-median-taupe/20 bg-white space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-median-taupe/10 mb-6">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-median-cream text-median-taupe text-[10px] font-bold font-mono uppercase tracking-wider border border-median-taupe/30 inline-block mb-2">
                      {m.role}
                    </span>
                    <h3 className="font-oswald text-2xl font-bold uppercase text-black mb-2">
                      {m.name}
                    </h3>
                    <p className="text-xs text-median-taupe/80 leading-relaxed">
                      {m.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 border-t border-median-taupe/20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
                // COMMON QUESTIONS
              </span>
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-black">
                Everything You Need to Know
              </h2>
            </div>

            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} variant="blur-focus" delay={i * 80}>
                <div className="p-6 rounded-2xl border border-median-taupe/20 bg-median-cream space-y-2">
                  <h4 className="font-oswald text-lg font-bold uppercase text-black">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
