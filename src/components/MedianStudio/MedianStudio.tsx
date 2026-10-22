import React, { useState, useEffect } from 'react';
import { CartProvider } from './CartContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { CheckoutModal } from './CheckoutModal';
import { FullscreenMenu } from './FullscreenMenu';
import { Preloader } from './Preloader';
import { CustomCursor } from './CustomCursor';
import { HomePage } from './HomePage';
import { WorkPage } from './WorkPage';
import { AboutPage } from './AboutPage';
import { PricingPage } from './PricingPage';
import { BlogPage } from './BlogPage';
import { ContactPage } from './ContactPage';
import { StyleGuidePage } from './StyleGuidePage';

interface MedianStudioProps {
  onSwitchView?: (view: 'ncloud' | 'jack' | 'halo' | 'median') => void;
}

export const MedianStudio: React.FC<MedianStudioProps> = ({ onSwitchView }) => {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#median/')) {
        return '/' + hash.replace('#median/', '');
      }
    }
    return '/';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#median/')) {
        setCurrentRoute('/' + hash.replace('#median/', ''));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: string) => {
    setCurrentRoute(route);
    if (route === '/') {
      window.history.pushState(null, '', '#median');
    } else {
      window.history.pushState(null, '', `#median${route}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/work':
        return <WorkPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/pricing':
        return <PricingPage navigate={navigate} onOpenCheckout={() => setIsCheckoutOpen(true)} />;
      case '/blog':
        return <BlogPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} />;
      case '/style-guide':
        return <StyleGuidePage />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-white text-[#9F8170] font-inter antialiased selection:bg-[#9F8170] selection:text-white overflow-x-hidden">
        {/* Preloader */}
        <Preloader />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Navigation Bar */}
        <Navbar
          currentRoute={currentRoute}
          navigate={navigate}
          onOpenMenu={() => setIsMenuOpen(true)}
          onSwitchView={onSwitchView}
        />

        {/* Main Routed Page Surface */}
        <main>{renderCurrentPage()}</main>

        {/* Studio Footer */}
        <Footer navigate={navigate} />

        {/* Slide-out Stateful Cart Drawer */}
        <CartDrawer onCheckout={() => setIsCheckoutOpen(true)} />

        {/* Sprint Confirmation & Checkout Modal */}
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        {/* Fullscreen Architectural Menu */}
        <FullscreenMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      </div>
    </CartProvider>
  );
};

export default MedianStudio;
