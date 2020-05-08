import React from 'react';
import PokerPlayer from './PokerPlayer';
import { useIO } from '../../contexts/io';
import PokerControl from './PokerControl';
type Props = {
  players: Player[];
};

const Poker: React.FC<Props> = ({ players }) => {
  const { user, showdown, reveal, reset } = useIO();
  console.log('showdown :', showdown);
  const otherPlayers = players
    .filter((player) => {
      return player.id !== user.id;
    })
    .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));

  return (
    <>
      <PokerControl handleReveal={reveal} handleReset={reset} />
      <PokerPlayer isUser player={user} showdown />
      {otherPlayers.map((player) => (
        <PokerPlayer key={player.id} player={player} showdown={showdown} />
      ))}
    </>
  );
};

export default Poker;
