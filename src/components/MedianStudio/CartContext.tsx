import React, { createContext, useContext, useState, useEffect } from 'react';
import { PricingPlan } from './siteData';

export interface CartItem {
  plan: PricingPlan;
  billingCycle: 'monthly' | 'annual';
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (plan: PricingPlan, billingCycle?: 'monthly' | 'annual') => void;
  removeItem: (planId: string) => void;
  updateQuantity: (planId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ncloud_editorial_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ncloud_editorial_cart', JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const addItem = (plan: PricingPlan, billingCycle: 'monthly' | 'annual' = 'monthly') => {
    setItems((prev) => {
      const existing = prev.find((item) => item.plan.id === plan.id && item.billingCycle === billingCycle);
      if (existing) {
        return prev.map((item) =>
          item.plan.id === plan.id && item.billingCycle === billingCycle
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { plan, billingCycle, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (planId: string) => {
    setItems((prev) => prev.filter((item) => item.plan.id !== planId));
  };

  const updateQuantity = (planId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(planId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.plan.id === planId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const price = item.billingCycle === 'annual' ? item.plan.priceAnnual * 12 : item.plan.priceMonthly;
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
