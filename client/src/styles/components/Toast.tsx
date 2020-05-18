import React from 'react';
import { X } from 'react-feather';
import { VariantTypes } from './types';
import styled from '@emotion/styled';
import theme from '../theme';

interface ToastProps {
  message: string;
  variant: VariantTypes;
  handleClose: (id: string | number) => void;
  id: string | number;
}

const Toast: React.FC<ToastProps> = ({ message, variant, id, handleClose }) => {
  const divTransitions = {
    transition: 'all 0.35s',
    '&:hover': {
      paddingLeft: '42px',
      span: {
        width: '30px',
        '& > *': { opacity: '1', transition: 'all 0.5s' },
      },
    },
  };
  const spanTransitions = {
    transition: 'all 0.35s',
    width: '8px',
    '& > *': {
      opacity: '0',
      transition: 'all 0.1s',
    },
  };
  const Layout = styled.div({
    backgroundColor: theme.colors.white,
    position: 'relative',
    border: `solid 1px ${theme.colors[variant]}`,
    borderRadius: theme.borderRad.default,
    display: 'block',
    margin: `${theme.spacing[1]} auto`,
    padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
    ...divTransitions,
    span: {
      ...spanTransitions,
      height: '100%',
      cursor: 'pointer',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: theme.colors[variant],
      color: theme.colors.white,
      border: `solid 1px ${theme.colors[variant]}`,
      '&>*': {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
      },
    },
  });

  return (
    <Layout>
      <span>
        <X color="white" onClick={() => handleClose(id)} />
      </span>
      {message}
    </Layout>
  );
};

export const Toaster: React.FC = ({ children }) => {
  const SToaster = styled.div({
    position: 'absolute',
    zIndex: 1000,
    maxWidth: '60%',
    left: '50%',
    top: 0,
    transform: 'translate(-50%,0)',
  });
  return <SToaster>{children}</SToaster>;
};
export default Toast;
