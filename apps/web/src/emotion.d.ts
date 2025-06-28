import '@emotion/react';
import { palette } from '@cllaude99_lib/ui/src/design-system/palette';
import { typography } from '@cllaude99_lib/ui/src/design-system/typography';
import { breakpoints } from '@cllaude99_lib/ui/src/design-system/breakpoints';

declare module '@emotion/react' {
  export interface Theme {
    palette: typeof palette;
    typography: typeof typography;
    breakpoints: typeof breakpoints;
  }
}
