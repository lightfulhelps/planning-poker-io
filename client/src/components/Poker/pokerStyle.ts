import styled from '@emotion/styled';
import { Col, Button, Card, Row } from '../../styles/components';
import CardIcon from '../common/CardIcon';
import theme from '../../styles/theme';

export const PlayerCol = styled(Col)({
  width: 260,
  height: 268,
  margin: `${theme.spacing[2]} ${theme.spacing[3]}`,
});

export const PlayerCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
});

export const PlayerName = styled.span({
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'block',
  marginBottom: theme.spacing[3],
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
});

export const CardPicked = styled.span({
  fontSize: 96,
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const PokerCard = styled(CardIcon)({
  marginTop: 10,
});

export const ControlWrapper = styled(Row)({
  margin: `${theme.spacing[5]} 0`,
  '& button:first-of-type': {
    marginRight: theme.spacing[4],
  },
});
