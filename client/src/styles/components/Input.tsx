import React from 'react';
import styled from '@emotion/styled';
import theme from '../theme';
import { upperFirst, camelCase } from 'lodash';
import * as Icons from 'react-feather';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  icon?: string;
}

const StyledInput = styled.input(({ withIcon }: { withIcon: boolean }) => ({
  padding: withIcon
    ? `${theme.spacing[2]} ${theme.spacing[3]} ${theme.spacing[2]} 4.7rem`
    : `${theme.spacing[2]} ${theme.spacing[3]}`,
  background: theme.colors.white,
  border: `solid 1px ${theme.colors.gray400}`,
  borderRadius: theme.borderRad.default,
  fontSize: theme.fontSize.md,
  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.gray500,
  },
}));

const StyledWrapper = styled.div({
  position: 'relative',
  margin: `${theme.spacing[3]} 0`,
});

const Input: React.FC<InputProps> = ({ className, icon, ...others }) => {
  const Icon = icon ? Icons[upperFirst(camelCase(icon))] : undefined;

  const StyledIcon =
    Icon &&
    styled(Icon)({
      position: 'absolute',
      top: 8,
      left: 14,
    });

  return (
    <StyledWrapper>
      {StyledIcon && <StyledIcon />}
      <StyledInput withIcon={!!icon} className={className} {...others} />
    </StyledWrapper>
  );
};

export default Input;
