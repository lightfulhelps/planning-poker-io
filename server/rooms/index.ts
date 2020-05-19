import { io } from '../app';
import { getUsers } from '../users';

export const getRoomUsers = (roomId: string) => {
  return getUsers(Object.keys(io.sockets.adapter.rooms[roomId].sockets));
};
