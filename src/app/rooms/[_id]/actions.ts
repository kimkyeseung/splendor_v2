'use server';

import { get, post } from '@/app/lib/api';
import { CreateGamePayload, Room, User } from '@/types';

export async function fetchRoom(_id: string) {
  return await get<Room>(`/room/${_id}`);
}

export async function fetchUser(_id: string) {
  return await get<User>(`/users/${_id}`);
}

export async function createGame(payload: CreateGamePayload) {
  return await post('/game', payload);
}
