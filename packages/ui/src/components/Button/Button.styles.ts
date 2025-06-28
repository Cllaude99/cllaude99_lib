import { css } from '@emotion/react';
import { palette } from '../../design-system/palette';
import { typography } from '../../design-system/typography';

export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const buttonSizes = {
  small: css`
    ${typography.button.button3};
    padding: 8px 16px;
    min-width: 64px;
  `,
  medium: css`
    ${typography.button.button2};
    padding: 12px 20px;
    min-width: 80px;
  `,
  large: css`
    ${typography.button.button1};
    padding: 16px 24px;
    min-width: 96px;
  `,
};

export const buttonVariants = {
  primary: css`
    background-color: ${palette.primary};
    color: ${palette.white};

    &:hover:not(:disabled) {
      background-color: ${palette.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${palette.secondary};
    color: ${palette.white};

    &:hover:not(:disabled) {
      background-color: ${palette.secondaryDark};
    }
  `,
  danger: css`
    background-color: ${palette.danger};
    color: ${palette.white};

    &:hover:not(:disabled) {
      background-color: ${palette.dangerDark};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${palette.gray[900]};
    border: 1px solid ${palette.gray[300]};

    &:hover:not(:disabled) {
      background-color: ${palette.gray[100]};
    }
  `,
};
