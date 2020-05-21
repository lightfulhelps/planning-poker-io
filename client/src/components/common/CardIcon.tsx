import React, { ReactElement } from 'react';
import styled from '../../styles/styled';

interface Props {
  value: string;
  color?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const CardIcon: React.FC<Props> = ({
  color = 'primary',
  value,
  onClick,
}): ReactElement => {
  let cardFontSize = 'md';
  const fontSizes = ['lg', 'md', 'sm'];
  if (value === '0.5') cardFontSize = 'md';
  else {
    cardFontSize = fontSizes[value.length - 1];
  }

  const commonStyle = {
    border: 'solid black 2px',
    borderRadius: 2,
    width: 31,
    height: 45,
    marginTop: 10,
  };
  const PlayCard = styled.div(({ theme }) => ({
    ...commonStyle,
    backgroundColor: theme.colors.body,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    boxSizing: 'content-box',
    fontWeight: 'bold',
    fontSize: theme.fontSize[cardFontSize],
    ...(onClick && { cursor: 'pointer' }),
    ':after': {
      ...commonStyle,
      WebkitBackfaceVisibility: 'hidden',
      content: '""',
      backgroundColor: theme.colors[color],
      transform: 'rotate(-8.6deg)',
      left: 5,
      top: 2,
      position: 'absolute',
      zIndex: -10,
    },
  }));

  const Wrapper = styled.div({
    display: 'inline-block',
    position: 'relative',
    zIndex: 10,
  });

  return (
    <Wrapper>
      <PlayCard onClick={onClick}>{value}</PlayCard>
    </Wrapper>
  );
};

export default CardIcon;
