import { useReducedMotion } from 'framer-motion';

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
      : { type: 'spring', stiffness: 100, damping: 20 },
    transitionConfig: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.3 },
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
