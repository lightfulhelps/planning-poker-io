import { setUser, getUsers, getUser } from './users';

console.clear();

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 7000;

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const server = http.createServer(app);

export const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('user_connecting', ({ userInfo, roomId }, then) => {
    console.log(`${userInfo.name} is connected to room : ${roomId}`);
    socket.join(roomId);
    const user = setUser(socket.id, { roomId, ...userInfo });

    console.log('user :', user);
    const room = { id: roomId, players: getRoomUsers(roomId) };

    socket.emit('successful_connection', room);
    updateClientRoom(roomId);
    socket.to(roomId).emit('user_joined', user);
  });

  socket.on('poker_play_card', (card: Card) => {
    const user = setUser(socket.id, { card });
    updateClientRoom(user.roomId);
  });

  socket.on('poker_reset', (card: Card) => {
    console.log('getUser(socket.id).roomId :', getUser(socket.id).roomId);
    console.log('io.sockets.adapter.rooms :', io.sockets.adapter.rooms);
    Object.keys(
      io.sockets.adapter.rooms[getUser(socket.id).roomId].sockets
    ).forEach((userId) => {
      setUser(userId, { card: undefined });
    });
    updateClientRooms();
  });

  socket.on('send_to_all', (roomId: string, event: string) => {
    io.sockets.in(roomId).emit(event);
  });

  socket.on('disconnecting', (reason: string) => {
    updateClientRooms(true);
    let rooms = Object.keys(socket.rooms);
    rooms.forEach((roomId) => {
      io.sockets.in(roomId).emit('user_disconnecting', getUser(socket.id));
    });
  });

  const updateClientRooms = (excludeCurrentUser = false) => {
    let rooms = Object.keys(socket.rooms);
    rooms.forEach((roomId) => {
      updateClientRoom(roomId, excludeCurrentUser);
    });
  };

  const updateClientRoom = (roomId: string, excludeCurrentUser = false) => {
    const newPlayers = excludeCurrentUser
      ? getRoomUsers(roomId).filter((e) => e.id !== socket.id)
      : getRoomUsers(roomId);
    io.sockets.in(roomId).emit('update_room', {
      id: roomId,
      players: newPlayers,
    } as Room);
  };

  const getRoomUsers = (roomId: string) => {
    return getUsers(Object.keys(io.sockets.adapter.rooms[roomId].sockets));
  };
});

app.get('/', function (req, res) {
  res.send('I am alive');
});

server.listen(port, () => console.log(`Listening on port ${port}`));

export {};
