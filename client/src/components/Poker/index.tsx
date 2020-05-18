import React, { useEffect } from 'react';
import PokerPlayer from './PokerPlayer';
import { useIO } from '../../contexts/io';
import PokerControl from './PokerControl';
import { Row } from '../../styles/components';
type Props = {
  players: Player[];
};

const Poker: React.FC<Props> = ({ players }) => {
  const { user, showdown, reveal, reset } = useIO();

  const otherPlayers = players
    .filter((player) => {
      return player.id !== user.id;
    })
    .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));

  useEffect(() => {
    if (!players.find((player) => !player.card)) reveal();
  }, [players, reveal]);

  return (
    <>
      <PokerControl handleReveal={reveal} handleReset={reset} />
      <Row justify="center">
        <PokerPlayer isUser player={user} showdown />
        {otherPlayers.map((player) => (
          <PokerPlayer key={player.id} player={player} showdown={showdown} />
        ))}
      </Row>
    </>
  );
};

export default Poker;
