import { addUser, setUserCard } from './users';
import { getRoomUsers } from './rooms';

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// our localhost port
const port = 7000;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
export const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('attempt connection', ({ userInfo, roomId }, then) => {
    console.log(`${userInfo.name} is connected to room : ${roomId}`);
    socket.join(roomId);
    const user = addUser(socket.id, userInfo.name);
    const room = { id: roomId, users: getRoomUsers(roomId) };
    io.sockets.in(roomId).emit('userJoined', room);

    then({ user, room });
  });

  socket.on('play card', (card) => {
    setUserCard(socket.id, card);
  });

  // disconnect is fired when a client leaves the server
  socket.on('disconnecting', (reason) => {
    let rooms = Object.keys(socket.rooms);
    rooms.forEach((room) => {
      socket.to(room).emit('user disconnected', {
        id: room,
        users: getRoomUsers(room).filter((e) => e.id !== socket.id),
      });
    });
    console.log('reason :', reason);
    console.log('disconnecting');
  });

  socket.on('disconnected', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

export {};
