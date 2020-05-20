import styled from '../../styles/styled';
import { Col, Card, Row } from '../../styles/components';
import CardIcon from '../common/CardIcon';

export const PlayerCol = styled(Col)(({ theme }) => ({
  width: 260,
  height: 268,
  margin: `${theme.spacing[2]} ${theme.spacing[3]}`,
}));

export const PlayerCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
});

export const PlayerName = styled.span(({ theme }) => ({
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'block',
  paddingBottom: theme.spacing[3],
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
}));

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

export const ControlWrapper = styled(Row)(({ theme }) => ({
  margin: `${theme.spacing[5]} 0`,
  '& button:first-of-type': {
    marginRight: theme.spacing[4],
  },
}));
