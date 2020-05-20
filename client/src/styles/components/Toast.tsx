import React from 'react';
import { X } from 'react-feather';
import { VariantTypes } from './types';
import styled from '../../styles/styled';

interface ToastProps {
  message: string;
  variant: VariantTypes;
  handleClose: (id: string | number) => void;
  id: string | number;
}

export const Toaster: React.FC = ({ children }) => {
  const SToaster = styled.div(({ theme }) => ({
    position: 'absolute',
    zIndex: 1000,
    maxWidth: '60%',
    bottom: 0,
    left: theme.spacing[4],
    // left: '50%',
    // transform: 'translate(-50%,0)',
  }));
  return <SToaster>{children}</SToaster>;
};

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
  const Layout = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.white,
    boxShadow:
      '0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3)',
    position: 'relative',
    border: `solid 1px ${theme.colors[variant]}`,

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
  }));

  return (
    <Layout>
      <span>
        <X color="white" onClick={() => handleClose(id)} />
      </span>
      {message}
    </Layout>
  );
};

export default Toast;
