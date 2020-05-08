import React from 'react';

type Props = {
  handleReveal: () => void;
  handleReset: () => void;
};
const PokerControl: React.FC<Props> = ({ handleReveal, handleReset }) => {
  return (
    <div>
      <button onClick={handleReveal}>Reveal</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PokerControl;
