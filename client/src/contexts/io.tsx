import React, { useState, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import EVENTS from './ioEvents';
import { useToaster } from './toaster';

const endpoint = process.env.REACT_APP_API_URL;

type User = Player;

interface ContextProps {
  connect: (user: Pick<User, 'name'>, roomId: string) => void;
  playCard: (card: Card) => void;
  reveal: () => void;
  reset: () => void;
  room: Room;
  user: User;
  showdown: boolean;
}

const socket = socketIOClient(endpoint, {
  autoConnect: false,
  transports: ['websocket'],
});

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
  const { addToast } = useToaster();

  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [showdown, setShowdown] = useState(false);

  const connect = (userInfo: Pick<User, 'name'>, roomId: string) => {
    socket.open();
    console.log('init');
    socket.open();
    socket.emit(EVENTS.CONNECTION, { userInfo, roomId });
    setBindings();
  };

  const setBindings = () => {
    socket.on(EVENTS.CONNECTION_OK, (roomInfo: Room) => {
      updateEveryone(roomInfo);
      history.push(`/room/${roomInfo.id}`);
      addToast('success', `You are now connected to the room : ${roomInfo.id}`);
    });
    socket.on(EVENTS.UPDATE_ROOM, (roomInfo: Room) => {
      console.log('UPDATE_ROOM');
      updateEveryone(roomInfo);
    });
    socket.on(EVENTS.POKER_REVEAL, () => {
      console.log('reveal');
      setShowdown(true);
    });
    socket.on(EVENTS.POKER_RESET, () => {
      console.log('reset');
      setShowdown(false);
    });
    socket.on(EVENTS.USER_JOINED, (userInfo: User) => {
      addToast('primary', `${userInfo.name} joined the room`);
    });
    socket.on(EVENTS.USER_DICONNECTING, (user) => {
      console.log('here :');
      addToast('error', `${user.name} left the room`);
    });
  };

  const updateEveryone = (roomInfo: Room) => {
    setRoom(roomInfo);
    setUser(roomInfo.players.filter((player) => player.id === socket.id)[0]);
  };

  const playCard = (card: Card) => {
    socket.emit(EVENTS.POKER_PLAY_CARD, card);
  };

  const reveal = () => {
    sendToEveryone(EVENTS.POKER_REVEAL);
  };
  const reset = () => {
    sendToEveryone(EVENTS.POKER_RESET);
  };

  const sendToEveryone = (event: string) => {
    socket.emit(event);
    socket.emit(EVENTS.SEND_TO_ALL, room.id, event);
  };

  return (
    <IOContext.Provider
      value={{ user, room, showdown, connect, playCard, reveal, reset }}
    >
      {children}
    </IOContext.Provider>
  );
};

export default IOContext;
