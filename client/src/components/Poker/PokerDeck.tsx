import React from 'react';
import PokerCard from './PokerCard';
import { useIO } from '../../contexts/io';

const cardValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, '?'];

type Props = {};

const PokerDeck: React.FC<Props> = ({}) => {
  const { playCard } = useIO();
  const selectCard = (card: Card) => {
    console.log('card :', card);
    playCard(card);
  };

  return (
    <div>
      <ul>
        {cardValues.map((cardValue, i) => (
          <li key={i}>
            <PokerCard
              onClick={() => selectCard(cardValue)}
              value={cardValue}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokerDeck;
