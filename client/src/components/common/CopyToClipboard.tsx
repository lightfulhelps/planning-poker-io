import React, { useRef, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  text: string;
  render: any;
};

const CopyToClipBoard = ({ text, render }: Props) => {
  const ref = useRef(null);
  const copy = (e) => {
    console.log('copy :');
    ref.current.select();
    console.log('invitationRef.current :', ref.current);
    document.execCommand('copy');
    e.target.focus();
  };

  const HiddenTextArea = styled.textarea({
    height: 0,
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
