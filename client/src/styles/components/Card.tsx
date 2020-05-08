import React from 'react';
import styled from '@emotion/styled';
import theme from '../theme';

interface Props {
  className?: string;
}

const Card: React.FunctionComponent<Props> = ({ className, ...others }) => {
  const Element = styled.div({
    width: '100%',
    padding: theme.spacing[5],
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRad.md,
    boxShadow: '0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,.1)',
  });
  return <Element className={className} {...others} />;
};

export default Card;
