import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { STUDIO_OFFICES } from './siteData';
import { ScrollReveal } from './ScrollReveal';

interface ContactPageProps {
  navigate: (route: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Full Growth System (Ads + Web)',
    budget: '$1,000 - $3,000 / mo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#9F8170', '#000000', '#ffffff']
      });
    } catch {}
  };

  return (
    <div className="pt-28 pb-24 bg-white text-median-taupe min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="py-12 border-b border-median-taupe/20 mb-16">
          <ScrollReveal variant="badge-drop">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // COMMENCE COLLABORATION &bull; DIRECT CONTACT
            </span>
          </ScrollReveal>
          <ScrollReveal variant="split-mask" delay={100}>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
              Let&apos;s Build Your System
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-focus" delay={180}>
            <p className="text-xs sm:text-sm text-median-taupe/80 max-w-xl font-normal leading-relaxed">
              Reach out directly to Founder Dulan on WhatsApp or submit your growth requirements below. We review every brief within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Inquiries & Offices */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-median-taupe/70 block mb-2">
                Direct Communication
              </span>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-median-cream border border-median-taupe/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-median-taupe font-bold block">
                    Direct Hotline &bull; Colombo HQ
                  </span>
                  <a
                    href="tel:+94760967884"
                    className="font-oswald text-2xl font-bold uppercase text-black hover:text-median-taupe transition-colors block"
                  >
                    +94 76 096 7884
                  </a>
                  <span className="text-xs text-median-taupe/70 block">
                    Available Mon–Sat: 8:00 AM – 8:00 PM IST
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-median-cream border border-median-taupe/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-median-taupe font-bold block">
                    Instant Messaging
                  </span>
                  <a
                    href="https://wa.me/94760967884"
                    target="_blank"
                    rel="noreferrer"
                    className="font-oswald text-2xl font-bold uppercase text-black hover:text-median-taupe transition-colors block"
                  >
                    WhatsApp Founder Dulan &rarr;
                  </a>
                  <span className="text-xs text-median-taupe/70 block">
                    Fastest channel for project estimates &amp; audits
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-median-cream border border-median-taupe/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-median-taupe font-bold block">
                    Official Inquiries
                  </span>
                  <a
                    href="mailto:info@nclouddigital.com"
                    className="font-oswald text-2xl font-bold uppercase text-black hover:text-median-taupe transition-colors block"
                  >
                    info@nclouddigital.com
                  </a>
                  <span className="text-xs text-median-taupe/70 block">
                    Guaranteed formal proposal within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Offices list */}
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-median-taupe/70 block mb-4">
                Studio Hubs
              </span>
              <div className="space-y-4">
                {STUDIO_OFFICES.map((off) => (
                  <div key={off.city} className="border-l-2 border-median-taupe pl-4">
                    <span className="font-oswald text-base font-bold uppercase text-black block">
                      {off.city}
                    </span>
                    <p className="text-xs text-median-taupe/80">
                      {off.address}, {off.region}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-median-cream border border-median-taupe/20">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-median-taupe text-white flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h3 className="font-oswald text-3xl font-bold uppercase text-black">
                    Proposal Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-median-taupe/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Founder Dulan and our growth engineering team will analyze your requirements and reach out via WhatsApp ({formData.phone}) within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider font-mono"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-median-taupe block mb-2">
                    // SPRINT INQUIRY BRIEF
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nethum Vidyalankara"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                        Company / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Global Group"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nethum@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+94 76 096 7884"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                        Core Discipline
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium"
                      >
                        <option>Full Growth System (Ads + Web)</option>
                        <option>Performance Meta Advertising</option>
                        <option>Web & Headless Engineering</option>
                        <option>Cinematic Video & Viral Reels</option>
                        <option>Custom Enterprise Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium"
                      >
                        <option>$1,000 - $3,000 / mo</option>
                        <option>$3,000 - $8,000 / mo</option>
                        <option>$8,000 - $20,000 / mo</option>
                        <option>$20,000+ / mo (Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 font-mono">
                      Current Bottlenecks &amp; Growth Objectives
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding your current ad ROAS, required web functionality, or timeline expectations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 bg-white focus:border-black focus:outline-none text-xs text-black font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="pointer"
                    className="w-full py-4 rounded-full bg-median-taupe hover:bg-black text-white font-oswald text-sm font-bold tracking-widest uppercase transition-colors shadow-lg"
                  >
                    Request Custom Growth Strategy
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
