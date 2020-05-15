import React, { useState } from 'react';
import PokerCard from './PokerCard';
import { useIO } from '../../contexts/io';
import { Row, Col } from '../../styles/components';

const cardValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100, '?'];

const PokerDeck: React.FC = () => {
  const { playCard } = useIO();
  const selectCard = (card: Card) => {
    playCard(card);
  };

  return (
    <div>
      <Row>
        {cardValues.map((cardValue, i) => (
          <Col span={3} key={i}>
            <PokerCard
              onClick={() => selectCard(cardValue)}
              value={cardValue}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokerDeck;
