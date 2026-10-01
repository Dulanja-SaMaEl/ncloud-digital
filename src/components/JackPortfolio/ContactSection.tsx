import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full Growth System (Ads + Web)',
    budget: '$1,000 - $3,000 / mo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-12 font-kanit relative z-20 border-t border-white/[0.07] select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-3">
            // 06 INITIATE PARTNERSHIP
          </span>
          <FadeIn delay={0} y={30}>
            <h2
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
            >
              SCALE WITH US
            </h2>
          </FadeIn>
          <p className="text-sm sm:text-base text-[#D7E2EA]/60 max-w-lg font-light">
            Ready to turn digital attention into predictable revenue? Book a strategy call or send us your brief. We respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Left Column: Direct Info & WhatsApp */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <FadeIn delay={0.1} y={30}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
                    Direct Contact
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/50 font-light leading-relaxed">
                    Skip the agency gatekeepers. Speak directly with our growth architects.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/94770000000?text=Hi%20NCloud%20Digital,%20I'd%20like%20to%20inquire%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageSquare size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-mono">
                        Instant WhatsApp Chat
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        +94 77 000 0000
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@nclouddigital.com"
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-mono">
                        Official Inquiries
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        hello@nclouddigital.com
                      </span>
                    </div>
                  </a>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                      <MapPin size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-mono">
                        Headquarters &amp; Global
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Colombo, Sri Lanka &bull; Worldwide
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-400/5 border border-cyan-400/15 flex items-center gap-3">
                  <ShieldCheck size={20} className="text-cyan-400 shrink-0" />
                  <span className="text-xs text-cyan-300/80 font-light leading-relaxed">
                    100% Confidentiality Guaranteed &bull; Fast NDA Signatures Upon Request
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2} y={30}>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white/[0.02] border border-white/15 backdrop-blur-md relative overflow-hidden">
                {submitted ? (
                  <div className="py-16 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-white mb-2">
                      Proposal Request Received!
                    </h3>
                    <p className="text-sm text-[#D7E2EA]/70 max-w-md font-light mb-6">
                      Thank you for reaching out. Founder Dulan and our growth engineering team will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-widest text-white transition-all font-mono"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alexander Vance"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 text-base sm:text-sm font-sans transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alexander@brand.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 text-base sm:text-sm font-sans transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                          Brand / Website
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="brand.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 text-base sm:text-sm font-sans transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                          Target Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#121820] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-base sm:text-sm font-sans transition-all"
                        >
                          <option>Full Growth System (Ads + Web)</option>
                          <option>Meta Ads & Lead Engines</option>
                          <option>Web Development & Web Apps</option>
                          <option>Content Creation & 3D Media</option>
                          <option>Social Media & Authority</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                        Monthly Marketing Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121820] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-base sm:text-sm font-sans transition-all"
                      >
                        <option>$1,000 - $3,000 / mo</option>
                        <option>$3,000 - $8,000 / mo</option>
                        <option>$8,000 - $20,000 / mo</option>
                        <option>$20,000+ / mo (Enterprise)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                        Project Brief &amp; Goals
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current bottlenecks, target ROAS, or desired website scope..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 text-base sm:text-sm font-sans transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 15px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                      }}
                      className="mt-2 w-full py-4 rounded-full text-white font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                    >
                      <Send size={16} />
                      <span>Request Custom Growth Strategy</span>
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
