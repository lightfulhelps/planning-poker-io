import React from 'react';
import CardIcon from '../common/CardIcon';

type Props = { onClick: (card: Card) => void; value: string | number };

const PokerCard: React.FC<Props> = ({ value, onClick }) => {
  return (
    <CardIcon
      value={value.toString()}
      {...(value === '?' && { color: 'green' })}
      onClick={() => {
        onClick(value);
      }}
    />
  );
};

export default PokerCard;
