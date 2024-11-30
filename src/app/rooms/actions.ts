'use server';

import { get } from '@/lib/api';
import { Room, User } from '@/types';

export async function fetchRooms() {
  return await get<Room[]>('/room');
}

export async function fetchUser(_id: string) {
  return await get<User>(`/users/${_id}`);
}
