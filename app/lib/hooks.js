import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * Hook to safely handle motion preferences
 * Returns motion configuration based on user preferences
 */
export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    shouldReduceMotion,
    springConfig: shouldReduceMotion
      ? { duration: 0 }
      : { type: 'spring', stiffness: 120, damping: 25 },
    transitionConfig: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.3 },
  };
}

/**
 * Hook for parallax scroll effects
 * Returns transform values based on scroll position
 */
export function useParallax(strength = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrolled;
      const distance = scrolled - (elementTop - window.innerHeight);
      
      // Only apply parallax when element is in viewport
      if (distance > -window.innerHeight && distance < window.innerHeight) {
        setOffset(distance * strength);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength, shouldReduceMotion]);

  return {
    ref,
    offset: shouldReduceMotion ? 0 : offset,
  };
}

/**
 * Hook for scroll-based animations
 * Can be extended for parallax, scroll triggers, etc.
 */
export function useScrollAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return {
    shouldReduceMotion,
    staggerDelay: shouldReduceMotion ? 0 : 0.1,
  };
}

/**
 * Animation variants for common patterns
 */
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};
