'use server';

import { get } from '@/lib/api';
import { Room, User } from '@/types';

export async function fetchRoom(_id: string) {
  return await get<Room>(`/room/${_id}`);
}

export async function fetchUser(_id: string) {
  return await get<User>(`/users/${_id}`);
}
