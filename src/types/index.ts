export interface Room {
  _id: string;
  title: string;
  createdAt: Date;
  password?: string;
}

export interface CreateRoomParams {
  title: string;
  password?: string;
}

export interface CreateUserResponse {
  _id: string;
  nickname: string;
  createdAt: string;
  lastActiveAt: string;
}

export interface User {
  _id: string;
  nickname: string;
}

export interface CreateGamePayload {
  roomId: string;
  players: {
    _id: string;
    nickname: string;
  }[];
}

export type CardValue = 'blue' | 'black' | 'white' | 'red' | 'green';

type Cost = {
  [key in CardValue]?: number;
};

export interface DevelopmentCard {
  grade: 1 | 2 | 3;
  id: string;
  value: CardValue;
  valueAmount: number;
  victoryPoint: number;
  cost: Cost;
  set: 'original';
}
