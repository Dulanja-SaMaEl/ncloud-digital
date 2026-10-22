import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'work' | 'cart' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/pointer-enabled devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [data-cursor]');
      if (interactive) {
        setIsHovering(true);
        const customType = interactive.getAttribute('data-cursor');
        if (customType === 'work') {
          setCursorType('work');
          setCursorText('VIEW');
        } else if (customType === 'cart') {
          setCursorType('cart');
          setCursorText('BAG');
        } else if (customType === 'drag') {
          setCursorType('drag');
          setCursorText('DRAG');
        } else {
          setCursorType('pointer');
          setCursorText('');
        }
      } else {
        setIsHovering(false);
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isTextCursor = cursorType === 'work' || cursorType === 'cart' || cursorType === 'drag';

  return (
    <>
      {/* Small Precision Dot */}
      <div
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
          isTextCursor ? 'opacity-0' : isHovering ? 'w-2 h-2 bg-black' : 'w-2.5 h-2.5 bg-median-taupe'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Outer Magnetic Ring / Expander with Badge Text */}
      <div
        className={`fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-150 ease-out font-oswald text-[10px] tracking-widest font-semibold uppercase ${
          isTextCursor
            ? 'w-16 h-16 bg-black text-white scale-100 shadow-xl'
            : isHovering
            ? 'w-12 h-12 border-2 border-median-taupe bg-median-taupe/15 scale-100'
            : 'w-8 h-8 border border-median-taupe/40 scale-75'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {cursorText}
      </div>
    </>
  );
};
