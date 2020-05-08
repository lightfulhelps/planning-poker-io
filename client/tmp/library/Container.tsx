// import React from 'react';
// import styled from '@emotion/styled';

// interface Props {
//   className?: string;
//   maxWidth?: string | number;
// }

// const Container: React.FunctionComponent<Props> = ({
//   maxWidth,
//   children,
//   ...others
// }) => {
//   const Element = styled.div`
//     max-width: 100%;
//     width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};
//     margin-left: auto;
//     margin-right: auto;

//     @media (min-width: 640px) {
//       max-width: 640px;
//     }
//     @media (min-width: 768px) {
//       max-width: 768px;
//     }
//     @media (min-width: 1024px) {
//       max-width: 1024px;
//     }
//     @media (min-width: 1280px) {
//       max-width: 1280px;
//     }
//   `;

//   return <Element {...others}>{children}</Element>;
// };

// export default Container;
