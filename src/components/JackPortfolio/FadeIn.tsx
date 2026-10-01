import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.75,
  x = 0,
  y = 26,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-30px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Buttery smooth deceleration
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
