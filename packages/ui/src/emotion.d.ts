import '@emotion/react';
import { palette } from './design-system/palette';
import { typography } from './design-system/typography';
import { breakpoints } from './design-system/breakpoints';

declare module '@emotion/react' {
  export interface Theme {
    palette: typeof palette;
    typography: typeof typography;
    breakpoints: typeof breakpoints;
  }
}
