import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  className?: string;
  noGutters?: boolean;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
};

const Element = styled.div(({ justify }: Props) => ({
  display: 'flex',
  justifyContent: justify,
  flexWrap: 'wrap',
}));

const Row: React.FC<Props> = ({ children, justify, ...other }: Props) => {
  return (
    <Element justify={justify} {...other}>
      {children}
    </Element>
  );
};

export default Row;
