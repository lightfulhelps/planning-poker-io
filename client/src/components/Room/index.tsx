import React, { useEffect, useRef } from 'react';

import { useIO } from '../../contexts/io';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Poker from '../Poker';
import { Container, Button } from '../../styles/components';
import { ArrowLeft, Plus } from 'react-feather';
import CopyToClipBoard from '../common/CopyToClipboard';

const Room: React.FC = () => {
  const { user, room } = useIO();
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
          <Button isRound isOutline onClick={() => history.goBack()}>
            <ArrowLeft />
          </Button>

          <CopyToClipBoard
            text={`${process.env.REACT_APP_APP_URL}/invitation/${room.id}`}
            render={({ copy }) => (
              <Button isRound isOutline onClick={copy}>
                <Plus />
              </Button>
            )}
          />
          <h1>Room {id}</h1>
          <p>Hello {user?.name}</p>
          <ul>
            {room?.players.map((user) => (
              <li key={user.id}>
                {user.name} ({user.id})
              </li>
            ))}
          </ul>
          <Poker players={room.players} />
        </Container>
      </>
    );
};

export default Room;
