import React from 'react';
import PokerDeck from './PokerDeck';
import { Card } from '../../styles/components';
import * as Styled from './pokerStyle';
import { Check } from 'react-feather';

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
  let card = '?' as string | React.ReactNode;
  if (showdown && player.card) card = player.card as string;
  else if (!showdown && player.card) card = <Check size={120} />;
  else if (showdown && !player.card) card = 'X';
  else card = '...';

  return (
    <Styled.PlayerCol>
      <Styled.PlayerCard>
        <Styled.PlayerName>{player.name}</Styled.PlayerName>
        {!isUser || player.card ? (
          <Styled.CardPicked>{card}</Styled.CardPicked>
        ) : (
          <PokerDeck />
        )}
      </Styled.PlayerCard>
    </Styled.PlayerCol>
  );
};

export default PokerPlayer;
