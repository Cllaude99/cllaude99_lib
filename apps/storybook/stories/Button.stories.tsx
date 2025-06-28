import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@cllaude99_lib/ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: '버튼',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: '버튼',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'medium',
    children: '버튼',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    children: '버튼',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: '버튼',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: '버튼',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    children: '버튼',
  },
};
