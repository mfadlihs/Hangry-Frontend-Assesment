import facepaint from "facepaint";

const breakpoints = [578, 640, 768, 1024, 1280];

export const mediaQuery = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);
