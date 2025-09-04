export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2
} as const;

export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
  veryLong: 0.6
} as const;

export const VIEWPORT_MARGIN = {
  small: "-50px",
  medium: "-100px",
  large: "-200px",
  veryLarge: "-300px"
} as const;

export const FADE_IN_VARIANTS = {
  up: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  down: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 }
  },
  left: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  },
  right: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }
} as const;

export const SPRING_CONFIG = {
  gentle: { type: "spring", stiffness: 100, damping: 20 },
  normal: { type: "spring", stiffness: 200, damping: 25 },
  bouncy: { type: "spring", stiffness: 260, damping: 20 },
  stiff: { type: "spring", stiffness: 400, damping: 30 }
} as const;