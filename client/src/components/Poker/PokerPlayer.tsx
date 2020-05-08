import React from 'react';
import PokerDeck from './PokerDeck';

type Props = {
  player: Player;
  isUser?: boolean;
  showdown?: boolean;
};

const PokerPlayer: React.FC<Props> = ({
  player,
  isUser = false,
  showdown = false,
}) => {
  let card = '?';
  if (showdown && player.card) card = player.card as string;
  else if (!showdown && player.card) card = 'V';
  else if (showdown && !player.card) card = 'X';
  else card = '?';

  return (
    <div>
      {isUser ? (
        <PokerDeck card={player.card} />
      ) : (
        <p>
          {player.name} selected : {card}
        </p>
      )}
    </div>
  );
};

export default PokerPlayer;
