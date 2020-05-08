import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  span?: number;
  tag?: keyof JSX.IntrinsicElements;
};

const Col: React.FC<Props> = ({ children, span, ...other }: Props) => {
  const Element = styled.div`
    flex: 0 1 auto;
    max-width: 100%;
    min-height: 1px;
    ${span &&
    ` flex: 0 0 ${100 * (12 / span)}%;
        max-width: 100%;
        display: block;
    `}
  `;

  return <Element {...other}>{children}</Element>;
};

export default Col;
