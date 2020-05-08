import React, { useState } from 'react';
import PokerCard from './PokerCard';
import { useIO } from '../../contexts/io';

const cardValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, '?'];

type Props = { card: Card };

const PokerDeck: React.FC<Props> = ({ card }) => {
  const { playCard } = useIO();
  const selectCard = (card: Card) => {
    playCard(card);
  };

  return (
    <div>
      {!card ? (
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
      ) : (
        <span>{card}</span>
      )}
    </div>
  );
};

export default PokerDeck;
