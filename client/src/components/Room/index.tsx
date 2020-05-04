import React, { useEffect } from 'react';

import { useIO } from '../../contexts/io';
import { useParams, useHistory } from 'react-router-dom';
import Poker from '../Poker';

const Room: React.FC = () => {
  const { user, status, room } = useIO();
  console.log('room :', room);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (status === 'disconnected') {
      history.push(`/invitation/${id}`);
    }
  }, [history, id, status, room]);
  if (status === 'disconnected') return <></>;
  else
    return (
      <>
        <h1>Room {id}</h1>
        <p>Hello {user?.name}</p>
        <ul>
          {room?.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.id})
            </li>
          ))}
        </ul>
        <Poker players={room?.users} />
      </>
    );
};

export default Room;
