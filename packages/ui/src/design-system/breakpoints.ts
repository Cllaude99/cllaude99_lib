export const breakpoints = {
  tablet: '768px',
  desktop: '1280px',
} as const;

export const mq = {
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
} as const;

export default breakpoints;
