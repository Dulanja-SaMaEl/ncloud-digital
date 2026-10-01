import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
}

export const ContactButton: React.FC<ButtonProps> = ({ 
  className = '', 
  onClick, 
  href = '#contact',
  children = 'Book Strategy Call' 
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      onClick={onClick}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 15px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
      className={`rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:shadow-[0_0_28px_rgba(182,0,168,0.65)] inline-flex items-center justify-center whitespace-nowrap cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export const LiveProjectButton: React.FC<ButtonProps> = ({ 
  className = '', 
  onClick, 
  href = '#',
  children = 'View Case Study'
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors duration-200 inline-flex items-center justify-center whitespace-nowrap cursor-pointer shadow-md ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a href={href} className="inline-block" target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export const SecondaryPillButton: React.FC<ButtonProps> = ({
  className = '',
  onClick,
  href = '#',
  children = 'Explore More'
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      onClick={onClick}
      className={`rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium uppercase tracking-wider px-6 py-2.5 text-xs sm:text-sm backdrop-blur-md inline-flex items-center gap-2 cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
