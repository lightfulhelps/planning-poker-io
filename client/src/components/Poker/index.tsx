import React from 'react';
import PokerPlayer from './PokerPlayer';
import { useIO } from '../../contexts/io';
import PokerControl from './PokerControl';
type Props = {
  players: Player[];
};

const Poker: React.FC<Props> = ({ players }) => {
  const { user } = useIO();
  const otherPlayers = players
    .filter((player) => player.id !== user.id)
    .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));

  const reveal = () => {};

  return (
    <>
      <PokerControl handleReveal={reveal} />
      <PokerPlayer isUser player={user} />
      {otherPlayers.map((player) => (
        <PokerPlayer key={player.id} player={player} />
      ))}
    </>
  );
};

export default Poker;
