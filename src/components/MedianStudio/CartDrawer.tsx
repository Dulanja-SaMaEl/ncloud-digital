import React from 'react';
import { useCart } from './CartContext';

interface CartDrawerProps {
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal, totalCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Surface */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 p-6 md:p-8 animate-fade-in border-l border-median-taupe/20">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-median-taupe/20 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-oswald text-2xl font-bold uppercase text-black">
                Your Selection
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-median-taupe/15 text-median-taupe text-xs font-bold font-mono">
                {totalCount} {totalCount === 1 ? 'PACKAGE' : 'PACKAGES'}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              data-cursor="pointer"
              className="w-8 h-8 rounded-full border border-median-taupe/40 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Cart Item List */}
          {items.length === 0 ? (
            <div className="py-20 text-center text-median-taupe">
              <div className="w-12 h-12 rounded-full border border-dashed border-median-taupe/40 flex items-center justify-center mx-auto mb-4 text-lg">
                ✦
              </div>
              <p className="font-oswald text-lg font-semibold text-black uppercase mb-1">
                Your cart is empty
              </p>
              <p className="text-xs text-median-taupe/70 max-w-xs mx-auto">
                Explore our growth engineering packages and add one to initiate your project sprint.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
              {items.map((item) => {
                const isAnnual = item.billingCycle === 'annual';
                const price = isAnnual ? item.plan.priceAnnual * 12 : item.plan.priceMonthly;

                return (
                  <div
                    key={`${item.plan.id}-${item.billingCycle}`}
                    className="p-4 rounded-xl border border-median-taupe/20 bg-median-cream flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-oswald text-base font-bold uppercase text-black">
                          {item.plan.title}
                        </h4>
                        <span className="font-oswald text-base font-bold text-black">
                          ${price * item.quantity}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-median-taupe mb-3">
                        <span className="px-2 py-0.5 bg-white rounded border border-median-taupe/30">
                          {isAnnual ? 'Annual Sprint (-20%)' : 'Monthly Retainer'}
                        </span>
                      </div>

                      {/* Quantity & Delete Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-median-taupe/30 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => updateQuantity(item.plan.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-black hover:bg-median-taupe/20"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold font-mono text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.plan.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-black hover:bg-median-taupe/20"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.plan.id)}
                          className="text-[11px] text-median-taupe hover:text-red-600 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="pt-6 border-t border-median-taupe/20 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-xs uppercase font-semibold text-median-taupe">Total Investment</span>
              <span className="font-oswald text-2xl font-bold text-black">${subtotal}</span>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                onCheckout();
              }}
              data-cursor="pointer"
              className="w-full py-4 rounded-full bg-median-taupe hover:bg-black text-white font-oswald text-sm font-bold tracking-widest uppercase transition-colors shadow-lg"
            >
              Confirm Sprint &amp; Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
