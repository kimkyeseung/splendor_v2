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
