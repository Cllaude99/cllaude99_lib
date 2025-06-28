import type { Preview } from '@storybook/react';
import { Cllaude99UIProvider } from '@cllaude99_lib/ui';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Cllaude99UIProvider>
        <Story />
      </Cllaude99UIProvider>
    ),
  ],
};

export default preview;
