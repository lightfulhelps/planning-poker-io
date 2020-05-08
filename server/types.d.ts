type Player = {
  id: string;
  roomId: string;
  name?: string;
  card?: Card;
};

type Card = string | number;

type Room = {
  id: string;
  players: Player[];
};
