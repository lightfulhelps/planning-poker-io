import React from 'react';
import { Button } from '../../styles/components';
import * as Styled from './pokerStyle';

type Props = {
  handleReveal: () => void;
  handleReset: () => void;
};

const PokerControl: React.FC<Props> = ({ handleReveal, handleReset }) => {
  return (
    <Styled.ControlWrapper justify="center">
      <Button onClick={handleReveal} icon="eye">
        Reveal
      </Button>
      <Button onClick={handleReset} icon="alert-octagon" variant="error">
        Reset
      </Button>
    </Styled.ControlWrapper>
  );
};

export default PokerControl;
