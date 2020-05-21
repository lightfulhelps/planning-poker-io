import React, { useEffect } from 'react';

import { useIO } from '../../contexts/io';
import { useParams, useHistory } from 'react-router-dom';
import Poker from '../Poker';
import { Container, Button, Col } from '../../styles/components';
import { ArrowLeft } from 'react-feather';
import CopyToClipBoard from '../common/CopyToClipboard';
import * as Styled from './roomStyle';

const Room: React.FC = () => {
  const { room } = useIO();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!room) {
      history.push(`/invitation/${id}`);
    }
  }, [history, id, room]);

  if (!room) return <></>;
  else
    return (
      <>
        <Container>
          <Styled.HeadingRow justify="space-between">
            <Col span={4}>
              <Button isRound isOutline onClick={() => history.goBack()}>
                <ArrowLeft />
              </Button>
            </Col>
            <Col span={4}>
              <h1>PLANNING POKER</h1>
            </Col>
            <Col span={4}>
              <CopyToClipBoard
                text={`${process.env.REACT_APP_APP_URL}/invitation/${room.id}`}
                render={({ copy }) => (
                  <Button isOutline onClick={copy}>
                    Copy invitation link
                  </Button>
                )}
              />
            </Col>
          </Styled.HeadingRow>
          <Poker players={room.players} />
        </Container>
      </>
    );
};

export default Room;
