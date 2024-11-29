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
  id: string;
  nickname: string;
  createdAt: string;
  lastActiveAt: string;
}
