import React from 'react';
import styled from '../../styles/styled';
import { upperFirst, camelCase } from 'lodash';
import { VariantTypes } from './types';

import * as Icons from 'react-feather';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  variant?: VariantTypes;
  isOutline?: boolean;
  isLink?: boolean;
  isRound?: boolean;
  isDisabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  variant = 'primary',
  isOutline = false,
  isLink = false,
  isRound = false,
  isDisabled = false,
  size = 'md',
  children,
  type = 'button',
  icon,
  iconPosition = 'left',
  onClick = () => {
    // Empty
  },
  ...others
}) => {
  const StyledButton = styled.button(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow:
      '0px 4px 6px rgba(50, 50, 93, 0.11),\n      0px 1px 3px rgba(0, 0, 0, 0.08)',
    fontSize: theme.fontSize.default,
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 500,
    ...(!isOutline
      ? { backgroundColor: theme.colors[variant], color: theme.colors.white }
      : { backgroundColor: theme.colors.white, color: theme.colors[variant] }),
    ...(isDisabled && {
      backgroundColor: theme.colors.gray200,
      color: theme.colors.gray400,
      cursor: 'default',
    }),
    ...(isRound
      ? {
          borderRadius: 99,
          padding: 5,
        }
      : {
          borderRadius: 4,
          padding: '5px 16px',
        }),
    '&:focus': {
      outline: 'none',
    },
    span: {
      '& > *': {
        verticalAlign: 'middle',
      },
      ...(icon && {
        ...(iconPosition === 'right'
          ? { marginRight: theme.spacing[1] }
          : { marginLeft: theme.spacing[1] }),
      }),
    },
  }));

  const StyledLink = styled.button(({ theme }) => ({
    background: 'none',
    color: theme.colors.primary,
    border: 'none',
    padding: '0',
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
    '&:hover': {
      color: 'inherit',
    },
  }));

  const Icon = icon ? Icons[upperFirst(camelCase(icon))] : undefined;

  const handleClick = (e) => {
    if (isDisabled) e.preventDefault();
    onClick(e);
  };

  return (
    <>
      {isLink ? (
        <StyledLink onClick={handleClick}>{children}</StyledLink>
      ) : (
        <StyledButton
          type={type}
          className={className}
          onClick={handleClick}
          {...others}
        >
          {Icon && iconPosition === 'left' && <Icon size={19} />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon size={19} />}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
