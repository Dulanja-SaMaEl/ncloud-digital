import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useCart } from './CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');

    // Trigger elegant luxury confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#9F8170', '#000000', '#b59b8c', '#ffffff']
      });
    } catch {
      // Ignore if unavailable
    }

    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 shadow-2xl z-10 border border-median-taupe/20 animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          data-cursor="pointer"
          className="absolute top-6 right-6 w-8 h-8 rounded-full border border-median-taupe/40 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
        >
          ✕
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-median-taupe uppercase block mb-1">
                // SPRINT INITIATION
              </span>
              <h3 className="font-oswald text-3xl font-bold uppercase text-black">
                Confirm Package
              </h3>
              <p className="text-xs text-median-taupe/80 mt-1">
                Total investment: <strong className="text-black font-oswald text-sm">${subtotal}</strong>. No automated charges until our discovery review.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nethum Vidyalankara"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 focus:border-black focus:outline-none text-xs text-black font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nethum@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 focus:border-black focus:outline-none text-xs text-black font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 76 096 7884"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 focus:border-black focus:outline-none text-xs text-black font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Group"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 focus:border-black focus:outline-none text-xs text-black font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1.5">
                  Project Notes &amp; Growth Objectives
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding your target ROAS, desired launch timeline, or current technical stack..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-median-taupe/30 focus:border-black focus:outline-none text-xs text-black font-medium resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  data-cursor="pointer"
                  className="w-full py-4 rounded-full bg-median-taupe hover:bg-black text-white font-oswald text-sm font-bold tracking-widest uppercase transition-colors shadow-lg"
                >
                  Submit Sprint Reservation
                </button>
              </div>

              <p className="text-[10px] text-center text-median-taupe/70 font-mono">
                Direct WhatsApp contact with Founder Dulan guaranteed within 24 hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-median-taupe/15 text-median-taupe flex items-center justify-center text-2xl mx-auto">
              ✓
            </div>
            <h3 className="font-oswald text-3xl font-bold uppercase text-black">
              Sprint Confirmed
            </h3>
            <p className="text-xs text-median-taupe/80 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. We have registered your reservation for <strong>{formData.company || 'your brand'}</strong>.
              Founder Dulan and our engineering team will reach out directly on WhatsApp ({formData.phone || '+94 76 096 7884'}) and email.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                data-cursor="pointer"
                className="px-8 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-median-taupe transition-colors"
              >
                Return to Studio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
