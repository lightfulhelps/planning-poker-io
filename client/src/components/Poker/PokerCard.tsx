import React from 'react';

type Props = { onClick: (card: Card) => void; value: string | number };

const PokerCard: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button
      onClick={(e) => {
        console.log('e :', e);
        onClick(value);
      }}
    >
      {value}
    </button>
  );
};

export default PokerCard;
