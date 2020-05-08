type Id = string;

type User = Player;

type UserListItem = { [key: string]: Omit<Player, 'id'> };

let usersList: UserListItem[] = [];

export const getUsers = (ids: Id[]): User[] => {
  return ids.map((id) => getUser(id)).filter((e) => e !== null);
};

export const getUser = (id: Id): User | null => {
  return { id, ...usersList[id] } || null;
};

export const setUser = (id: Id, userInfo: Partial<User>): User => {
  usersList[id] = { ...usersList[id], ...userInfo };
  return { id, ...usersList[id] };
};

export const removeUser = (id: Id) => {
  delete usersList[id];
};

export const setUserCard = (id: Id, card: Card) => {
  usersList[id].card = card;
  console.log('userList :', usersList);
};
