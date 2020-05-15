import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  span?: number;
  tag?: keyof JSX.IntrinsicElements;
};

const Col: React.FC<Props> = ({ children, span, ...others }: Props) => {
  const Element = styled.div(({ span }: { span: number }) => {
    return {
      flex: '0 1 auto',
      maxWidth: '100%',
      minHeight: '1px',
      ...(span && {
        flex: ` 0 0 ${100 * (span / 12)}%`,
        maxWidth: '100%',
        display: 'block',
      }),
    };
  });
  return (
    <Element span={span} {...others}>
      {children}
    </Element>
  );
};

export default Col;
