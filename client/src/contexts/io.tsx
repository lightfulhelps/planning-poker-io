import React, { useState, useContext, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { useHistory } from 'react-router-dom';
const endpoint = 'localhost:7000';

type User = Player;

type Room = {
  id: string;
  users: User[];
};

interface ContextProps {
  connect: (user: Omit<User, 'id'>, roomId: string) => void;
  playCard: (card: Card) => void;
  room: Room;
  status: string;
  user: User;
}

const socket = socketIOClient(endpoint, {
  autoConnect: false,
});
socket.open();
console.log('init');

export const IOContext = React.createContext<ContextProps | null>(null);

export const useIO = () => {
  const context = useContext(IOContext);
  if (context === null) {
    throw new Error('useIO must be used within a IOProvider');
  }
  return context;
};

export const IOProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);

  const [status, setStatus] = useState('disconnected');
  console.log('status :', status);

  // setTimeout(() => {
  //   console.log(socket.disconnected ? 'disconnected' : 'connected');
  //   setStatus(socket.disconnected ? 'disconnected' : 'connected');
  // }, 5000);

  socket.on('userJoined', (roomInfo) => setRoom(roomInfo));
  socket.on('disconnect', (reason) => {
    console.log('client disconnect :', reason);
    setStatus('disconnected');
  });
  socket.on('user disconnected', (newRoom) => {
    setRoom(newRoom);
  });

  const connect = (userInfo: Omit<User, 'id'>, roomId: string) => {
    socket.open();
    socket.emit(
      'attempt connection',
      { userInfo, roomId },
      ({ user, room }: { user: User; room: Room }) => {
        console.log('user :', user);
        if (user) {
          setUser(user);
          setRoom(room);
          setStatus('connected');
          history.push(`/room/${roomId}`);
        } else {
          console.log('Error: cannot connect');
        }
      }
    );
  };

  const playCard = (card: Card) => {
    socket.emit('play card', card);
  };

  return (
    <IOContext.Provider value={{ connect, user, room, status, playCard }}>
      {children}
    </IOContext.Provider>
  );
};

export default IOContext;
