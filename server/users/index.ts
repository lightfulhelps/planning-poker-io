type Id = string;

type User = Player;

type UserListItem = { [key: string]: Omit<Player, 'id'> };

let usersList: UserListItem[] = [];

export const getUsers = (ids: Id[]): User[] => {
  console.log('ids :', ids);
  return ids.map((id) => getUser(id)).filter((e) => e !== null);
};

export const getUser = (id: Id): User | null => {
  console.log('userList[id] :', usersList[id]);
  if (!usersList[id]) return null;
  return { id, name: usersList[id].name, card: usersList[id].card };
};

export const addUser = (id: Id, name: string): User => {
  usersList[id] = {};
  usersList[id].name = name;
  return { id, name };
};

export const removeUser = (id: Id) => {
  delete usersList[id];
};

export const setUserCard = (id: Id, card: Card) => {
  usersList[id].card = card;
  console.log('userList :', usersList);
};
