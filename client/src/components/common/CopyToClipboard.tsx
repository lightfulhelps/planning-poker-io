import React, { useRef } from 'react';
import styled from '../../styles/styled';
import { useToaster } from '../../contexts/toaster';

type Props = {
  text: string;
  render: any;
};

const CopyToClipBoard = ({ text, render }: Props) => {
  const ref = useRef(null);
  const { addToast } = useToaster();
  const copy = (e) => {
    ref.current.select();
    document.execCommand('copy');
    e.target.focus();
    addToast('primary', 'Invitation link copied to your clipboard');
  };

  const HiddenTextArea = styled.textarea({
    height: 0,
    opacity: 0,
    position: 'absolute',
    zIndex: -9999,
  });
  return (
    <>
      {render({
        copy: copy,
      })}
      <HiddenTextArea onClick={copy} ref={ref} defaultValue={text} />
    </>
  );
};

export default CopyToClipBoard;
