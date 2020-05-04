import React from 'react';

type Props = {
  handleReveal: () => void;
};
const PokerControl: React.FC<Props> = ({ handleReveal }) => {
  return (
    <div>
      <button onClick={handleReveal}>Reveal</button>
    </div>
  );
};

export default PokerControl;
