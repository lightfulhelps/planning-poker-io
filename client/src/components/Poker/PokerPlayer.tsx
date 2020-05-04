import React from 'react';
import PokerDeck from './PokerDeck';

type Props = {
  player: Player;
  isUser?: boolean;
};

const PokerPlayer: React.FC<Props> = ({ player, isUser = false }) => {
  return (
    <div>
      {player.name}
      {isUser && <PokerDeck />}
    </div>
  );
};

export default PokerPlayer;
