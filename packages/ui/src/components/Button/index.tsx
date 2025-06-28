import styled from '@emotion/styled';
import { ReactNode } from 'react';

type ColorTheme = 'primary' | 'netural' | 'line' | 'secondary' | 'danger';
type Size = 'bold' | 'medium' | 'regular' | 'small' | 'x-small';

export interface ButtonProps {
  colorTheme?: ColorTheme;
  size?: Size;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:disabled {
    cursor: unset;
  }

  ${({ size = 'regular' }) => {
    switch (size) {
      case 'bold':
        return `
          height: 48px;
          padding: 13px 20px;
          font-size: 16px;
          font-weight: 600;
        `;
      case 'medium':
        return `
          height: 44px;
          padding: 11px 18px;
          font-size: 16px;
          font-weight: 600;
        `;
      case 'regular':
        return `
          height: 40px;
          padding: 9px 16px;
          font-size: 14px;
          font-weight: 600;
        `;
      case 'small':
        return `
          height: 36px;
          padding: 7px 14px;
          font-size: 14px;
          font-weight: 600;
        `;
      case 'x-small':
        return `
          height: 32px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 600;
        `;
    }
  }}

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          color: #FFFFFF;
          border-color: #FF5A14;
          background-color: #FF5A14;
          &:hover:not(:disabled), &:active:not(:disabled) {
            border-color: #E94600;
            background-color: #E94600;
          }
          &:disabled {
            color: #A2A5B4;
            border-color: #D8DBE5;
            background-color: #D8DBE5;
          }
        `;
      case 'secondary':
        return `
          color: #282B33;
          border: 0;
          background-color: #F3F5F9;
          &:hover:not(:disabled) {
            background-color: #E7EAF2;
          }
          &:active:not(:disabled) {
            background-color: #D8DBE5;
          }
          &:disabled {
            color: #A2A5B4;
            background-color: #F3F5F9;
          }
        `;
      case 'outline':
        return `
          color: #282B33;
          border-color: #282B33;
          background-color: #FFFFFF;
          &:hover:not(:disabled) {
            border-color: #6F7485;
            color: #6F7485;
          }
          &:active:not(:disabled) {
            color: #595D6D;
            border-color: #595D6D;
          }
          &:disabled {
            color: #A2A5B4;
            border-color: #D8DBE5;
            background-color: #E7EAF2;
          }
        `;
      case 'ghost':
        return `
          color: #282B33;
          border: 0;
          background-color: transparent;
          &:hover:not(:disabled) {
            background-color: #F3F5F9;
          }
          &:active:not(:disabled) {
            background-color: #E7EAF2;
          }
          &:disabled {
            color: #A2A5B4;
            background-color: transparent;
          }
        `;
    }
  }}
`;

const Icon = styled.div<Pick<ButtonProps, 'size'> & { hasChildren: boolean }>`
  width: 20px;
  height: 20px;

  ${({ size = 'regular', hasChildren }) => {
    if (!hasChildren) return null;

    switch (size) {
      case 'x-small':
        return `
          margin-right: 6px;
        `;
      default:
        return `
          margin-right: 8px;
        `;
    }
  }}
`;

export const Button = ({ icon, children, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      {icon && (
        <Icon size={props.size} hasChildren={!!children}>
          {icon}
        </Icon>
      )}
      {children}
    </Container>
  );
};

export default Button;
