import { io } from '../app';
import { getUsers } from '../users';

export const getRoomUsers = (room) => {
  return getUsers(Object.keys(io.sockets.adapter.rooms[room].sockets));
};

// export const setRoomListeners = (roomId) => {
//   var room = io.sockets.in(roomId);
//   room.on('join', function () {
//     console.log('Someone joined the room.');
//   });
//   room.on('leave', function () {
//     console.log('Someone left the room.');
//   });

//   socket.join('some super awesome room');
//   socket.broadcast.to('some super awesome room').emit('join');
// };
