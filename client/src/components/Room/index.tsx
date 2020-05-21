import React, { useEffect } from 'react';

import { useIO } from '../../contexts/io';
import { useParams, useHistory } from 'react-router-dom';
import Poker from '../Poker';
import { Container, Button, Row, Col } from '../../styles/components';
import { ArrowLeft, UserPlus } from 'react-feather';
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
          <Styled.Heading justify="center">
            <Styled.HeaderButtonWrapper>
              <Row>
                <Col>
                  <Button isRound isOutline onClick={() => history.goBack()}>
                    <ArrowLeft />
                  </Button>
                </Col>
                <Col>
                  <CopyToClipBoard
                    text={`${process.env.REACT_APP_APP_URL}/invitation/${room.id}`}
                    render={({ copy }) => (
                      <Button isRound isOutline onClick={copy}>
                        <UserPlus />
                      </Button>
                    )}
                  />
                </Col>
              </Row>
            </Styled.HeaderButtonWrapper>
            <Col>
              <h1>PLANNING POKER</h1>
            </Col>
            <Col />
          </Styled.Heading>
          <Poker players={room.players} />
        </Container>
      </>
    );
};

export default Room;
