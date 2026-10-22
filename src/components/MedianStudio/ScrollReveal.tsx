import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'fade'
  | 'line-wipe'
  | 'split-mask'
  | 'card-flip-left'
  | 'card-flip-right'
  | 'card-lift'
  | 'blur-focus'
  | 'curtain-expand'
  | 'horizontal-slide-left'
  | 'horizontal-slide-right'
  | 'counter-pop'
  | 'ribbon-twist'
  | 'badge-drop'
  | 'zoom-rotate'
  | 'skew-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  once?: boolean;
}

// Shared registry so when an outer container animates into place, nested children re-evaluate
// even if the user pauses scrolling mid-transition.
const activeEvaluators = new Set<() => void>();
let cascadeTimers: number[] = [];

function triggerCascadeReevaluation() {
  // Immediately notify nested children in the next microtask/frame, plus follow-up ticks
  queueMicrotask(() => {
    activeEvaluators.forEach((fn) => fn());
  });
  requestAnimationFrame(() => {
    activeEvaluators.forEach((fn) => fn());
  });
  cascadeTimers.forEach((id) => window.clearTimeout(id));
  cascadeTimers = [100, 260, 550, 950].map((ms) =>
    window.setTimeout(() => {
      activeEvaluators.forEach((fn) => fn());
    }, ms)
  );
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 900,
  className = '',
  as: Component = 'div',
  style = {},
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const hasRevealedOnceRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let raf1: number | null = null;
    let raf2: number | null = null;
    let isMountedAndPainted = false;

    const isPreloaderActive = () => {
      if (typeof window === 'undefined') return false;
      if ((window.scrollY || window.pageYOffset) >= 10) return false;
      const seen = sessionStorage.getItem('median_preloader_seen');
      const done = (window as unknown as { __median_preloader_done?: boolean }).__median_preloader_done;
      return !seen && !done;
    };

    const evaluateVisibility = () => {
      if (!el || !isMountedAndPainted) return;
      if (once && hasRevealedOnceRef.current) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollBottom = (window.scrollY || window.pageYOffset) + vh;
      const isAtPageBottom = scrollBottom >= docHeight - 60;

      const ancestorReveal = el.parentElement?.closest('[data-scroll-reveal]');
      const isAncestorVisible =
        ancestorReveal?.getAttribute('data-reveal-state') === 'visible';

      // Trigger when element is inside the human viewing zone (top 85% of viewport),
      // when user has reached the very bottom of the page, OR when its parent card has entered view
      const triggerLine = isAtPageBottom ? vh - 10 : vh * 0.85;
      const isEnteringViewingZone =
        (rect.top <= triggerLine && rect.bottom >= 30) || isAncestorVisible;

      if (isEnteringViewingZone) {
        if (isPreloaderActive() && rect.top < vh) {
          return;
        }
        if (!isVisibleRef.current) {
          hasRevealedOnceRef.current = true;
          isVisibleRef.current = true;
          setIsVisible(true);
          triggerCascadeReevaluation();
        }
      } else if (!once) {
        // Reset when element leaves the viewport so re-scrolling always plays the animation
        if (!isAncestorVisible && (rect.top >= vh * 0.95 || rect.bottom <= -10)) {
          if (isVisibleRef.current) {
            isVisibleRef.current = false;
            setIsVisible(false);
          }
        }
      }
    };

    activeEvaluators.add(evaluateVisibility);

    // Wait two animation frames so the browser paints the initial opacity:0 / displaced transform
    // before transitioning to the active state
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        isMountedAndPainted = true;
        evaluateVisibility();
      });
    });

    let ticking = false;
    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          evaluateVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onPreloaderDone = () => {
      requestAnimationFrame(() => {
        evaluateVisibility();
      });
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        () => {
          evaluateVisibility();
        },
        { threshold: [0, 0.1, 0.25, 0.5] }
      );
      observer.observe(el);
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('median_preloader_done', onPreloaderDone);

    return () => {
      activeEvaluators.delete(evaluateVisibility);
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('median_preloader_done', onPreloaderDone);
    };
  }, [once]);

  // Initial (hidden) transform — bold, unmistakable spatial displacements
  const getInitialTransform = () => {
    switch (variant) {
      case 'split-mask':
        return 'translate3d(0, 115%, 0) rotateZ(2deg)';
      case 'card-flip-left':
        return 'perspective(1100px) rotateY(-28deg) rotateX(10deg) translate3d(-65px, 75px, 0) scale3d(0.86, 0.86, 1)';
      case 'card-flip-right':
        return 'perspective(1100px) rotateY(28deg) rotateX(10deg) translate3d(65px, 75px, 0) scale3d(0.86, 0.86, 1)';
      case 'card-lift':
        return 'perspective(1100px) rotateX(24deg) translate3d(0, 95px, 0) scale3d(0.85, 0.85, 1)';
      case 'blur-focus':
        return 'translate3d(0, 60px, 0) scale3d(0.90, 0.90, 1)';
      case 'curtain-expand':
        return 'scale3d(0.80, 0.80, 1) translate3d(0, 75px, 0)';
      case 'horizontal-slide-left':
        return 'translate3d(-115px, 25px, 0) scale3d(0.94, 0.94, 1)';
      case 'horizontal-slide-right':
        return 'translate3d(115px, 25px, 0) scale3d(0.94, 0.94, 1)';
      case 'counter-pop':
        return 'scale3d(0.55, 0.55, 1) translate3d(0, 75px, 0)';
      case 'ribbon-twist':
        return 'scale3d(0.78, 0.78, 1) rotate(-7deg) translate3d(0, 85px, 0)';
      case 'badge-drop':
        return 'translate3d(0, -55px, 0) scale3d(0.78, 0.78, 1)';
      case 'zoom-rotate':
        return 'scale3d(0.74, 0.74, 1) rotate(-6deg) translate3d(0, 65px, 0)';
      case 'skew-up':
        return 'translate3d(0, 75px, 0) skewY(6deg)';
      case 'fade-up':
        return 'translate3d(0, 75px, 0)';
      case 'fade-down':
        return 'translate3d(0, -75px, 0)';
      case 'fade-left':
        return 'translate3d(-85px, 0, 0)';
      case 'fade-right':
        return 'translate3d(85px, 0, 0)';
      case 'scale-up':
        return 'scale3d(0.82, 0.82, 1) translate3d(0, 65px, 0)';
      case 'line-wipe':
        return 'scaleX(0)';
      case 'fade':
      default:
        return 'translate3d(0, 35px, 0)';
    }
  };

  // Active (revealed) transform
  const getActiveTransform = () => {
    switch (variant) {
      case 'split-mask':
        return 'translate3d(0, 0%, 0) rotateZ(0deg)';
      case 'card-flip-left':
      case 'card-flip-right':
        return 'perspective(1100px) rotateY(0deg) rotateX(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)';
      case 'card-lift':
        return 'perspective(1100px) rotateX(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)';
      case 'blur-focus':
      case 'curtain-expand':
      case 'horizontal-slide-left':
      case 'horizontal-slide-right':
      case 'counter-pop':
      case 'badge-drop':
      case 'scale-up':
        return 'scale3d(1, 1, 1) translate3d(0, 0, 0)';
      case 'ribbon-twist':
      case 'zoom-rotate':
        return 'scale3d(1, 1, 1) rotate(0deg) translate3d(0, 0, 0)';
      case 'skew-up':
        return 'translate3d(0, 0, 0) skewY(0deg)';
      case 'line-wipe':
        return 'scaleX(1)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const getFilter = () => {
    if (variant === 'blur-focus') {
      return isVisible ? 'blur(0px)' : 'blur(16px)';
    }
    if (variant === 'curtain-expand' || variant === 'card-lift') {
      return isVisible ? 'blur(0px)' : 'blur(6px)';
    }
    return undefined;
  };

  const getClipPath = () => {
    if (variant === 'curtain-expand') {
      return isVisible
        ? 'inset(0% 0% 0% 0% round 16px)'
        : 'inset(18% 14% 18% 14% round 24px)';
    }
    return undefined;
  };

  const appliedDelay = isVisible ? Math.min(delay, 750) : 0;
  const activeDuration = isVisible ? duration : 350;

  const easing =
    variant === 'counter-pop' || variant === 'badge-drop' || variant === 'zoom-rotate'
      ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      : 'cubic-bezier(0.25, 1, 0.5, 1)';

  const transitionStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? getActiveTransform() : getInitialTransform(),
    filter: getFilter(),
    clipPath: getClipPath(),
    transformOrigin:
      variant === 'line-wipe'
        ? 'left center'
        : variant === 'card-flip-left'
        ? 'left center'
        : variant === 'card-flip-right'
        ? 'right center'
        : 'center center',
    transition: `opacity ${activeDuration}ms ${easing} ${appliedDelay}ms, transform ${activeDuration}ms ${easing} ${appliedDelay}ms, filter ${activeDuration}ms ease-out ${appliedDelay}ms, clip-path ${activeDuration}ms ${easing} ${appliedDelay}ms`,
    willChange: 'opacity, transform, filter',
    ...style,
  };

  return (
    <div
      ref={wrapperRef}
      className={`${variant === 'split-mask' ? 'overflow-hidden ' : ''}${className}`}
    >
      <Component
        data-scroll-reveal={variant}
        data-reveal-state={isVisible ? 'visible' : 'hidden'}
        className="h-full w-full"
        style={transitionStyles}
      >
        {children}
      </Component>
    </div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  variant?: RevealVariant;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 120,
  initialDelay = 0,
  duration = 900,
  className = '',
  variant = 'scale-up',
  once = false,
}) => {
  const variantsCycle: RevealVariant[] = [
    'card-flip-left',
    'card-lift',
    'card-flip-right',
    'curtain-expand',
    'zoom-rotate',
    'counter-pop',
  ];

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        const delay = initialDelay + Math.min(index * staggerDelay, 600);
        const childVariant = variant === 'scale-up' ? variantsCycle[index % variantsCycle.length] : variant;

        return (
          <ScrollReveal
            variant={childVariant}
            delay={delay}
            duration={duration}
            className="h-full"
            once={once}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </div>
  );
};

interface CountingNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountingNumber: React.FC<CountingNumberProps> = ({
  value,
  duration = 1800,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= vh * 0.85 && rect.bottom >= 20) {
        setIsActive(true);
      } else if (rect.top >= vh * 0.96 || rect.bottom <= -10) {
        setIsActive(false);
        setDisplayValue(0);
      }
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let animId: number;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * value);

      setDisplayValue(currentVal);

      if (progress < 1) {
        animId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [isActive, value, duration]);

  const formatted = value < 10 ? String(displayValue).padStart(2, '0') : String(displayValue);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
