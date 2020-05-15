import React, { useEffect } from 'react';

import { useIO } from '../../contexts/io';
import { useParams, useHistory } from 'react-router-dom';
import Poker from '../Poker';
import { Container, Button } from '../../styles/components';
import { ArrowLeft } from 'react-feather';

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
          <Button onClick={() => history.goBack()}>
            <ArrowLeft />
          </Button>
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
