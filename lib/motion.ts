import type { Transition, Variants } from "framer-motion";

export const easePremium = [0.25, 0.1, 0.25, 1] as const;

export const motionTransition: Transition = {
  duration: 0.45,
  ease: easePremium,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: motionTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: easePremium } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: motionTransition },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: motionTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: motionTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const viewportOnce = { once: true, amount: 0.15 as const };

export const noMotionVariants: Variants = {
  hidden: {},
  show: {},
};
