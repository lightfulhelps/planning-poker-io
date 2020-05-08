import React from 'react';

import styled from '../styled';

import { VariantTypes } from './types';
import theme from '../theme';

import icon from 'react-feather';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  variant?: 'primary';
  isOutline?: boolean;
  icon: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  variant = 'primary',
  isOutline = false,
  size = 'md',
  children,
  type = 'button',
  icon,
  onClick = () => {
    // Empty
  },
  ...others
}) => {
  console.log('theme.colors.primary :', theme.colors.primary);
  const colors = !isOutline
    ? { backgroundColor: theme.colors[variant], color: theme.colors.white }
    : { backgroundColor: theme.colors.white, color: theme.colors[variant] };

  const StyledButton = styled.button({
    display: 'flex',
    flexDirection: 'row',
    padding: '50px 16px',
    boxShadow:
      '0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08)',
    borderRadius: '4px',
    fontSize: theme.fontSize.sm,
    cursor: 'pointer',
    ...colors,
  });

  // const Icon = () => import(`react-feather/`);

  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton
      type={type}
      className={className}
      onClick={onClick}
      {...others}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
