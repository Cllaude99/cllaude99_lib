/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes } from 'react';
import { buttonBase, buttonSizes, buttonVariants } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button css={[buttonBase, buttonVariants[variant], buttonSizes[size]]} {...props}>
      {children}
    </button>
  );
};

export default Button;
