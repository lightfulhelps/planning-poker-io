import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  className?: string;
  noGutters?: boolean;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
};

const Row: React.FC<Props> = ({ children, justify, ...other }: Props) => {
  const Element = styled.div`
    display: flex;
    justify-content: ${justify};
    flex-wrap: wrap;
  `;

  return <Element {...other}>{children}</Element>;
};

export default Row;
